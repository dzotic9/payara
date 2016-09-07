//@auth
//@required(nodeGroup, resourceType, scaleUpValue, scaleUpLimit, scaleUpLoadPeriod, scaleDownValue, scaleDownLimit, scaleDownLoadPeriod)

resp = jelastic.env.trigger.AddTrigger(appid, session, {
    data : {
        "isEnabled": true,
        "name": "scale-up",
        "nodeGroup": nodeGroup,
        "period": scaleUpLoadPeriod,
        "condition": {
            "type": "GREATER",
            "value": scaleUpValue,
            "resourceType": resourceType,
            "valueType": "PERCENTAGES"
        },
        "actions": [
            {
                "type": "ADD_NODE",
                "customData": {
                    "limit": scaleUpLimit,
                    "count": 1,
                    "notify": true
                }
            }
        ]
    }
});

if (resp.result != 0) return resp;

resp = jelastic.env.trigger.AddTrigger({
    data : {
        "isEnabled": true,
        "name": "scale-down",
        "nodeGroup": nodeGroup,
        "period": scaleDownLoadPeriod,
        "condition": {
            "type": "LESS",
            "value": scaleDownValue,
            "resourceType": resourceType,
            "valueType": "PERCENTAGES"
        },
        "actions": [
            {
                "type": "REMOVE_NODE",
                "customData": {
                    "limit": scaleDownLimit,
                    "count": 1,
                    "notify": true
                }
            }
        ]
    }
});

return resp;

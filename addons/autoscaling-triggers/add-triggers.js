//@auth
//@required(nodeGroup, resourceType, cleanOldTriggers)
//@required(scaleUpValue, scaleUpLimit, scaleUpLoadPeriod, scaleDownValue, scaleDownLimit, scaleDownLoadPeriod)

if (cleanOldTriggers) {
    var array = jelastic.env.trigger.GetTriggers(appid, session, ['ADD_NODE']).array;
    for (var i = 0; i < array.length; i++) jelastic.env.trigger.DeleteTrigger(appid, session, array[i].id);  
    
    array = jelastic.env.trigger.GetTriggers(appid, session, ['REMOVE_NODE']).array;
    for (var i = 0; i < array.length; i++) jelastic.env.trigger.DeleteTrigger(appid, session, array[i].id);  
}

resp = jelastic.env.trigger.AddTrigger('${env.envName}', session, 
    {
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
);

if (resp.result != 0) return resp;

resp = jelastic.env.trigger.AddTrigger('${env.envName}', session,
    {
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
);

return resp;

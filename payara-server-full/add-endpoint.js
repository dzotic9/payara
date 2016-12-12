//@req(nodeGroup, name, port)

import com.hivext.api.development.Scripting;

var APPID = getParam("TARGET_APPID"),
    SESSION = getParam("session"),
    PROTOCOL = getParam("protocol", "TCP"),
    oEnvInfo,
    nNodesCount,
    oScripting,
    oResp,
    i;

oScripting =  hivext.local.exp.wrapRequest(new Scripting({
    serverUrl : "http://" + window.location.host.replace("app", "appstore") + "/",
    session : SESSION
}));

oEnvInfo = jelastic.environment.control.GetEnvInfo(APPID, session);

if (oEnvInfo.result !== 0) {
    return oEnvInfo;
}

nNodesCount = oEnvInfo.nodes.length;

for (i = 0; i < nNodesCount; i += 1) {
    if (oEnvInfo.nodes[i].nodeGroup == nodeGroup) {
        oResp = jelastic.environment.control.AddEndpoint(APPID, session, oEnvInfo.nodes[i].id, port, PROTOCOL, name);

        if (oResp.result !== 0) {
            return oResp;
        }
    }
}

return oScripting.eval({
    script : "InstallApp",
    targetAppid : APPID,
    manifest : toJSON({
        "jpsType" : "update",
        "application" : {
            "id": "Payara Server Full",
            "name": "Payara Server Full",
            "success": {
                "email": "Below you will find the link to the Payara Server Admin Console.</br> <table style='font-size:13px; border: none;'><tr><td>Admin Console URL:</td><td style='padding-left: 10px;'><a href='https://${env.domain}:"+ oResp.object.publicPort + "/' target='_blank'>https://${env.domain}:"+ oResp.object.publicPort+"/</a></td></tr><tr><td>Username:</td><td  style='padding-left: 10px'>admin</td></tr><tr><td>Password:</td><td  style='padding-left: 10px'>admin</td></tr></table />"
            }
        }
    })
});

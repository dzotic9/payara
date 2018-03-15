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

return {
    result: 0,
    onAfterReturn : {
        sendEmail : {
            port : oResp.object.publicPort
        }
    }
}

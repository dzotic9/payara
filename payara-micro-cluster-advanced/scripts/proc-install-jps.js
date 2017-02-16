//@auth
//@req(jps)

import com.hivext.api.development.Scripting;

var scripting = hivext.local.exp.wrapRequest(new Scripting({
    serverUrl: "http://" + window.location.host.replace("app.", "appstore.") + "/"
}));

var params = {
    manifest: jps,
    targetAppid: '${env.appid}',
    shortdomain: '${env.envName}'
};

if (getParam("settings")) {
    params["settings"]=getParam("settings");
}

var resp = scripting.eval({
    script: "InstallApp",
    session: session,
    params: params
});

return resp;

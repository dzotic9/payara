//@auth
//@req(jps)

import com.hivext.api.development.Scripting;

var scripting = hivext.local.exp.wrapRequest(new Scripting({
    serverUrl : "http://" + window.location.host.replace("app.", "appstore.") + "/"
}));

var resp = scripting.eval({
    script : "InstallApp",
    session : session,
    params : {
        manifest : jps,
        targetAppid : '${env.appid}',
    }
});

return {result:-1, response: resp}

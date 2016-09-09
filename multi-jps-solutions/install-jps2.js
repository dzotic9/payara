//@auth
//@req(jps)

import com.hivext.api.development.Scripting;

var scripting = new Scripting({
    serverUrl : "http://" + window.location.host.replace("app.", "appstore.") + "/"
});

return scripting.eval({
    script : "InstallApp",
    session : session,
    params : {
        manifest : jps,
        targetAppid : '${env.appid}',
    }
}).response;

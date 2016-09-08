//@auth
//@req(jps, test)

import com.hivext.api.core.utils.Transport;

var envName = '${env.envName}';
//var url = "https://"+window.location.host.replace("app.", "appstore.")+"/installapp?manifest="+jps+"&shortdomain="+envName+"&targetAppid="+envName+"&session="+session;
//var resp = new Transport().get(url);

//return {result: 0, url: url, resp: eval(resp)};

return {result: 0, env: envName, jps: getParam("jps")}

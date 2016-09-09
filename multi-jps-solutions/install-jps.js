//@auth
//@req(jps)

import com.hivext.api.core.utils.Transport;

var envName = '${env.envName}';
var url = "https://"+window.location.host.replace("app.", "appstore.")+"/installapp?manifest="+jps+"&shortdomain="+envName+"&targetAppid=${env.appid}&session="+session;
var resp = new Transport().get(url);

return {result: 0, response: {resp: eval(resp), url: url}};

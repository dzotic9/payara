//@auth
//@req(jps)

import com.hivext.api.core.utils.Transport;

var envName = '${env.envName}';
var envAppid = '${env.appid}';
var url = "https://"+window.location.host.replace("app.", "appstore.")+"/installapp";

var params = {
  manifest: jps,
  shortdomain: envName, 
  targetAppid: envAppid,
  session: session
}
var resp = new Transport().request(url, params, window.location.headers, new com.jelastic.api.Response().getClass());

return {result: -1, response: {resp: resp}};

//window.location.href = url;
//return {result: -1, response: {transport: transport, location : window.location}};

//return {result: 0, response: {resp: eval(resp), url: url}};

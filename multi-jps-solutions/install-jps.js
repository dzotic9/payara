//@auth
//@req(jps)

import com.hivext.api.core.utils.Transport;
import com.hivext.api.server.core.utils.WrapSessionRequest;

var envName = '${env.envName}';
var envAppid = '${env.appid}';
var url = "https://"+window.location.host.replace("app.", "appstore.")+"/installapp?manifest="+jps+"&shortdomain="+envName+"&targetAppid="+envAppid+"&session="+session;
var resp = WrapSessionRequest.wrapRequest(request, new Transport()).get(url);

return {result: 0, response: {resp: eval(resp), url: url}};

//@auth
//@required(jps)

import com.hivext.api.core.utils.Transport;

var envName = '${env.envName}';
var url = "https://"+window.location.host.replace("app.", "appstore.")+"/installapp?manifest="+jps+"&shortdomain="+envName+"&targetAppid="+envName;
var resp = new Transport().get(url);

return {result: 0, url: url, resp: resp};

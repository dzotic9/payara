//@auth
//@req(jps)

import com.hivext.api.core.utils.Transport;
import com.hivext.api.server.core.utils.WrapSessionRequest;
import java.lang.reflect.Field;
import com.hivext.api.environment.Environment;

var service = hivext.local.exp.wrapRequest(new Environment(appid, session));
var transport = service.getClass().getSuperclass().getDeclaredField("transport");

var envName = '${env.envName}';
var envAppid = '${env.appid}';
var url = "https://"+window.location.host.replace("app.", "appstore.")+"/installapp?manifest="+jps+"&shortdomain="+envName+"&targetAppid="+envAppid+"&session="+session;

var resp = transport.get(url);

return {result: 0, response: {resp: eval(resp), url: url}};

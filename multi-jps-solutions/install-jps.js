//@auth
//@req(jps)

import com.hivext.api.core.utils.Transport;
import com.hivext.api.server.core.utils.WrapSessionRequest;
import java.lang.reflect.Field;
import com.hivext.api.environment.Environment;
import org.springframework.mock.web.MockHttpServletRequest;

//var service = hivext.local.exp.wrapRequest(new Environment(appid, session));
//return {result: -1, response: {hivext: getHivext()}};

//var transport = service.getClass().getSuperclass().getDeclaredField("transport");

var httpRequest = new MockHttpServletRequest();
httpRequest.setParameters(window.location.headers);
for (h in window.location.headers){
  httpRequest.addHeader(h, window.location.headers[h]);
}
var transport = WrapSessionRequest.wrapRequest(httpRequest, new Transport());

var envName = '${env.envName}';
var envAppid = '${env.appid}';
var url = "https://"+window.location.host.replace("app.", "appstore.")+"/installapp?manifest="+jps+"&shortdomain="+envName+"&targetAppid="+envAppid+"&session="+session;
var resp = transport.get(url);
return {result: -1, response: {resp: resp}};

//window.location.href = url;
//return {result: -1, response: {transport: transport, location : window.location}};

//return {result: 0, response: {resp: eval(resp), url: url}};

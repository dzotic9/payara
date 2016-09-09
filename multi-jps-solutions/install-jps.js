//@auth
//@req(jps)

import com.hivext.api.core.utils.Transport;
import com.hivext.api.server.core.utils.WrapSessionRequest;
import org.springframework.mock.web.MockHttpServletRequest;


var request = new MockHttpServletRequest();
//request.setParameters(window.location.headers);
for (h in window.location.headers) request.addHeader(new java.lang.String(h), new java.lang.String(window.location.headers[h]));

var envName = '${env.envName}';
var envAppid = '${env.appid}';
var url = "https://"+window.location.host.replace("app.", "appstore.")+"/installapp?manifest="+jps+"&shortdomain="+envName+"&targetAppid="+envAppid+"&session="+session;

var transport = WrapSessionRequest.wrapRequest(request, new Transport());
var resp = transport.get(url);
return eval(resp);

//return {result: -1, response: {resp: resp}};

//window.location.href = url;
//return {result: -1, response: {transport: transport, location : window.location}};

//return {result: 0, response: {resp: eval(resp), url: url}};

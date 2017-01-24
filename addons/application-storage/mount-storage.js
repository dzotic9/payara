//@auth 
//@req(mountTo, mountFrom)

resp = jelastic.env.file.AddMountPointByGroup('${env.envName}', session, mountTo, '/opt/payara/deployments', 'nfs', null, '/deployment', mountFrom, '', false); 
if (resp.result != 0) return resp;

resp = jelastic.env.file.AddMountPointByGroup('${env.envName}', session, mountTo, '/data', 'nfs', null, '/data', mountFrom, '', false); 
return resp;

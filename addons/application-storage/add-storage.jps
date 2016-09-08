//@auth 
//@req(mountTo, mountFrom)

//var resp = jelastic.env.control.GetEnvInfo('${env.envName}', session); 

var volume ='/opt/payara/deployments';
//resp = jelastic.env.control.AddDockerVolumeByGroup('${env.envName}', session, mountTo, volume); 
resp = jelastic.env.file.AddMountPointByGroup('${env.envName}', session, mountTo, volume, 'nfs', null, '/data', mountFrom, '', false); 
return resp;

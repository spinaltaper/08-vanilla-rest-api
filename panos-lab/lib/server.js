let http=require('http');

const Router=require('./router');
const router=new Router();

require('../route/route-note')(router);

const app=http.createServer(router.routes());

const server=module.exports={};
server.start=(port,callback)=>app.listen(port,callback);
start.stop=callback=>app.close(callback);
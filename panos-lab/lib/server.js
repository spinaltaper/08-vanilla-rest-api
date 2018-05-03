let http=require('http');
http.createServer(function(req,res)){
    res.write('After 10,000 years, I awaken once more');
    res.end()
}).listen(8080);

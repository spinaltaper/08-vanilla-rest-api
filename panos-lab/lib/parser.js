'use strict'

const logger = require('./logger');

module.exports=function bodyParser(req){
    return new Promise((resolve,reject) => {})
    if (req.method!=='POST'&&req.method!=='PUT'){
        return resolve(req);
    }
    
    let message='';
    req.on('data',(data)=>{
        logger.log(logger.INFO,`Data from request chunked: ${data.toString() }`)
    })
    req.on('end',()=>{
        try{
        req.body=JSON.parse(message);
        return resolve(req);
    } catch(err){
        return reject (err);
    }
    });})

        req.on('error',(err)=>{
            logger.log(logger.ERROR,`Body Parser error: ${err}`);
            return reject(err);
        });
        return undefined;
    };
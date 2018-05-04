'use strict';

const logger=require('./logger');
const storage=module.exports={};
const memory={};

storage.create=function create(schema,item){
    logger.log(logger.INFO,'STORAGE: Created a new resource');
    return new Promise((resolve,reject)=>{
        if(!schema) return reject(new Error('Cannot create a new item, schema required'));
        if(!item) return reject(new Error('Cannot create a new item, item required'));

        if(!memory[schema]) memory[schema]={};

        memory[schema][item.id]=item;
        return resolve(item);
    });
};

storage.fetchOne=function fetchOne(schema,id){
    return new Promise((resolve,reject)=>{
        if (!schema) return reject(new Error('expected schema name'));
        if (!id) return reject(new Error('expected id'));
        if (!memory[schema]) return reject(new Error('schema not found'));
        const item=memory[schema][id];
        if(!item){
            return reject(new Error('item not found'));
        }
        return resolve(item);
    });
};

storage.fetchAll=function fetchAll(){};
storage.update=function update(){};
storage.delete=function del(){};
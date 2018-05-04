'use strict';

const uuidv4=require('../node_modules/uuid/v4');
const logger=require('../lib/logger');

const model=module.exports={};

model.Object=(name,year)=>{
    this.name=name;
    this.year=year;
    this.id=uuidv4();
}

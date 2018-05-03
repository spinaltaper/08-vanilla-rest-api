'use strict';

const uuidv4=require('../node_modules/uuid/v4');

const model=module.export={};

model.Object=(name,year)=>{
    this.name=name;
    this.year=year;
    this.id=uuidv4();
}

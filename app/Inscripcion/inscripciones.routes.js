'use strict'
var api=require('express').Router(),
    insController=require("./inscripcion.controller")
;

api.get('/',insController.obtener);
api.post('/',insController.insert);
api.get('/:game',insController.obtenerbygame);
api.get('/:id/:estado',insController.upstate);
module.exports=api;

var
    ObjectId=require('mongoose').Types.ObjectId
    ins= require('./inscripcion.entity').InscripcionModel;

module.exports.insert=function (req,res) {
    console.log(req.body)
    req.body._id=undefined;

    console.log(req.body)
    var newIns=ins(req.body);

    newIns.save(function(err){
        ins.find({},function(err,doc){
            console.log(doc)
        })
        console.log("Guardado")
        res.send({
            res:'OK'
        })
    })
};

module.exports.obtener=function (req,res) {
    // var newIns=ins(req.body);
    ins.find({},function(err, docs){
        res.send(docs)
    })
};

module.exports.obtenerbygame=function (req,res) {
    var nombre=req.params.game;
    // var newIns=ins(req.body);
    ins.find({juego:nombre},function(err, docs){
        res.send(docs)
    })
}

module.exports.upstate=function (req,res) {
    var id=req.params.id;
    var estado=req.params.estado;
    // var newIns=ins(req.body);
    ins.updateOne({_id:id},{ $set: { estado: estado }},function(err, docs){
        res.send(docs)
    })
};
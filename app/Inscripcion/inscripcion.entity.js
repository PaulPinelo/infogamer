var Mongoose=require('mongoose'),
Schema=Mongoose.Schema,
    InscripcionSchema=Schema({
        team:String,
        juego:String,
        arreglo:[String]
    });

module.exports.InscripcionSchema=InscripcionSchema;
module.exports.InscripcionModel=Mongoose.model("account",InscripcionSchema);

var Mongoose=require('mongoose'),

Schema=Mongoose.Schema,
    UserSchema=Schema({cod:String,nam:String,nick:String,ep:String})
    InscripcionSchema=Schema({
        team:String,
        juego:String,
        arreglo:[UserSchema],
        estado: String
    });

module.exports.InscripcionSchema=InscripcionSchema;
module.exports.InscripcionModel=Mongoose.model("account",InscripcionSchema);

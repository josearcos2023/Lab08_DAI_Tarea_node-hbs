var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UsuarioSchema = new Schema({
    codigo:{type: String, required: true, max:20},
    nombre: {type: String, required: true, max: 20},
    tipo: {type: String, required: true, max: 20},
    precio: {type: Number, required: true, max: 1000}
});

module.exports = mongoose.model('Producto', UsuarioSchema);

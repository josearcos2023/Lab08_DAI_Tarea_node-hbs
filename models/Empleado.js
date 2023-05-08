var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UsuarioSchema = new Schema({
    codigo:{type: String, required: true, max:20},
    nombre: {type: String, required: true, max: 20},
    apellido: {type: String, required: true, max: 20},
    correo: {type: String, required: true, max: 50},
    celular: {type: String, required: true, max: 20},
    estado: {type: String, required: true, max: 20}
});

module.exports = mongoose.model('Empleado', UsuarioSchema);

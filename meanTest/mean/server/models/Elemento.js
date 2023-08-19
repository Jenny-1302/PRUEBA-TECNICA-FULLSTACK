const mongoose = require('mongoose');

const ElementoSchema = mongoose.Schema({
    element:{
        type: String,
        required: true,
    },
    status:{
        type: String,
        required: true,
    },
    descripcion:{
        type: String,
        required: true,
    },
    fechaCreacion:{
        type: Date,
        default: Date.now()
    },

    

});

module.exports = mongoose.model('Elemento', ElementoSchema);
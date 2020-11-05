const mongoose = require('mongoose');

var Pemasok = mongoose.model('Pemasok', {
    nama: {type: String},
    pabrik: {type: String},
    nohp: {type: Number}
});

module.exports = { Pemasok };
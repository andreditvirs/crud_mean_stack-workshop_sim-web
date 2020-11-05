const mongoose = require('mongoose');

var Jajanan = mongoose.model('Jajanan', {
    nama: {type: String},
    harga_beli: {type: Number},
    harga_jual: {type: Number},
    asal_stock: {type: String},
    image: {type: String}
});

module.exports = { Jajanan };
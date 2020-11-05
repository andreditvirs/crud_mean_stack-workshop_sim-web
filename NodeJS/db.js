const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/KoperasiDinamikaHarmoni', (err) => {
    if(!err){
        console.log('Koneksi Berhasil...');
    }else{
        console.log('Error in DB Connection : ' + JSON.stringify(err, undefined, 2));
    }
});

module.exports = mongoose;
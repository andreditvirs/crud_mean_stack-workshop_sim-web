const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

var { Jajanan } = require('../models/jajanan');

router.get('/', (req, res) =>{
    Jajanan.find((err, docs) => {
        if(!err){ res.send(docs); }
        else{ console.log('Kesalahan saat mendapatkan data Jajanan: '+JSON.stringify(err, undefined, 2)); }
    });
});

router.get('/:id', (req, res) => {
    if(!ObjectId.isValid(req.params.id))
        return res.status(400).send(`Tidak ada data dengan id : ${req.params.id}`);
    
    Jajanan.findById(req.params.id, (err, doc) => {
        if(!err){ res.send(doc); }
        else{ console.log('Kesalahan saat mendapatkan data Jajanan dengan id tersebut : '+JSON.stringify(err, undefined, 2)); }
    });
});

router.post('/', (req, res) =>{
    var jajan = new Jajanan({
        nama: req.body.nama,
        harga_beli: req.body.harga_beli,
        harga_jual: req.body.harga_jual,
        pemasok: req.body.pemasok
    });
    jajan.save((err, doc) => {
        if(!err){ res.send(doc); }
        else{ console.log('Kesalahan saat mendapatkan data Jajanan: '+JSON.stringify(err, undefined, 2)); }
    })
});

router.put('/:id', (req, res) => {
    if(!ObjectId.isValid(req.params.id))
        return res.status(400).send(`Tidak ada data dengan id : ${req.params.id}`);
    
    var jajan = {
        nama: req.body.nama,
        harga_beli: req.body.harga_beli,
        harga_jual: req.body.harga_jual,
        pemasok: req.body.pemasok
    };
    Jajanan.findByIdAndUpdate(req.params.id, { $set: jajan }, { new: true }, (err, doc) => {
        if(!err){ res.send(doc); }
        else{ console.log('Kesalahan saat memperbaharui data Jajanan: '+ JSON.stringify(err, undefined, 2)); }
    });
});

router.delete('/:id', (req, res) => {
    if(!ObjectId.isValid(req.params.id))
        return res.status(400).send(`Tidak ada data dengan id : ${req.params.id}`);
    
    Jajanan.findByIdAndRemove(req.params.id, (err, doc) => {
        if(!err){ res.send(doc); }
        else{ console.log('Kesalahan saat menghapus data Jajanan: '+ JSON.stringify(err, undefined, 2)); }
    });
})

module.exports = router;
const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

var { Pemasok } = require('../models/pemasok');

router.get('/', (req, res) =>{
    Pemasok.find((err, docs) => {
        if(!err){ res.send(docs); }
        else{ console.log('Kesalahan saat mendapatkan data Pemasok: '+JSON.stringify(err, undefined, 2)); }
    });
});

router.get('/:id', (req, res) => {
    if(!ObjectId.isValid(req.params.id))
        return res.status(400).send(`Tidak ada data dengan id : ${req.params.id}`);
    
    Pemasok.findById(req.params.id, (err, doc) => {
        if(!err){ res.send(doc); }
        else{ console.log('Kesalahan saat mendapatkan data Pemasok dengan id tersebut : '+JSON.stringify(err, undefined, 2)); }
    });
});

router.post('/', (req, res) =>{
    var pemasok = new Pemasok({
        nama: req.body.nama_pemasok,
        pabrik: req.body.pabrik,
        nohp: req.body.nohp
    });
    pemasok.save((err, doc) => {
        if(!err){ res.send(doc); }
        else{ console.log('Kesalahan saat mendapatkan data Pemasok: '+JSON.stringify(err, undefined, 2)); }
    })
});

router.put('/:id', (req, res) => {
    if(!ObjectId.isValid(req.params.id))
        return res.status(400).send(`Tidak ada data dengan id : ${req.params.id}`);
    
    var pemasok = {
        nama: req.body.nama_pemasok,
        pabrik: req.body.pabrik,
        nohp: req.body.nohp
    };
    Pemasok.findByIdAndUpdate(req.params.id, { $set: pemasok }, { new: true }, (err, doc) => {
        if(!err){ res.send(doc); }
        else{ console.log('Kesalahan saat memperbaharui data Pemasok: '+ JSON.stringify(err, undefined, 2)); }
    });
});

router.delete('/:id', (req, res) => {
    if(!ObjectId.isValid(req.params.id))
        return res.status(400).send(`Tidak ada data dengan id : ${req.params.id}`);
    
    Pemasok.findByIdAndRemove(req.params.id, (err, doc) => {
        if(!err){ res.send(doc); }
        else{ console.log('Kesalahan saat menghapus data Pemasok: '+ JSON.stringify(err, undefined, 2)); }
    });
})

module.exports = router;
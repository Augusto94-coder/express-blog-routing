const express = require("express");
const router = express.Router();
const articoli = require("../data/articoli");


router.get('/', function (req, res) {
    res.json(articoli);
});
// show
router.get('/:id', function (req, res) {
    const id = Number(req.params.id);
    const articolo = articoli.find(a => a.id === id);
    if (!articolo) {
        return res.status(404).json({ error: "Articolo non trovato" });
    }
    res.json(articolo);
});
// store
router.post('/', function (req, res) {
    res.send('Creazione nuovo post');
});

// update
router.put('/:id', function (req, res) {
    res.send('Modifica integrale del post ' + req.params.id);
});

// modify
router.patch('/:id', function (req, res) {
    res.send('Modifica parziale del post ' + req.params.id);
});

// destroy
router.delete('/:id', function (req, res) {
    res.send('Cancellazione del post ' + req.params.id);
});

module.exports = router;
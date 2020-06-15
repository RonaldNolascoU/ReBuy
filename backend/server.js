import express from 'express';
import data from './data';

const app = express();

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/api/products', (req, res) => {
    res.send(data.products)
});

app.get('/api/product/:id', (req, res) => {
    res.send(data.products.find(product => product.id == req.params.id))
});

app.listen(5000, () => { console.log('Served started at http://localhost:5000') })
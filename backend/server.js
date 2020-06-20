import express from 'express';

const app = express();


var admin = require("firebase-admin");

var serviceAccount = require("./rebuy.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://rebuy-8980e.firebaseio.com"
});

var db = admin.database();
var ref = db.ref("products");

ref.set([
    {
        id: 1,
        name: 'MacBook Pro 2019 16 inches',
        category: 'Computers',
        image: 'https://d27ppybfoyyraq.cloudfront.net/image/cache/data/repairs/apple/mac/mbpro-repair-200x200.jpg',
        price: 2000,
        brand: 'Apple',
    },
    {
        id: 2,
        name: 'iPhone 11 Pro Max',
        category: 'Smartphones',
        image: 'https://cdn.phonehouse.es/res/products-image/4/2/0/3/4/420347-2308056.jpg?h=200&w=200&trim=auto&auto=format&fit=fill&fill=solid&fill-color=white',
        price: 1200,
        brand: 'Apple',
    },
    {
        id: 3,
        name: 'Apple Watch',
        category: 'Smartwatches',
        image: 'https://resources.claroshop.com/medios-plazavip/s2/10371/1255967/5dcb0987f3ad8-cq5dam-200x200.jpg',
        price: 499,
        brand: 'Apple',
    },
    {
        id: 4,
        name: 'Samsung Galaxy Watch Active 2',
        category: 'Smartwatches',
        image: 'https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE3Escn?ver=6864&q=90&m=6&h=200&w=200&b=%23FFFFFFFF&f=jpg&o=f&aim=true',
        price: 249,
        brand: 'Samsung',
    },
    {
        id: 5,
        name: 'Nintendo Switch',
        category: 'Videogames',
        image: 'https://cultureofgaming.com/wp-content/uploads/2017/08/Nintendo-Switch-19-200x200.jpg',
        price: 499,
        brand: 'Nintendo',
    },
    {
        id: 6,
        name: 'PS5',
        category: 'Videogames',
        image: 'https://i.blogs.es/f2b63c/ps5-1/200_200.jpg',
        price: 499,
        brand: 'Sony',
    },
    {
        id: 7,
        name: 'Galaxy S20 Ultra',
        category: 'Smartphones',
        image: 'https://mobilestore.ec/wp-content/uploads/2020/03/Samsung-Galaxy-S20-Ultra-Mobile-Store-Ecuador-200x200.jpg',
        price: 799,
        brand: 'Samsung',
    },
    {
        id: 8,
        name: 'Nvidia RTX 2080',
        category: 'Components',
        image: 'https://elchapuzasinformatico.com/wp-content/uploads/2019/07/Nvidia-GeForce-RTX-2080-SUPER-200x200.jpg',
        price: 500,
        brand: 'Nvidia',
    }
]);

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/api/products', (req, res) => {
    ref.once("value", function (snapshot) {
        var data = snapshot.val();   //Data is in JSON format.
        console.log(data);
        res.send(data);
    });
});

app.get('/api/product/:id', (req, res) => {
    ref.once("value", function (snapshot) {
        var data = snapshot.val();   //Data is in JSON format.
        console.log(data);
        res.send(data.find(product => product.id == req.params.id));
    });
});

app.listen(5000, () => { console.log('Served started at http://localhost:5000') })
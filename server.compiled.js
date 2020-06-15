"use strict";

var _express = _interopRequireDefault(require("express"));

var _data = _interopRequireDefault(require("./data"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
app.use(_express["default"]["static"](path.join(__dirname, 'frontend', 'build')));
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.get('/api/products', function (req, res) {
  res.send(_data["default"].products);
});
app.get('/api/product/:id', function (req, res) {
  res.send(_data["default"].products.find(function (product) {
    return product.id == req.params.id;
  }));
});
app.listen(5000, function () {
  console.log('Served started at http://localhost:5000');
});

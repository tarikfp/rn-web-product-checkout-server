const fs = require("fs");

const products = fs.readFileSync("products.json").toString("utf-8");

module.exports = function (req, res) {
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(products);
};

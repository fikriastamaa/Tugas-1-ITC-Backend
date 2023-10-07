const users = require("./users.js");

module.exports = (req, res) => {
    //menentukan tipe response body
    res.setHeader("Content-Type", "application/json");

    //memberikan status code pada response
    res.writeHead(200);

    //memberikan data pada response body dan mengakhiri response
    res.end(JSON.stringify(users));
}
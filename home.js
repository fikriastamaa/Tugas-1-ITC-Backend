// handlers/home.js
module.exports = (req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.writeHead(200);
    res.end('Haloo\n');
  };
  
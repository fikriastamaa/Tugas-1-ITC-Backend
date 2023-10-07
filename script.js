const http = require('http');
const url = require('url');
const home = require('./home');
const users = require('./users');
const panggilusers = require('./panggilusers');
const notfound = require('./notfound');
const errorr = require('./errorr');
const notallow = require('./notallow');

const PORT = 3000;

const server = http.createServer((req, res) => {
  if (req.method === 'GET') {
    const parsedUrl = url.parse(req.url, true);
    const pathname = parsedUrl.pathname;

    if (pathname === '/') {
      try{
        home(req, res);
      } catch(err) {
        console.log(err.message);
        errorr(req, res);
      }
    } else if (pathname === '/users') {
      try {
        panggilusers(req, res);
      } catch(err){
        console.log(err.message);
        errorr(req, res);
      }
    } else {
        try {
            notfound(req, res);
          } catch(err){
            console.log(err.message);
            errorr(req, res);
          }
    }
  }
  else {
    notallow(req, res);
  }
});

const port = 3000;

server.listen(port, () => {
  console.log(`Server berjalan di port ${port}`);
});

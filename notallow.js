const error = {
    status: "Tidak Diizinkan!!!",
    message: "Metode HTTP tidak diizinkan.",
  };
  
  module.exports = (req, res) => {
  //menentukan tipe response body
  res.setHeader("Content-Type", "application/json");

  //memberikan status code pada response
  res.writeHead(405);

  //memberikan data pada response body dan mengakhiri response
  res.end(JSON.stringify(error));
}
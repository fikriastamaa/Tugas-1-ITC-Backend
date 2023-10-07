const error = {
    status: "server error!!!",
    message: "Terjadi kesalahan dalam server.",
  };

  module.exports = (req, res) => {
  //menentukan tipe response body
  res.setHeader("Content-Type", "application/json");

  //memberikan status code pada response
  res.writeHead(500);

  //memberikan data pada response body dan mengakhiri response
  res.end(JSON.stringify(error));
}
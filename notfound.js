const error = {
    status: "Not Found!!!",
    message: "Resource Not Found",
  };

  module.exports = (req, res) => {
  //menentukan tipe response body
  res.setHeader("Content-Type", "application/json");

  //memberikan status code pada response
  res.writeHead(404);

  //memberikan data pada response body dan mengakhiri response
  res.end(JSON.stringify(error));
  }
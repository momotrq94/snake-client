//connect function
const net = require("net");
const connect = function () {
  const conn = net.createConnection({
    host: "165.227.47.243",
    port: 50541
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });

  conn.on("connect", () =>{
    console.log("Successfully connected to game coordinator");
  });

  conn.on('connect', () => {
    conn.write('Name: LMK');
  });

  return conn;
};

module.exports = {
  connect
};

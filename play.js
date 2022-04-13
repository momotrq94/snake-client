const {connect} = require("./client");
// establishes a connection with the game server
const {setupInput} = require("./input");
console.log("Connecting ...");
connect();
setupInput();

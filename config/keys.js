if (process.env.NODE_ENV === "production") {
  // we are in production return those keys
  module.exports = require("./prod");
} else {
  //we are in development - return the dev keys
  module.require = require("./dev");
}

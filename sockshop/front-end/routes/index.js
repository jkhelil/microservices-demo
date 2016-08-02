(function (){
  'use strict';

  var  login     = require("./login")
     , catalogue = require("./catalogue")
     , cart      = require("./cart")
     , orders    = require("./orders")
     , accounts  = require("./accounts")

  module.exports = {
    init: function(app) {
      login.init(app);
      catalogue.init(app);
      cart.init(app);
      orders.init(app);
      accounts.init(app);
    }
  }
}());

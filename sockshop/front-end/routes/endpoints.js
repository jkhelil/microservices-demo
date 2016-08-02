(function (){
  'use strict';

  var helpers            = require("../helpers")
     , catalogueHostname = "catalogue"
     , cartsHostname     = "cart"
     , ordersHostname    = "orders"
     , accountsHostname  = "accounts"
     , loginHostname     = "login"
     , catalogueUrl      = helpers.wrapHttp(helpers.addDomain(catalogueHostname))
     , cartsUrl          = helpers.wrapHttp(helpers.addDomain(cartsHostname)) + "/carts"
     , ordersUrl         = helpers.wrapHttp(helpers.addDomain(ordersHostname))
     , customersUrl      = helpers.wrapHttp(helpers.addDomain(accountsHostname)) + "/customers"
     , addressUrl        = helpers.wrapHttp(helpers.addDomain(accountsHostname)) + "/addresses"
     , cardsUrl          = helpers.wrapHttp(helpers.addDomain(accountsHostname)) + "/cards"
     , loginUrl          = helpers.wrapHttp(helpers.addDomain(loginHostname)) + "/login"
     , registerUrl       = helpers.wrapHttp(helpers.addDomain(loginHostname)) + "/register"
     , tagsUrl           = catalogueUrl + "/tags"

  module.exports = {
    catalogueUrl: catalogueUrl,
    cartsUrl:     cartsUrl,
    ordersUrl:    ordersUrl,
    customersUrl: customersUrl,
    addressUrl:   addressUrl,
    cardsUrl:     cardsUrl,
    loginUrl:     loginUrl,
    registerUrl:  registerUrl,
    tagsUrl:      tagsUrl
  };
}());

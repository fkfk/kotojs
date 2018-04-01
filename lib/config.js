'use strict';

/*
config.js - Configuration for Koto Coin
*/

module.exports = {
  mainnet: {
    messagePrefix: 'Koto main net',
    bip32: {
      public: '0488b21e',
      private: '0488ade4'
    },
    pubKeyHash: '1836',
    scriptHash: '183b',
    zcPaymentAddressHash: '16a8', // Private z-address
    zcSpendingKeyHash: 'ab36', // Spending key
    wif: '80'
  },
  testnet: {
    wif: '80',
    pubKeyHash: '18a4',
    scriptHash: '1839',
    zcPaymentAddressHash: '16b6', // Private z-address
    zcSpendingKeyHash: 'ac08' // Spending key
  }
};
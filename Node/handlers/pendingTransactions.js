/**
 * Created by milenradkov on 2/2/18.
 */
let CryptoJS = require("crypto-js");
let main = require('../index');

module.exports.insertTransaction = (transaction) => {
    return main.pendingTransactions.push(transaction);
}
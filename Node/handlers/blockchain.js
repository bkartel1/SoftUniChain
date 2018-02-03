/**
 * Created by milenradkov on 2/2/18.
 */
import {Block} from "../model/block"
import {Transaction} from "../model/transaction"
let CryptoJS = require("crypto-js");
let main = require('../index');

module.exports.calculateHash = (index, prevBlockHash, dateCreated, transactions, nonce) => {
        return CryptoJS.SHA256(index + prevBlockHash + dateCreated + transactions + nonce).toString();
}

module.exports.calculateHashForBlock = (block) => {
        return this.calculateHash(block.index, block.prevBlockHash, block.dateCreated, block.transactions, block.nonce);
}

module.exports.addBlock = (newBlock) => {
    if (this.isValidNewBlock(newBlock, this.getLatestBlock())) {
        main.blockchain.push(newBlock);
    }
}

module.exports.isValidNewBlock = (newBlock, previousBlock) => {
        if (previousBlock.index + 1 !== newBlock.index) {
            console.log('Invalid index!');
            return false;
        }

        if (previousBlock.hash !== newBlock.previousHash) {
            console.log('Invalid previous block hash!');
            return false;
        }

        if (this.calculateHashForBlock(newBlock) !== newBlock.hash) {
            console.log(typeof (newBlock.hash) + ' ' + typeof this.calculateHashForBlock(newBlock));
            console.log('Invalid hash: ' + this.calculateHashForBlock(newBlock) + ' ' + newBlock.hash);
            return false;
        }
        return true;
}

module.exports.generateNextBlock = (transactions) => {
        let previousBlock = this.getLatestBlock();
        let nextIndex = previousBlock.index + 1;
        let nextTimestamp = new Date().getTime() / 1000;
        let nextHash = this.calculateHash(nextIndex, previousBlock.blockHash, nextTimestamp, transactions);
        return new Block(nextIndex, previousBlock.blockHash, nextTimestamp, transactions, nextHash);
}

module.exports.miningJob = (minerAddress) => {
	
    // !!! Remove after adding the miningJob functionality !!!
    return {
        "index": 1,
        "expectedReward" : 62.25,
        "transactionsHash": "9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08",
        "prevBlockHash": "816534932c2b7154836da6afc367695e6337db8a921823784c14378abed4f7d7",
        "difficulty": 5
    }
    // !!! Remove after adding the miningJob functionality !!!

    let expectedReward = 25;
    let index = this.getLatestBlock().index + 1;

    let coinBaseTransaction = new Transaction(
        0,              // fromAddress
        minerAddress,   // toAddress
        expectedReward, // transactionValue,
        "",             // senderPubKey
        "",             //  senderSignature,
        "",             // transactionHash,
        Date.now(),     // dateReceived,
        index,          // minedInBlockIndex,
        false           // paid
    );

    let pendingTransactions = main.pendingTransactions.getPendingTransactions();
    pendingTransactions.push(coinBaseTransaction);

    let transactions = pendingTransactions;
    let transactionsHash = CryptoJS.SHA256(transactions);
    let prevBlockHash = this.calculateHashForBlock(this.getLatestBlock());
    let difficulty = 5;

    return new MiningJob(index, expectedReward, transactions, transactionsHash, prevBlockHash , difficulty);
}

module.exports.getLatestBlock = () => main.blockchain[main.blockchain.length - 1];
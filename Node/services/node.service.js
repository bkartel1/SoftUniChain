 let headers = {}

class NodeService {

    httpGetNodeInfo(req, res) {
        res.setHeader('Content-Type', 'application/json');

        res.send({
            "about": "SoftUniChain/0.9-csharp",
            "name": "Sofia-01",
            "peers": 2,
            "blocks": 25,
            "confirmedTransactions": 208,
            "pendingTransactions": 7,
            "addresses": 12,
            "coins": 18000000
        })
    }

    httpGetNodeInfo(req, res) {
        res.setHeader('Content-Type', 'application/json');

        res.send({
            "about": "SoftUniChain/0.9-csharp",
            "name": "Sofia-01",
            "peers": 2,
            "blocks": 25,
            "confirmedTransactions": 208,
            "pendingTransactions": 7,
            "addresses": 12,
            "coins": 18000000
        })
    }

    httpGetNodeBlocks(req, res) {
        res.setHeader('Content-Type', 'application/json');

        res.send([{
            "index": 0,
            "transactions": [{
                "from": "44fe0696beb6e24541cc0e8728276c9ec3af2675",
                "to": "9a9f082f37270ff54c5ca4204a0e4da6951fe917",
                "value": 25.00,
                "senderPubKey": "2a1d79fb8743d0a4a8501e0028079bcf82a4f�eae1",
                "senderSignature": ["e20c�a3c29d3370f79f", "cf92�0acd0c132ffe56"],
                "transactionHash": "4dfc3e0ef89ed603ed54e47435a18b836b�176a",
                "paid": true,
                "dateReceived": "2018-02-01T07:47:51.982Z",
                "minedInBlockIndex": 7
            }, {
                "from": "44fe0696beb6e24541cc0e8728276c9ec3af2675",
                "to": "9a9f082f37270ff54c5ca4204a0e4da6951fe917",
                "value": 25.00,
                "senderPubKey": "2a1d79fb8743d0a4a8501e0028079bcf82a4f�eae1",
                "senderSignature": ["e20c�a3c29d3370f79f", "cf92�0acd0c132ffe56"],
                "transactionHash": "4dfc3e0ef89ed603ed54e47435a18b836b�176a",
                "paid": true,
                "dateReceived": "2018-02-01T07:47:51.982Z",
                "minedInBlockIndex": 7
            }],
            "difficulty": 5,
            "prevBlockHash": "d279fa6a31ae4fb07cfd9cf7f35cc01f�3cf20a",
            "minedBy": "f582d57711a618e69d588ce93895d749858fa95b",
            "blockDataHash": "5d845cddcd4404ecfd5476fd6b1cf0e5�a80cd3",
            "nonce": 2455432,
            "dateCreated": "2018-02-01T23:23:56.337Z",
            "blockHash": "00000abf2f3d86d5c000c0aa7a425a6a4a65�cf4c"
        }, {
            "index": 1,
            "transactions": [],
            "difficulty": 5,
            "prevBlockHash": "d279fa6a31ae4fb07cfd9cf7f35cc01f�3cf20a",
            "minedBy": "f582d57711a618e69d588ce93895d749858fa95b",
            "blockDataHash": "5d845cddcd4404ecfd5476fd6b1cf0e5�a80cd3",
            "nonce": 2455432,
            "dateCreated": "2018-02-01T23:23:56.337Z",
            "blockHash": "00000abf2f3d86d5c000c0aa7a425a6a4a65�cf4c"
        }])
    }

    httpGetNodeBlockByIndex(req, res, index) {
        res.setHeader('Content-Type', 'application/json');

        res.send({
            "index": index,
            "transactions": [{
                "from": "44fe0696beb6e24541cc0e8728276c9ec3af2675",
                "to": "9a9f082f37270ff54c5ca4204a0e4da6951fe917",
                "value": 25.00,
                "senderPubKey": "2a1d79fb8743d0a4a8501e0028079bcf82a4f�eae1",
                "senderSignature": ["e20c�a3c29d3370f79f", "cf92�0acd0c132ffe56"],
                "transactionHash": "4dfc3e0ef89ed603ed54e47435a18b836b�176a",
                "paid": true,
                "dateReceived": "2018-02-01T07:47:51.982Z",
                "minedInBlockIndex": 7
            }, {
                "from": "44fe0696beb6e24541cc0e8728276c9ec3af2675",
                "to": "9a9f082f37270ff54c5ca4204a0e4da6951fe917",
                "value": 25.00,
                "senderPubKey": "2a1d79fb8743d0a4a8501e0028079bcf82a4f�eae1",
                "senderSignature": ["e20c�a3c29d3370f79f", "cf92�0acd0c132ffe56"],
                "transactionHash": "4dfc3e0ef89ed603ed54e47435a18b836b�176a",
                "paid": true,
                "dateReceived": "2018-02-01T07:47:51.982Z",
                "minedInBlockIndex": 7
            }],
            "difficulty": 5,
            "prevBlockHash": "d279fa6a31ae4fb07cfd9cf7f35cc01f�3cf20a",
            "minedBy": "f582d57711a618e69d588ce93895d749858fa95b",
            "blockDataHash": "5d845cddcd4404ecfd5476fd6b1cf0e5�a80cd3",
            "nonce": 2455432,
            "dateCreated": "2018-02-01T23:23:56.337Z",
            "blockHash": "00000abf2f3d86d5c000c0aa7a425a6a4a65�cf4c"
        })
    }

    httpGetNodeBalanceByAddress(req, res, address, confirmCount) {
        res.setHeader('Content-Type', 'application/json');

        res.send({
            "address": address,
            "confirmedBalance": {
                "confirmations": confirmCount,
                "balance": 120.00
            },
            "lastMinedBalance": {
                "confirmations": 1,
                "balance": 115.00
            },
            "pendingBalance": {
                "confirmations": 0,
                "balance": 170.20
            }
        })
    }

    httpPostNewTransaction(req, res, tran) {
        res.setHeader('Content-Type', 'application/json');

        res.send({
            "dateReceived": "2018-02-01T23:17:02.744Z",
            "transactionHash": "cd8d9a345bb208c6f9b8acd6b8eefe6�20c8a"
        })
    }

    httpGetTransactionInfo(req, res, tranHash) {
        res.setHeader('Content-Type', 'application/json');

        res.send({
            "from": "44fe0696beb6e24541cc0e8728276c9ec3af2675",
            "to": "9a9f082f37270ff54c5ca4204a0e4da6951fe917",
            "value": 25.00,
            "senderPubKey": "2a1d79fb8743d0a4a8501e0028079bcf82a4f�eae1",
            "senderSignature": ["e20c�a3c29d3370f79f", "cf92�0acd0c132ffe56"],
            "transactionHash": tranHash,
            "paid": true,
            "dateReceived": "2018-02-01T07:47:51.982Z",
            "minedInBlockIndex": 7
        })
    }

    httpNewBlockNotify(req, res, blockIndex) {
        res.setHeader('Content-Type', 'application/json');

        res.send({
            "message": "Thank you!"
        })
    }

    httpGetAllPeers(req, res) {
        res.setHeader('Content-Type', 'application/json');

        res.send(["http://212.50.11.109:5555", "http://af6c7a.ngrok.org:5555"])
    }

    httpPostNewPeer(req, res, url) {
        res.setHeader('Content-Type', 'application/json');

        res.send({
            "message": "Added peer: " + url
        })
    }
}

module.exports = NodeService
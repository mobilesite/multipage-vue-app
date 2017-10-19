<template>
    <div>
        <h1 v-text="title"></h1>

        <h2>Blocks:</h2>
        <div class="table blocks">
            <div class="table-header">
                <div class="table-row">
                    <div class="table-column">Height</div>
                    <div class="table-column">Age</div>
                    <div class="table-column">Txn</div>
                    <div class="table-column">Uncles</div>
                    <div class="table-column">Miner</div>
                    <div class="table-column">GasUsed</div>
                    <div class="table-column">GasLimit</div>
                    <div class="table-column">difficulty</div>
                    <div class="table-column">extraData</div>
                    <div class="table-column">hash</div>
                    <div class="table-column">logsBloom</div>
                    <div class="table-column">mixHash</div>
                    <div class="table-column">nonce</div>
                    <div class="table-column">parentHash</div>
                    <div class="table-column">receiptsRoot</div>
                    <div class="table-column">size</div>
                    <div class="table-column">stateRoot</div>
                    <div class="table-column">totalDifficulty</div>
                    <div class="table-column">transactionsRoot</div>
                </div>
            </div>
            <div class="table-body" v-for="block in blocks">
                <div class="table-row">
                    <div class="table-column" v-text="block.number"></div>
                    <div class="table-column" v-text="block.timestamp"></div>
                    <div class="table-column" v-text="block.txn"></div>
                    <div class="table-column" v-text="block.sha3Uncles"></div>
                    <div class="table-column" v-text="block.miner"></div>
                    <div class="table-column" v-text="block.gasUsed"></div>
                    <div class="table-column" v-text="block.gasLimit"></div>
                    <div class="table-column" v-text="block.difficulty"></div>
                    <div class="table-column" v-text="block.extraData"></div>
                    <div class="table-column" v-text="block.hash"></div>
                    <div class="table-column" v-text="block.logsBloom"></div>
                    <div class="table-column" v-text="block.mixHash"></div>
                    <div class="table-column" v-text="block.nonce"></div>
                    <div class="table-column" v-text="block.parentHash"></div>
                    <div class="table-column" v-text="block.receiptsRoot"></div>
                    <div class="table-column" v-text="block.size"></div>
                    <div class="table-column" v-text="block.stateRoot"></div>
                    <div class="table-column" v-text="block.totalDifficulty"></div>
                    <div class="table-column" v-text="block.transactionsRoot"></div>
                </div>
            </div>
        </div>

        <br>
        <h2>Transactions:</h2>
        <div class="table transactions">
            <div class="table-header">
                <div class="table-row">
                    <div class="table-column">TxHash</div>
                    <div class="table-column">Block Hash</div>
                    <div class="table-column">Block Height</div>
                    <div class="table-column">TimeStamp</div>
                    <div class="table-column">From</div>
                    <div class="table-column">To</div>
                    <div class="table-column">Value</div>
                    <div class="table-column">Gas</div>
                    <div class="table-column">GasPrice</div>
                    <div class="table-column">Nonce</div>
                    <div class="table-column">input</div>
                    <div class="table-column">r</div>
                    <div class="table-column">s</div>
                    <div class="table-column">transactionIndex</div>
                    <div class="table-column">v</div>
                </div>
            </div>
            <div class="table-body" v-for="tx in txs">
                <div class="table-row">
                    <div class="table-column" v-text="tx.hash"></div>
                    <div class="table-column" v-text="tx.blockHash"></div>
                    <div class="table-column" v-text="tx.blockNumber"></div>
                    <div class="table-column" v-text="tx.timestamp"></div>
                    <div class="table-column" v-text="tx.from"></div>
                    <div class="table-column" v-text="tx.to"></div>
                    <div class="table-column" v-text="tx.value"></div>
                    <div class="table-column" v-text="tx.gas"></div>
                    <div class="table-column" v-text="tx.gasPrice"></div>
                    <div class="table-column" v-text="tx.nonce"></div>
                    <div class="table-column" v-text="tx.input"></div>
                    <div class="table-column" v-text="tx.r"></div>
                    <div class="table-column" v-text="tx.s"></div>
                    <div class="table-column" v-text="tx.transactionIndex"></div>
                    <div class="table-column" v-text="tx.v"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Web3 from 'web3';

    export default {
        data () {
            return {
                title: 'test web3',
                blocks: [],
                txs: []
            }
        },
        created () {
            const me = this;

            if (typeof window.web3 !== 'undefined') {
                window.web3 = new Web3(web3.currentProvider);
            } else {
//        // 采用http的方式，在1.0中已经不推荐
//        window.web3 = new Web3();
//        const ethNodeUrl = 'http://121.40.175.176:8545'; // TODO: remote URL
//        window.web3.setProvider(new web3.providers.HttpProvider(ethNodeUrl));

//        // 采用ws的方式
                const ethNodeUrl = 'ws://localhost:8545'; // TODO: remote URL
                window.web3 = new Web3(ethNodeUrl);
                console.log(window.web3);
            }

            const { eth } = web3;

            eth.getBlockNumber().then(function (resolve, reject) {
                console.log(resolve);
            })

            eth.getAccounts().then(function (resolve, reject) {
                console.log(resolve);
            })

            eth.getTransactionCount('0x7900681181e87B926A279769538f5325088eAdc1').then(function (resolve, reject) {
                console.log(resolve);
            })


            eth.getCoinbase().then(function (resolve, reject) {
                console.log(resolve)
            })

            async function getBlocksAndTxs() {
                const blockNumber = await eth.getBlockNumber();
                const blocks = [];
                let txs = [];

                for (let i = 1, len = blockNumber; i <= len; i++) {
                    const block = await eth.getBlock(i);

                    block.timestamp = me.$filters.difference(block.timestamp);
                    block.txn = block.transactions.length;

                    blocks.push(block);
                    txs = txs.concat(block.transactions);
                }

                return {
                    blocks,
                    txs
                }
            }

            async function printBlocksAndTxs() {
                const result = await getBlocksAndTxs();
                const txs = result.txs;
                const handledTxs = [];

                me.blocks = result.blocks;

                for(let i = 1, len = result.txs.length; i < len; i++) {
                    const handledTx = await eth.getTransaction(txs[i]);

                    handledTx.timestamp = result.blocks[i].timestamp;
                    handledTxs.push(handledTx);
                }
                me.txs = handledTxs;
            }

            printBlocksAndTxs();
        },
        methods: {
            initHeader () {

            }
        }
    }
</script>

<style lang="less">
    @import "./main.less";
</style>

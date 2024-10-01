const Web3 = require('web3');

// Local Ethereum node (e.g., Ganache)
const web3 = new Web3('http://127.0.0.1:7545');

async function main() {
    const accounts = await web3.eth.getAccounts();
    console.log('Accounts:', accounts);
}

main();

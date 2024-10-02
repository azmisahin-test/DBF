// blockchain/index.js
const Web3 = require('web3');
const dotenv = require('dotenv');

// Ortam değişkenlerini yükle
dotenv.config();

const WEB3_PROVIDER_DEFAULT_URL = 'http://ganache:8545';
const WEB3_PROVIDER_URL = process.env.WEB3_PROVIDER_URL || WEB3_PROVIDER_DEFAULT_URL;
const web3 = new Web3(WEB3_PROVIDER_URL);

const main = async () => {
    // Hesapları alın
    const accounts = await web3.eth.getAccounts();

    console.log('Available Accounts:');
    console.log(accounts);

    // İlk hesabın bakiyesini kontrol et
    const balance = await web3.eth.getBalance(accounts[0]);
    console.log(`Account 1 Balance: ${web3.utils.fromWei(balance, 'ether')} ETH`);

    // Basit bir işlem yapma (örnek olarak ilk hesaptan ikinciye transfer)
    const tx = await web3.eth.sendTransaction({
        from: accounts[0],
        to: accounts[1],
        value: web3.utils.toWei('1', 'ether')
    });

    console.log('Transaction:', tx);
};

main().catch(console.error);

// blockchain/index.js
const Web3 = require('web3');
const dotenv = require('dotenv');

// Ortam değişkenlerini yükle
dotenv.config();

// Web3 sağlayıcısını ayarla
const WEB3_PROVIDER_URL = process.env.ETH_PROVIDER_URL;
const web3 = new Web3(WEB3_PROVIDER_URL);

const main = async () => {
    try {
        // Hesapları alın
        const accounts = await web3.eth.getAccounts();

        if (accounts.length < 2) {
            console.error('Yeterli hesap yok. İşlem yapmak için en az 2 hesaba ihtiyaç var.');
            return;
        }

        console.log('Available Accounts:');
        console.log(accounts);

        // İlk hesabın bakiyesini kontrol et
        const balance = await web3.eth.getBalance(accounts[0]);
        console.log(`Account 1 Balance: ${web3.utils.fromWei(balance, 'ether')} ETH`);

        // Basit bir işlem yapma (ilk hesaptan ikinciye transfer)
        const tx = await web3.eth.sendTransaction({
            from: accounts[0],
            to: accounts[1],
            value: web3.utils.toWei('1', 'ether')
        });

        console.log('Transaction:', tx);
    } catch (error) {
        console.error('Hata:', error);
    }
};

main();

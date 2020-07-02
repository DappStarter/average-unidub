require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture rebel frame security iron note stick snake good prison metal ghost'; 
let testAccounts = [
"0xf8aba5d88cd03f794224a5c632dc78f77bddd41ec96167724ecda6511777a00f",
"0xe1c6480b2ad77c24db183fb9cdc69d56c9a8565021ea75c4a1da68e0ac6ca804",
"0x7e157c06255030da2bde4eaeb1d7943400dd012f2d5e2d7ae2b5ae48910a2486",
"0x6c14df446795ceb14785e3b8f1f0e3edea8c1a94bc6243e88b0434744882e2b6",
"0xa9ba40309bf831de9f67c9daa78fce9a923f1300b553eba5a2bd425c591ee8b0",
"0x54c6316fd2eff2b9873fc7092bc76ee2300de2b2e0fe66172f3d75075fa7c0df",
"0x1b13807727304744a35290978a662eee4d3b1d38cd71036f9bf2225d46f4ca78",
"0x7e84f663c1450a0fb969cbbb8ae2a81e182dcee118856b5960c5a74dfe3124f8",
"0x0a78e3e3364d40977362045ba435796a1b3e97c6387b8e086661a3c96f740ee4",
"0x589ab82c0dc13266dc5c244bf474b643f9af3948e2ea62f5edc8fdad5bd13306"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

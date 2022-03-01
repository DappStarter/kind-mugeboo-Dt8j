require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hidden enter october food struggle recipe night evil hundred light army gift'; 
let testAccounts = [
"0x80eb407fad089f7d1b5e9d15fa706e56f5f76061a4bf16fc388cc3e1c26844e0",
"0xffd4df821249a9ef535ca5dfc859ad6b21009b71c24e3c885a60842f36e62f3a",
"0xc15435f8bbf86a74e000e4034d1f19899eb26666bd437d3fad172cc0eb1dedb5",
"0x230b772d7aab2e9d8b29af857c5bbfdd0578429e507b4855e269a22adc288c4f",
"0xe26f06c921f412ac5348a906dcc859e3b8d23aa0256af24dc26b773e8f8c7b18",
"0xd782b1d4c55de1b3656ad7354827e91eff4340d98238bc015fcb0c2711d09ad3",
"0x60d52732074759279283efa80a67a54867b2c8cd17a5d0fe9e8f18921699428e",
"0x1414c0ed3e1c2a2ac9fe528a86b1913047397a76105e85305793a5d3cf08b5ca",
"0xf4118d102eb4a0a068f83bbbde9add31c5dd92122c2b156089456db834e101e2",
"0xfd414fe7f92b8af408c849a5d3db69c9dd3b94316034d26d029d97bea20db984"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};



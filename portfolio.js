const { ping, check_price, coins_market } = require("./lib/coingecko-lib");
var _ = require('lodash');

//Coins to check
const coins = ['bitcoin', 'ethereum', 'cardano', 'polkadot', 'binancecoin', 'chainlink', 'uniswap', 'aave', 'cosmos', 'tron', 
'havven', 'tezos', 'the-graph', 'elrond-erd-2', 'solana', 'maker', 'celsius-degree-token', 'compound-coin', 'crypto-com-chain',
'kusama', 'yearn-finance', 'digibyte', 'loopring', 'republic-protocol', 'swissborg', 'pancakeswap-token', 'matic-network', 
'1inch', 'balancer', 'kyber-network', 'band-protocol', 'polkastarter', 'kava', 'swipe', 'ankr', 'parsiq', 'origintrail', 
'ark', 'unibright', 'morpheus-network', 'oracolxor', 'swap', 'paid-network', 'bondly', 'cartesi', 'darwinia-network-native-token',
'shopping-io', 'tixl-new', 'snowblossom', 'demos', 'pluton', 'parachute', 'xio', 'digitex-futures-exchange', 'reef-finance',
'defichain', 'modefi', 'cyberfi', 'benchmark-protocol' ];
const currencies = ['usd'];
const range = ['1h','24h','7d','14d','30d','200d','1y'];

//check_price(coins,currencies);
coins_market(coins,currencies,range);
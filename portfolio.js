const { ping, check_price, coins_percentage } = require("./lib/coingecko-lib");
const { compareValues } = require("./lib/util-lib");
var _ = require('lodash');

//Coins to check
const coins = ['bitcoin', 'ethereum', 'cardano', 'polkadot', 'binancecoin', 'chainlink', 'uniswap', 'aave', 'cosmos', 'tron', 
'havven', 'tezos', 'the-graph', 'elrond-erd-2', 'solana', 'maker', 'celsius-degree-token', 'compound-coin', 'crypto-com-chain',
'kusama', 'yearn-finance', 'digibyte', 'loopring', 'republic-protocol', 'swissborg', 'pancakeswap-token', 'matic-network', 
'1inch', 'balancer', 'kyber-network', 'band-protocol', 'polkastarter', 'kava', 'swipe', 'ankr', 'parsiq', 'origintrail', 
'ark', 'unibright', 'morpheus-network', 'oracolxor', 'swap', 'paid-network', 'bondly', 'cartesi', 'darwinia-network-native-token',
'shopping-io', 'tixl-new', 'snowblossom', 'demos', 'pluton', 'parachute', 'xio', 'digitex-futures-exchange', 'reef-finance',
'defichain', 'modefi', 'cyberfi', 'benchmark-protocol' ];
const coinsBTC = ['bitcoin'];
const currencies = ['usd'];
const range = ['1h','24h','7d','14d','30d','200d','1y'];
let tokens = [];

coins_percentage(coins,currencies,range).then((response) => {
    
    response.data.forEach(element => { 
        const token = {
            'id': element.id,
            'symbol': element.symbol,
            'name': element.name,
            'price': element.current_price,
            'percent1d': parseFloat(element.price_change_percentage_24h_in_currency),
            'percent7d': parseFloat(element.price_change_percentage_7d_in_currency),
            'percent14d': parseFloat(element.price_change_percentage_14d_in_currency),
            'percent30d': parseFloat(element.price_change_percentage_30d_in_currency),
            'percent200d': parseFloat(element.price_change_percentage_200d_in_currency),
            'percent365d': parseFloat(element.price_change_percentage_1y_in_currency),
        }          
        tokens.push(token);
      });

      tokens.sort(compareValues('price','desc'));
      let topTokens = tokens.slice(0,3);
      
      tokens.sort(compareValues('percent1d','desc'));
      topTokens = topTokens.concat(tokens.slice(0,3));

      tokens.sort(compareValues('percent7d','desc'));
      topTokens = topTokens.concat(tokens.slice(0,3));

      tokens.sort(compareValues('percent30d','desc'));
      topTokens = topTokens.concat(tokens.slice(0,3));
      
      console.log(topTokens); 
  }).catch(e => console.log(e));;

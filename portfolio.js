const { ping, check_price } = require("./lib/coingecko-lib");
var _ = require('lodash');

//Coins to check
const coins = ['bitcoin', 'ethereum'];
const currencies = ['usd'];

check_price(coins,currencies);
const CoinGecko = require("coingecko-api");
const CoinGeckoClient = new CoinGecko();

const ping = async () => {
  let data = await CoinGeckoClient.ping();
  console.log(data);
};

const check_price = async (coins, currencies) => {
  let data = await CoinGeckoClient.simple.price({
    ids: coins,
    vs_currencies: currencies,
  });
  console.log(data);
};

var coins_percentage = async (coins, currencies, range) => {
	return data = await CoinGeckoClient.coins.markets({
    ids: coins,
    vs_currencies: currencies,
    price_change_percentage: range,
  });
};

module.exports = { ping, check_price, coins_percentage };

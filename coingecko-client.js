const CoinGecko = require('coingecko-api');
const CoinGeckoClient = new CoinGecko();
var msj = "";

var ping = async() => {
  let data = await CoinGeckoClient.ping();
  console.log(data);
};

var global = async() => {
	let data = await CoinGeckoClient.global();
	console.log(data);
};

var coins_all = async() => {
	let data = await CoinGeckoClient.coins.all();
	console.log(data);
};

var coins_list = async() => {
	let data = await CoinGeckoClient.coins.list();
	console.log(data);
};

var coins_market = async() => {
	let data = await CoinGeckoClient.coins.markets();
	console.log(data);
};

var coins_fetch = async() => {
	let data = await CoinGeckoClient.coins.fetch('bitcoin', {});
	console.log(data);
};

var coins_tickers = async() => {
	let data = await CoinGeckoClient.coins.fetchTickers('bitcoin');
	console.log(data);
};

var coins_history = async() => {
let data = await CoinGeckoClient.coins.fetchHistory('bitcoin', {
	date: '30-12-2017'
  });
  console.log(data);
};

var coins_marketchart = async() => {
	let data = await CoinGeckoClient.coins.fetchMarketChart('bitcoin');
	console.log(data);
};

var fetchMarketChartRange = async() => {
	let data = await CoinGeckoClient.coins.fetchMarketChartRange('bitcoin', {
		from: 1392577232,
		to: 1422577232,
	  });
	console.log(data);
};

var fetchStatusUpdates = async() => {
	let data = await CoinGeckoClient.coins.fetchStatusUpdates('bitcoin');
	console.log(data);
};

var fetchCoinContractInfo = async() => {
	// 0x contract address (as a test)
	let zrx = '0xe41d2489571d322189246dafa5ebde1f4699f498';
	let data = await CoinGeckoClient.coins.fetchCoinContractInfo(zrx);
	console.log(data);
};

var fetchCoinContractMarketChart = async() => {
	// 0x contract address (as a test)
	let zrx = '0xe41d2489571d322189246dafa5ebde1f4699f498';
	let data = await CoinGeckoClient.coins.fetchCoinContractMarketChart(zrx);
	console.log(data);
};

var fetchCoinContractMarketChartRange = async() => {
	let zrx = '0xe41d2489571d322189246dafa5ebde1f4699f498';
	let data = await CoinGeckoClient.coins.fetchCoinContractMarketChartRange(zrx, 'ethereum', {
	  from: 1392577232,
	  to: 1422577232,
	});
	console.log(data);
};

var exchanges_all = async() => {
	let data = await CoinGeckoClient.exchanges.all();
	console.log(data);
};

var exchanges_list = async() => {
	let data = await CoinGeckoClient.exchanges.list();
	console.log(data);
};

var exchange_fetch = async() => {
	let data = await CoinGeckoClient.exchanges.fetch('binance');
	console.log(data);
};

var exchange_tickers = async() => {
	let data = await CoinGeckoClient.exchanges.fetchTickers('binance');
	console.log(data);
};

var exchange_fetchStatusUpdates = async() => {
	let data = await CoinGeckoClient.exchanges.fetchStatusUpdates('binance');
	console.log(data);
};

var exchange_fetchVolumeChart = async() => {
	let data = await CoinGeckoClient.exchanges.fetchVolumeChart('binance', {
		days: 1,
	  });
	console.log(data);
};

var statusUpdates_all = async() => {
	let data = await CoinGeckoClient.statusUpdates.all();
	console.log(data);
};

var events_all = async() => {
	let data = await CoinGeckoClient.events.all();
	console.log(data);
};

var events_countries = async() => {
	let data = await CoinGeckoClient.events.fetchCountries();
	console.log(data);
};

var events_types = async() => {
	let data = await CoinGeckoClient.events.fetchTypes();
	console.log(data);
};

var exchange_rates = async() => {
	let data = await CoinGeckoClient.exchangeRates.all();
	console.log(data);
};

var simple_price = async() => {
	let data = await CoinGeckoClient.simple.price({
		ids: ['bitcoin', 'ethereum'],
		vs_currencies: ['eur', 'usd'],
	});
	console.log(data);
};

var simple_supportedVsCurrencies = async() => {
	let data = await CoinGeckoClient.simple.supportedVsCurrencies();
	console.log(data);
};

var simple_fetchTokenPrice = async() => {
	// 0x contract address (as a test)
	var zrx = '0xe41d2489571d322189246dafa5ebde1f4699f498';
	let data = await CoinGeckoClient.simple.fetchTokenPrice({
  	contract_addresses: zrx,
  	vs_currencies: 'usd',
});
	console.log(data);
};

var finance_fetchPlatforms = async() => {
	let data = await CoinGeckoClient.finance.fetchPlatforms();
	console.log(data);
};

var finance_fetchProducts = async() => {
	let data = await CoinGeckoClient.finance.fetchProducts();
	console.log(data);
};

var indexes_all = async() => {
	let data = await CoinGeckoClient.indexes.all();
	console.log(data);
};

var indexes_fetch = async() => {
	let testIndexId = 'BTC'; // as a test
	let data = await CoinGeckoClient.indexes.fetch(testIndexId);
	console.log(data);
};

var indexes_list = async() => {
	let data = await CoinGeckoClient.indexes.list();
	console.log(data);
};

var derivatives_fetchTickers = async() => {
	let data = await CoinGeckoClient.derivatives.fetchTickers();
	console.log(data);
};

var derivatives_allExcahnges = async() => {
	let data = await CoinGeckoClient.derivatives.allExchanges();
	console.log(data);
};

var derivatives_fetchExchange = async() => {
	let testExchangeId = 'bitmex'; // as a test
	let data = await CoinGeckoClient.derivatives.fetchExchange(testExchangeId);
	console.log(data);
};

var derivativves_listExchanges = async() => {
	let data = await CoinGeckoClient.derivatives.listExchanges();
	console.log(data);
};

//https://github.com/miscavage/CoinGecko-API
//ping();
//global();
//coins_all();
//coins_list();
//coins_market();
//coins_fetch();
//coins_tickers();
//coins_history();
//coins_marketchart();
//fetchMarketChartRange();
//fetchStatusUpdates();
//fetchCoinContractInfo();
//fetchCoinContractMarketChart();
//fetchCoinContractMarketChartRange();
//exchanges_all();
//exchanges_list();
//exchange_fetch();
//exchange_tickers();
//exchange_fetchStatusUpdates();
//exchange_fetchVolumeChart();
//statusUpdates_all();
//events_all();
//events_countries();
//events_types();
//exchange_rates();
//simple_price();
//simple_supportedVsCurrencies();
//simple_fetchTokenPrice();
//finance_fetchPlatforms();
//finance_fetchProducts();
//indexes_all();
//indexes_fetch();
//indexes_list();
//derivatives_fetchTickers();
//derivatives_allExcahnges();
//derivatives_fetchExchange();
derivativves_listExchanges();
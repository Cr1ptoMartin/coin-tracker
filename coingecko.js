const axios = require('axios');
var _ = require('lodash');

const COINGECKO_API_URL = 'https://api.coingecko.com/api/v3/';
const COINGECKO_PING = 'ping';
var API_URL;

function getCoingeckoStatus(){
	API_URL = COINGECKO_API_URL+COINGECKO_PING;
	axios.get(API_URL)
		.then(response => {
		    		console.log(response.status + ' ' + response.statusText);
 		})

    .catch(error => console.log('Error', error));
}

getCoingeckoStatus();
const axios = require('axios');
var _ = require('lodash');
var __ =  require('dotenv').config();

const API_URL = process.env.COINGECKO_API_URL+process.env.COINGECKO_PING;

function getCoingeckoStatus(){
	axios.get(API_URL)
		.then(response => {
		    		console.log(response.status + ' ' + response.statusText);
 		})

    .catch(error => console.log('Error', error));
	
	//const intervalTime = 30000;
	//setTimeout(getCoingeckoStatus, intervalTime);
}

getCoingeckoStatus();
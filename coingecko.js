const axios = require('axios');
var _ = require('lodash');

const API_URL = 'https://api.etherscan.io/api?module=gastracker&action=gasoracle';
const API_KEY = '9TFGDPAKWRRWMXP7JR7DCK4EJJNGYC56N5';
const ENTIRE_API_URL = `${API_URL}&apikey=${API_KEY}`;

function getGasPrice(){
	axios.get(ENTIRE_API_URL)
		.then(response => {
			//getting the Minimum gas price, Propose Gas Price and Fast Gas price
			const minimumGasPrice = response.data.result.SafeGasPrice
			const proposeGasPrice = response.data.result.ProposeGasPrice
			const fastGasPrice = response.data.result.FastGasPrice

			//Building final message
			const message = (
				`Minimum: ${minimumGasPrice} \n
				 Propose: ${proposeGasPrice} \n
				 Fast: ${fastGasPrice} `.replace(/\s+/g, ' ')
			);

			const targerGasPrice = 200;
			// Check if it's lower than target gas price
			if (proposeGasPrice <= targerGasPrice)
		    		console.log(message);

 		})
		//.then(response => console.log(JSON.stringify(response.data, undefined, 2)))
    .catch(error => console.log('Error', error));
	
	const intervalTime = 30000;
	setTimeout(getGasPrice, intervalTime);
}

getGasPrice();

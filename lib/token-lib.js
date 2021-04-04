const { compareValues } = require("./util-lib");

/**
       * @description Order a list of given tokens by several criterias and returns an object with the information
       * @param {Array} tokens - Arrays of tokens
       * @param {number} numberOfCoins [default: 3] - numbers of coins to each criteria
       * @returns {ReturnObject}
**/
 function orderTokens(tokens,numberOfCoins = 3){
  var orderedTokens = {
      //Order list by price and get the top
      orderByHighPrice: tokens.sort(compareValues('price','desc')).slice(0,numberOfCoins),
      orderByLowPrice: tokens.slice(-numberOfCoins).sort(compareValues('price','asc')),
      orderByHigh1d: tokens.sort(compareValues('percent1d','desc')).slice(0,numberOfCoins),
      orderByLow1d: tokens.slice(-numberOfCoins).sort(compareValues('percent1d','asc')),
      orderByHigh7d: tokens.sort(compareValues('percent7d','desc')).slice(0,numberOfCoins),
      orderByLow7d: tokens.slice(-numberOfCoins).sort(compareValues('percent7d','asc')),
      orderByHigh14d: tokens.sort(compareValues('percent14d','desc')).slice(0,numberOfCoins),
      orderByLow14d: tokens.slice(-numberOfCoins).sort(compareValues('percent14d','asc')),
      orderByHigh30d: tokens.sort(compareValues('percent30d','desc')).slice(0,numberOfCoins),
      orderByLow30d: tokens.slice(-numberOfCoins).sort(compareValues('percent30d','asc')),
      orderByHigh200d: tokens.sort(compareValues('percent200d','desc')).slice(0,numberOfCoins),
      orderByLow200d: tokens.slice(-numberOfCoins).sort(compareValues('percent200d','asc')),
  };
  return orderedTokens;
}

  module.exports = { orderTokens };
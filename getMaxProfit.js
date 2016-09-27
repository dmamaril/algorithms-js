/**
 * Suppose we could access yesterday's stock prices as an array, where:
 * 
 * The indices are the time in minutes past trade opening time, which was 9:30am local time.
 * The values are the price in dollars of Apple stock at that time.
 * So if the stock cost $500 at 10:30am, stockPricesYesterday[60] = 500.
 * 
 * Write an efficient function that takes stockPricesYesterday
 * and returns the best profit I could have made from 1 purchase and 1 sale of 1 Apple stock yesterday.
 */

/**
 * [getMaxProfit description]
 *
 *   | 10 3 5 11 7 1 10 |
 * ---------------------|
 * H | -  - 5 11 7 - 10 |
 * ---------------------|
 * L | 10 3 3 3  3 1  1 |
 * ---------------------|
 * D | -  - 2 8  4 -  9 |
 *
 * O(n) solution;
 * 
 * @param  {[type]} stocks [description]
 * @return {[type]}        [description]
 */
var getMaxProfit = function (stocks) {

    let high, low, profit;

    profit = -Infinity;

    for (let stock of stocks) {

        let diff;

        if (!low) {

            low = stock;

        } else if (stock < low) {

            low  = stock;
            high = null;

        } else if (stock > low) {

            high = stock;
            diff = high - low;

            profit = Math.max(profit, diff);
        }
    }

    profit = profit === -Infinity ? 0 : profit;

    console.log(stocks, profit);
    return profit;
}


getMaxProfit([10, 3, 5, 11, 7, 1]); // 8
getMaxProfit([5,4,3,2,1]); // 0
getMaxProfit([1,1,1,1,1]); // 0;
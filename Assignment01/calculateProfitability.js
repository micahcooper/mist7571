function calculateProfitability()
{
	console.log("starting the program");
	profit = document.getElementById("profit").value;
	console.log("profit - "+profit);
	averageNumberOfShares = document.getElementById("averageNumberOfShares").value;
	
	pricePerShare = document.getElementById("pricePerShare").value;
	totalAssets = document.getElementById("totalAssets").value;
	//intangibleAssets = document.getElementById("intangibleAssets").value;
	//liabilities = document.getElementById("liabilities").value;

	earningsPerShare = document.getElementById("earningsPerShare").value;
	//peRatio = document.getElementById("peRatio");
	percentageExpectedGrowth = document.getElementById("percentageExpectedGrowth").value;
	
	earningsPerShare = calculateEarningsPerShare(profit, averageNumberOfShares);
	console.log(earningsPerShare);
	//priceToBook = calculatePriceToBook();
	
}

function calculateEarningsPerShare(profit, averageNumberOfShares)
{
	return profit / averageNumberOfShares;
}
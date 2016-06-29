//function to calcuate the results based on a companies share and earnings report
function calculateProfitability()
{
	console.log("starting the calculation");
	profit = document.getElementById("profit").value;
	console.log("profit - "+profit);
	
	averageNumberOfShares = document.getElementById("averageNumberOfShares").value;
	pricePerShare = document.getElementById("pricePerShare").value;
	totalAssets = document.getElementById("totalAssets").value;
	intangibleAssets = document.getElementById("intangibleAssets").value;
	liabilities = document.getElementById("liabilities").value;
	percentageExpectedGrowth = document.getElementById("percentageExpectedGrowth").value;
	
	earningsPerShare = profit / averageNumberOfShares;
	console.log(earningsPerShare);
	document.getElementById("earningsPerShare").innerHTML = earningsPerShare.toFixed(2);
	
	priceToBook = pricePerShare / (totalAssets - (intangibleAssets + liabilities));
	console.log("price to book - "+priceToBook+" pricePerShare,totalAssets,intangibleAssets,liabilities"+pricePerShare+" "+totalAssets+" "+intangibleAssets+" "+liabilities);
	document.getElementById("priceToBook").innerHTML = priceToBook;
	
	peRatio = pricePerShare / earningsPerShare;
	console.log("PE Ratio - "+peRatio);
	document.getElementById("peRatio").innerHTML = peRatio.toFixed(2);
	
	priceToEarningsGrowth = peRatio / percentageExpectedGrowth;
	console.log("Price to Earnings Growth - "+priceToEarningsGrowth);
	document.getElementById("priceToEarningsGrowth").innerHTML = priceToEarningsGrowth.toFixed(2);
	
	bookValue = totalAssets - liabilities;
	returnOnEquity = profit / bookValue;
	console.log("Book Value - "+bookValue);
	console.log("Return On Equity - "+returnOnEquity);
	document.getElementById("returnOnEquity").innerHTML = returnOnEquity.toFixed(2);
	//outputResults();
	
}
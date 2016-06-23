function calculateProfitability()
{
	console.log("starting the program");
	profit = document.getElementById("profit").value;
	console.log("profit - "+profit);
	averageNumberOfShares = document.getElementById("averageNumberOfShares").value;
	
	pricePerShare = document.getElementById("pricePerShare").value;
	totalAssets = document.getElementById("totalAssets").value;
	intangibleAssets = document.getElementById("intangibleAssets").value;
	liabilities = document.getElementById("liabilities").value;

	earningsPerShare = document.getElementById("earningsPerShare").value;
	//peRatio = document.getElementById("peRatio");
	percentageExpectedGrowth = document.getElementById("percentageExpectedGrowth").value;
	
	earningsPerShare = profit / averageNumberOfShares;
	console.log(earningsPerShare);
	priceToBook = pricePerShare / (totalAssets - (intangibleAssets + liabilities));
	console.log("price to book - "+priceToBook+" pricePerShare,totalAssets,intangibleAssets,liabilities"+pricePerShare+" "+totalAssets+" "+intangibleAssets+" "+liabilities);
	
	peRatio = pricePerShare / earningsPerShare;
	
	priceToEarningsGrowth = peRatio / percentageExpectedGrowth;
	
	console.log("PE Ratio: "+peRatio);
	console.log("Price to earnings growth: "+priceToEarningsGrowth);
	
	outputResults(earningsPerShare, priceToBook);
	
}

function outputResults()
{
	document.write("<!DOCTYPE html><html lang=\"en\"><head><meta charset=\"utf-8\" /><link rel=\"stylesheet\" href=\"style.css\" /><title>CompanyProfitability</title></head>");
	document.write("<header><h1>Results</h1></header>");
	document.write("<table><tr><th>Name of Field</th><th>Value</th></tr>");
	document.write("<tr><td></td><td>"+earningsPerShare+"</td></tr>");
	document.write("<tr><td>Earnings Per Share</td><td>"+earningsPerShare+"</td></tr>");
	document.write("<tr><td>Price to Book</td><td>"+priceToBook+"</td></tr>");
	document.write("<tr><td>PE Ratio</td><td>"+peRatio+"</td></tr>");
	document.write("<tr><td>Price to earnings growth</td><td>"+priceToEarningsGrowth+"</td></tr>");
	document.write("</table>");
	document.close();
}
//function to calcuate the results based on a companies share and earnings report
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

	//earningsPerShare = document.getElementById("earningsPerShare").value;
	//peRatio = document.getElementById("peRatio");
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

//send the results to the document.write
function outputResults()
{
	document.open();
	document.write("<!DOCTYPE html><html lang=\"en\"><head><meta charset=\"utf-8\" /><link rel=\"stylesheet\" href=\"style.css\" /><title>CompanyProfitability</title></head>");
	document.write("<header><h1>Results</h1></header>");
	document.write("<table><tr><th>Name of Field</th><th>Value</th></tr>");
	document.write("<tr><td>Earnings Per Share</td><td>"+earningsPerShare.toFixed(2)+"</td></tr>");
	document.write("<tr><td>Price to Book</td><td>"+priceToBook.toFixed(2)+"</td></tr>");
	document.write("<tr><td>PE Ratio</td><td>"+peRatio.toFixed(2)+"</td></tr>");
	document.write("<tr><td>Price to earnings growth</td><td>"+priceToEarningsGrowth.toFixed(2)+"</td></tr>");
	document.write("<tr><td>Return on equity</td><td>"+returnOnEquity.toFixed(2)+"</td></tr>");
	document.write("</table>");
	document.write("<p><a href=asg1.html>Go Back</a></p>");
	document.write("</body></html>");
	document.close();
}
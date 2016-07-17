function readyToGo()
{
	console.log("ready");
	readBooks();
}

//read the books file
function readBooks()
{
	var httpRequest = null;
	
	if(window.XMLHttpRequest)
	{
		httpRequest = new XMLHttpRequest();
	}
	else if (window.ActiveXObject)
	{
		httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
	}
	
	httpRequest.open("GET", "books.xml", true);
	
	httpRequest.onreadystatechange = function()
	{
		console.log("we are request ready");
		if( httpRequest.readyState === 4 && httpRequest.status === 200)
		{
			var booksXML = httpRequest.responseXML;
			var books = booksXML.documentElement.getElementsByTagName("book");
			console.log( books );
			var myTable = buildHTMLTable(books);
			document.getElementById('myTableDiv').innerHTML = myTable;
		}
	}
	
	
	httpRequest.send(null);
	console.log( httpRequest );
}

//build the table to attach to the table based on the books found
function buildHTMLTable(books)
{
	var bookTable = "";
	
	bookTable += "<table class='table table-striped'>";
	bookTable += "<thead class='thead-inverse'><tr><th>Title</th><th>Author</th><th>Publisher</th><th>ISBN</th><th>Price</th><th>Sales Tax</th><th>Total Cost</th></tr></thead>";
	
	for(var i=0; i<books.length; i++)
	{
		bookTable += "<tr><td>";
		bookTable += books[i].getElementsByTagName('title')[0].firstChild.nodeValue;
		bookTable += "</td>";
		
		bookTable += "<td>";
		bookTable += books[i].getElementsByTagName('author')[0].firstChild.nodeValue;
		bookTable += "</td>";
		
		bookTable += "<td>";
		bookTable += books[i].getElementsByTagName('publisher')[0].firstChild.nodeValue;
		bookTable += "</td>";
		
		bookTable += "<td>";
		bookTable += books[i].getElementsByTagName('ISBN')[0].firstChild.nodeValue;
		bookTable += "</td>";
		
		bookTable += "<td>";
		bookTable += books[i].getElementsByTagName('price')[0].firstChild.nodeValue;
		bookTable += "</td>";
		
		bookTable += "<td>7%</td>";
		
		var price = books[i].getElementsByTagName('price')[0].firstChild.nodeValue;
		bookTable += "<td>";
		bookTable += "$"+(price*1.07).toFixed(2);;
		bookTable += "</td></tr>";
	}
	bookTable += "</table>";
	
	console.log( bookTable );
	return bookTable;
}
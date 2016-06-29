//function to calcuate the results based on a companies share and earnings report
function calculateBMI()
{
	console.log("starting the calculation");

	
	weight = document.getElementById("weight").value;
	height = document.getElementById("height").value;
	age = document.getElementById("age").value;

	document.getElementById("bmi").innerHtml = "overweight";
	console.log( document.getElementById("bmi").innerHtml );
}
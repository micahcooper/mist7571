//function to calcuate the results based on a companies share and earnings report
function calculateBMI()
{
	console.log("starting the calculation");

	
	weight = document.getElementById("weight").value;
	height = document.getElementById("height").value;
	age = document.getElementById("age").value;

	bmi = (weight*703)/(height*12)(height*12);
	
	if( bmi > 25 )
		document.getElementById("bmi").innerHTML = "<strong>overweight</strong>";
	console.log( bmi );
}
//function to calcuate the results based on a companies share and earnings report
function calculateBMI()
{
	console.log("starting the calculation");

	weight = document.getElementById("weight").value;
	height = document.getElementById("height").value;

	console.log("weight: "+weight+" height: "+height)
	bmi = (weight*703)/(height*height);
	
	if( bmi > 25 )
		document.getElementById("overweight").style.backgroundColor += "yellow";
		
	document.getElementById("bmi-result").innerHTML = "<strong>"+bmi+"</strong";
		
	console.log( bmi );
	
	
}
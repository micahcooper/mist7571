//function to calcuate the results based on a companies share and earnings report
function calculateBMI()
{
	console.log("starting the calculation");

	weight = document.getElementById("weight").value;
	height = document.getElementById("height").value;

	console.log("weight: "+weight+" height: "+height)
	bmi = (weight*703)/(height*height);
	
	var selectedRow;
	
	if( bmi < 18.5)
	{
		document.getElementById("underweight").style.backgroundColor = "yellow";
		document.getElementById("normalweight").style.backgroundColor = "";
		document.getElementById("overweight").style.backgroundColor = "";
		document.getElementById("obesity").style.backgroundColor = "";
	}
	if( bmi >= 18.5 && bmi < 25)
	{
		document.getElementById("underweight").style.backgroundColor = "";
		document.getElementById("normalweight").style.backgroundColor = "yellow";
		document.getElementById("overweight").style.backgroundColor = "";
		document.getElementById("obesity").style.backgroundColor = "";
	}
	if( bmi >= 25 && bmi < 30)
	{
		document.getElementById("underweight").style.backgroundColor = "";
		document.getElementById("normalweight").style.backgroundColor = "";
		document.getElementById("overweight").style.backgroundColor = "yellow";
		document.getElementById("obesity").style.backgroundColor = "";
	}
	if( bmi >= 30)
	{
		document.getElementById("underweight").style.backgroundColor = "";
		document.getElementById("normalweight").style.backgroundColor = "";
		document.getElementById("overweight").style.backgroundColor = "";
		document.getElementById("obesity").style.backgroundColor = "yellow";
	}	
	
	document.getElementById("section-result").className = "";
	document.getElementById("bmi-result").innerHTML = "<strong>"+bmi+"</strong";
	
	
	console.log( bmi );
}

function resetBMI()
{
	document.getElementById("section-result").className = "hide";
	
	document.getElementById("underweight").style.backgroundColor = "";
	document.getElementById("normalweight").style.backgroundColor = "";
	document.getElementById("overweight").style.backgroundColor = "";
	document.getElementById("obesity").style.backgroundColor = "";
}
//function to calcuate the results based on a companies share and earnings report
function calculateBMI()
{
	console.log("starting the calculation");

	weight = document.getElementById("weight").value;
	height = document.getElementById("height").value;
	console.log("weight: "+weight+" height: "+height)
	
	bmi = (weight*703)/(height*height);

	
	//this if-block resets status table rows and highlights the appropriate status row
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
	
	document.getElementById("section-bmi").className = "";
	document.getElementById("bmi-result").innerHTML = "<p class=\"resultp\"><strong>Your BMI - </strong>"+bmi.toFixed(1)+"</p>";
	
	
	console.log( "bmi number: "+bmi );
	console.log( "calculation has ended" );
}

//resets the displayed BMI calculation and reset the status table
function resetBMI()
{
	document.getElementById("height").value = "";
	document.getElementById("weight").value = "";
	document.getElementById("section-bmi").className = "hide";
	
	document.getElementById("underweight").style.backgroundColor = "";
	document.getElementById("normalweight").style.backgroundColor = "";
	document.getElementById("overweight").style.backgroundColor = "";
	document.getElementById("obesity").style.backgroundColor = "";
}
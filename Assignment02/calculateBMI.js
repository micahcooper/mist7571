var message = '';

//function to calcuate the results based on a companies share and earnings report
function calculateBMI()
{
	console.log("starting the calculation");

	var weight = document.getElementById("weight").value;
	var height = document.getElementById("height").value;
	console.log("weight: "+weight+" height: "+height)
	
	var bmi = (weight*703)/(height*height);

	if( !bmi > 0 ){ 
		document.getElementById("section-bmi").className = "";
		document.getElementById("bmi-result").innerHTML = "<p>You entered an incorrect height or weight, please try again.</p>";
	}
	else{
	
		//this if-block resets status table rows and highlights the appropriate status row
		if( bmi < 18.5)
		{
			document.getElementById("underweight").style.backgroundColor = "yellow";
			document.getElementById("normalweight").style.backgroundColor = "";
			document.getElementById("overweight").style.backgroundColor = "";
			document.getElementById("obesity").style.backgroundColor = "";
			message = "You are underweight you may want to talk to your GP about gaining weight. Being underweight can increase your risk of health problems.";

		}
		if( bmi >= 18.5 && bmi < 25)
		{
			document.getElementById("underweight").style.backgroundColor = "";
			document.getElementById("normalweight").style.backgroundColor = "yellow";
			document.getElementById("overweight").style.backgroundColor = "";
			document.getElementById("obesity").style.backgroundColor = "";
			message = "For most adults, an ideal BMI is in the 18.5-24.9 range. You are in this range.";

		}
		if( bmi >= 25 && bmi < 30)
		{
			document.getElementById("underweight").style.backgroundColor = "";
			document.getElementById("normalweight").style.backgroundColor = "";
			document.getElementById("overweight").style.backgroundColor = "yellow";
			document.getElementById("obesity").style.backgroundColor = "";
			message = "You are in the overweight category, you should think about losing weight. Being overweight can increase your risk of health problems.";

		}
		if( bmi >= 30)
		{
			document.getElementById("underweight").style.backgroundColor = "";
			document.getElementById("normalweight").style.backgroundColor = "";
			document.getElementById("overweight").style.backgroundColor = "";
			document.getElementById("obesity").style.backgroundColor = "yellow";
			message = "You are in the obese weight BMI category. Associated health problems include heart disease, stroke and type 2 diabetes.";
		}	
		
		document.getElementById("section-bmi").className = "";
		document.getElementById("bmi-result").innerHTML = "<p class=\"resultp\"><strong>Your BMI - </strong>"+bmi.toFixed(1)+"</p><p class=\"message\">"+message+"</p>";
	
	}
	console.log( "bmi number: "+bmi );
	console.log( "calculation has ended" );
}

//resets the displayed BMI calculation and reset the status table
function resetBMI()
{
	document.getElementById("height").value = "";
	document.getElementById("weight").value = "";
	document.getElementById("section-bmi").className = "hide";
	message = '';
	
	document.getElementById("underweight").style.backgroundColor = "";
	document.getElementById("normalweight").style.backgroundColor = "";
	document.getElementById("overweight").style.backgroundColor = "";
	document.getElementById("obesity").style.backgroundColor = "";
}
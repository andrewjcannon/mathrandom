function getOutput(){
	var min = document.getElementById('min').value;
	var max = document.getElementById('max').value;
	console.log("min: " + min + " , max: " + max);
	var type = document.querySelector('input[name="typecast"]:checked').value;

	var incmin = document.getElementById('includemin').checked;
	var incmax = document.getElementById('includemax').checked;

	if(isNaN(parseFloat(min)) || isNaN(parseFloat(max)) || isNaN(parseInt(max)) || isNaN(parseInt(min))){
		alert("Please enter valid numbers");
		return;
	}
	if(parseInt(min)>parseInt(max)){
		alert("min cannot be greater than max");
		return;
	}

	var equation;
	if(type == "int")
	{
		min = parseInt(min);
		max = parseInt(max);
		if(!incmin){min = min + 1;}
		var ext = max - min;
		if(incmax){ext = ext + 1;}
		if(min == 0){min = ""}else{min=min.toString() + " + "}
		equation = min + "(int)(Math.random() * " + ext.toString() + ")";
	}
	else if(type == "double")
	{
		min = parseFloat(min);
		max = parseFloat(max);
		var ext = max - min;
		if(parseInt(min) == 0){min = ""}else{min=min.toString() + " + "}
		equation = min + "(Math.random() * " + ext.toString() + ")";
	}

	document.getElementById("title").innerHTML = equation;
}

function validateRadio(){
	var upper = document.getElementById("includemax");
	var lower = document.getElementById("includemin");
	if(document.getElementById('double').checked){
		upper.checked = false;
		upper.disabled = true;

		lower.checked = true;
		lower.disabled = true;
	}else{
		upper.disabled = false;
		lower.disabled = false;
	}
}

function formReset(){
	document.getElementById("includemax").disabled = false;
	document.getElementById("includemin").disabled = false;
	document.getElementById("title").innerHTML = "Math.random()";
}

function copy(){
	var aux = document.createElement("input");

	aux.setAttribute("value", document.getElementById("title").innerHTML);

	document.body.appendChild(aux);

	aux.select();

	document.execCommand("copy");

	document.body.removeChild(aux);
}
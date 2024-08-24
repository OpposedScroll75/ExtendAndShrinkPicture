let img = document.getElementById("image");
let body = document.body;

img.addEventListener("click", extendImg);

const exitButton = document.createElement("button");

exitButton.style.height = "50px";
exitButton.style.width = "50px";
exitButton.style.background = "red";
exitButton.style.borderRadius = "50%";
	
body.appendChild(exitButton);
exitButton.addEventListener("click", shrinkImg);
exitButton.style.display = "none";


function extendImg(){
	
	body.style.background = "#292626";
	img.style.height = "calc(90%)";
	img.style.width = "calc(90%)";
	img.style.transition = "0.1s linear";
	const txt = document.querySelector("h1");
	txt.style.color = "grey";
	
	exitButton.style.display = "block";


	console.log("Clicked image");
	
}

function shrinkImg(){

	body.style.background = "white";
	img.style.height = "400px";
	img.style.width = "600px";
	img.style.transition = "0.1s linear";
	const txt = document.querySelector("h1");
	txt.style.color = "black";
	
	exitButton.style.display = "none";
	
	console.log("Clicked body");
}
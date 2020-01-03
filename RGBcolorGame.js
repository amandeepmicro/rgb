//just initial stag coding here representing fixed 6 colors out 
//of which 1 is pickd randomly
// var colors = [
// 	"rgb(255, 0, 0)",
// 	"rgb(255, 255, 0)",
// 	"rgb(0, 255, 0)",
// 	"rgb(0, 255, 255)",
// 	"rgb(0, 0, 255)",
// 	"rgb(255, 0, 255)"
// ];
//fnction randomizer takes num as argumnet =
//how many random colors neeeded to be picked
var numberofsq=6;
var colors = generaterandomcolors(numberofsq);

var squares = document.querySelectorAll(".square");
//selecting all squares div from html to add event listener to them
//var pickedColor = colors[2];
//assuming taht the correct answer is fixed not random for now
//assigning a random value to pickedColor which 
//will be then displayed  instead of colorDisplay
var pickedColor = randomizer();
var colorDisplay = document.getElementById("colorDisplay");
//selecting the element inside span with given id 
var messagedisplay=document.querySelector("#message");
var h1=document.querySelector("h1")
//selecting the id to display message try again or correct 

//addding a reset button to resrt all colors
//and text display of picked color from randomizer
var reset =document.querySelector("#resetcolors");
//adding event listeneers to 2 buttons
var easybtn=document.querySelector("#easybtn");
var hardbtn=document.querySelector("#hardbtn");
//adding event listeners for easy and hard
easybtn.addEventListener("click",function(){
	//toggling bw the easy and hard buttons 
easybtn.classList.add("selected");
hardbtn.classList.remove("selected");
//need to add logic to actually inplement easy and hard
//rather than just hiding 3 colors which could also unable h1 colordisplay 
//or correct ansert could be one of the hidden color
//so we need to pick 3 colors generate
//pick 1 color out of them and display in h1
//update 3 sqaures and hide other 3 of them
numberofsq=3;
colors=generaterandomcolors(numberofsq);
pickedColor=randomizer();
colorDisplay.textContent=pickedColor;
//hiding 3 bottom colors by usin loop and display property
//sinc we generate only 3 colors array

for (var i=0;i<squares.length;i++){
	//checking condition if there is index no.or not
	if(colors[i]){
squares[i].style.backgroundColor=colors[i];
	}//else for other indexes display will be blocked
	else{
document.querySelectorAll(".square")[i].style.display="none";
	}
}

});
hardbtn.addEventListener("click",function(){
	hardbtn.classList.add("selected");
	easybtn.classList.remove("selected");
	//so we need to pick 6colors generate
//pick 1color out of them
//update 6 sqaures and unhide other 3 of them
numberofsq=6;
colors=generaterandomcolors(numberofsq);
pickedColor=randomizer();
colorDisplay.textContent=pickedColor;
//unhiding 3 colors
for (var i=0;i<squares.length;i++){
squares[i].style.backgroundColor=colors[i];
document.querySelectorAll(".square")[i].style.display="block";
}
});












reset.addEventListener("click",function(){
	//alert("clicked");
	//generate all new colors 
	//(when we click on new colors for easy mode we generate 6 colors instead of 3)
	//so to fix that we need new var which has fixd value of no.of sq
	//to be generated under each mode
	colors=generaterandomcolors(numberofsq);
	//pick a new random color to match with picked colorby user
	pickedColor=randomizer();
	//displaying ttherandomly picked color
	colorDisplay.textContent=pickedColor;
	messagedisplay.textContent="";
	this.textContent="New Colors";
	//change colorrs of the squares 
	//we need to use loop to reflect those 6 new colors e picked 
	for (var i=0;i<squares.length;i++){
		squares[i].style.backgroundColor=colors[i]
	}
	//changing the bg color of h1 back to black after clicking play agian
	h1.style.backgroundColor="steelblue";
})
colorDisplay.textContent = pickedColor;
//changing the rgb text to rgb (some hex code)
//changing color of ech sq. to the corrosponding color 
//in array by looping and assigning value
for(var i = 0; i < squares.length; i++){
	// add initial colors to squares
	//using for loop we assign each defined colors to each div respectively
	squares[i].style.backgroundColor = colors[i];
	//adding event listerner that fires only when user clicks on them
	//add click listeners to squares
	squares[i].addEventListener("click", function() {
		//grab color of clicked squares (hex code )
		var clickedColor = this.style.backgroundColor;
		//compare color to pickedColor
		//check if latter is true or not 
		console.log(clickedColor,pickedColor);
		if(clickedColor === pickedColor) {
			//alert("Correct!");
			//changing text to correct (messsage)
			messagedisplay.textContent="CORRECT!";
			//passing in the clickdcolor in changecolr function
			changecolor(clickedColor);
			h1.style.backgroundColor=pickedColor;
			//after winning we display if user wantto play again
			reset.textContent="Play Again?"
			
		} else {
			//just to check working
			//alert("WRONG!!!");
			//now we can instead change the color to body color
			//so that it fades out 
			this.style.backgroundColor="#232323";
			//(changing message)
			messagedisplay.textContent="Try Again!!"
		}	
		
	});
}
//functiona to change the color of each square div to
//the random set of colors of array we generated

function changecolor (color){
	//all colors change to match correct color
	//by loooping
	//takes 1 argument
	for (i=0;i<squares.length;i++){
		//changing each color to the color we provide  
		squares[i].style.backgroundColor=color;
	}
}
//function for picking a  index no bw 1 and 6 
// and the returnign the no. as and and element in the array colors 

function randomizer (){
	//picking a random index of array by this logic
	//logic-mathfloor gives whole no. 
	//math random gives any number bw 0-1 with many decimals
	//multiplying it with colors.length (6)will give no. frm 1-6
	var random = Math.floor(Math.random()*colors.length)
	//now passing the random value (index no. like 1,2,3) to color[randomvalue]
	return colors[random];
}
//function to generate random colors(argument),
//and return them in form of and array containing 6 elemnts(colors)
function generaterandomcolors(num){
	//making an array of num numbers of colors 
	//empty array
	var arr=[];
	//looping num-no. of  times to genetrate randmo color
	for (var i=0;i<num;i++)
	{
		//get random color on each iteration of function randomcolor 
		//and push intoarray
		arr.push(randomcolor());
	}
	//returning arr
	return arr;
}
//function to generate random string rgb(,,)containing
//randomly selected 3 hex codes 
//each time the func is called
function randomcolor(){
	//pick red green blue from 0-255 each 
	//genetrate a hex code for each color 
	//red
	var r = Math.floor(Math.random() * 256);
	//green
	var g = Math.floor(Math.random()*256);
	//blue
	var b = Math.floor(Math.random()*256);
	//rgb(random,random,random)
	//css automatically adds spaces inside the colors so we need to 
	//also add spaces in our generated array
	//space after commma ,
	//actually a bug 
	return "rgb(" + r + ", " + g + ", " + b + ")";
}


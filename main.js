var randomNumber1 = Math.floor(Math.random()*6)+1; //1-6

var randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1.png-dice6.png

var randomImageSource = "images/" + randomDiceImage; //images/dice1.png-images/dice6.png

var image1= document.querySelectorAll("img")[0]

image1.setAttribute("src",randomImageSource);   






var Dnumber=0;
 

function myFunction1() {
 Dnumber=1; 
 displayF();
}   




function myFunction2() {
 Dnumber=2; 
 displayF();
} 

function myFunction3() {
 Dnumber=3; 
 displayF();
}  

function myFunction4() {
 Dnumber=4; 
 displayF();
}  

function myFunction5() {
 Dnumber=5; 
 displayF();
}  

function myFunction6() {
 Dnumber=6; 
 displayF();
}  


function displayF(){   

document.querySelectorAll("p")[0].innerHTML="Selected Variable :" +Dnumber;



decrementSeconds();

setInterval(decrementSeconds, 1000); 
setTimeout(displayImage,4000);
changeNumber();

}
 
var score=0;




var seconds = 4;
var el = document.querySelectorAll("p")[2]; 
var ll=document.querySelectorAll("p")[3]; 
var sl=document.querySelectorAll("p")[1];


function changeNumber(){
	 seconds=4;
}



function decrementSeconds() {
   if(seconds>0) seconds -= 1;
    el.innerText = "The dice will change in  "+ seconds +"  seconds"; 
}

  function displayImage(){


var randomNumber2 = Math.floor(Math.random()*6)+1; //1-6

var randomDiceImage2 = "dice" + randomNumber2 + ".png"; //dice1.png-dice6.png

var randomImageSource2 = "images/" + randomDiceImage2; //images/dice1.png-images/dice6.png

var image1= document.querySelectorAll("img")[0]

image1.setAttribute("src",randomImageSource2); 

if(Dnumber===randomNumber2){
	ll.innerText = "Your Guess Was Right !";  
	score+=10; 
}
else ll.innerText = "Your Guess Was Wrong !"; 
sl.innerHTML="Score :" +"  "+score; 

  }
 
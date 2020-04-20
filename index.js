
//1st Image

var randomNumber1 = Math.floor(Math.random() * 6) + 1;//1-6 

var randomDiceImage = "dice"+randomNumber1+".png";//dice1.png - dice6.png

var randomImageSource = "images/" + randomDiceImage;//Images/dice1.png - Images/dice6.png

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);

//2nd Image

var randomNumer2 = Math.floor(Math.random() * 6) +1 ;

var randomImageSource2 ="images/"+"dice"+randomNumer2+".png";

var image2 = document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);


//if 1st Player wins
if (randomNumber1 > randomNumer2)
   {
   	document.querySelector("h1").innerHTML = "🚩 Player 1st Wins 🚩 ";
   }
//if 2nd Player wins
else if (randomNumber1 < randomNumer2)
   {
   	document.querySelector("h1").innerHTML = "🚩 Player 2nd Wins 🚩 ";
   }
//if draw happens 
else
   {
   	document.querySelector("h1").innerHTML = "🏁 It's Draw  🏁";
   }
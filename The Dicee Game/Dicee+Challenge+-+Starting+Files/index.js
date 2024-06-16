random_number1 = Math.floor(Math.random()*6+1)
random_number2 = Math.floor(Math.random()*6+1)
var button1 = document.querySelector(".img1");
var button2 = document.querySelector(".img2");
button1.setAttribute("src", "images/dice"+random_number1+".png")
button2.setAttribute('src', "images/dice"+random_number2+".png")

if (random_number1 > random_number2){
    document.querySelector("h1").innerHTML = "Player 1 Wins"
}else if(random_number1 === random_number2){
    document.querySelector("h1").innerHTML = "Draw!"
}else{
    document.querySelector("h1").innerHTML = "Player 2 Wins"
}
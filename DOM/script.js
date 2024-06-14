// properties 
    // innerHTML
    // style
    // firstChild
// methods
    // click()
    // appendChild()
    // setAttribute()
//
document.getElementsByTagName("li")[1].innerHTML = "Phuong";
document.getElementsByClassName("list")[2].innerHTMl = "DAVID";
document.getElementById("but").innerHTML = "Get Element by Id";
document.querySelector("#but");

// js can change font size or anything you can do with css
// example
document.querySelector("h1").style.fontSize = "10rem";
document.querySelector("h1").style.color = "blue";
document.querySelector("h1").style.padding = "10px";

// challenge
// change color to the button tag
document.querySelector("button").style.backgroundColor = "blue"; 

// use textcontent or innerHTML
document.querySelector("h1").textContent = "Change by textContent";

document.querySelector("h2").innerHTML = "<em>Change Font</em>"
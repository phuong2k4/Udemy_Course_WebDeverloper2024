// solution 1
// var sound = ["sounds/tom-1.mp3",'sounds/tom-2.mp3','sounds/tom-3.mp3','sounds/tom-4.mp3','sounds/snare.mp3','sounds/crash.mp3','sounds/kick-bass.mp3']

// for(var i =0;i<7;i++){
    // document.querySelectorAll(".drum")[i].addEventListener("click", function (event){
    //     // var NewAudio = new Audio(sounds[i])
    //     var keys = event.key
    //     var buttonInnerText  = this.innerHTML;
    //     makesound(buttonInnerText)
    //     buttonAnimation(buttonInnerText)
    //     // this.style.color = "white";
    // })
    document.addEventListener("keydown",function (event){
        makesound(event.key)
        buttonAnimation(event.key)
    })
// }

function makesound(key){
    switch(key){
        case "w":
            var Audio1 = new Audio("sounds/tom-1.mp3")
            Audio1.play()
            break
        case "a":
            var Audio2 = new Audio("sounds/tom-2.mp3")
            Audio2.play()
            break
        case "s":
            var Audio3 = new Audio("sounds/tom-3.mp3")
            Audio3.play()
            break  
        case "d":
            var Audio4 = new Audio("sounds/tom-4.mp3")
            Audio4.play()
            break
        case "j":
            var Audio5 = new Audio("sounds/snare.mp3")
            Audio5.play()
            break
        case "k":
            var Audio6 = new Audio("sounds/kick-bass.mp3")
            Audio6.play()
            break
        case "l":
            var Audio7 = new Audio("sounds/crash.mp3")
            Audio7.play()
            break    
        default:
            console.log(buttonInnerText)
    }
}

function buttonAnimation(key){
    var keyButton = document.querySelector("."+ key)
    keyButton.classList.add("pressed")
    setTimeout(function(){
        keyButton.classList.remove("pressed")
            },
        300
    )
}
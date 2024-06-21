// step 1

var gamePattern = []
var userClickedPattern =[]
var level = 0 
var game_on = false

$(document).on("keydown",function(){
    if (!game_on){
        nextSequence()
        $("h1").text("Lever "+ level)
        game_on = true
    }
})



$(".btn").on("click",function () {
    var userChosenColour = $(this).attr("id")
    userClickedPattern.push(userChosenColour)
    playSound(userChosenColour)
    animatePress(userChosenColour)
    checkAnswer(userClickedPattern.length-1)
})
function nextSequence(){
    userClickedPattern = []
    level++
    $("h1").text("Lever "+ level)
    randomNumber = Math.floor(Math.random()*4)
    buttonColour = ["red","blue","green","yellow"]
    randomChoosenColour = buttonColour[randomNumber]
    gamePattern.push(randomChoosenColour)
    $("#"+randomChoosenColour).fadeOut(100).fadeIn(100);
}

function playSound(name){
    var audio = new Audio("sounds/"+name+".mp3")
    audio.play()
}
function animatePress(button){
    $("#"+button).addClass("pressed")
    setTimeout(function(){
        $("#"+button).removeClass("pressed")
    },100)
}

function checkAnswer(currentLevel){
    if (userClickedPattern[currentLevel] === gamePattern[currentLevel]){
        console.log("success")
        if(gamePattern.length === userClickedPattern.length){
            setTimeout(function(){
                nextSequence()
            },1000)
        }
    }else{
        $("h1").text("Game Over, Press any key to restart")
        var audio = new Audio("sounds/wrong.mp3")
        audio.play()
        $("body").addClass("game-over")
        setTimeout(function(){
            $("body").removeClass("game-over")
        },200)
        startOver()
        console.log("wrong")
    }
}
function startOver(){
    level = 0
    gamePattern = []
    game_on = false
}
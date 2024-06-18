// step 1
$(document).ready(function(){
    var gamePattern = []
    var userClickedPattern = []
    var buttonColours = ["red","blue", "green", "yellow"]
    var lever = 0
    var start = false
    $("html").on("keydown",function(event){
        if(event.key==="a"){
            if(!start){
                $("#level-title").text("LEVER: "+lever)
                nextSequence()
                start=true
            }
        }
    })

        
    $(".btn").on("click",function(event){
        var userChoosenColour = $(this).attr("id")
        userClickedPattern.push(userChoosenColour)
        playSound(userChoosenColour)
        animatePress(userChoosenColour)
        checkAnswer(userClickedPattern.length-1)
    })


    function nextSequence(){
        userClickedPattern = []
        lever++
        $("#level-title").text("LEVER: "+lever)
        // random number 0,3
        var randomNumber = Math.floor(Math.random()*4)
        // random color in buttonColor use randomNumber
        var randomChoosenColour = buttonColours[randomNumber]
        animatePress(randomChoosenColour)
        // push randomColor in array gamePattern
        gamePattern.push(randomChoosenColour)
        // create animation to button use fade
        
    }
    function playSound(name){
        // play sound to button colour
        var audio = new Audio("sounds/"+name+".mp3")
        audio.play()
    }
    function animatePress(currentColour){
        $("#"+currentColour).addClass("pressed")
        setTimeout(function(){
            
            $("#"+currentColour).removeClass("pressed")
        },100)
    }
    function checkAnswer(currentLevel){
        if(gamePattern[currentLevel] === userClickedPattern[currentLevel]){
            console.log("success")
            if(gamePattern.length==userClickedPattern.length){
                setTimeout(function() {
                    nextSequence()
                }, 1000);
            }
        }else{
            var audio = new Audio("sounds/wrong.mp3")
            audio.play()
            $("body").addClass("game-over")
            setTimeout(function(){
                $("body").removeClass("game-over")
            },200)
            $("h1").text("Game Over, Press A to Restart")
            startOver()
            console.log("wrong")
        }
    }
    function startOver(){
        lever = 0
        start=false
        gamePattern=[]
    }
})



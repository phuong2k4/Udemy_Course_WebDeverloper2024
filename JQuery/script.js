// fact 
// $("nameEle") is all of the selector DOM below
// document.querySelector()
// document.querySelectorAll()
// document.getElementById()
// document.getElementByClassName


// use if we put script in tag head file html 
// $(document).ready(function(){
//     $("h1").css("color","yellow")
// })
// use if we put script below the tag body in file html
// $("h1").css("color","yellow")


// Add and remove class
$("h1").addClass("big-Title");
// $("h1").removeClass("big-Title")

// check element have a class
// console.log($("h1").hasClass("big-Title")) //true

// change text element  
// $("h1").text("Good life, Good try")
// change tag element 
$("button").html("<em>button</em>")
// change attribute
$("a").attr("href", "https://google.com")


// adding eventListener by jquery
color = ["red", "blue", "green", "purple","yellow"]
rand = Math.floor(Math.random() * 5)
$("button").click(function(){
    for(var i = 0;i<4;i++){
        $("h1").css("color", color[rand])
    }
})

// challenge
$(document).keypress(function(){
    $("h1").text(event.key)
})

// mouseover , mouseout
$("h1").mouseover(function(){
    $("h1").css("color","pink")
})
$("h1").mouseout(function(){
    $("h1").css("color","red")
})

// before , after , prepend, append function
$("h1").before("<button>Before()</button>")
$("h1").after("<button>After()</button>")
$("h1").prepend("<button>Prepend()</button>")
$("h1").append("<button>Append()</button>")
// use remove to remove all of |

// hide() && show()
// $("button").click(function (){
//   $("h1").toggle()
// })

// toggle (hide,show)
// $("button").on("click",function () {
//     $("h1").toggle()
// })

// fadeOut fadeIn fadeToggle
// $("button").on("click", function (){
//     // $("h1").fadeOut()
//     // $("h1").fadeIn()
//     $("h1").fadeToggle()
// })

// slideUp , slideDown
// $("button").on("click",function (){
//     // $("h1").slideToggle()
//     $("h1").slideUp()
//     $("h1").slideDown()
// }
// )

// animate

$("button").on("click",function (){
    // $("h1").animate({opacity: 0.5})
    // $("h1").animate({margin: "20px"})
    
})
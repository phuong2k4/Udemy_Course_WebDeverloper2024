// addEventListener ("event",function)
//example
// var button = addEventListener("click",function (){
//     console.log("Has cliked")
// })

// High order Function
function add(n,m){
    return n + m;
}
function minus(n,m){
    return n * m;
}
function HighOrder(n,m,functionTotalA,functionTotalM){
    return functionTotalA(n,m) + functionTotalM(n,m);
}

console.log(HighOrder(2,3,add,minus));


// object in javascript
var boss = {
    "name": "David",
    "age": 21,
    "job": "Programmer",
    "language": ["english", "vietnam"]
}

console.log(boss)

// constructor function
function constructor(name, age, job, lang){
    this.firstName = name;
    this.age = age;
    this.job = job;
    this.lang = lang;
}
//create new object
var newBoy = new constructor("david", 21,"programmer","vietnam");
console.log(newBoy)

// method
var number = {
    n: 14,
    m: 3,
    sum: function(){
        console.log(".")
    }
}
number.sum()


// challenge
function houseKeeper(year, name, clearning){
    this.year = year;
    this.name = name;
    this.clearning = clearning;
    this.clean = function (){
        console.log("This " + clearning + " had cleaning!")
    }
}

var house = new houseKeeper(2002,"david","bedroom") 
house.clean()

function addEvent(typeOfEvent, callback){
    var event = { 
        eventType: "pushKey",
        key:"z",
        durationKeyPush: 2
    }

    if(event.eventType === typeOfEvent){
        callback(event);
    }
}

addEvent("pushKey", function (event){
    console.log(event)
})



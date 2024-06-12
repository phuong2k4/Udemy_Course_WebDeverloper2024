// variables in javascript
var number = 123
var string = "123"
var boolean = true
var null_operater = null

// type of javascript

console.log(typeof number)
console.log(typeof string)
console.log(typeof boolean)
console.log(typeof null_operater)

var len_string = "david"
console.log(len_string.length)


// challenge 1 //
var user_typing = prompt("Enter your string: ")
var char_limit = 222
alert("you have written " + user_typing.length + " characters. You have " + char_limit-user_typing.length + "characters left") 


// slice function
var slice_function = "David"
// console.log(slice_function.slice(0,3))
if (slice_function.length > 3){
    slice_function = slice_function.slice(3, slice_function.length)
}
console.log(slice_function)


// challenge 2 // 
var chuoi_typing = prompt("Enter your string: ")
var chuoi_limit = chuoi_typing.slice(0,140)
alert(chuoi_limit)


// to uppercase and tolowercase
var uppercase_string = "david"
console.log(uppercase_string.toUpperCase())
var lowercase_string = "JONNES"
console.log(lowercase_string.toLowerCase())


// challenge 3 //
var chuoi_typing = "david"
var chuoi_upper = chuoi_typing.slice(0,1).toUpperCase() + chuoi_typing.slice(1)
console.log(chuoi_upper)


// operator
var add = 2+3 // = 4
var abstract = 3-2 // = 1
var minus = 3*2 // = 6
var divice = 3/2 // = 1
var modulo = 3%2 // = 1 R:1


// challenge 4 //
var dogAge = 2
var humanAge = (dogAge - 2) * 4 + 21
console.log(humanAge)


// function in javascript 
function getMilk(bottles){
    bottles = bottles / 1.5
    // console.log(Math.floor(bottles))
    return Math.floor(bottles)
}

function getMoneyChange(money_have, moneyPerBottle){
    var bottles = money_have / moneyPerBottle
    console.log(Math.floor(bottles) + " bottles of water.")
    return Math.floor(money_have%moneyPerBottle) + "$"
}
console.log(getMoneyChange(10,1.5))


// challenge 5 //
function lifeInWeeks(age){
    var days_have = (90 * 365) - (age * 365)
    var weeks_have = (90*52) - (age * 52)
    var months_have = (90 * 12) - (age * 12)
    console.log("You have " + days_have + " days, " + weeks_have + " weeks, " + months_have + " months left")
}
lifeInWeeks(21)


// challenge 6 //
weight = prompt("What is your weight? ")
height = prompt("What's your height? ")
function calculator_BMI(weight, height){
    BMI = weight / Math.pow(height,2)
    return Math.floor(BMI)
}
alert("There is your BMI " + calculator_BMI(weight, height))
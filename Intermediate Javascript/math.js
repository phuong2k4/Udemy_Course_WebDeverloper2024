// intermediate 
// math
var number = Math.random()
console.log(Math.floor(number * 6))

// challenge 1
/*
var name1 = prompt("Girl name: ")
var name2 = prompt("Man name: ")
point = Math.random() * 100
alert(name1 + " and " + name2 + " got " +  Math.floor(point) + "%")
*/

// if else statement
/*
    if (condition1){
        // do something
    }else{
        // do something else
    }
*/


// example
var name_1 = "Angela"
var name_2 = "Jack"
var point = Math.random() * 100
if(point >=70){
    console.log("Great couple, " + Math.floor(point) + "%")
}else{
    console.log("Bad couple, " + Math.floor(point) + "%")
}

// and or statement : && ||
// example
if(point >=70){
    console.log("Couple")
}
else if (point <=70 && point >= 60){
    console.log("Great")
}else if (point <=60 && point >=50){
    console.log("Nice")
}else if(point <=50 || point == 0){
    console.log("Bad")
}

// bai tap coding
function bmiCalculator (weight, height) {
    var bmi = Math.floor(weight / Math.pow(height,2))
    var interpretation = ""
    if (bmi < 18.5){
        interpretation = "Your BMI is " + bmi + " so you are underweight."
    }
    else if(bmi>=18.5 && bmi <=24.9){
        interpretation = "Your BMI is " + bmi + ", so you have a normal weight."
    }
    else{
        interpretation = "Your BMI is " + bmi + ", so you are overweight."
    }
    return interpretation
}
bmiCalculator(51,1.7)


// bai tap coding  
function isleap(year){
    if (year%4==0){
        if (year%100==0){
            if(year%400==0){
                return ("Leap year.")
            }
            return ("Not leap year.")
        }else{
            return ("Leap year.")
        }
    }else{
        return ("Not leap year.")
    }
}

isleap(2000)

// array in javascript
var array = ["David", "Jack", "Jason"]
console.log(array) // Prototype : array
console.log(array[0]) // Access by index of element

// var includeName = prompt("Whats name you want to include array?")
// if (array.includes(includeName)){
//     alert("Hi " + {includeName})
// }else{
//     alert("Maybe next time you come here!")
// }


// challenge fizzbuzz and push function
// var array = [];
// function fizzBuzz(n){
//     for(var i =1;i<=n;i++){
//         if(i%3==0&&i%5==0){
//             array.push(i)
//             console.log("FizzBuzz")
//         }
//         else if(i%3==0){
//             array.push(i)
//             console.log("Fizz")
//         }else if(i%5==0){
//             array.push(i)
//             console.log("Buzz")
//         }
//         else{
//             console.log(i)
//         }
//     }
// }
// fizzBuzz(100)

// console.log(array)

// bai tap coding 
function whoPaying(names){
    var randomPerson = Math.floor(Math.random() * 5);
    return (names[randomPerson] + " is going to buy lunch today! ")

}

array1 = ["Angela", "Ben", "Jenny", "Michael", "Chloe"]
whoPaying(array1)


// while loop in javascript
// var i = 0;
// while(i<=2){
//     console.log(i);
//     i++;
// }


// challenge
function beer(){
    var times = 99;
    while(times>=0){
        if (times === 0){
            console.log("No more bottles of beer on the wall, no more bottles of beer.")
            console.log("Go to the store and buy some more, 99 bottles of beer on the wall.")
        }
        else{
            console.log(times + " bottles of beer on the wall, " + times + " bottles of beer. ")
            console.log("Take one down and pass it arround, "+ times + " bottles of beer on the wall. ")
        }
        times--;
    }
}

// bai tap coding 
// fibonacci

function fibonacciGenerator(n){
    var output = [];
    if(n===1){
        output = [0];
    }else if(n===2){
        output=[0,1];
    }else{
        output = [0,1];
        for(var i = 2;i<n;i++){
            output.push( output[i-1] + output[i-2])
        }
    }
    return output
}
console.log(fibonacciGenerator(11))

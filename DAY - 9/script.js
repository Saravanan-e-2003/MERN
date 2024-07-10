/* 
//grade system
let grade = prompt("Your grade");

if(grade >= 80 && grade <= 100){
    console.log("A");
}else if(grade >= 70 && grade < 90){
    console.log("B");
}else if(grade >= 60 && grade < 70){
    console.log("C");
}else if(grade >= 50 && grade < 60){
    console.log("D")
}else if(grade < 50){
    console.log("F");
}
    

//odd or even
let num = prompt("Get number");

if(num%2 == 0){
    console.log("even");
}else{
    console.log("odd");
}

let n = 1;
while(n <= 100){
    if(n%2 == 0){
        console.log(n);
    }
    n++;
}
*/

let x = Math.floor((Math.random() * 10) + 1)
let n = 0;


n = prompt("Make a guess from 1 to 10")
while(n != x){
    if(n > x){
        n = prompt("Wrong! The number you guessed is larger")
    }else if(n < x){
        n = prompt("Wrong! The number you guessed is smaller")
    }
}

console.log("Gussed correctly",x)

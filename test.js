// Please write your code directly below the corresponding numbers.
// #1
var fullName = "Linus Torvalds";
var birthYear = 1969;

// #2
var myArray = [];

// #3
myArray.push(fullName,birthYear);
console.log(myArray);

// #4
var splitName = fullName.split(" ");
console.log(splitName);

// #5
function sayHello(){
  console.log("Hello, "+splitName[0]+"!");
}
sayHello();

// #6
function calcAge(year) {
  return year - birthYear;
}
console.log(calcAge(2017));

// #7
function sumOddNumbers() {
    var sum = 0;

    // Your code here
    for(var x = 0; x < 5000; x++){
      if(x % 2 > 0){
        sum = sum + x;
        //console.log(sum);
      }
    }
    //console.log(sum);
    return sum;
}
console.log(sumOddNumbers());

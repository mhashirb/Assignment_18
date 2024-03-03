
//Chapter 9-11
// Question 1
// var cityName=prompt("Enter the name of your city");
// if(cityName=="karachi"){
//     alert("Welcome to the city of lights");
// }

// Question 2
// var Gender=prompt("Enter your gender");
// if(Gender=="Male"){
//     alert("Good Morning Sir.");
// }
// else if(Gender=="Female"){
//     alert("Good Morning Ma'am");
// }
// else{
//     alert("Invalid input");
// }

// Question 3
// var color=prompt("Enter any one traffic signal color");
// if(color=="Red"){
//     alert("Must Stop");
// }
// else if(color=="Yellow"){
//     alert("Ready to move");
// }
// else if(color=="Green"){
//     alert("Move Now");
// }
// else{
//     alert("You have entered a wrong color");
// }

// Question 4
// var x=+prompt("Enter the remaining fuel of the car");
// if(x<=0.25){
//     alert("Please Refill the fuel of your car");
// }

// Question 5
//a
// var a=4;
// if(++a===5){
//     alert("Given condition for the variable is true");
// }
//b
// var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }
//c
// var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }
//d
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }
//e
// if (true){
//     alert("True");
//     }
// if (false){
//     alert("False");
//     }
//f
// if("car" < "cat"){
//         alert("car is smaller than cat");
// }

// Question 6
// var totalMarks=300;
// var marksObtained=+prompt("Enter the marks obtained ");
// if(marksObtained<=totalMarks && marksObtained>=0){
//     document.write("Total Marks: "+totalMarks+"<br>Marks Obtained: "+marksObtained);
//     var percentage=(marksObtained/totalMarks)*100;
//     document.write("<br>Percentage: "+percentage+"%");
//     if(percentage>=80){
//         document.write("<br>Grade: A-One <br>Remarks: Excellent");
//     }
//     else if(percentage>=70 && percentage<80){
//         document.write("<br>Grade: A <br>Remarks: Good");
//     }
//     else if(percentage>=60 && percentage<70){
//         document.write("<br>Grade: B <br>Remarks: You need to improve");
//     }
//     else if(percentage>=70 && percentage<80){
//         document.write("<br>Grade: Fail <br>Remarks: Sorry");
//     }
// }
// else{
//     alert("You have entered marks greater than total marks or marks less than zero");
// }

// Question 7
// var secretNumber=7;
// var guessNumber=+prompt("Guess the secret number from 1-10:");
// if(guessNumber<=10 && guessNumber>=0){
// if(guessNumber===secretNumber){
//     alert("Bingo! Correct Answer");
// }
// else if(++guessNumber===secretNumber || --guessNumber===secretNumber){
//     alert("Closed enough to the correct answer");
// }
// else{
//     alert("you Failed to guess");
// }
// }
// else{
//     alert("You have entered a number greater than 10 or less than zero")
// }

// Question 8
// var number=+prompt("Enter the Number which is divisible by 3");
// if(number%3==0){
//     alert("The number is divisible by 3");
// }
// else{
//     alert("The number is not divisible by 3");
// }

// Question 9
// var number=+prompt("Enter the number to check if the number is even or not");
// if(number%2==0){
//     alert("The number is even");
// }
// else{
//     alert("The number is odd");
// }

// Question 10
// var temperature=+prompt("Enter the temperature");
// if(temperature>=40 && temperature<=50){
//     alert("It is too hot outside");
// }
// else if(temperature>=30 && temperature<40){
//     alert("The weather today is normal");
// }
// else if(temperature>=20 && temperature<30){
//     alert("Today weather is cool");
// }
// else if(temperature>=10 && temperature<20){
//     alert("OMG The weather is so cool today");
// }
// else{
//     alert("the temperature value is exceeding the limit");
// }

// Question 11
// var firstNumber=+prompt("Enter first number");
// var secondNumber=+prompt("Enter second number");
// var operation=prompt("Enter operator for '+' '-' '/' 'x' '%'");
// if(operation=='+'){
//     document.write("The sum of first and second number is: "+(firstNumber+secondNumber));
// }
// else if(operation=='-'){
//     document.write("The Subtraction of first and second number is: "+(firstNumber-secondNumber));
// }
// else if(operation=='/'){
//     document.write("The Division of first and second number is: "+(firstNumber/secondNumber));
// }
// else if(operation=='x'){
//     document.write("The Multiplication of first and second number is: "+(firstNumber*secondNumber));
// }
// else if(operation=='%'){
//     document.write("The Remainder of first and second number is: "+(firstNumber%secondNumber));
// }
// else{
//     document.write("You have entered wrong operator or number or alphabet");
// }

// Chapter 12-13
// Question 1
// var ascii=+prompt("Enter the ascii value to check whether the number is Upper case ,Lower case or number");
// if(ascii>=65 && ascii<=90){
//     alert("Upper Case Alphabets");
// }
// else if(ascii>=97 && ascii<=122){
//     alert("Lower Case Alphabets");
// }
// else if(ascii>=48 && ascii<=57){
//     alert("Number");
// }
// else{
//     alert("the value is not for uppercase,lowercase or numbers");
// }

// Question 2
// var num1=+prompt("Enter first number");
// var num2=+prompt("Enter second number");
// if(num1>num2){
//     document.write("The larger number is: "+num1);
// }
// else if(num2>num1){
//     document.write("The larger number is: "+num2);
// }
// else{
//     document.write("Both the numbers are same");
// }

// Question 3
// var number=+prompt("Enter a number");
// if(number>0){
//     alert("The number is positive");
// }
// else if(number<0){
//     alert("The number is negative");
// }
// else{
//     alert("The number is zero");
// }

// Question 4
// var vowel=prompt("Enter a character");
//     if(vowel=='a' || vowel=='e' || vowel=='i' || vowel=='o' || vowel=='u'){
//         alert("The character is Vowel");
//     }
//     else{
//         alert("The character is not a vowel");
//     }

//Question 5
// var correctPassword="987gsh543";
// var password=prompt("Enter password");
//     if(password==correctPassword){
//         alert("Correct the password you entered matches the original password");
//     }
//     else{
//         alert("Incorrect password");
//     }

//Question 6
// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting="Good day";
// alert(""+greeting);
// }
// else{
//     greeting="Good evening";
// alert(""+greeting);
// }

// Question 7
// var time=+prompt("Enter the time in 24 hours format");
// var number;
// if(time<=24 && time>=1){
//     if(time>12 && time<=23){
//         alert(""+time+" = "+(time-12)+" PM");
//     }
//     else if(time==12){
//         alert(""+time+" = "+time+" PM");
//     }
//     else if(time==24){
//         alert(""+time+" = "+(time-12)+" AM");
//     }
//     else{
//         alert(""+time+" = "+time+" AM");
//     }
// }
// else{
//     alert("You have entered a number greater than 24 or less than 0 or 0");
// }

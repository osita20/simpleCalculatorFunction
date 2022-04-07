
var operator = prompt('Enter operator ( either +, -, * or / ): ');
var firstNumber = prompt("enter firstNumber");
var secondNumber = prompt("enter secondNumber");
 if (operator === "+"){
     result = Number(firstNumber) +
     Number(secondNumber);
     alert("The answer is " + result);
 }
 else if(operator === "-"){
    result = Number(firstNumber) -
    Number(secondNumber);
    alert("The answer is " + result);
}
else if(operator === "/"){
    result = Number(firstNumber) /
     Number(secondNumber);
    alert("The answer is " + result);
}
else if(operator === "*"){
    result = Number(firstNumber) *
     Number(secondNumber);
    alert("The answer is " + result);
}
else{
    alert("Wrong input!!!");
}
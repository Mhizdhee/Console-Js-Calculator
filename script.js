let num1 = parseFloat(prompt('Enter First Number:'));

let Operator = prompt('Enter choice: +, -, /, *, %, ^');
let num2 = parseFloat(prompt('Enter Second Number:'));

let result = 0;
if(isNaN(num1) || isNaN(num2)){
    alert('Invalid Input! Refresh and provide Correct input')
}else 
    if(Operator== '+'){
        result = num1 + num2;
    }else if(Operator == '-'){
        result = num1 - num2;
    }else if(Operator == '/'){
        result = num1 / num2;
    }else if(Operator == '*'){
        result = num1 * num2;
    }

    alert(num1+Operator+num2+'=' + result);



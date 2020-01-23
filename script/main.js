(function() {
  'use strict';
  //
  // function myMath(a, b) {
  // let $equals = document.querySelector('button.equals');
  // $equals.addEventListener('click', function) => {
  //   expression.includes()
  // }
  let result;
  let expression = [];
  let $output = document.querySelector('span.output');
  let $numbers = document.querySelectorAll('button.num');
  let $equals = document.querySelector('button.equals');

  for (let i = 0; i < $numbers.length; i++) {

    $numbers[i].addEventListener('click', (event) => {
      expression.push(event.target.value);
      $output.append(event.target.value);
    })
  }

  let $operators = document.querySelectorAll("button.operator");
  for (let i = 0; i < $operators.length; i++) {
    $operators[i].addEventListener('click', (event) => {
      $output.textContent = "";
      expression.push(event.target.value);
    })
  }

  let calculate = () => {
    let num1 = Number(expression.splice(0, 2).join(''));
    let num2 = Number(expression.splice(0, -2).join(''));
    // how to check if an array contains a specific character
    let result;
    if (expression.includes('+')) {
      expression.splice(1, 1);
      result = num1 + num2;
    } else if (expression.includes('-')) {
      expression.splice(1, 1);
      result = num1 - num2;
    } else if (expression.includes('/')) {
      expression.splice(1, 1);
      result = num1 / num2;
    } else(expression.includes('*'));
    expression.splice(1, 1);
    result = num1 * num2;
    $output.textContent = (`${result}`);
    console.log();
  } //keeps giving me NaN, maybe due to textContent, maybe due to variable "result"
  //maybe due to operator being in array?


  $equals.addEventListener('click', calculate);









})();

// function equal() =

// }

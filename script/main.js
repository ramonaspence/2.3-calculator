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

  for (let i = 0; i < $numbers.length; i++) {
    $numbers[i].addEventListener('click', (event) => {
      expression.push(event.target.value);
      $output.textContent = (event.target.value);

    })

}




let calculate = () => {
  console.log('expression', expression);
  // how to check if an array contains a specific character
  if (expression.includes('+')) {
    // do addition
  } else if (expression.includes('-')) {
    // do subtraction
  } else if (expression.includes('/')) {
    // do multiplication
  } else if (expression.includes('*')) {
    // do division
  }
}

  let $equals = document.querySelector('button.equals');
  $equals.addEventListener('click', calculate);



  let $operators = document.querySelectorAll("button.operator");
  for (let i = 0; i < $operators.length; i++) {
    $operators[i].addEventListener('click', (event) => {
      console.log(event.target.value);
      expression.push(event.target.value);
    })

  }












})();

  // function equal() =

  // }

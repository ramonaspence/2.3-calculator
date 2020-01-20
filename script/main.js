(function() {
  'use strict';

  function myMath(a, b) => {
    let expression = [];
    let $equals = document.querySelectorAll("button.equals");
    if 
    $equals.addEventListener('click', (event) => {

    })


    let $output = document.querySelector('span.output');

    let $numbers = document.querySelectorAll("button.num");
    for (let i = 0; i < $numbers.length; i++) {
      $numbers[i].addEventListener('click', (event) => {
        console.log(event.target.value);
        expression.push(event.target.value);

      })
    }
    let $operators = document.querySelectorAll("button.operator");
    for (let i = 0; i < $operators.length; i++) {
      $operators[i].addEventListener('click', (event) => {
        console.log(expression);
        expression.push(event.target.value);
      })
    }
  }
})();

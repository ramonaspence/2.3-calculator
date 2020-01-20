(function() {
  'use strict';

let $output = document.querySelector('span.output');
let expression = [];
let $numbers = document.querySelectorAll("button.num");
let $operators = document.querySelectorAll("button.operator");
let $equals = document.querySelectorAll("button.equals")
// let val = numbers.values(); // this element contains more than 1 DOMs.
// for (let i = 0; i < numbers.length; i++) {
//   numbers[i].onclick = function() {
//     $output.append(this.value);
//     expression.push(this.value);
//
//   };
// }
for (let i = 0; i < $numbers.length; i++) {
  $numbers[i].addEventListener('click', (event) => {
    console.log(event.target.value);
    expression.push(event.target.value);

  })
}

for (let i = 0; i < $operators.length; i++) {
  $operators[i].addEventListener('click', (event) => {
    console.log(event.target.value);
    expression.push(event.target.value);
  })
}



        // let operators = document.querySelectorAll("button.operator");
        // // let act = operators.values();
        // for (let i = 0; i < operators.length; i++) {
        //   operators[i].onclick = function() {
        //     $output.append(this.value);
            //this outputs the operator visually in the output section.
            //I want it to highlight the operator button, and start a math expression



        //NOW I've created an array named "expression" wherein each number and operator clicked is added to the array.
        //Once the "expression" is the array expression, I can do what I need to do to get the math done.
        //For now I think this is a great start


        //I want a function that adds the value of a number button clicked to the output as well as
        //to an expression until a operator button is clicked. Op Button onClick adds the operator to the expression
        //start over with numbers, and upon clicking equals it outputs the result on the screen as well as "return"
        // let n1 = "";
        // let n2 = "";
        // let op1 = "";
        //
        // if ($output !== operators) {
        //   n1 = n1.concat($output);
        // } else if ($output !== operators) {
        //   n2 = n2.concat($output);
        // } else if ($output == operators) {
        //   op1 = op1.concat($output);
        //
})();

// let $buttons = document.querySelectorAll('button');
//
// let pushNumber = (event) => {
//   console.log('yesss');
// }
//
// for (let i = 0; i <= $buttons.length; i = i++) {
//   $buttons[i].addEventListener('click', pushNumber);
// }

let $numbers = document.querySelectorAll('button.num');
let $output = document.querySelector('span.output');

let pushNumber = () => {
  //what actually makes up a function?
  window.alert(`You pressed the number ${'click'.$buttons.value}`);

}

// let val = document.querySelectorAll('button.num[value=""]');
let el = document.querySelectorAll("button.num");
let val = el.values(); // this element contains more than 1 DOMs.
for (let i = 0; i < el.length; i++) {
  el[i].onclick = function() {
    console.log(this.value);//I've got this console.logging the element and value ie"<button class="num" value=""></button>"
    $output.textContent = (this.value);//I want to change the text in the output span to match the value of the button clicked
  };
}
//I need to make this console.log the NUMBER that you click.
//so how can I reference that specific button with that specific value?


// for (i = 0; i < $numbers[i]; i + 1) {
//   $numbers[0].addEventListener('click', pushNumber);
// }

// $numbers = pushNumber();

// $numbers.addEventListener(click, event-listener);

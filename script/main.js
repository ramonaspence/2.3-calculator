
let $output = document.querySelector('span.output');

let pushNumber = () => {
  //what actually makes up a function?
  window.alert(`You pressed the number ${'click'.$buttons.value}`);

}

let button = document.querySelectorAll("button.num");
let val = button.values(); // this element contains more than 1 DOMs.
for (let i = 0; i < button.length; i++) {
  button[i].onclick = function() {
    $output.textContent = (this.value);
  };
}

let op = document.querySelectorAll("button.operator");
let act = op.values();
for (let i = 0; i < op.length; i++) {
  op[i].onclick = function() {
    $output.textContent = (this.value);
  }
}

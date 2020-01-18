let $buttons = document.querySelectorAll('button');

let pushNumber = (event) => {
  console.log(`You pressed ${document.querySelector('span')}`);
}

for(let i = 0; i < $buttons.length; i = i ++) {
  $buttons[i].addEventListener('click', pushNumber);
}

const counter = document.querySelector('#counter');
const button = document.querySelector('#button');

let count = 0;

button.addEventListener('click', () => {
  count++

  counter.innerText = count;
})
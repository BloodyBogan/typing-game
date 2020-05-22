const input = document.querySelector('.input');
const output = document.querySelector('.output');

input.addEventListener('keyup', () => {
  output.innerText = input.value;
});

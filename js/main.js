const input = document.querySelector('.input');
const output = document.querySelector('.output');
const word = document.querySelector('.word');

let words = ['custom', 'padding', 'margin', 'background'];

function generateRandomWord(arr) {
  let randomWord = arr[Math.floor(Math.random() * arr.length)];

  return randomWord;
}

word.innerText = generateRandomWord(words);

input.addEventListener('keyup', () => {
  if (input.value === '') {
    output.style.setProperty('--display', 'none');
    output.style.setProperty('--cursor-animation', 'none');
    output.innerText = '';
  } else {
    output.style.setProperty('--display', 'inline-block');
    output.style.setProperty(
      '--cursor-animation',
      'cursor 700ms ease-in-out infinite'
    );
  }

  output.innerText = input.value;

  if (input.value === word.innerText) {
    word.innerText = generateRandomWord(words);
    input.value = '';
    output.innerText = '';
    output.style.setProperty('--display', 'none');
    output.style.setProperty('--cursor-animation', 'none');
  }
});

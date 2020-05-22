const input = document.querySelector('.input');
const output = document.querySelector('.output');

input.addEventListener('keyup', () => {
  if (input.value === '') {
    output.style.setProperty('--display', 'none');
    output.style.setProperty('--cursor-animation', 'none');
  } else {
    output.style.setProperty('--display', 'inline-block');
    output.style.setProperty(
      '--cursor-animation',
      'cursor 700ms ease-in-out infinite'
    );
  }

  output.innerText = input.value;
});

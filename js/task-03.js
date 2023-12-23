const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

nameInput.addEventListener('input', () => {
  const text = nameInput.value.trim();

  if (text === '') {
    nameOutput.textContent = 'Anonymous';
  } else {
    nameOutput.textContent = text;
  }
});
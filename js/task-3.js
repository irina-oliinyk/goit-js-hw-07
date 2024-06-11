const nameInput = document.getElementById('name-input');
const nameOutput = document.getElementById('name-output');

nameInput.addEventListener('input', function (event) {
  let nameUser = nameInput.value.trim();
  if (nameUser === '') {
    nameOutput.textContent = 'Anonymous';
  } else {
    nameOutput.textContent = nameUser;
  }
});

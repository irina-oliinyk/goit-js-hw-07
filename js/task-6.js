function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// фунцкція для створення елементів
//  Невірно бо єлементи додаються не за один раз,
// а по одному, бо додавання виконується у циклі for,
// а не після нього.
// function createBoxes(amount) {
//   const boxesDiv = document.getElementById('boxes');

//   for (let i = 0; i < amount; i++) {
//     const box = document.createElement('div');
//     box.style.width = 30 + i * 10 + 'px';
//     box.style.height = 30 + i * 10 + 'px';
//     box.style.borderRadius = 50 + 'px';
//     box.style.backgroundColor = getRandomHexColor();
//     boxesDiv.appendChild(box);
//   }
// }

function createBoxes(amount) {
  const boxesDiv = document.getElementById('boxes');
  const fragment = document.createDocumentFragment();

  // счетчик
  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    const size = 30 + i * 10;
    box.style.cssText = `width: ${size}px; height: ${size}px; border-radius: 5px; background-color: ${getRandomHexColor()};`;
    fragment.appendChild(box);
  }

  boxesDiv.appendChild(fragment);
}

// очищення
function destroyBoxes() {
  const boxesDiv = document.getElementById('boxes');
  boxesDiv.innerHTML = '';
}
// посилання на кнопки і інпут
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const input = document.querySelector('input');

// Додаємо обробник події для кнопки Create
createBtn.addEventListener('click', () => {
  const amount = Number(input.value);

  if (amount >= 1 && amount <= 100) {
    document.getElementById('boxes').innerHTML = '';
    createBoxes(amount);
    input.value = '';
  } else {
    alert('Please enter a number between 1 and 100.');
  }
});

// Додаємо обробник події для кнопки Destroy
destroyBtn.addEventListener('click', () => {
  destroyBoxes();
});

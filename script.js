const btn = document.querySelector('.btn');
const btn2 = document.querySelector('.btn--hidden');
const myDice = document.querySelector('.dice1');
const yourDice = document.querySelector('.dice2');
const h1 = document.querySelector('h1');
const h2 = document.querySelector('h2');
const container = document.querySelector('.container');

let originalContent = {
  h1: h1.innerHTML,
  h2: h2.innerHTML,
};

btn.addEventListener('click', generatePips);
btn2.addEventListener('click', () => {
  document.body.style.backgroundImage = "url('./images/hallo-bg.jpg')";
  h1.innerHTML = originalContent.h1;
  h1.style.color = '#000';
  h2.innerHTML = originalContent.h2;
  btn.style.display = 'block';
  btn2.style.display = 'none';
});

function generatePips() {
  let randomNumber1 = Math.floor(Math.random() * 6) + 1;
  let randomNumber2 = Math.floor(Math.random() * 6) + 1;

  let myPips = '';
  let yourPips = '';

  for (let i = 0; i < randomNumber1; i++) {
    myPips += '<span class="pip"></span>';
  }

  for (let i = 0; i < randomNumber2; i++) {
    yourPips += '<span class="pip"></span>';
  }

  myDice.innerHTML = myPips;
  yourDice.innerHTML = yourPips;

  if (randomNumber1 === randomNumber2) {
    h1.innerHTML = 'Plichta!';
    h1.style.color = '#000';
    h2.innerHTML = '';
  } else if (randomNumber1 > randomNumber2) {
    h1.innerHTML = 'Tentokrát jsi vyhrál...';
    h1.style.color = '#000';
    h2.innerHTML = 'Chceš to zkusit znovu?';
  } else {
    document.body.style.backgroundImage = "url('./images/game-over.jpg')";
    h1.innerHTML = 'Prohrál jsi! HA! HA! HA!';
    h1.style.color = '#FFCBA8';
    h2.innerHTML = '';
    btn.style.display = 'none';
    btn2.style.display = 'block';
  }
}

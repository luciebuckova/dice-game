const btn = document.querySelector('.btn');
const btn2 = document.querySelector('.btn--hidden');
const myDice = document.querySelector('.dice1');
const yourDice = document.querySelector('.dice2');
const mainHeading = document.querySelector('.main-heading');
const subheading = document.querySelector('.subheading');
const container = document.querySelector('.container');

let originalContent = {
  h1: mainHeading.innerHTML,
  h2: subheading.innerHTML,
};

btn.addEventListener('click', generatePips);
btn2.addEventListener('click', () => {
  document.body.style.backgroundImage = "url('./images/hallo-bg.jpg')";
  mainHeading.innerHTML = originalContent.h1;
  mainHeading.style.color = '#000';
  subheading.innerHTML = originalContent.h2;
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
    mainHeading.innerHTML = 'Plichta!';
    mainHeading.style.color = '#000';
    subheading.innerHTML = '';
  } else if (randomNumber1 > randomNumber2) {
    mainHeading.innerHTML = 'Tentokrát jsi vyhrál...';
    mainHeading.style.color = '#000';
    subheading.innerHTML = 'Chceš to zkusit znovu?';
  } else {
    document.body.style.backgroundImage = "url('./images/game-over.jpg')";
    mainHeading.innerHTML = 'Prohrál jsi! HA! HA! HA!';
    mainHeading.style.color = '#FFCBA8';
    subheading.innerHTML = '';
    btn.style.display = 'none';
    btn2.style.display = 'block';
  }
}

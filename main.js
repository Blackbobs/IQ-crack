const randomNumber = Math.floor(Math.random() * 10);
const input = document.querySelector('input');
const form = document.querySelector('form');
const answer = document.querySelector('.answer');
const btn = document.querySelector('button');
const game = document.querySelector('p');

setTimeout(() => game.classList.remove('game'), 3000);

form.addEventListener('submit', (e) => {
    e.preventDefault();

    let value = input.value;

    if (value === randomNumber) {
        answer.style.display = 'block';
        answer.style.background = '#0f0'
        answer.innerText = 'You guessed right';

        setTimeout(() => answer.style.display = 'none', 2000);
        setTimeout(() => input.value = '', 2000);


    } else {
        answer.style.display = 'block';
        answer.style.background = '#f00'
        answer.innerText = 'oops! you are wrong';

        setTimeout(() => answer.style.display = 'none', 2000);
        setTimeout(() => input.value = '', 2000);


    }
})
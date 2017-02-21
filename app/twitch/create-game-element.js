export default function createGameElement(game) {
 const el = document.createElement('div');
 el.classList.add('game-item');
 el.innerHTML = `
 <h3 class="title"></h3>
 <h4 class="views"></h4>
 <img class="photo">`;
 el.querySelector('.title').innerText = `${game.name}`;
 el.querySelector('.views').innerText = `${game.popularity} Viewers`;
 el.querySelector('.game').src = game.box.large;
 el.querySelector('.game').alt = game.name;

 return el;

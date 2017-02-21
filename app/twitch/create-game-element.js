export default function createGameElement(game) {
 const el = document.createElement('div');
 el.classList.add('game-item');
 el.innerHTML = `
 <h3 class="title game-item__name"></h3>
 <h4 class="views game-item__popularity"></h4>
 <img class="photo game-item__pic">`;
 el.querySelector('.game-item__name').innerText = `${game.name}`;
 el.querySelector('.game-item__popularity').innerText = `${game.popularity} Viewers`;
 el.querySelector('.game-item__pic').src = game.box.large;
 el.querySelector('.game-item__pic').alt = game.name;

 return el;
}

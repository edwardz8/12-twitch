export default function createGameItem(game) {
  const gameItem = document.createElement('div');

  gameItem.classList.add('game-item');

  const gameItemName = document.createElement('h3');

  gameItemName.classList.add('game-item__name');

  gameItem.appendChild(gameItemName);

  gameItemName.innerText = game.name;

  const gameItemPopularity = document.createElement('h4');

  gameItemPopularity.classList.add('game-item__popularity');

  gameItem.appendChild(gameItemPopularity);

  gameItemPopularity.innerText = game.popularity + ' Viewers';


  const gameItemPic = document.createElement('img');

  gameItemPic.classList.add('game-item__pic');

  gameItem.appendChild(gameItemPic);





  return gameItem;


}

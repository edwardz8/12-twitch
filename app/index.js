import 'whatwg-fetch';
import games from './data.js';
import addGamesToList from './twitch/add-games-to-list';
//import createGameElement from './twitch/create-game-element';

// Look up a `ul` element with a class called `results`
const ul = document.querySelector('.grid');
// Add games to the results list based on the data from `data.json`
addGamesToList(ul, games.top);

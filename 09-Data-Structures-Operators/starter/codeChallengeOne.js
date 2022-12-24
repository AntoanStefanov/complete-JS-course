'use strict';

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },

  printGoals: function (...playerNames) {
    console.log(`${playerNames.length} goals were scored!`);
  },
};

// console.log(game.players);
const [players1, players2] = game.players;
// console.log(players1);
// console.log(players2);

const [gk, ...fieldPlayers] = players1;
// console.log(gk);
// console.log(fieldPlayers);

const allPlayers = [...players1, ...players2];
console.log(allPlayers);

const substitudePlayers = ['Thiago', 'Coutinho', 'Perisic'];
const players1Final = [...players1, ...substitudePlayers];

// const {team1, x: draw, team2} = game.odds;
const {
  odds: {team1, x: draw, team2},
} = game;
console.log(team1, draw, team2);

game.printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
game.printGoals('Davies', 'Muller');
game.printGoals(...game.scored);

console.log(game.odds.team1 || game.odds.team2);

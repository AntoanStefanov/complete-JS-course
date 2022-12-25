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
};

for (const [index, playerName] of game.scored.entries()) {
  console.log(`Goal ${index + 1}: ${playerName}`);
}

let avgOdd = 0;
const odds = Object.values(game.odds);
for (const odd of odds) avgOdd += odd;
console.log((avgOdd /= odds.length));

let fullString = '';
for (const [key, value] of Object.entries(game.odds)) {
  // 1. Variant
  // let str;
  // if (key === 'x') {
  //   str = `Odd of draw: ${value}`;
  // } else {
  //   str = `Odd of victory ${game[key]}: ${value}`;
  // }

  // 2. Variant
  // const str =
  //   key === 'x'
  //     ? `Odd of draw: ${value}`
  //     : `Odd of victory ${game[key]}: ${value}`;

  // 3. Variant
  const teamStr = key === 'x' ? 'draw' : game[key];
  const str = `Odd of victory ${teamStr}: ${value}`;
  fullString += str + '\n';
}
console.log(fullString);

console.log(game.scored);

const scorers = {};

for (const playerName of game.scored) {
  // 1. way
  // if (scorers[playerName]) {
  //   scorers[playerName]++;
  // } else {
  //   scorers[playerName] = 1;
  // }

  // 2. way
  scorers[playerName] ? scorers[playerName]++ : (scorers[playerName] = 1);

  // 3. way
  // scorers[playerName] ?? (scorers[playerName] = 0); // or || instead of ??
  // scorers[playerName]++;
}

console.log(scorers);

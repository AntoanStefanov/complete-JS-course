'use strict';

const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, '� Substitution'],
  [47, '⚽ GOAL'],
  [61, '� Substitution'],
  [64, '� Yellow card'],
  [69, '� Red card'],
  [70, '� Substitution'],
  [72, '� Substitution'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [92, '� Yellow card'],
]);

// 1.
const events = [...new Set(gameEvents.values())];
console.log(events);

// 2.
gameEvents.delete(64);
console.log(gameEvents);

// 3.
// "An event happened, on average, every 9 minutes"
console.log(
  `An event happened, on average, every ${90 / gameEvents.size} minutes`,
);

// 4.
// [FIRST HALF] 17: ⚽ GOAL
for (const [minute, event] of gameEvents) {
  console.log(`[${minute > 45 ? 'SECOND' : 'FIRST'} HALF] ${minute}: ${event}`);
}

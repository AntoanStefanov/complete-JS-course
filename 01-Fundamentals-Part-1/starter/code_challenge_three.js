const dolphinsTeamScoreOne = 100;
const dolphinsTeamScoreTwo = 100;
const dolphinsTeamScoreThree = 100;

const koalasTeamScoreOne = 100;
const koalasTeamScoreTwo = 100;
const koalasTeamScoreThree = 100;

const dolphinsTeamAvgScore =
  (dolphinsTeamScoreOne + dolphinsTeamScoreTwo + dolphinsTeamScoreThree) / 3;

const koalasTeamAvgScore =
  (koalasTeamScoreOne + koalasTeamScoreTwo + koalasTeamScoreThree) / 3;

console.log(dolphinsTeamAvgScore, koalasTeamAvgScore);

if (dolphinsTeamAvgScore > koalasTeamAvgScore && dolphinsTeamAvgScore >= 100) {
  console.log(`Dolphins wins with ${dolphinsTeamAvgScore} Average Score!`);
} else if (
  koalasTeamAvgScore > dolphinsTeamAvgScore &&
  koalasTeamAvgScore >= 100
) {
  console.log(`Koalas wins with ${koalasTeamAvgScore} Average Score!`);
} else if (
  dolphinsTeamAvgScore >= 100 &&
  koalasTeamAvgScore >= 100 &&
  koalasTeamAvgScore === dolphinsTeamAvgScore
) {
  console.log('Draw!');
} else {
  console.log('No one wins Throphy.');
}

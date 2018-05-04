const player1 = require(process.argv[2] || './decision.js');
const player2 = require(process.argv[3] || './decision.idiot.js');

const scoreFromHistory = history => history.reduce(addRoundResultToScores, { p1: 0, p2: 0 });

const addRoundResultToScores = (scores, round) => {
  const roundResult = caculateRoundResult(round);
  return {
    p1: scores.p1 + roundResult.p1,
    p2: scores.p2 + roundResult.p2
  };
}

const caculateRoundResult = round => {
  return round.p1 === true && round.p2 === true
    ? { p1: 2, p2: 2 }
    : round.p1 === true && round.p2 === false
      ? { p1: -1, p2: 3 }
      : round.p1 === false && round.p2 === true
        ? { p1: 3, p2: -1 }
        : { p1: 0, p2: 0 }
}

const playMatch = (p1, p2, maxRound = 500, history = []) => {
  const p1Answer = p1(history.map(item => ({ yours: item.p1, theirs: item.p2 })));
  const p2Answer = p2(history.map(item => ({ yours: item.p2, theirs: item.p1 })));

  const newHistory = history.concat([{ p1: p1Answer, p2: p2Answer }]);
  return newHistory.length < maxRound ? playMatch(p1, p2, maxRound, newHistory) : newHistory;
}

const matchResult = playMatch(player1, player2, 500);
const finalScore = scoreFromHistory(matchResult);


console.log(`/===========\\`);
console.log(`   History`);
console.log(`\\===========/`);
matchResult.forEach((round, index) => {
  console.log(`Round ${index+1}:`);
  console.log(round);
});
console.log(`/============\\`);
console.log(` Match result`);
console.log(`\\============/`);
console.log(finalScore);
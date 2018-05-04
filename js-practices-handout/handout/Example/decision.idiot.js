// return false to cheat, true to cooperate
const decide = (history = []) => {
  return Math.random() < 0.5 ? true : false;
}

module.exports = decide;
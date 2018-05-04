// return false to cheat, true to cooperate
// [
//   { yours: true, theirs: true },
//   { yours: true, theirs: false },
// ]
const decide = (history = []) => {
  const _random_boolean = Math.random() >= 0.5;
  const _prev = history.length - 1;
  const _remain = 500 - _prev;
  var _myPoint = 0;
  var _yrPoint = 0;

  var _prevResult = _prev > 0 ? (history[_prev].theirs) : false;
  var _myChoice = true;
  var _countTrue = 0;
  var _rate = 1;

  for (var i = 0; i <= _prev; i++) {
    _countTrue = _countTrue + (history[i].theirs == true ? 1 : 0);
    if (history[i].theirs == true && history[i].yours == true) {
      _myPoint = _myPoint + 2;
      _yrPoint = _yrPoint + 2;
    } else if (history[i].theirs == false && history[i].yours == true) {
      _myPoint = _myPoint - 1;
      _yrPoint = _yrPoint + 3;
    } else if (history[i].theirs == true && history[i].yours == false) {
      _myPoint = _myPoint + 3;
      _yrPoint = _yrPoint - 1;
    }
  }
  _rate = _countTrue / _prev;

  if (_prev < 50) {
    _myChoice = _random_boolean;
  }
  //Case analyze
  else {
    //choose: False
    if (_prevResult == false && _rate >= 0.3) {
      _myChoice = false;
    }
    console.log(_prev + '->' + _remain + ':' + _rate + '----' + _myPoint + ':' + _yrPoint);
  }

  return _myChoice; // Your code here
}

module.exports = decide;
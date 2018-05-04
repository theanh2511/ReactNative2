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
  var _myChoice = false;
  var _countTrue = 0;
  var _rate = 1;

  for (var i = 0; i <= _prev; i++) {
    _countTrue = _countTrue + (history[i].theirs == false ? 1 : 0);
  }
  _rate = _countTrue / _prev;
  if (_prev < 3) {
    _myChoice = _random_boolean;
  } else if (_prev < 30 && (history[_prev - 1].theirs == true || history[_prev - 2].theirs == true || history[_prev - 3].theirs == true)) {
    _myChoice = _random_boolean;
  }
  //Case analyze
  else {
    //choose: False
    if (_prevResult == false && (_rate > 0.66 && (history[_prev - 1].theirs == false && history[_prev - 2].theirs == false))) {
      _myChoice = false;
    } else if (history[_prev - 1].theirs == false || history[_prev - 2].theirs == false) {
      _myChoice = _random_boolean;
    }

    if (history[_prev - 1].theirs == false && history[_prev - 2].theirs == false && history[_prev - 3].theirs == false) {
      _myChoice = false;
    }
    // console.log(_prev + '->' + _remain + ':' + _rate + '----' + _countTrue + '/' + _prev);

  }
  return _myChoice; // Your code here
}

module.exports = decide;
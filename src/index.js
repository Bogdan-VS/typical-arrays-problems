
exports.min = function min (array) {
  if (array == '' || typeof(array) !== 'object'){
    return 0;
    } else{
    return Math.min.apply(null, array);
  };
}

exports.max = function max (array) {
  if (array == '' || typeof(array) !== 'object'){
    return 0;
    } else{
    return Math.max.apply(null, array);
  };
}

exports.avg = function avg (array) {
  if (array == '' || typeof(array) !== 'object'){
    return 0;
  }
  return array.reduce((a, b) => (a + b)) / array.length;
}

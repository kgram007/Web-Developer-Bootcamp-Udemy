function printReverse(arr) {
  for (var i = arr.length-1; i >= 0; i--) {
    console.log(arr[i]);
  }
}

function isUniform(arr) {
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] !== arr[0]) {
      return false;
    }
  }
  return true;
}

function sumArray(arr) {
  var sum = 0;
  arr.forEach(function(a) {
    sum += a;
  });
  return sum;
}

function max(arr) {
  var max = undefined;
  arr.forEach(function(a) {
    if (a > max || max === undefined) {
      max = a;
    }
  });
  return max;
}

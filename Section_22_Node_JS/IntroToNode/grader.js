function average(scores) {
  var sum = 0;
  scores.forEach(function(score) {
    sum += score;
  });
  var avg = Math.round(sum/scores.length);
  return avg;
}

var scores = [90, 98, 89, 100, 100, 86, 94];
var avg = average(scores);
console.log(avg);

var scores2 = [40, 65, 77, 82, 80, 54, 73, 63, 95, 49];
var avg2 = average(scores2);
console.log(avg2);
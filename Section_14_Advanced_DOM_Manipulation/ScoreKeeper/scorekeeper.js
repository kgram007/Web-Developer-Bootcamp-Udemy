var p1ButtonTag = document.querySelector("#p1");
var p2ButtonTag = document.querySelector("#p2");
var resetButtonTag = document.querySelector("#reset");
var inputMaxScoreTag = document.querySelector("#inputMaxScore");

var p1Score = 0;
var p2Score = 0;
var maxScore = 5;
var gameOver = false;

/* Init */
maxScoreDisp.textContent = maxScore;
inputMaxScoreTag.valueAsNumber = maxScore;

/* Event Listeners */
p1ButtonTag.addEventListener("click", function() {
  if (!gameOver) {
    p1Score++;
    p1ScoreDisp.textContent = p1Score;
    checkScore(p1Score, p1ScoreDisp);
  }
});

p2ButtonTag.addEventListener("click", function() {
  if (!gameOver) {
    p2Score++;
    p2ScoreDisp.textContent = p2Score;
    checkScore(p2Score, p2ScoreDisp);
  }
});
resetButtonTag.addEventListener("click", function() {
  resetGame();
});

inputMaxScoreTag.addEventListener("change", function() {
  maxScore = inputMaxScoreTag.valueAsNumber;
  maxScoreDisp.textContent = maxScore;
  resetGame();
});

/* Functions */
function checkScore(score, scoreDisp) {
  if (score >= maxScore) {
    gameOver = true;
    scoreDisp.classList.add("winner");
  }
};

function resetGame() {
  p1Score = p2Score = 0;
  p1ScoreDisp.textContent = p1Score;
  p2ScoreDisp.textContent = p2Score;
  p1ScoreDisp.classList.remove("winner");
  p2ScoreDisp.classList.remove("winner");
  gameOver = false;
};

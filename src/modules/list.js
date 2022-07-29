const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/bs04D0MFCfRaXPNteJu6/scores';
const leaderboard = document.querySelector('.leaderboard');

export const display = (scores) => {
  leaderboard.innerHTML = '';
  if (scores.length === 0) {
    leaderboard.innerHTML = '<li>No Scores to be displayed</li>';
  }
  scores.sort((a, b) => b.score - a.score).forEach((score) => {
    leaderboard.innerHTML += ` <li class="allScores">${score.user}  ${score.score}</li>`;
  });
};

export const fetchData = async () => {
  await fetch(url)
    .then((response) => response.json())
    .then((json) => display(json.result));
};

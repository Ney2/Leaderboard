export const scores = JSON.parse(localStorage.getItem('scoreList')) || [];
const leaderboard = document.querySelector('.leaderboard');
export const createScoreList = ({ pname, value }) => {
  const scoreContainer = document.createElement('div');
  scoreContainer.innerHTML = `
    <p class="playerName">${pname}</p>
    <p class="playerScore">${value}</p>
    `;
  leaderboard.appendChild(scoreContainer);
};
scores.forEach(createScoreList);
import './index.css';

import AllScores from './modules/main.js';
import { createScoreList } from './modules/list.js';
import addScoreToList from './modules/add.js';

const submitForm = document.querySelector('.submitForm');
const { playerName } = submitForm;
const { playerScore } = submitForm;

submitForm.onsubmit = (e) => {
  e.preventDefault();
  let newScore = new AllScores();
  newScore.pname = playerName.value;
  newScore.value = playerScore.value;
  newScore = addScoreToList(
    newScore.pname,
    newScore.value,
  );

  createScoreList(newScore);

  playerName.value = '';
  playerScore.value = '';
};

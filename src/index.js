import './index.css';

import { fetchData } from './modules/list.js';
import addScoreToList from './modules/add.js';

const submitForm = document.querySelector('.submitForm');
const playerScore = document.querySelector('#score');
const playerName = document.querySelector('#name');
const refresh = document.querySelector('#refresh');

submitForm.addEventListener('submit', (e) => {
  e.preventDefault();
  addScoreToList(playerName.value, playerScore.value);
  submitForm.reset();
});

refresh.addEventListener('click', () => {
  fetchData();
});

window.onload = () => {
  fetchData();
};

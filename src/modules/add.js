import { scores } from './list.js';

export default function addScoreToList(pname, value) {
  scores.push({ pname, value });
  localStorage.setItem('scoreList', JSON.stringify(scores));
  return { pname, value };
}
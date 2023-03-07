import './style.css';
import REQUESTS from './requests.js';

const form = document.querySelector('#form');
const refreshBtn = document.querySelector('#refresh-btn');

document.addEventListener('DOMContentLoaded', () => {
  REQUESTS.displayScores();
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  REQUESTS.createNewScore();
  REQUESTS.clearForm();
});
refreshBtn.addEventListener('click', () => {
  REQUESTS.displayScores();
});
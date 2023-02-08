import { loadLeaderboard, refreshHandler } from './modules/load-data.js';
import submitHandler from './modules/submit-data.js';
import './style.css';

const refrestBtn = document.getElementById('refresh-btn');
refrestBtn.addEventListener('click', refreshHandler);

const form = document.querySelector('form');
form.addEventListener('submit', submitHandler);

window.onload = () => {
  loadLeaderboard();
};

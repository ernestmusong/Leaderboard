const scores = [
  {
    name: 'name',
    score: 100,
  },
  {
    name: 'name',
    score: 50,
  },
  {
    name: 'name',
    score: 90,
  },
  {
    name: 'name',
    score: 127,
  },
  {
    name: 'name',
    score: 42,
  },
  {
    name: 'name',
    score: 110,
  },
  {
    name: 'name',
    score: 120,
  },
];

const list = document.querySelector('#container');
let result = '';
export default class UI {
    static displayScores = () => {
      scores.map((score) => {
        result += `
              <li><span>${score.name}:${score.score}</span></li>
            `;
        return result;
      });

      list.innerHTML = result;
      return result;
    }
}
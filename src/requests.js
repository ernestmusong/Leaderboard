const scoreInput = document.querySelector('#score');
const nameInput = document.querySelector('#name');

const baseUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';
const gamesEndPoint = 'games/';
const scoresEndPoint = '/scores/';
const id = 'Ra1gWNXUHyNKYzAKFfY9';

const person = {
  user: String,
  score: Number,
};

const gameTitle = {
  name: 'Space Runners',
};

export default class REQUESTS {
    static createNewGame = async () => {
      try {
        const response = await fetch(baseUrl + gamesEndPoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(gameTitle),
        });
        const data = await response.json();
        return data;
      } catch (error) {
        return error;
      }
    }

    static createNewScore = async () => {
      if (scoreInput.value.length !== 0 && nameInput.value.length !== 0) {
        person.user = nameInput.value;
        person.score = scoreInput.value;
      }
      try {
        const response = await fetch(baseUrl + gamesEndPoint + id + scoresEndPoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },

          body: JSON.stringify(person),
        });
        const data = await response.json();
        return data;
      } catch (error) {
        return error;
      }
    }

    static getScores = async () => {
      try {
        const response = await fetch(baseUrl + gamesEndPoint + id + scoresEndPoint, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },

        });
        const data = await response.json();
        return data;
      } catch (error) {
        return error;
      }
    }

        static displayScores = () => {
          const list = document.querySelector('#container');
          REQUESTS.getScores().then((data) => {
            let result = '';
            const scores = data.result;
            scores.map((score) => {
              result += `
                          <li><span>${score.user}:${score.score}</span></li>
                        `;
              return result;
            });
            list.innerHTML = result;
            return result;
          });
        }

        static clearForm() {
          scoreInput.value = '';
          nameInput.value = '';
        }
}
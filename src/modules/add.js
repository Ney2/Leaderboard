const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/bs04D0MFCfRaXPNteJu6/scores';
const addScoreToList = async (pname, value) => {
  await fetch(url, {
    method: 'POST',
    body: JSON.stringify({
      user: pname,
      score: value,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json());
};

export default addScoreToList;
const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/IXP2n6rsgRhHNjYfCRCt/scores';

export const fetchApi = async () => {
  const response = await fetch(url);
  const data = await response.json();
  return data.result;
};

export const postApi = async (user, score) => {
  const leaderObj = {
    user,
    score,
  };
  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(leaderObj),
  });
  const data = await response.json();
  return data.result;
};

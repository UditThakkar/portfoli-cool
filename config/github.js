import axios from 'axios';

export const getContributionGraph = async (username) => {
  const response = await axios.get('/api/github', {
    params: { username }
  });

  return response.data;
};

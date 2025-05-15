import axios from 'axios';

export const getContributionGraph = async (username) => {
  const config = useRuntimeConfig()
  const query = `
    {
      user(login: "${username}") {
        contributionsCollection {
          contributionCalendar {
            totalContributions
            weeks {
              contributionDays {
                color
                contributionCount
                date
              }
            }
          }
        }
      }
    }
  `;
  const response = await axios.post(
    'https://api.github.com/graphql',
    { query },
    {
      headers: {
        Authorization: `Bearer ${config.public.githubToken}`
      }
    }
  );

  return response.data.data.user.contributionsCollection.contributionCalendar;
};

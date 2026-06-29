import axios from 'axios'

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  const queryParams = getQuery(event)
  const username = queryParams.username || 'UditThakkar'

  // Ensure we have a token
  if (!config.githubToken) {
    throw createError({
      statusCode: 500,
      statusMessage: 'NUXT_GITHUB_TOKEN is not configured on the server.'
    })
  }

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
  `

  try {
    const response = await axios.post(
      'https://api.github.com/graphql',
      { query },
      {
        headers: {
          Authorization: `Bearer ${config.githubToken}`
        }
      }
    )

    if (response.data.errors) {
      throw createError({
        statusCode: 400,
        statusMessage: response.data.errors[0]?.message || 'GitHub API error'
      })
    }

    return response.data.data.user.contributionsCollection.contributionCalendar
  } catch (error: any) {
    const statusCode = error.response?.status || error.statusCode || 500
    const statusMessage = error.response?.statusText || error.statusMessage || 'Error fetching GitHub contributions'
    throw createError({
      statusCode,
      statusMessage,
      data: error.response?.data || error.data
    })
  }
})

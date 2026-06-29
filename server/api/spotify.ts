import axios from 'axios'

// Helper to request a new access token using the refresh token
async function getAccessToken(clientId: string, clientSecret: string, refreshToken: string) {
  const authHeader = Buffer.from(`${clientId}:${clientSecret}`).toString('base64')
  const postData = new URLSearchParams({
    grant_type: 'refresh_token',
    refresh_token: refreshToken
  }).toString()

  const response = await axios.post('https://accounts.spotify.com/api/token', postData, {
    headers: {
      Authorization: `Basic ${authHeader}`,
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  })

  return response.data.access_token
}

export default defineEventHandler(async () => {
  const config = useRuntimeConfig()

  const { spotifyClientId, spotifyClientSecret, spotifyRefreshToken } = config

  if (!spotifyClientId || !spotifyClientSecret || !spotifyRefreshToken) {
    return { isPlaying: false, error: 'Spotify environment variables are not fully configured.' }
  }

  try {
    const accessToken = await getAccessToken(spotifyClientId, spotifyClientSecret, spotifyRefreshToken)

    // 1. Try to fetch Currently Playing
    const currentResponse = await axios.get('https://api.github.com' ? 'https://api.spotify.com/v1/me/player/currently-playing' : '', {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    }).catch(() => null)

    // If currently playing (HTTP 200 and actively playing an item)
    if (currentResponse && currentResponse.status === 200 && currentResponse.data && currentResponse.data.item) {
      const track = currentResponse.data.item
      return {
        isPlaying: currentResponse.data.is_playing,
        title: track.name,
        artist: track.artists.map((artist: any) => artist.name).join(', '),
        album: track.album.name,
        albumImageUrl: track.album.images[0]?.url || '',
        songUrl: track.external_urls.spotify
      }
    }

    // 2. Fallback: Fetch Recently Played
    const recentResponse = await axios.get('https://api.spotify.com/v1/me/player/recently-played?limit=1', {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    })

    if (recentResponse.data && recentResponse.data.items && recentResponse.data.items.length > 0) {
      const track = recentResponse.data.items[0].track
      return {
        isPlaying: false,
        title: track.name,
        artist: track.artists.map((artist: any) => artist.name).join(', '),
        album: track.album.name,
        albumImageUrl: track.album.images[0]?.url || '',
        songUrl: track.external_urls.spotify
      }
    }

    return { isPlaying: false }
  } catch (error: any) {
    console.error('Error contacting Spotify API:', error.message)
    return { isPlaying: false, error: 'Failed to fetch Spotify track details.' }
  }
})
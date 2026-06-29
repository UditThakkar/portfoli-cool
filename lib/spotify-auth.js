const http = require('http');
const https = require('https');
const { exec } = require('child_process');

// Configuration - Edit these or pass them via environment variables
const CLIENT_ID = process.env.SPOTIFY_CLIENT_ID;
const CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET;
const PORT = 3000;
const REDIRECT_URI = `http://localhost:${PORT}/callback`;
const SCOPES = 'user-read-currently-playing user-read-recently-played';

if (!CLIENT_ID || !CLIENT_SECRET) {
  console.error('\x1b[31mError: Please set SPOTIFY_CLIENT_ID and SPOTIFY_CLIENT_SECRET environment variables.\x1b[0m');
  console.log('\nRun command like this:');
  console.log(`$env:SPOTIFY_CLIENT_ID="your_id"; $env:SPOTIFY_CLIENT_SECRET="your_secret"; node spotify-auth.js`);
  process.exit(1);
}

const server = http.createServer((req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`);
  
  if (url.pathname === '/') {
    // Redirect to Spotify Auth
    const authUrl = `https://accounts.spotify.com/authorize?response_type=code&client_id=${CLIENT_ID}&scope=${encodeURIComponent(SCOPES)}&redirect_uri=${encodeURIComponent(REDIRECT_URI)}`;
    res.writeHead(302, { Location: authUrl });
    res.end();
    return;
  }

  if (url.pathname === '/callback') {
    const code = url.searchParams.get('code');
    if (!code) {
      res.writeHead(400, { 'Content-Type': 'text/plain' });
      res.end('Authorization code missing.');
      return;
    }

    // Exchange code for tokens
    const postData = new URLSearchParams({
      grant_type: 'authorization_code',
      code: code,
      redirect_uri: REDIRECT_URI
    }).toString();

    const authHeader = Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString('base64');

    const options = {
      hostname: 'accounts.spotify.com',
      port: 443,
      path: '/api/token',
      method: 'POST',
      headers: {
        'Authorization': `Basic ${authHeader}`,
        'Content-Type': 'application/x-www-form-urlencoded',
        'Content-Length': Buffer.byteLength(postData)
      }
    };

    const reqToken = https.request(options, (resToken) => {
      let data = '';
      resToken.on('data', (chunk) => data += chunk);
      resToken.on('end', () => {
        try {
          const json = JSON.parse(data);
          res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
          res.end(`
            <html>
              <body style="font-family: sans-serif; background-color: #121212; color: #ffffff; padding: 40px; text-align: center;">
                <h1 style="color: #1DB954;">Success!</h1>
                <p>You can close this window now. Check your terminal for the keys.</p>
              </body>
            </html>
          `);

          console.log('\n\x1b[32m--- Success! Spotify Tokens Received ---\x1b[0m');
          console.log('Copy these values to your .env file:\n');
          console.log(`SPOTIFY_CLIENT_ID=${CLIENT_ID}`);
          console.log(`SPOTIFY_CLIENT_SECRET=${CLIENT_SECRET}`);
          console.log(`SPOTIFY_REFRESH_TOKEN=${json.refresh_token}`);
          console.log('\n----------------------------------------');
          
          server.close();
          process.exit(0);
        } catch (e) {
          res.writeHead(500, { 'Content-Type': 'text/plain' });
          res.end('Failed to parse response from Spotify.');
          console.error(e);
          server.close();
          process.exit(1);
        }
      });
    });

    reqToken.on('error', (e) => {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('Error contacting Spotify.');
      console.error(e);
      server.close();
      process.exit(1);
    });

    reqToken.write(postData);
    reqToken.end();
  }
});

server.listen(PORT, () => {
  console.log(`\x1b[36mSpotify Authorization Server running on http://localhost:${PORT}\x1b[0m`);
  console.log('Opening browser for authentication...');
  
  // Try opening the browser automatically
  const startCmd = process.platform === 'win32' ? 'start' : process.platform === 'darwin' ? 'open' : 'xdg-open';
  exec(`${startCmd} http://localhost:${PORT}`);
});
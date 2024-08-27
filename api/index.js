module.exports = (req, res) => {
  const thumbnailUrl = '/thumbnail.jpeg'; // Correct path to the local image in the public folder
  const redirectUrl = 'https://www.google.com';

  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta property="og:title" content="Your Page Title" />
      <meta property="og:description" content="A brief description of your page." />
      <meta property="og:image" content="${thumbnailUrl}" />
      <meta property="og:url" content="${redirectUrl}" />
      <meta http-equiv="refresh" content="0; url=${redirectUrl}" />
      <title>Redirecting...</title>
    </head>
    <body>
      <p>If you are not redirected automatically, follow the <a href="${redirectUrl}">link to the page</a>.</p>
    </body>
    </html>
  `);
};

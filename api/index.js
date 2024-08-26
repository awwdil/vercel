// index.js
module.exports = (req, res) => {
    res.writeHead(301, { Location: 'https://www.google.com' });
    res.end();
  };
  
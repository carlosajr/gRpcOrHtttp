const express = require('express');

const app = express();
const port = 3434;

app.get('/bfb', (req, res) => {
    const number = Math.floor(Math.random() * 10000);
    return res.json({ exectuted: true, number });
})

app.listen(port, () => {
  console.log(`Server BFB HTTP Running at http://127.0.0.1:${port}`)
})
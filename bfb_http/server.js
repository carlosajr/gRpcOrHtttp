const express = require('express');

const app = express();
const port = 3434;

const executeService = require('../service/executeService');

app.get('/bfb', async (req, res) => {
  const data = executeService.execute();

  return res.json(data);
})

app.listen(port, () => {
  console.log(`Server BFB HTTP Running at http://127.0.0.1:${port}`)
})
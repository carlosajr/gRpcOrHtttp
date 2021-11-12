const express = require('express');
const clientResolver = require('./src/Resolvers/clientResolver');

const app = express();
const port = 3333;

app.get('/bff', async (req, res) => {
  try {
    const { type } = req.query;
    
    const client = clientResolver.resolve(type);

    const result = await client.execute();

    return res.json(result);
  } catch (error) {
    console.log(error)
    return res.status(400).json({error: error.message})
  }
    
})

app.listen(port, () => {
  console.log(`Server BFF HTTP Running at http://127.0.0.1:${port}`)
})

const express = require('express');
const clientResolver = require('./src/Resolvers/clientResolver');

const app = express();
const port = 3333;

app.get('/bff', async (req, res) => {
    const { type } = req.query;
    console.log(type)
    
    const client = clientResolver.resolve(type);

    const result = await client.execute();

    return res.json(result);
})

app.listen(port, () => {
  console.log(`Server BFF HTTP Running at http://127.0.0.1:${port}`)
})

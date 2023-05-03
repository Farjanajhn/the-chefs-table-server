const express = require('express')
const app = express();
const cors = require('cors');
const port = 3000

const chefsInfo = require('./data/chefsInfo.json');

app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/chefsInfo', (req, res) => {
  res.send(chefsInfo);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

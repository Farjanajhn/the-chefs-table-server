const express = require('express')
const app = express();
const cors = require('cors');
const port = 8080

const chefsInfos = require('./data/chefsInfo.json');
const recipes=require('./data/recipes.json')

app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/chefsInfos', (req, res) => {
  res.send(chefsInfos);
})

app.get('/recipes', (req, res) => {
  res.send(recipes);
})

app.get('/recipes/:id', (req, res) => {
  const id = req.params.id;
  console.log(id);
  const selectedRecipes = recipes.find(r => r._id === id);
  res.send(selectedRecipes);
});


 


app.listen(port,()  => {
  console.log(`Example app listening on port ${port}`)
})

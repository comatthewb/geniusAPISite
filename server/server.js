const express = require('express')
const app = express()
const port = 3000
const path = require('path')

app.use(express.json());
app.use(express.static(path.join(__dirname, "../dist")));

app.get("/", (req, res) => {});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Whats up ?')
})
app.get('/mysecret', function (req, res) {
    res.send('Whats up bro')
  })

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})

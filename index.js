var compression = require('compression')
var express = require('express')
var app = express()
var bodyParser = require('body-parser')

app.use(compression())
// parse application/json
app.use(bodyParser.json())

app.use(function (req, res) {
  res.setHeader('Content-Type', 'text/plain')
  console.log('request headers:', req.headers)
  console.log('body length:', req.body.length)
  console.log('body:', req.body)
  res.write('you posted:\n')
  res.end(JSON.stringify(req.body, null, 2))
})

app.listen(1337);
console.log('Express started on port 1337');

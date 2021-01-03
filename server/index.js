const express = require('express')
const app = express()
 
app.use(express.static('admin'));

app.get('/', function (req, res) {
 
})



app.listen(3000, () => {
  console.log(`Example app listening at http://localhost:3000`)
})
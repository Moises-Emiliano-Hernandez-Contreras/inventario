const express = require('express')
const app = express()
const port = 3000

const indexRouter = require('./routes/index');

app.use('/', indexRouter);
app.use(express.json());

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
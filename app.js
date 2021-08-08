const express = require('express');
const {db} = require('./db/models')
const app = express();

app.get('/',(req,res)=>{
	res.send("<h1>Hello</h1>");
})

db.sync()
  .then(() => {
    app.listen(3000, () => {
      console.log('server started on http://localhost:3000')
    })
  })
  .catch((err) => {
    console.error(new Error('Could not start database'))
    console.error(err)
  })

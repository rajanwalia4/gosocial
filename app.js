const express = require('express');
const {db} = require('./db/models')
const {usersRoute} = require('./routes/users');
const {postRoute} = require('./routes/posts');
const {commentRoute} = require('./routes/posts/comments')

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true}));

app.use('/api/users',usersRoute);
app.use('/api/posts',postRoute);
app.use('/api/comments',commentRoute);

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

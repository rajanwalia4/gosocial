const express = require('express');
const {db} = require('./db/models')
const ejs = require('ejs');

const {usersRoute} = require('./routes/api/users/users');
const {postRoute} = require('./routes/api/posts/');
const {commentRoute} = require('./routes/api/posts/comments')
const PORT = process.env.PORT || 5000;

const app = express()

const expressSession = require('express-session');
app.use(expressSession({
  secret: 'some long string for secret key', // used to encrypt the cookie
  resave: true, // saves the cookie on each client
  saveUninitialized: true // save cookie even if nothing to track
}))

// To get data in req.body while making post request
app.use(express.json())
app.use(express.urlencoded({extended: true}));

// setting up view engine to render ejs files
app.set('view engine','ejs');
app.set('views','./views');

// setting public folder to access static files like css, js
//app.use('/',express.static('./public'));
app.use('/',express.static('./public'));

app.use('/api/users',usersRoute)
app.use('/api/posts',postRoute);
app.use('/api/comments',commentRoute)

// app.get('/',(req,res)=>{
//   // console.log(req.session)
//   // if(!req.session.visits) req.session.visits = 1;
//   // else req.session.visits++;
// 	res.render('home');
// })

db.sync()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`server started on http://localhost:${PORT}`)
    })
  })
  .catch((err) => {
    console.error(new Error('Could not start database'))
    console.error(err)
  })

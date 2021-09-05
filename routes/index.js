const router = require('express').Router();
const {usersRoute} = require('./api/users/users');
const {postRoute} = require('./api/posts');
const {commentRoute} = require('./api/posts/comments')

router.get('/',(req,res)=>{
	// console.log(req.session)
	// if(!req.session.visits) req.session.visits = 1;
	// else req.session.visits++;
	
	 res.render('home');
 })
router.use('/api/users',usersRoute);
router.use('/api/posts',postRoute);
router.use('/api/comments',commentRoute);



module.exports = {router};
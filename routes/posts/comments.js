const {Router} = require('express');
const router = Router();
const {createComment,findComments} = require('../../controllers/comments');
const {findUser} = require('../../controllers/users');
const {findPost} = require('../../controllers/posts');

// create comment Route
router.post('/',async (req,res)=>{
	const {userId,postId,body} = req.body;
	if(! await findUser(userId))
		return res.status(404).json({error:"No such user exists"});
	
	if(! await findPost(postId))
		return res.status(404).json({error:"No such post exists"});
	
	const comment = await createComment(userId,postId,body);
	return res.status(201).json(comment);	
 });
 
 // find comments by postId
router.get('/:postId',async (req,res)=>{
	const postId = req.params.postId;
	const comments = await findComments(postId);
	if(comments.length>0)
		return res.status(201).json(comments);
		
	return res.status(404).json({error:"No Such comments exists for this Post"});
 })
 
 module.exports = {
	 commentRoute : router
 }
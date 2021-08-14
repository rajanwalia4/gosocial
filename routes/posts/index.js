const {Router} = require('express');
const {createPost,
	 findAllPosts,
	 findPost,
	} = require('../../controllers/posts');
const {findUser} = require('../../controllers/users');
const router = Router();


// creating new post
router.post('/',async (req,res)=>{
	const {title,body,userId} = req.body;
	if(! await findUser(userId))
		return res.status(404).json({error:"No such user exists"});
	
	if(!userId || !title || !body){
		return res.json({error:"Need all userId,title and body"});
	}
	
	const post = await createPost(title,body,userId);
	return res.status(201).json(post);
});

// get all the posts
router.get('/',async (req,res)=>{
	const posts = await findAllPosts();
	if(posts.length>0)
		return res.status(200).json(posts);
	
	return res.status(404).json({error:"No Post exists"});
})

router.get('/:postId', async (req,res)=>{
	
	const post = await findPost(req.params.postId);
	if(post){
		return res.status(200).json(post);
	}
	return res.status(404).json({error: "Not a valid post ID"});
})

module.exports = {
	postRoute : router
}


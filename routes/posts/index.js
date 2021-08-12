const {Router} = require('express');
const {createPost,
	 findAllPosts,
	 findPost,
	} = require('../../controllers/posts');
const router = Router();


// creating new post
router.post('/',async (req,res)=>{
	const {title,body,userId} = req.body;
	
	if(!userId || !title || !body){
		return res.send("Need all userId,title and body");
	}
	
	const post = await createPost(title,body,userId);
	return res.status(201).send(post);
});

// get all the posts
router.get('/',async (req,res)=>{
	const posts = await findAllPosts();
	return res.status(200).send(posts);
})

router.get('/:postId', async (req,res)=>{
	
	const post = await findPost(req.params.postId);
	if(post){
		return res.status(200).send(post);
	}
	return res.status(404).send({error: "Not a valid post ID"});
})

module.exports = {
	postRoute : router
}


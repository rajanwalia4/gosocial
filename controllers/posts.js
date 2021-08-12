const {Posts,Users} = require('../db/models');

// create new post
async function createPost(title,body,userId){
	const post = await Posts.create({
		title,
		body,
		userId
	});
	return post;
}

// find the post having given Id
async function findPost(postId){
	const post = await Posts.findByPk(postId);
	return post;
}

// find all posts
async function findAllPosts(query) {
	
	const posts = await Posts.findAll({
	  include: [ Users ]
	})
 
	return posts
 }

module.exports = {
	createPost,
	findAllPosts,
	findPost
}



// async function test(){
// 	console.log(await findPost(9));
// }

// test();

// test code
/*
async function test(){
	const posts = await findAllPosts();
	console.log(posts);
}

test();
*/

// test code

/*
async function test(){
	const post = await createPost("PHP","PHP is a great language",1);
	console.log(post);
}

test();

*/
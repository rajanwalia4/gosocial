const {Comments} = require('../db/models');

// create Comment
async function createComment(userId,postId,body){
	const comment = await Comments.create({
		userId,
		postId,
		body
	});
	
	return comment;
}

// findComment by postId
async function findComments(postId){
	const comments = await Comments.findAll({where:{postId}});
	return comments;
}


module.exports = {
	createComment,
	findComments
}

// Test code 
// async function test(){
// 	console.log(await createComment(1,4,"Hello Nyc"));
// }

// test();
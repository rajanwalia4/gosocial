const {Users} = require('../db/models');

// create new user
async function createUser(name,username,password){
	let user  = await Users.findOne({ where: { username } });
	if(user)
			return null;
	else{
		const newUser  = await Users.create({
			name,
			username,
			password
		});
		
		return newUser;
	}
}

// find the user having given Id
async function findUser(userId){
	const user = await Users.findByPk(userId);
	return user;
}


module.exports = {
	createUser,
	findUser
}




// Test code
/*
async function task(){
	console.log(await createUser("rajan Walia","rajan123","ra11"));
}

task()

*/

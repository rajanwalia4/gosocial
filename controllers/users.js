const {Users} = require('../db/models');

// create new user
async function createUser(name,email,password){
	let user  = await Users.findOne({ where: { email } });
	if(user)
			return null;
	else{
		const newUser  = await Users.create({
			name,
			email,
			password
		});
		
		return newUser;
	}
}

// find the user without password having given Id
async function findUser(userId){
	const user = await Users.findByPk(userId,{attributes: {exclude: ['password']}});
	return user;
}

async function findUserWithPassword(userId){
	const user = await Users.findByPk(userId);
	return user;
}


module.exports = {
	createUser,
	findUser,
	findUserWithPassword
}




// Test code
/*
async function task(){
	console.log(await createUser("rajan Walia","rajan123","ra11"));
}

task()

*/

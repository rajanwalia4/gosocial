const {Users} = require('../db/models');

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

module.exports = {
	createUser
}




// Test code
/*
async function task(){
	console.log(await createUser("rajan Walia","rajan123","ra11"));
}

task()

*/

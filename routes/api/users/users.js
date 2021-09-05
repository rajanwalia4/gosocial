const {Router} = require('express');
const {createUser,findUser} = require('../../../controllers/users');

const router = Router();

// get user by Id
router.get('/:userId',async (req,res)=>{
	const user = await findUser(req.params.userId);
	if(user){
		return res.status(200).json(user);
	}
	return res.status(404).json({error:"No such user exists"});
})

// create User
router.post('/',async (req,res)=>{
	let email = req.body.email;
	let name = req.body.name;
	let password = req.body.password;
	if(email && name && password){
		const user = await createUser(name,email,password);
		if(user)
			return res.status(201).send(user);
		else
			return res.status(404).json({error : "email is not Available"})
	}
	return res.status(404).json({error : "name attributes have wrong name"});
});


module.exports = {
	usersRoute :router
}

const {Router} = require('express');
const {createUser,findUser} = require('../../controllers/users');

const router = Router();
router.get('/:userId',async (req,res)=>{
	const user = await findUser(req.params.userId);
	if(user){
		return res.status(200).json(user);
	}
	return res.status(404).json({error:"No such user exists"});
})

router.post('/',async (req,res)=>{
	let username = req.body.username;
	let name = req.body.name;
	let password = req.body.password;
	const user = await createUser(name,username,password);
	if(user)
		return res.status(201).send(user);
	else
		return res.status(404).json({error : "username is not Available"})
	
});


module.exports = {
	usersRoute :router
}

const {Sequelize,DataTypes} = require('sequelize');
const db = new Sequelize({
	dialect: 'mysql',
	database: 'gosocialdb',
	username: 'gosocialuser',
	password: 'gosocialpassword'
})

const COL_ID_DEF = {
	type:DataTypes.INTEGER,
	autoIncrement:true,
	primaryKey:true
}

const COL_USERNAME_DEF = {
	type:DataTypes.STRING(30),
	unique:true,
	allowNull:false
}

const COL_TITLE_DEF = {
	type:DataTypes.STRING(150),
	allowNull:false
}

const Users = db.define('user',{
	// Model attributes are defined here 
	id:COL_ID_DEF,
	name:{
		type:DataTypes.STRING(50),
		allowNull:false
	},	
	username:COL_USERNAME_DEF,
	password:{
		type:DataTypes.STRING(50),
		allowNull:false
	}	
})

const Posts = db.define('post', {
	id: COL_ID_DEF,
	title: COL_TITLE_DEF,
	body: {
		 type: DataTypes.TEXT,
		 allowNull: false
	}
})

const Comments = db.define('comment', {
	id: COL_ID_DEF,
	body: {
		 type: DataTypes.TEXT('tiny')
	}
})

Users.hasMany(Posts)
Posts.belongsTo(Users)

Users.hasMany(Comments)
Comments.belongsTo(Users)

Posts.hasMany(Comments)
Comments.belongsTo(Posts)


module.exports = {
	db,
	Users,
	Posts,
	Comments
}

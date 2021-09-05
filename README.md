# GoSocial Project

## Installations

```
npm install express ejs express-ejs-layouts express-session sequelize
```

## Database Setup

```
mysql -u root
```

``` 
create database gosocialdb;

create user gosocialuser identified with mysql_native_password by 'gosocialpassword';

grant all privileges on gosocialdb.*  to gosocialuser;

flush privileges;
```

## API's

- ``` Users ```
	- [x]  ``` POST /api/users```  
	- [x]  ``` GET  /api/users/{userID} ```
	
	
- ``` Posts ```
	- [x]  ``` POST /api/posts ```  
	- [x]  ``` GET  /api/posts/ ```
	- [x]  ``` GET  /api/posts/{postId} ```

``` Comments ```
	- [x]  ``` POST /api/comments ```  
	- [x]  ``` GET  /api/comments/{postId} ```
	


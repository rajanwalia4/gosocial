# GoSocial Project

## Installations

```
npm install express ejs sequelize
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
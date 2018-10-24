# Installing PostgreSQL Server


## Creating Databases 

Make sure that you have completed setting up Postgresql according to week 5 lectures.



### `createdb`

Each project will need a separate database. You can create the database as follows:

```
$ createdb -h localhost -U db_username MYAPPNAME_development
```

For our project, it will be

```
$ createdb -h localhost -U ctp_user ctp_hub_backend_development
```



## Running Database

Start your posgresql server as per instructino in week 5 lectures.  For mac with homebrew, I use the command:

`brew brew services start postgres`
# REDIS

`Get started:`
- Install command (wsl/linux) :  
     -> sudo apt-get install redis<br>
- -> sudo service redis-server start\
- -> redis-cli<br>

<h3>Commands are case insensitive</h3>

For `Strings` or `Numbers`

- SET key value
- GET key
- ttl key   `(time to live)`
- KEYS \*
- DEL key
- FLUSHALL  `(deletes everything)`
- EXISTS key
- expire key time
- setex key time value

For `Arrays`

- LPUSH array value
- RPUSH array value
- LRANGE array start stop `(cannot use ge on arrays)`
- LRANGE array 0 -1 `(displays the whole array)`
- LPOP array
- RPOP array

For `Sets` (prevents duplicate elements)

- SADD myset value
- SMEMBERS myset `(for displaying)`

For `Object/Hash`

- HSET key field value
- HGET key field
- HGETALL key
- HDEL key field
- HEXISTS key field

## Few extra things I explored related to Redis besides what was discussed:<br/>
1. To update the value of a pre-existing key, write the same set command again with the key name and just change the value to whatever you want. This logic will work for every data type: string, hash, set, array.

2. To add an element in a set, we use SADD. Similarly, the command to remove an element from the set:

    `srem keyname(basically the set's name) valueToBeRemoved`

3. We can use the "keys \*" statement to get a list of all the keys stored in our Redis memory store. But, there's no such command if you want to have a list of both keys and their values together.

# PostgreSQL

`Get started:`\
-> sudo service postgresql start\
-> psql -U postgres<br><br>

While running the second command, if you face any issues like ``Peer authentication failed``, try these:\
-> sudo service postgresql start\
-> sudo su postgres\
-> psql<br><br>
This will connect you to the user ``postgres`` and the database ``postgres``. The connection type will be ``local`` and the method will be ``peer``.

-> Check list of databases: `\l`\
-> Check list of users: `\du`\
-> Check the current user and database: `\conninfo`\
-> Select/connect to a desired database: `\c {dbname}`\
(If no database name is provided connects to default user "postgres" and database "postgres")<br><br>

-> Create a user: `create user {user-name} with password {pass in ''};`\
(wont work for "")\
-> Create a database: `create database {db}`<br><br>

-> Give permissions to the user: `grant {delete/select/insert/update/all...} privileges on database {database} to {user};`\
-> View granted permissions for the users: `\l`<br><br>

-> Delete a database: `drop database {db};`\
-> Delete an user: `drop use {user-name};`<br><br>

-> Create a table: `create table {tablename}({Column Name} {Data Type} {Constraint});`\
-> List tables: `\d`\
-> View table's data: `\d {tablename}`\
-> Drop a table: `drop table {tablename}`
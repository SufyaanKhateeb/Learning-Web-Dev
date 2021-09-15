`DB == Drives` <br>
`Schemas == Folders`

Create a Schema: `create schema {schemaName};`<br><br>
Create a table in a Schema: `create table {schemaName}.{tableName};`<br><br>
List all tables in a Schema: `\d {schemaName}.*;`<br><br>
View a specific table: `\d {schemaName}.{tableName};`<br><br>
Insert data into a table: `insert into table_name (keys...) values (values...)`<br><br>
Drop Schema: If(empty Schema): `drop schema {schemaName};`<br><br>
else: `drop schema {schemaName} cascade;`<br><br>

### Tables in schema are objects.

### A schema is a collection of database objects, (tables).

View a table's content: select \* from {tablename};<br><br>

### Aggregate Functions:

Used to compute a single result from a set of input values.<br>

Select can be used for doing operations: `eg: select (5+2) as addition;`

Display Time: `select current_timestamp;`

To count the number of rows in a table: `select count(*) from {tablename};`

Where clause: `select {column} from {tableName} where {conditons...};`<br><br>
LIKE works with strings only. So we need to type cast data types accordingly.<br><br>
For type casting, use `::`.<br><br>

Rest can be better understood by watching and implementing simultaneously from the video at https://www.youtube.com/watch?v=7Hv8uhwK8qk&t=1889s

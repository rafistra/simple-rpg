# Sistem Informasi Akademik

## Server Side

Sequelize-CLI 

```
Table heroes
npx sequelize-cli model:generate --name heroes --attributes name:string,level:integer,image:string,classId:integer,partyId:integer

Table parties 
npx sequelize-cli model:generate --name parties --attributes name:string,image:string,guildId:integer

table classes
npx sequelize-cli model:generate --name classes --attributes name:string,image:string

table heroStats
npx sequelize-cli model:generate --name heroStats --attributes hp:integer,mgc:integer,stam:integer,str:integer,def:integer,int:integer,dex:integer,char:integer,heroId:integer

table users
npx sequelize-cli migration:create --name modify_heroes_add_new_fields

```
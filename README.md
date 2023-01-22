# Simple RPG

## Server Side

Sequelize-CLI 

```
Table heroes
npx sequelize-cli model:generate --name heroes --attributes name:string,level:integer,image:string,classId:integer,partyId:integer

table classes
npx sequelize-cli model:generate --name classes --attributes name:string,image:string

table heroStats
npx sequelize-cli model:generate --name heroStats --attributes hp:integer,mgc:integer,stam:integer,str:integer,def:integer,int:integer,dex:integer,char:integer,heroId:integer

table users
npx sequelize-cli migration:create --name modify_heroes_add_new_fields

table skills
npx sequelize-cli model:generate --name skills --attributes name:string,image:string,desc:string

table classSkils 
npx sequelize-cli model:generate --name classSkills --attributes classId:integer,skillId:integer

table playerCompanions (unused)
npx sequelize-cli model:generate --name playerCompanions --attributes playerId:integer,heroId:integer

Table parties (unused)
npx sequelize-cli model:generate --name parties --attributes name:string,image:string,guildId:integer

```
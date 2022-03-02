module.exports = (sequelize, DataTypes) =>{
    let alias = 'users';
    let columns =  {
        idUser:{
            type: DataTypes.INTEGER, 
            primarykey: true,
            },
        firstName:{
            type: DataTypes.STRING
            },
        lastName:{
            type: DataTypes.STRING
            },
        birthday:{
            type: DataTypes.STRING
            },
        address:{
            type: DataTypes.DATE
            },
        datatimeUser:{
            type: DataTypes.DATE
            },
        IdReference:{
            type: DataTypes.INTEGER
        }
    };
    let config ={
        tableName: 'user',
        timestamps: false
    }
    let user = sequelize.define(alias,columns, config);

    return user;
}

module.exports = (sequelize, DataTypes) =>{
    let alias = 'Users'; // siempre al incio en mayus, y plural //
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
    let user = sequelize.define(alias,columns, config); // nombre de let debe ser igual al return. //

    return user;
}

module.exports = (sequelize, dataTypes) =>{
    let alias = 'ApiUsersDashboard'; // siempre al incio en mayus, y plural //
    
    let columns =  {
        idUser:{
            type: dataTypes.INTEGER, 
            primaryKey: true,
            autoIncrement: true
            },
        firstName:{
            type: dataTypes.STRING
            },
        lastName:{
            type: dataTypes.STRING
        },
        email:{
            type: dataTypes.STRING
        }
        
    
//user.removeAttribute('id')
    };
    
    let config ={
        tableName: 'user',
        timestamps: false
    }
    let user = sequelize.define(alias,columns, config); // nombre de let debe ser igual al return. //

    return user;
}

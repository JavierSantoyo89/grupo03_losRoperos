module.exports = (sequelize, DataTypes) =>{
    let alias = 'Users'; // siempre al incio en mayus, y plural //
    
    let columns =  {
        idUser:{
            type: DataTypes.INTEGER, 
            primarykey: true,
            autoincrement: true
            },
        firstName:{
            type: DataTypes.STRING
            },
        lastName:{
            type: DataTypes.STRING
            },
        userName:{
            type: DataTypes.STRING
        },
        email:{
            type: DataTypes.STRING
        },
        password:{
            type: DataTypes.STRING
        },
        birthday:{
            type: DataTypes.DATE
            },
        address:{
            type: DataTypes.DATE
            },
        IdImageUser:{
            type: DataTypes.STRING
        }
        
    
//user.removeAttribute('id')
    };
    
    let config ={
        tableName: 'user',
        timestamps: false
    }
    let user = sequelize.define(alias,columns, config); // nombre de let debe ser igual al return. //
user.removeAttribute('id');
    return user;
}

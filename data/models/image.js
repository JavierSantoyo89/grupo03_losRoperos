module.exports = (sequelize, DataTypes) =>{
    let alias = 'images';
    let cols =  {
        idImage:{
            type: DataTypes.INTEGER, 
            primarykey: true
            },
        imageName:{
            type: DataTypes.STRING(100)
            }
    };
    let config ={
        tableName: 'image',
        timestamps: false
    }
    let user = sequelize.define(alias,cols, config);

    return user;
}

module.exports = (sequelize, DataTypes) =>{
    let alias = 'products';
    let columns =  {
        idProduct:{
            type: DataTypes.INTEGER, 
            primarykey: true,
            autoIncrement: true
            },
        name:{
            type: DataTypes.STRING(100)
            },
        model:{
            type: DataTypes.STRING(100)
            },
        brand:{
            type: DataTypes.STRING(100)
            },
        size:{
            type: DataTypes.STRING(100)
            },
        color:{
            type: DataTypes.STRING(100)
            },
        amount:{
            type: DataTypes.STRING(100)
        },
        price:{
            type: DataTypes.DOUBLE
            },
        DescriptionProduct:{
            type: DataTypes.INTEGER(255)
            },
        datatimeProduct:{
            type: DataTypes.DATE
            },
        idStatus:{
            type: DataTypes.INTEGER, 
            },
    };
    let config ={
        tableName: 'product',
        timestamps: false
    }
    let user = sequelize.define(alias,columns, config);

    return user;
}

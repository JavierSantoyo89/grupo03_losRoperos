module.exports = (sequelize, DataTypes) =>{
    let alias = 'Products';
    let columns =  {
        id:{
            type: DataTypes.INTEGER, 
            primaryKey: true,
            autoincremental: true
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
        decriptionProduct:{
            type: DataTypes.INTEGER(255)
            },
        nameStatus:{
            type: DataTypes.INTEGER(255)
            },
        imgProduct:{
            type: DataTypes.STRING(45)
        }
    };
    let config ={
        tableName: 'product',
        timestamps: false
    }
    let product = sequelize.define(alias,columns,config);

    return product;
}

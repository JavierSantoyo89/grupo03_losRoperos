module.exports = (sequelize, dataTypes) =>{
    let alias = 'Products';
    let columns =  {
        id:{
            type: dataTypes.INTEGER, 
            primaryKey: true,
            autoIncrement: true
            },
        name:{
            type: dataTypes.STRING(100)
            },
        model:{
            type: dataTypes.STRING(100)
            },
        brand:{
            type: dataTypes.STRING(100)
            },
        size:{
            type: dataTypes.STRING(100)
            },
        color:{
            type: dataTypes.STRING(100)
            },
        discount:{
            type: dataTypes.INTEGER
        },
        price:{
            type: dataTypes.DOUBLE
            },
        decriptionProduct:{
            type: dataTypes.INTEGER(255)
            },
        nameStatus:{
            type: dataTypes.INTEGER(255)
            },
        imgProduct:{
            type: dataTypes.STRING(45)
        }
    };
    let config ={
        tableName: 'product',
        timestamps: false
    }
    let product = sequelize.define(alias,columns,config);

    return product;
}

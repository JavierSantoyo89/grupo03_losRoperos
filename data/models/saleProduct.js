module.exports = (sequelize, DataTypes) =>{
    let alias = 'SaleProducts';
    let columns =  {
        idsaleProduct:{
            type: DataTypes.INTEGER, 
            primarykey: true
            },
        idProduct:{
            type: DataTypes.INTEGER
            },
        isSale:{
            type: DataTypes.INTEGER
            }
    };
    let config ={
        tableName: 'saleProduct',
        timestamps: false
    }
    let user = sequelize.define(alias,columns, config);

    return user;
}

module.exports = (sequelize, DataTypes) =>{
    let alias = 'sales';
    let columns =  {
        idsale:{
            type: DataTypes.INTEGER, 
            primarykey: true
            },
        price:{
            type: DataTypes.DOUBLE
            },
        discount:{
            type: DataTypes.INTEGER
            },
        priceSold:{
            type: DataTypes.DOUBLE
            },
        datatimeSale:{
            type: DataTypes.DATE
            },
        idUser:{
            type: DataTypes.INTEGER, 
            },
    };
    let config ={
        tableName: 'sale',
        timestamps: false
    }
    let user = sequelize.define(alias,columns, config);

    return user;
}

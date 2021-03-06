// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../Config/connection.js');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
  },
  //product name
  product_name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  //price
  price: {
    type: DataTypes.STRING,
    allowNull: false
  },
  //stock
  stock: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 10,
    validate: { isNumeric: true
    }
  },
  //category Id
  category_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'category',
      key: 'id'
    }
  }
},
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;

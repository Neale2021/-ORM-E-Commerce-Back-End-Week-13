const seedCategory = require('./category-seeds');
const seedProduct = require('./product-seeds');
const seedTag = require('./tag-seeds');
const seedProductTag = require('./product-tag-seeds');

const sequelize = require('../Config/connection.js');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  await seedCategory();
  console.log('\n----- CATEGORIES SEEDED -----\n');

  await seedProduct();
  console.log('\n----- PRODUCTS SEEDED -----\n');

  await seedTag();
  console.log('\n----- TAGS SEEDED -----\n');

  await seedProductTag();
  console.log('\n----- PRODUCT TAGS SEEDED -----\n');

  process.exit(0);
};

seedAll();

var { sequelize } = require('./indexSeed.js');
sequelize.sync({force: true})
  .then(() => {
    sequelize.close();
  });
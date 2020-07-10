var { sequelize } = require('./index.js');
sequelize.sync({force: true})
  .then(() => {
    sequelize.close();
  });
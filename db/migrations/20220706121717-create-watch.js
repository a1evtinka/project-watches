module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Watches', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      title: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      image: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      category: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      case: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      strap: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      glass: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      mechanism: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      water: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      description: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      price: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Watches');
  },
};

const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Watch, User }) {
      Order.Watch = Order.belongsTo(Watch, { foreignKey: 'watch_id' });
      Order.User = Order.belongsTo(User, { foreignKey: 'user_id' });
    }
  }
  Order.init({
    watch_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Watch',
        key: 'id',
      },
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'User',
        key: 'id',
      },
    },
    name: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    email: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    sketch: {
      type: DataTypes.TEXT,
    },
    phone: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
  }, {
    sequelize,
    modelName: 'Order',
    tableName: 'Orders',
  });
  return Order;
};

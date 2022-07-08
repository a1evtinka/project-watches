const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Watch extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Order }) {
      Watch.Order = Watch.hasMany(Order, { foreignKey: 'watch_id' }, { onDelete: 'CASCADE' });
    }
  }
  Watch.init({
    title: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    image: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    category: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    case: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    strap: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    glass: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    mechanism: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    water: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'Watch',
    tableName: 'Watches',
  });
  return Watch;
};

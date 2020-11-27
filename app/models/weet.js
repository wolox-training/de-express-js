module.exports = (sequelize, DataTypes) => {
  const Weet = sequelize.define(
    'weets',
    {
      contet: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      iser_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    },
    {
      timestamps: true,
      underscored: true,
      tableName: 'weets'
    }
  );
  return Weet;
};

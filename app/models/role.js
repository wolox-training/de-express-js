module.exports = (sequelize, DataTypes) => {
  const Role = sequelize.define(
    'roles',
    {
      label: {
        type: DataTypes.STRING,
        allowNull: false
      }
    },
    {
      timestamps: true,
      underscored: true,
      tableName: 'roles'
    }
  );
  return Role;
};

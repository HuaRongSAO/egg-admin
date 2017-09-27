'use strict';

module.exports = app => {
  const { STRING, INTEGER } = app.Sequelize;

  const Role = app.model.define('role', {
    id: {
      type: INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: STRING,
    desp: STRING,
  });

  Role.prototype.associate = function() {
    app.model.Role.hasMany(
      app.model.User, {
        as: 'role',
        foreignKey: 'role_id',
      }
    );
  };
  return Role;
};

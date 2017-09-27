'use strict';
module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;
  const User = app.model.define('user', {
    id: {
      type: INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    role_id: {
      type: INTEGER,
      defaultValue: 4,
    },
    mail: {
      type: STRING,
      unique: true,
    },
    phone: {
      type: STRING,
      unique: true,
    },
    login: {
      type: STRING,
      unique: true,
    },
    name: STRING(30),
    password: STRING(32),
    age: INTEGER,
    last_sign_in_at: DATE,
    created_at: DATE,
    updated_at: DATE,
  });
  User.findByLogin = async function(login) {
    return await this.findOne({ login });
  };
  // 更新登入时间
  User.prototype.logSignin = async function() {
    await this.update({ last_sign_in_at: new Date() });
  };
  // 查询关联的文章
  User.prototype.findAllPosts = async function() {
    const self = this;
    const posts = await app.model.Post.findAll({
      where: {
        user_id: self.id,
      },
      order: [ 'id' ],
    });
    return posts;
  };
  // 获取 用户权限
  User.prototype.getRole = async function() {
    const self = this;
    const role = await app.model.Role.findOne({
      attributes: [
        'id',
        'name',
        'desp',
      ],
      where: {
        id: self.id,
      },
    });
    return role;
  };
  // 数据关联
  User.prototype.associate = function() {
    app.model.User.hasMany(
      app.model.Post, {
        as: 'posts',
        foreignKey: 'user_id',
      }
    );
    app.model.User.belongsTo(
      app.model.Role, {
        as: 'role',
        foreignKey: 'role_id',
      }
    );
  };
  return User;
};

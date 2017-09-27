'use strict';

/**
 * 用于 初始化数据
 * 创建 超级用户和普通会员
 */

module.exports = app => {
  class InitController extends app.Controller {
    constructor(ctx) {
      super(ctx);
      this.createRule = {
        // accesstoken: 'string',
      };
    }
    async index(ctx) {
      // 初始化 数据
      const roles = await ctx.model.Role.findAll();
      if (roles.length > 0) {
        ctx.body = '你已经初始化过数据';
        return false;
      }
      const superAdmin = await ctx.model.Role.create({
        name: '超级管理员',
        desp: '超级管理员拥有全部权限',
      });
      const Admin = await ctx.model.Role.create({
        name: '管理员',
        desp: '拥有较多的权限权限',
      });
      const bloger = await ctx.model.Role.create({
        name: '博主',
        desp: '拥有自己博客的管理权',
      });
      const member = await ctx.model.Role.create({
        name: '会员',
        desp: '拥有回复的管理权',
      });
      const superAdminUser = await ctx.model.User.create({
        login: 'super',
        name: 'super',
        password: ctx.helper.password('123456'),
        role_id: 1,
        mail: 'super@qq.com',
        phone: '1829261802',
        age: Math.floor(Math.random() * 10),
        last_sign_in_at: new Date(),
        created_at: new Date(),
        updated_at: new Date(),
      });
      const AdminUser = await ctx.model.User.create({
        login: 'admin',
        name: 'admin',
        mail: 'admin@qq.com',
        phone: '1829261803',
        password: ctx.helper.password('123456'),
        role_id: 2,
        age: Math.floor(Math.random() * 10),
        last_sign_in_at: new Date(),
        created_at: new Date(),
        updated_at: new Date(),
      });
      const bolgUser = await ctx.model.User.create({
        login: 'bolg',
        name: 'bolg',
        mail: 'blog@qq.com',
        phone: '1829261804',
        password: ctx.helper.password('123456'),
        role_id: 3,
        age: Math.floor(Math.random() * 10),
        last_sign_in_at: new Date(),
        created_at: new Date(),
        updated_at: new Date(),
      });
      const memberUser = await ctx.model.User.create({
        login: 'member',
        name: 'member',
        password: ctx.helper.password('123456'),
        role_id: 4,
        mail: 'member@qq.com',
        phone: '1829261805',
        age: Math.floor(Math.random() * 10),
        last_sign_in_at: new Date(),
        created_at: new Date(),
        updated_at: new Date(),
      });
      Promise.all([ superAdmin, Admin, bloger, member, superAdminUser, AdminUser, bolgUser, memberUser ]).then(() => {
        ctx.body = '初始化成功！';
      });
    }
  }
  return InitController;
};

'use strict';
const _ = require('lodash');
module.exports = app => {
  class HomeController extends app.Controller {
    async index() {
      const count = this.ctx.session.count = (this.ctx.session.count || 0) + 1;
      const state = this.ctx.app;
      const csrf = this.ctx.csrf;
      const userToken = app.jwt.sign(
        { foo: 'bar', isAdmin: false }
        , app.config.jwt.secret
      );

      const adminToken = app.jwt.sign(
        { foo: 'bar', isAdmin: true }
        , app.config.jwt.secret
      );
      const arr = _.chunk([ 'a', 'b', 'c', 'd' ], 2);

      const pass = this.ctx.helper.password('hello');
      const pass2 =  this.ctx.helper.password('hello');
      const pass3 =  this.ctx.helper.password('hello');
      this.ctx.body = {
        name: 'view test',
        state,
        userToken,
        adminToken,
        arr,
        count,
        csrf,
        pass,
        pass2,
        pass3
      };
    }

    async admin() {
      this.app.locals = { appName: 'showcase' };
      await this.ctx.render('/admin/admin.nunj', { name: 'admin 管理员' });
    }

  }
  return HomeController;
};

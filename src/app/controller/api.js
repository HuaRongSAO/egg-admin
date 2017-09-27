'use strict';
module.exports = app => {
  class ApiController extends app.Controller {
    async index() {
      // console.info(this.ctx.validate())
      const ctx = this.ctx;
      const obj = this.ctx.state;// 可以从state中获取到用户信息
      this.ctx.body = {
        data: [ 'hello', 'world!' ],
        obj,
        ctx,
      };
    }

    async users() {
      this.ctx.body = {
        users: [{
          name: 'hello',
        }, {
          name: 'world!',
        }],
      };
    }

    async admins() {
      const admin = this.ctx.state.user;
      console.log(admin);
      if (!admin.isAdmin) {
        this.ctx.throw(402, 'remote response error');
      }
      this.ctx.body = {
        isAdmin: '1',
      };

    }

  }
  return ApiController;
};

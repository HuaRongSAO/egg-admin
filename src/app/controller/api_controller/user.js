'use strict';
module.exports = app => {
  class ApiUserController extends app.Controller {
    constructor(ctx) {
      super(ctx);
      this.createRule = {
        // accesstoken: 'string',
        // title: 'string',
        // tab: { type: 'enum', values: [ 'ask', 'share', 'job' ], required: false },
        // content: 'string',
      };
    }

    async index() {
      const { ctx } = this;
      const users = await this.ctx.model.User.findAll();
      ctx.body = {
        users,
      };
    }

    async show() {
      const { ctx } = this;
      const id = ctx.params.id;
      const user = await this.ctx.model.User.findById(id);
      const posts = await user.findAllPosts();
      const role = await user.getRole();
      ctx.body = {
        user,
        role,
        posts,
      };
    }

    async create() {
      const hash = this.ctx.helper.hash8('hello');
      const ids = [];
      for (let i = 0; i < 10; i++) {
        const ramd = Math.floor(Math.random() * 100000000);
        const date = new Date();
        const id = await this.ctx.model.User.create({
          login: 'login' + ramd,
          name: 'name' + ramd,
          password: this.ctx.helper.password('123456'),
          role_id: 4,
          age: Math.floor(Math.random() * 10),
          last_sign_in_at: date,
          created_at: date,
          updated_at: date,
        });
        ids.push(id);
      }
      this.ctx.body = {
        hash,
        ids,
      };
      this.ctx.status = 201;
    }

  }

  return ApiUserController;
};

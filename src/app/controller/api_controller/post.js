'use strict';

module.exports = app => {
  class PostController extends app.Controller {
    constructor(ctx) {
      super(ctx);
      this.createRule = {
        // accesstoken: 'string',
      };
    }
    async index() {
      const posts = await this.ctx.model.Post.findAll();
      this.ctx.body = {
        posts,
      };
      this.ctx.status = 201;
    }

    async create() {
      const ids = [];
      for (let i = 1; i < 10; i++) {
        const ramd = Math.floor(Math.random() * 100000000);
        const date = new Date();
        const id = await this.ctx.model.Post.create({
          title: `title${i}`,
          content: `content${i}${ramd}`,
          user_id: i, // 外链
          created_at: date,
          updated_at: date,
        });
        ids.push(id);
      }
      this.ctx.body = {
        ids,
      };
      this.ctx.status = 201;
    }
    async show(ctx) {
      const posts = await ctx.model.Post.findById(ctx.params.id);
      ctx.body = {
        posts,
      };
    }
  }
  return PostController;
};

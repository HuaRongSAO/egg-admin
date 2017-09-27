'use strict';

module.exports = () => {
  return async (ctx, next) => {
    await next();
    if (this.status === 404 && !this.body) {
      if (this.acceptJSON) this.body = { error: 'Not Found' };
      else this.body = '<h1>Page Not Found</h1>';
    }
  };
};

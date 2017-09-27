'use strict';

module.exports = app => {
  const cors = app.middleware.cors;
  const middle = [ cors() ];

  // app.get('/api', ...middle, app.controller.api.index);
  app.resources('users', '/api/users', ...middle, app.controller.apiController.user);
  app.resources('posts', '/api/posts', ...middle, app.controller.apiController.post);
  // app.get('/api/users', ...middle, app.controller.api.users);
  // app.get('/api/admins', ...middle, app.controller.api.admins);
};

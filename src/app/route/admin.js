'use strict';

module.exports = app => {
  app.get('/admin', app.controller.home.admin);
};

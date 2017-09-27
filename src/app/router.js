'use strict';

module.exports = app => {

  app.get('/', 'home.index');
  // 初始化数据
  app.get('/init', 'init.initDatabase.index');
  // 路径 '/admin'
  require('./route/admin')(app);

  // api 路径路由
  require('./route/api')(app);
};

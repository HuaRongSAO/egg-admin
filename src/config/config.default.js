'use strict';

const path = require('path');

module.exports = appInfo => {
  const config = {};
  config.keys = appInfo.name + '_1505441257128_7387_nice_to_meet_you';

  // 配置中间
  config.middleware = [ 'errorHandler', 'notfoundHandler' ];
  config.errorHandler = {
    // 非 `/api/` 路径不在这里做错误处理，留给默认的 onerror 插件统一处理
    match: '/api',
  };
  // 视图文件
  config.view = {
    defaultExtension: '.nunj',
    defaultViewEngine: 'nunjucks',
  };
  // html 模板
  config.nunjucks = {
    // dir: 'path/to/template/dir',
    // default to `{app_root}/app/view`
    cache: true,
  };
  // JsonWebToken 验证
  config.jwt = {
    secret: '%%%@@@woe_asf_csd_kad.asd',
    enable: true, // default is false
    match: '/api', // optional
  };
  // 安全策略
  config.security = {
    csrf: {
      enable: false,
      queryName: '_csrf', // 通过 query 传递 CSRF token 的默认字段为 _csrf
      bodyName: '_csrf', // 通过 body 传递 CSRF token 的默认字段为 _csrf
      headerName: 'x-csrf-token', // 通过 header 传递 CSRF token 的默认字段为 x-csrf-token
    },
  };

  // 错误处理
  config.onerror = {
    // 线上页面发生异常时，重定向到这个页面上
    // middleware: [ 'errorHandler' ],
    errorPageUrl: '/500.html',
  };
  config.notfound = {
    pageUrl: '/public/404.html',
  };

  config.sequelize = {
    dialect: 'mysql', // support: mysql, mariadb, postgres, mssql
    database: 'eggAdmin',
    host: 'localhost',
    port: '3306',
    username: 'root',
    password: 'root',
  };

  return config;
};
// {app_root}/config/config.default.js


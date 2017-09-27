// 用于自定义启动时的初始化工作，可选，具体参见启动自定义。
/**
 启动自定义

 我们常常需要在应用启动期间进行一些初始化工作，等初始化完成后应用才可以启动成功，并开始对外提供服务。

 框架提供了统一的入口文件（app.js）进行启动过程自定义，这个文件只返回一个函数。例如，我们需要在应用启动期间从远程接口加载一份全国城市列表，以便于后续在 Controller 中使用：
 // app.js
 module.exports = app => {
  app.beforeStart(function* () {
    // 应用会等待这个函数执行完成才启动
    app.cities = yield app.curl('http://example.com/city.json', {
      method: 'GET',
      dataType: 'json',
    });
  });
};
 在 Controller 中就可以使用了：

 // app/controller/city.js
 module.exports = function* (ctx) {
  // ctx.app.cities 在上面启动期间已经加载，可以直接使用
}
 注意：在 beforeStart 中不建议做太耗时的操作，框架会有启动的超时检测。
 **/
'use strict';

// 链接数据库
module.exports = app => {
  const isDev = app.env === 'local';
  app.beforeStart(async () => {

    // await app.model.sync({ force: true });
    // 链接数据库
    if (isDev) {
      await app.model.sync({
        force: false, // 设置为true的时候会强行删除数据库
      });
    } else {
      await app.model.sync({
        force: true, // 设置为true的时候会强行删除数据库
      });
    }
  });

};

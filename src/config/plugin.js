'use strict';

// had enabled by egg
exports.static = true;

// html 模板引擎
exports.nunjucks = {
    enable: true,
    package: 'egg-view-nunjucks',
};
// jwt
exports.jwt = {
    enable: true,
    package: 'egg-jwt',
};

// 参数验证 this.ctx.validate(rules,data)
exports.validate = {
    enable: true,
    package: 'egg-validate',
};

//数据库 org sequelize
exports.sequelize = {
    enable: true,
    package: 'egg-sequelize'
}
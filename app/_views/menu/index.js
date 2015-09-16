var View = require('../../../core/view');
var tpl = require('./view.html');

module.exports = new View({
  onInit: function() {
    this.tpl = tpl;
    this.data = {menus: ['首页', '管理房源', '数据分析', '个人中心'] };
  },

  // :TODO
  listener: {
    init: function() {

    },
    update: function() {

    }
  },

  dispatcher: {
    '.js-menu&click': 'test'
  },

  actions: {
    test: function(e) {
      console.log(e, this);
    }
  }
});
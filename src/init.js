import Vue from 'vue';
import App from './app.vue';
import VueRouter from 'vue-router';

import router from './router.js';
import store from './store';

import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'

import Comp1 from './foobar/comp1.vue'

const requireComponent = require.context(
    // 其组件目录的相对路径
    './foobar',
    // 是否查询其子目录
    false,
    // 匹配基础组件文件名的正则表达式
    /\w+\.(vue|js)$/
);
requireComponent.keys().forEach(fileName => {
    // 获取组件配置
    const componentConfig = requireComponent(fileName);
    let componentName = upperFirst(camelCase(fileName.replace(/^\.\/(.*)\.\w+$/, '$1')));
    Vue.component(componentName, componentConfig.default || componentConfig)
})
/* eslint-disable no-new */
Vue.use(VueRouter);
new Vue({
    //   el: '#app',
    //   template: '<App/>',
    store,
    router: router,
    render: createElement => createElement(App),
    components: { App }
}).$mount('#app');
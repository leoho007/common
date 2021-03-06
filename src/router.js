import VueRouter from 'vue-router';
import Foo from './foo.vue';
import Bar from './bar.vue';
import Foobar from './foobar/index.vue';
import Beta from './beta.vue';
import Echart from './echarts/first.vue';

// 2. 定义路由
// 每个路由应该映射一个组件。 其中"component" 可以是
// 通过 Vue.extend() 创建的组件构造器，
// 或者，只是一个组件配置对象。
// 我们晚点再讨论嵌套路由。
const routes = [
    { path: '/', component: null },
    { path: '/foo', component: Foo },
    { path: '/bar', component: Bar },
    { path: '/foobar', component: Foobar },
    { path: '/echart', component: Echart },
    { path: '/beta', component: Beta, props: { from: 'click' } }
];

// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
const router = new VueRouter({
    routes // (缩写) 相当于 routes: routes
});
export default router;

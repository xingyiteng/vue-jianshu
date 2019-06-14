import Vue from 'vue';
import Router from 'vue-router';
import Login from './views/Login.vue';
import Zhuce from './views/zhuce.vue';
import Tj from './views/tuijianzuozhe.vue';
import Home from './components/Home.vue';
import Shoucang from './views/shoucang';
import Xiewenzhang from './views/xiewenzhang/xiewenzhang'
import Suibi from './views/xiewenzhang/suibi'
import wxb from './views/wxb/wxb.vue'
import rmwt from './views/rmwt/rmwt.vue'
import wenzhang from './views/grzx/wenzhang.vue'
import today from './views/today/today.vue'
import xiaoxi from './views/xxlb/xiaoxi.vue'
import xiaoxi1 from './views/xxlb/xiaoxi1.vue'
import xiaoxi2 from './views/xxlb/xiaoxi2.vue'
import xiaoxi3 from './views/xxlb/xiaoxi3.vue'
import xiaoxi4 from './views/xxlb/xiaoxi4.vue'
import wdqb from './views/wdqb.vue'
// import Gzright from "./components/xiaoxi/gzright.vue";
// import Gzdown from "./components/xiaoxi/gzdown.vue"
// import Gzdown1 from "./components/xiaoxi/gzdown1.vue";
// import Gzrighttxt from "./components/xiaoxi/gzrighttxt.vue";
// import Gzliebiao from "./components/xiaoxi/gzliebiao.vue";
// import Jianyouquan from "./components/xiaoxi/jianyouquan.vue";
// import Kate from "./components/xiaoxi/kate.vue";
// import Qiqiqi from "./components/xiaoxi/qiqiqi.vue";
// import Gzqbgz from "./components/xiaoxi/gzqbgz.vue";
Vue.use(Router);

export default new Router({
  // mode: 'history',
  base: process.env.BASE_URL,
  linkActiveClass:'active',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login,
    },
		{
		  path: '/zhuce',
		  name: 'zhuce',
		  component:Zhuce,
    },
    {
		  path: '/zhuce',
		  name: 'zhuce',
		  component:Zhuce,
    },
    {
		  path: '/tuijianzuozhe',
		  name: 'tj',
		  component:Tj,
    },
    {
      path: '/shoucang',
      name: 'shoucang',
      component:Shoucang,
    },
    {
      path: '/xiewenzhang',
      name: 'xiewenzhang',
      component:Xiewenzhang,
    },
    {
      path: '/suibi',
      name: 'suibi',
      component:Suibi,
    },
    {
      path: '/guanzhu',
      name: 'guanzhu',
      component:() => import('./views/guanzhu'),
    },
    {
      path:'/yigouneirong',
      name:'yigouneirong',
      component:() => import('./views/yigouneirong'),
    },
    {
      path: '/wxb',
      name: 'wxb',
      component: wxb
    },
    {
      path: '/rmwt',
      name: 'rmwt',
      component: rmwt
    },
    {
      path: '/today',
      name: 'today',
      component: today
    },
    {
      path: '/xiaoxi',
      name: 'xiaoxi',
      component: xiaoxi
    },
    {
      path: '/xiaoxi1',
      name: 'xiaoxi1',
      component: xiaoxi1
    },
    {
      path: '/xiaoxi2',
      name: 'xiaoxi2',
      component: xiaoxi2
    },
    {
      path: '/xiaoxi3',
      name: 'xiaoxi3',
      component: xiaoxi3
    },
    {
      path: '/xiaoxi4',
      name: 'xiaoxi4',
      component: xiaoxi4
    },
    // {
    //   path: "/guanzhu",
    //   name: "guanzhu",
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: Guanzhu 
    // },
    // {
    //   path: "/gzright",
    //   name: "gzright",
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: Gzright 
    // },
    // {
    //   path: "/gzdown",
    //   name: "gzdown",
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: Gzdown
    // },
    // {
    //   path: "/gzdown1",
    //   name: "gzdown1",
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: Gzdown1
    // },
    // {
    //   path: "/gzrighttxt",
    //   name: "gzrighttxt",
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: Gzrighttxt 
    // },
    // {
    //   path: "/gzliebiao",
    //   name: "gzliebiao",
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: Gzliebiao
    // },
    // {
    //   path: "/jianyouquan",
    //   name: "jianyouquan",
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: Jianyouquan
    // },
    // {
    //   path: "/kate",
    //   name: "kate",
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: Kate
    // },
    // {
    //   path: "/qiqiqi",
    //   name: "qiqiqi",
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: Qiqiqi
    // }, 
    // {
    //   path: "/gzqbgz",
    //   name: "gzqbgz",
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: Gzqbgz
    // }, 
    {
      path: '/wdqb',
      name: 'wdqb',
      component: wdqb
    },
		{
		  path: '/wenzhang',
		  name: 'wenzhang',
		  component: wenzhang,
			children:[{
				path: 'grzx',
				component:() => import('./views/grzx/grzx.vue'),
				},
				{
					path: 'About',
					component:() => import('./views/grzx/About.vue'),
				}
			]
    },
  ]
});

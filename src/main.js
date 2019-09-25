import Vue from 'vue'
import App from './App.vue'
import router from './router'
import * as request from './request'
import store from './store'
import {pay,config} from './pay/index'
Vue.config.productionTip = false

import 'muse-ui/lib/styles/base.less';
import { Progress } from 'muse-ui';
import 'muse-ui/lib/styles/theme.less';
Vue.use(Progress);


import 'wowjs/css/libs/animate.css'







import Helpers from 'muse-ui/lib/Helpers';
Vue.use(Helpers);






import { 
  Swipe,
  SwipeItem,
  Tab,Tabs,
  Popup,
  Toast,
  Row,Col,
  Search,
  Slider,
  RadioGroup,
  Radio,
  Lazyload,
  Cell,CellGroup,
  Sticky 
} from 'vant';
import 'vant/lib/index.css';
Vue.use(Swipe).use(SwipeItem)
.use(Tab).use(Tabs)
.use(Popup)
.use(Toast)
.use(Row).use(Col)
.use(Search)
.use(Slider)
.use(RadioGroup).use(Radio)
.use(CellGroup).use(Cell)
.use(Sticky);

Vue.use(Lazyload,{
  // loading:"/assets/index/lazy.png",
  // error:"/assets/index/lazy.png"
});

// import NProgress from 'nprogress'
// import 'nprogress/nprogress.css' //这个样式必须引入


// NProgress.inc(0.2)
// NProgress.configure({ easing: 'ease', speed: 500, showSpinner: false,color:'rgba(255,255,255,1)' })











router.beforeEach((to, from, next) => {

  if(to.meta.title){
    // document.title=to.meta.title
  }
  // NProgress.start()

  if (to.path == '/author') {
    //进入授权页面

    if (!window.localStorage.openId || window.localStorage.openId == '' || !window.localStorage.uid || window.localStorage.uid == '') {

      next();

    } else {

      next();
      
    }
  }else {
    if (!window.localStorage.openId || window.localStorage.openId == '' || !window.localStorage.uid || window.localStorage.uid == '') {
      window.localStorage.authBeforeFullPath = window.location.href;
      next({ path: '/author' });
    } else {
      next();
    }
  }
  
 



  next()


})



router.afterEach(() => {
  // NProgress.done()
})



Vue.prototype.$get=request.get
Vue.prototype.$post=request.post

Vue.prototype.appId='wxa6acc23ca992289c';
Vue.prototype.$pay=pay;
Vue.prototype.$config=config;





new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

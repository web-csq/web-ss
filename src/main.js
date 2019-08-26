import Vue from 'vue'
import App from './App.vue'
import router from './router'
import * as request from './request'
import store from './store'
Vue.config.productionTip = false

import 'muse-ui/lib/styles/base.less';
import { Progress } from 'muse-ui';
import 'muse-ui/lib/styles/theme.less';
Vue.use(Progress);


import 'wowjs/css/libs/animate.css'







import Helpers from 'muse-ui/lib/Helpers';
Vue.use(Helpers);
import Loading from 'muse-ui-loading';
import 'muse-ui-loading/dist/muse-ui-loading.css';
Vue.use(Loading,{
  overlayColor: 'rgba(0,0,0,0.8)',     // 背景色
  size: 50,
  color: '#ff90f3',      
  text:"加载中...",
  className:"loading"
})





import { Swipe,
   SwipeItem ,
   Tab, Tabs,
   Popup,
   Toast ,
   Row, Col,
   Search,
   Slider ,
   RadioGroup,
   Radio,
   Lazyload ,
   Cell, CellGroup
} from 'vant';
import 'vant/lib/index.css';
Vue.use(Swipe).use(SwipeItem)
.use(Tab).use(Tabs)
.use(Popup)
.use(Toast)
.use(Row).use(Col)
.use(Search )
.use(Slider)
.use(RadioGroup).use(Radio)
.use(CellGroup).use(Cell);

Vue.use(Lazyload,{
  loading:"@/assets/index/lazy.png"
});







router.beforeEach((to, from, next) => {
  if(to.meta.title){
    document.title=to.meta.title
  }
  


  next()
})




Vue.prototype.$get=request.get
Vue.prototype.$post=request.post








new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

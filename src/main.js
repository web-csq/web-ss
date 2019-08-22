import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false



import 'muse-ui/lib/styles/base.less';
import { Progress } from 'muse-ui';
import 'muse-ui/lib/styles/theme.less';

Vue.use(Progress);



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


import BScroll from 'better-scroll'





















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


import Axios from 'axios'
import QS from 'qs'
var axios=Axios.create({
  baseURL:"",
  timeout:5000,
  headers:{
    "Content-Type":"application/x-www-form-urledcoded;charset=UTF-8"
  }
})


Vue.prototype.$http=axios
Vue.prototype.$qs=QS

//axios请求拦截
axios.interceptors.request.use(
  config=>{



      return config
  },
  error=>{




      return Promise.error(error)
  }
)

axios.interceptors.response.use(
  response=>{
      return Promise.resolve(response.data)
  },
  error=>{
      return Promise.reject(error.response)
  }
)







new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  scrollBehavior (to, from, savedPosition) {
    if(savedPosition){
      return savedPosition
    }else{
      return {x:0,y:0}
    }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      meta:{
        keepAlive:true,
        title:"文章"
      },
      component: ()=>import('./views/Home')
    },
    {
      path: '/author',
      name: 'author',
      meta:{
        keepAlive:true,
        title:"善商"
      },
      component: ()=>import('./views/author/Author')
    },
    {
      path: '/index',
      name: 'about',
      meta:{
        keepAlive:true,
        title:"首页"
      },
      component: () => import('./views/Index')
    },
    {
      path: '/articledetail',
      name: 'articledetail',
      meta:{
        keepAlive:false,
        title:"详情"
      },
      component: () => import('./views/ArticleDetail')
    },
    {
      path: '/study',
      name: 'study',
      meta:{
        keepAlive:true,
        title:"课程学习"
      },
      component: () => import('./views/Study')
    },
    {
      path: '/fackback',
      name: 'fackback',
      meta:{
        keepAlive:false,
        title:"反馈"
      },
      component: () => import('./views/Fackback.vue')
    },
    {
      path: '/paysuccess',
      name: 'paysuccess',
      meta:{
        keepAlive:false,
        title:"支付成功"
      },
      component: () => import('./views/PaySuccess.vue')
    },
    {
      path: '/center',
      name: 'center',
      meta:{
        keepAlive:true,
        title:"个人中心"
      },
      component: () => import('./views/Center.vue')
    },
    {
      path: '/mytake',
      name: 'mytake',
      meta:{
        keepAlive:false,
        title:"我的参与"
      },
      component: () => import('./views/Mytake.vue')
    },
    {
      path: '/circle',
      name: 'circle',
      meta:{
        keepAlive:false,
        title:"萌友圈"
      },
      component: () => import('./views/Circle.vue')
    },
    {
      path: '/push',
      name: 'push',
      meta:{
        keepAlive:false,
        title:"推广"
      },
      component: () => import('./views/Push.vue')
    },
    {
      path: '/qrcode',
      name: 'qrcode',
      meta:{
        keepAlive:false,
        title:"二维码推广"
      },
      component: () => import('./views/Qrcode.vue')
    },
    {
      path: '/withdraw',
      name: 'withdraw',
      meta:{
        keepAlive:false,
        title:"提现"
      },
      component: () => import('./views/Withdraw.vue')
    },
    {
      path: '/message',
      name: 'message',
      meta:{
        keepAlive:false,
        title:"消息"
      },
      component: () => import('./views/Message.vue')
    },
    {
      path: '/list',
      name: 'list',
      meta:{
        keepAlive:false,
        title:"排行榜"
      },
      component: () => import('./views/List.vue')
    },
    {
      path: '/client',
      name: 'client',
      meta:{
        keepAlive:false,
        title:"累计客户"
      },
      component: () => import('./views/Client.vue')
    },
    {
      path: '/sublist',
      name: 'sublist',
      meta:{
        keepAlive:false,
        title:"推广员下级列表"
      },
      component: () => import('./views/SubList.vue')
    },
    {
      path: '/pushorder',
      name: 'pushorder',
      meta:{
        keepAlive:false,
        title:"推广订单"
      },
      component: () => import('./views/PushOrder.vue')
    },
    {
      path: '/detail',
      name: 'detail',
      meta:{
        keepAlive:false,
        title:"课程详情"
      },
      component: () => import('./views/Detail.vue')
    },
    {
      path: '*',
      name: 'empty',
      meta:{
        keepAlive:false,
        title:"空白页"
      },
      component: () => import('./views/Empty.vue')
    }
  ]
})

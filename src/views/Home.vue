<template>
  <div class="home" v-if="show">

    <van-swipe :autoplay="2500" :height=250>
      <van-swipe-item v-for="item in bannerList" :key="item.id">
        <img v-lazy="'http://www.shanshangdajiazu.com'+item.img" class="banner-img" @click.prevent="jumpDetail(item.id)"/>
      </van-swipe-item>
    </van-swipe>

    <div>
      <van-tabs
      title-active-color="#6898FB"
      title-inactive-color="#000"
      line-height="2px"
      animated
      >
        <van-tab v-for="item in articleList" :key="item.id" :title="item.sort_name">
          <div class="box-home" v-for="items in item.list" :key="items.id" @click="jumpDetail(items.id)" style="justify-content:space-between;">
              <div>
               {{items.title}}
              </div>
              <img v-lazy="'http://www.shanshangdajiazu.com'+items.img" style="margin-right:.5rem;">
          </div>
        </van-tab>
      </van-tabs>
    </div>

    
    
  </div>
</template>







<script>
import { setTimeout } from 'timers';
// @ is an alias to /src

export default {
  name: 'home',
  data(){
    return{
      bannerList:[],
      articleList:[],
      show:false,
      load:""
    }
  },
  methods:{
    jumpDetail(id){
      console.log(id)
      this.$router.push('/articledetail/'+id)
    },
    getBanner(){
      var that=this
      that.$get('/banner').then(res=>{
        that.bannerList=res.data
         console.log(that.bannerList)
      })
      that.$get('/articleSort').then(res=>{
        that.articleList=res.data
        console.log(that.articleList)
        setTimeout(()=>{
          // that.load.close()
          that.show=true
        },500)
        
      })

      // var load=this.$loading();
      // setTimeout(()=>{
      //   load.close()
      //   
      // },2000)
      
    }
  },
  created() {
    // this.load=this.$loading()
    this.getBanner()
  },
  components: {
   
  }
}
</script>









<style scoped>
.box-home div{
  width: 68vw;
  font-size:1.02rem;
  padding: 1rem 0 1rem 0.9rem;
  font-family:SourceHanSansCN-Regular;
  font-weight:400;
  color:rgba(51,51,51,1);
}
.box-home img{
  width: 23vw;
  height: 5rem;
  border-radius: 8px;
  margin-left: .1rem;
}
.box-home div{
  
  width: 74%;
  height: 4rem;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.banner-img{
  width: 100vw;
  display: block;
  border-radius:8px; 
  height: 100%;
}
.van-tabs >>> .van-tabs__line{
  background-color: #6898FB!important;
}
.van-tabs >>> .van-ellipsis{
  letter-spacing: 0.1rem;
}
.van-tabs >>> [class*=van-hairline]::after{
  border: 0 !important;
  border-bottom: 1px solid #ccc!important;
}
.box-home:last-child{
  margin-bottom: 1rem;
}
</style>

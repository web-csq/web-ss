<template>
  <div class="home">

    <van-swipe :autoplay="2500" :height=300>
      <van-swipe-item>
        <img src="@/assets/index/banner.png" class="banner-img" @click.prevent="jumpDetail"/>
      </van-swipe-item>
      <van-swipe-item>
        <img src="@/assets/index/banner.png" class="banner-img" @click.prevent="jumpDetail"/>
      </van-swipe-item>
      <van-swipe-item>
        <img src="@/assets/index/banner.png" class="banner-img" @click.prevent="jumpDetail"/>
      </van-swipe-item>
    </van-swipe>

    <div>
      <van-tabs
      title-active-color="#6898FB"
      title-inactive-color="#000"
      line-height="2px"
      animated
      >
        <van-tab title="精品干货" >
          <div class="box-home" @click="jumpDetail" style="justify-content:space-between;">
              <div>
                娱乐圈里哪些声音好听到爆的 “低 娱乐圈里哪些声音好听到爆的 “低 音炮”，是怎么练声的？
              </div>
              <img src="@/assets/index/touxiang.png" style="margin-right:.5rem;">
          </div>
          <div class="box-home" @click="jumpDetail">
              <div>
                “大爷腔” 是什么，为什么有人喜 欢有人却讨厌？
              </div>
              <img src="@/assets/index/touxiang2.png">
          </div>
          <div class="box-home" @click="jumpDetail">
              <div>
                娱乐圈里哪些声音好听到爆的 “低 音炮”，是怎么练声的？
              </div>
              <img src="@/assets/index/touxiang.png">
          </div>
          <div class="box-home" @click="jumpDetail">
              <div>
                娱乐圈里哪些声音好听到爆的 “低 音炮”，是怎么练声的？
              </div>
              <img src="@/assets/index/touxiang.png">
          </div>
        </van-tab>
        <van-tab title="训练作品" >
          <div class="box-home">
              <div>
                娱乐圈里哪些声音好听到爆的 “低 音炮”，是怎么练声的？
              </div>
              <img src="@/assets/index/touxiang.png">
          </div>
        </van-tab>
        <van-tab title="声音特色" >
          <div class="box-home">
              <div>
                娱乐圈里哪些声音好听到爆的 “低 音炮”，是怎么练声的？
              </div>
              <img src="@/assets/index/touxiang.png">
          </div>
        </van-tab>
        <van-tab title="时时推荐" >
          <div class="box-home">
              <div>
                娱乐圈里哪些声音好听到爆的 “低 音炮”，是怎么练声的？
              </div>
              <img src="@/assets/index/touxiang.png">
          </div>
        </van-tab>
        <van-tab title="时时1" >
          <div class="box-home">
              <div>
                娱乐圈里哪些声音好听到爆的 “低 音炮”，是怎么练声的？
              </div>
              <img src="@/assets/index/touxiang.png">
          </div>
        </van-tab>
        <van-tab title="时时2" >
          <div class="box-home">
              <div>
                娱乐圈里哪些声音好听到爆的 “低 音炮”，是怎么练声的？
              </div>
              <img src="@/assets/index/touxiang.png">
          </div>
        </van-tab>
        <van-tab title="时时3" >
          <div class="box-home">
              <div>
                娱乐圈里哪些声音好听到爆的 “低 音炮”，是怎么练声的？
              </div>
              <img src="@/assets/index/touxiang.png">
          </div>
        </van-tab>
      </van-tabs>
    </div>

    
    
  </div>
</template>







<script>
// @ is an alias to /src

export default {
  name: 'home',
  data(){
    return{
     
    }
  },
  methods:{
    jumpDetail(){
      this.$router.push('/articledetail')
    }
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

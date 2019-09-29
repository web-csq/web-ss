<template>
    <div class="index">
        <div class="bg">
            <img v-lazy="info.imgUrl" alt="">
            <div class="name">{{info.nickname}}</div>
            <div class="level" v-if="info.level>1">{{info.levelname}}</div>
        </div>
        <div class="box-index" style="padding:1rem;width:85vw;">
            <div @click="jumpMyTake">
                <van-row>
                    <van-col span="4">
                        <img src="@/assets/center/book.png" alt="" class="left">
                    </van-col>
                    <van-col span="18">
                        <div class="text">我的参与</div>
                    </van-col>
                    <van-col span="2">
                        <img src="@/assets/center/you.png" alt="" class="you">
                    </van-col>
                </van-row>
            </div>
        </div>
        <div class="box-index" style="padding:1rem;width:85vw;">
            <div @click="jumpCircle">
                <van-row>
                    <van-col span="4">
                        <img src="@/assets/center/king.png" alt="" class="left">
                    </van-col>
                    <van-col span="18">
                        <div class="text">盟友圈</div>
                    </van-col>
                    <van-col span="2">
                        <img src="@/assets/center/you.png" alt="" class="you">
                    </van-col>
                </van-row>
            </div>
        </div>
        <!-- 提示 -->
    <van-popup v-model="middleShow" transition="fade">
      <div style="position:relative;top:0;left:0;width:64vw;">
        <div style="background:transparent;height:2rem;"> 
          <img src="@/assets/index/del.png" style="width:1.8rem;height:1.8rem;float:right;" @click="hide">
        </div>
        <img src="@/assets/index/tip.png" alt="" style="width:75%;margin:0 auto;display:block;" @click="showPopup(2)">
      </div>
    </van-popup>
    <!-- 支付 -->
    
    </div>
</template>

<script>
export default {
    data(){
        return{
            info:{},
            middleShow:false,
            show:false,
            load:"",
            level:-1,
        }
    },
    methods:{
        jumpMyTake(){
            // if(this.info.level<1){
            //     this.middleShow=true
            //     return;
            // }

            this.$router.push('/mytake')
        },
        jumpCircle(){
            if(this.info.level<2){
                this.middleShow=true;
                return;
            }
            this.$router.push('/circle')
        },
        getData(){
            let that=this;
            that.$post('/refresh',{uid:window.localStorage.uid}).then(res=>{
                console.log(res)
                that.info=res.data;
               
                setTimeout(()=>{
                    // that.load.close()
                },500)
            })
        },
        hide(){
            this.middleShow=false;
            this.show=false
        },
        showPopup(type){

            this.$router.push('/index')

        },
        
    },
    created () {
        // this.load=this.$loading()
        // this.$config()
        this.getData()
    }
}
</script>


<style scoped>
.bg{
    width: 100vw;
    height: 14rem;
    background: url('../assets/center/centerbg.png') no-repeat;
    background-size: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
} 
.bg img{
    width: 4rem;
    height: 4rem;
    border-radius:50%;
    display: block;
    margin: 0 auto; 
    
}
.name{
    font-size:0.8rem;
    font-family:SourceHanSansCN-Regular;
    font-weight:400;
    color:rgba(255,255,255,1);
    text-align: center;
    letter-spacing: 2px;
    margin-top: 0.5rem;
}
.level{
    font-size:0.8rem;
    display: inline-block;
    font-family:SourceHanSansCN-Regular;
    font-weight:400;
    color:rgba(24,151,255,1);
    border: 1px solid #fff;
    border-radius: 16px;
    background: #fff;
    margin: 1rem auto 0;
    text-align: center;
    padding: .2rem 1rem;
}
.left{
    width: 1.3rem;
    height: 1.3rem;
    margin-left:0.5rem;
    margin-top: 0.2rem;
}
.text{
    font-size:1rem;
    font-family:SourceHanSansCN-Normal;
    font-weight:400;
    color:rgba(51,51,51,1);
}
.you{
    width: 0.6rem;
    height: 1.2rem;
    margin-top: 0.2rem;
}

.pop{
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  top: 0;
  left: 0;
  width: 100vw;
  background: #fff;
}
.pop div{
  font-size:1rem;
  font-family:SourceHanSansCN-Medium;
  font-weight:500;
  color:rgba(0,0,0,1);
  line-height: 2rem;
  
}
.pop img{
  position: absolute;
  right: 1rem;
  top:0.7rem;
  width: 0.8rem;
  height: 0.8rem;
}
.weixin,.ali{
  display: flex;
  padding: 0.5rem 0 0.5rem 1.5rem;
  background: #fff;
}
.weixin img{
  width: 1.5rem;
  height: 1.5rem;
}
.ali img{
  width: 1.5rem;
  height: 1.5rem;
}
.ali span,.weixin span{
  padding-left: 1.5rem;
  font-size:1rem;
  font-family:SourceHanSansCN-Regular;
  font-weight:400;
  color:rgba(92,92,92,1);
  letter-spacing: 0.1rem;
  
}
.index >>> .van-popup{
    background-color: transparent;
}
</style>
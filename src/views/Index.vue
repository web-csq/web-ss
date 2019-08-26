<template>
  <div class="index">
    <mu-ripple color="#2196f3" :opacity="0.2" style="width:100vw;height:100vh">
      <img src="@/assets/index/person.png" alt="" style="width:100vw">
    </mu-ripple>
    <div class="box-index">

      <div class="box-line">
        <img src="@/assets/index/go2.png" alt="">
        <div>
          <span>新长征路上</span>已成功订阅！
        </div>
      </div>
      <div class="box-line">
        <img src="@/assets/index/go2.png" alt="">
        <div>
          <span>新长征路上</span>已成功订阅！
        </div>
      </div>
      <div class="box-line">
        <img src="@/assets/index/go2.png" alt="">
        <div>
          <span>新长征路上</span>已成功订阅！
        </div>
      </div>
      <div class="box-line">
        <img src="@/assets/index/go2.png" alt="">
        <div>
          <span>新长征路上</span>已成功订阅！
        </div>
      </div>
    </div>

    <h2 class="title">经典推荐</h2>
    <h4 class="sub-title">老师示范 &nbsp; 学员跟练</h4>

    <div class="subbox">
        <div class="wow bounceInDown" data-wow-delay="0.2s" style="box-shadow:0px 4px 10px 0px rgba(153,174,223,0.57);width:31vw" @click="showPopup">
          <img src="@/assets/index/go1.png" alt="">
          <h4>爱享训练</h4>
          <p>认识自己，把握自 己，爱自己</p>
        </div>
      <div class="wow bounceInDown" data-wow-delay="0.5s" style="box-shadow:0px 4px 10px 0px rgba(153,174,223,0.57);width:31vw" @click="showMiddle">
        <img src="@/assets/index/go2.png" alt="">
        <h4>动感强化训练</h4>
        <p>睡服她，让她欲罢 不能</p>
      </div>
      <div class="wow bounceInDown" data-wow-delay="0.8s" style="box-shadow:0px 4px 10px 0px rgba(153,174,223,0.57);width:31vw" @click="jumpStudy">
        <img src="@/assets/index/go3.png" alt="">
        <h4>情侣双休训练</h4>
        <p>解锁性爱的高阶玩法</p>
      </div>
    </div>
    <div style="font-size:1.4rem;font-family:SourceHanSansCN-Regular;font-weight:400;color:rgba(255,73,74,1);padding-left:1rem">
      ￥1.00
    </div>


    <h2 class="title">应用训练</h2>
    <div class="wow bounceInLeft" data-wow-delay="0.3s">
      <img src="@/assets/index/floor1.png" alt="" class="img" @click="jumpStudy">
    </div>
    

    <h2 class="title">拔高训练</h2>
    <div class="wow bounceInRight" data-wow-delay="0.6s">
       <img src="@/assets/index/floor2.png" alt="" class="img" @click="showAnswer">
    </div>
   
    <div class="bottom">
      提升魅力，重新定义品质生活
    </div>
    <div style="width:100vw;height:3rem;"></div>

    <div class="bottom-div">
      <button class="bottom-btn" @click="showPopup">
      ￥1998元立即开通
      </button>
    </div>





    <!-- 支付 -->
    <van-popup
      v-model="show"
      round
      position="bottom"
      :style="{ height: '20%' }"
      >
      <div style="height:100%;background: #fff;">
        <div class="pop">
          <div>请选择支付方式</div>
          <img src="@/assets/index/hide.png" @click="hide">
        </div>
        <div class="weixin" @click="jumpPaySuccess">
          <img src="@/assets/index/weixin.png" alt="">
          <span>微信支付</span>
        </div>
        <div class="ali">
          <img src="@/assets/index/ali.png" alt="">
          <span>支付宝支付</span>
        </div>
        <div style="height:1.2rem;background: #fff;"></div>
      </div>
    </van-popup>



    <!-- 提示 -->
    <van-popup v-model="middleShow" transition="fade">
      <div style="position:relative;top:0;left:0;width:64vw;">
        <div style="background:transparent;height:2rem;"> 
          <img src="@/assets/index/del.png" style="width:1.8rem;height:1.8rem;float:right;" @click="hide">
        </div>
        <img src="@/assets/index/tip.png" alt="" style="width:75%;margin:0 auto;display:block;" @click="pay">
      </div>
    </van-popup>

    <!-- 答题 -->
    <van-popup v-model="anwserShow" transition="fade">
      <div style="position:relative;top:0;left:0;width:70vw;">
        <img src="@/assets/index/del.png" style="width:1.2rem;height:1.2rem;position:absolute;top:0.5rem;right:0.5rem" @click="hide">
        <img src="@/assets/index/answerbg.png" style="width:100%;" >
        <div class="answer-title">
          请回答以下问题
        </div>
        <div class="answer-list">

          <!-- 第一题 -->
          <mu-scale-transition>
          <div class="answer" v-show="number==1">
            <div class="answer-tit">
              经常做凯格尔运动，什么地方的肌肉会变的强大 ( )
            </div>
            <div class="answer-content">
              <div>
                <van-radio-group v-model="radio1">
                  <van-cell-group>
                    <van-cell title="A 胸肌" :class="radio1==1?'select':'no-select'" clickable @click="radio1 = '1'">
                      <van-radio slot="left-icon" name="1" />
                    </van-cell>
                    <van-cell title="B 小腿部肌肉" :class="radio1==2?'select':'no-select'" clickable @click="radio1 = '2'">
                      <van-radio slot="left-icon" name="2" />
                    </van-cell>
                    <van-cell title="C 盆底的肌肉" :class="radio1==3?'select':'no-select'" clickable @click="radio1 = '3'">
                      <van-radio slot="left-icon" name="3" />
                    </van-cell>
                    <van-cell title="D 背部的肌肉" :class="radio1==4?'select':'no-select'" clickable @click="radio1 = '4'">
                      <van-radio slot="left-icon" name="4" />
                    </van-cell>
                  </van-cell-group>
                </van-radio-group>
              </div>
              <div class="right" v-if="anshow1">
                * 正确答案为：C
              </div>
            </div>
          </div>
          </mu-scale-transition>



          <!-- 第二题 -->
          <mu-scale-transition>
          <div class="answer" v-show="number==2">
            <div class="answer-tit">
              是么时候适合做壮腰健肾训练 ( )
            </div>
            <div class="answer-content">
              <div>
                <van-radio-group v-model="radio2">
                  <van-cell-group>
                    <van-cell title="A 吃饭完立马可以做" :class="radio2==1?'select':'no-select'" clickable @click="radio2 = '1'">
                      <van-radio slot="left-icon" name="1" />
                    </van-cell>
                    <van-cell title="B 工作很累的时候" :class="radio2==2?'select':'no-select'" clickable @click="radio2 = '2'">
                      <van-radio slot="left-icon" name="2" />
                    </van-cell>
                    <van-cell title="C 身体虚弱的时候" :class="radio2==3?'select':'no-select'" clickable @click="radio2 = '3'">
                      <van-radio slot="left-icon" name="3" />
                    </van-cell>
                    <van-cell title="D 精力充沛的时候" :class="radio2==4?'select':'no-select'" clickable @click="radio2 = '4'">
                      <van-radio slot="left-icon" name="4" />
                    </van-cell>
                  </van-cell-group>
                </van-radio-group>
              </div>
              <div class="right" v-if="anshow2">
                * 正确答案为：D
              </div>
            </div>
          </div>
          </mu-scale-transition>


          <!-- 第三题 -->
          <mu-scale-transition>
          <div class="answer" v-show="number==3">
            <div class="answer-tit">
              TK运动，是哪两项运动 ( )
            </div>
            <div class="answer-content">
              <div>
                <van-radio-group v-model="radio3">
                  <van-cell-group>
                    <van-cell title="A 提肛和鼻子用力吸气" :class="radio3==1?'select':'no-select'" clickable @click="radio3 = '1'">
                      <van-radio slot="left-icon" name="1" />
                    </van-cell>
                    <van-cell title="B 提肛和收缩盆底的肌肉" :class="radio3==2?'select':'no-select'" clickable @click="radio3 = '2'">
                      <van-radio slot="left-icon" name="2" />
                    </van-cell>
                    <van-cell title="C 咬紧牙关和鼻子用力吸气" :class="radio3==3?'select':'no-select'" clickable @click="radio3 = '3'">
                      <van-radio slot="left-icon" name="2" />
                    </van-cell>
                    <van-cell title="D 收缩盆底肌肉和要紧牙关" :class="radio3==4?'select':'no-select'" clickable @click="radio3 = '4'">
                      <van-radio slot="left-icon" name="2" />
                    </van-cell>
                  </van-cell-group>
                </van-radio-group>
              </div>
              <div class="right" v-if="anshow3">
                * 正确答案为：B
              </div>
            </div>
          </div>
          </mu-scale-transition>


          <!-- 第四题 -->
          <mu-scale-transition>
          <div class="answer" v-show="number==4">
            <div class="answer-tit">
              下面说法正确的是 ( )
            </div>
            <div class="answer-content">
              <div>
                <van-radio-group v-model="radio4">
                  <van-cell-group>
                    <van-cell title="A 做TK运行时，鼻子是慢慢的吸气" :class="radio4==1?'select':'no-select'" clickable @click="radio4 = '1'">
                      <van-radio slot="left-icon" name="1" />
                    </van-cell>
                    <van-cell title="B 做TK运动时，必须配合上三大要点" :class="radio4==2?'select':'no-select'" clickable @click="radio4 = '2'">
                      <van-radio slot="left-icon" name="2" />
                    </van-cell>
                    <van-cell title="C 做TK运动时，牙关始终是要紧的" :class="radio4==3?'select':'no-select'" clickable @click="radio4 = '3'">
                      <van-radio slot="left-icon" name="2" />
                    </van-cell>
                    <van-cell title="D 做TK运动时，可以不闭嘴" :class="radio4==4?'select':'no-select'" clickable @click="radio4 = '4'">
                      <van-radio slot="left-icon" name="2" />
                    </van-cell>
                  </van-cell-group>
                </van-radio-group>
              </div>
              <div class="right" v-if="anshow4">
                * 正确答案为：B
              </div>
            </div>
          </div>
          </mu-scale-transition>





        </div>
        


      <button class="next" @click="next">
        下一题
      </button>

      </div>
    </van-popup>


















  </div>
</template>



<script>
import { setTimeout } from 'timers';
import { WOW } from 'wowjs'
export default {
  data(){
    return{
      show:false,
      middleShow:false,
      anwserShow:false,
      radio1:'1',
      radio2:'1',
      radio3:'1',
      radio4:'1',
      anshow1:false,
      anshow2:false,
      anshow3:false,
      anshow4:false,
      number:1
    }
  },
  methods: {
    showPopup(){
      this.show=true

      // var that=this
      
      // var loading=that.$loading();
      // setTimeout(() => {
      //   loading.close();
      // }, 2000)
    },
    hide(){
      this.show=false;
      this.middleShow=false;
      this.anwserShow=false
    },
    showMiddle(){
      this.middleShow=true
    },
    pay(){
      this.middleShow=false
      this.show=true
    },
    showAnswer(){
      this.anwserShow=true
    },
    jumpStudy(){
      this.$router.push('/study')
    },
    next(){
      var that=this

      if(that.number==1){
        console.log("第一题")
        if(that.radio1!=3){
          console.log("大错了")
          if(that.anshow1==false){
            that.anshow1=true;
            console.log("显示答案")
            return;
          }else{
            this.number=2
            return;
          }
        }else{
          this.number=2
          return
        }
      }
      if(that.number==2){
        if(that.radio2!=4){
          if(that.anshow2==false){
            that.anshow2=true;
            return;
          }else{
            this.number=3
            return;
          }
        }else{
          this.number=3
          return;
        }
      }
      if(that.number==3){
        if(that.radio3!=2){
          if(that.anshow3==false){
            that.anshow3=true;
            return;
          }else{
            this.number=4
            return;
          }
        }else{
          this.number=4
          return;
        }
      }
      if(that.number==4){
        if(that.radio4!=2){
          if(that.anshow4==false){
            that.anshow4=true;
            return;
          }else{
            that.number=5
          }
        }else{
          that.number=5
        }
      }
      if(that.number==5){
        that.anwserShow=false;
        that.number=1
        that.anshow1=false;
        that.anshow2=false;
        that.anshow3=false;
        that.anshow4=false;
        this.$router.push('/fackback')
      }
 
    },
    jumpPaySuccess(){
      this.$router.push('/paysuccess')
    },
    getData(){
      let that=this;
      var data={
        uid:3
      }
      that.$get('http://rh.boxinid.com/api/product').then((res)=>console.log(res))
    }
 
  },
  created () {
    this.getData()
  },
  mounted() {
    var wow =new WOW({
      boxClass:"wow",
      live:false,
      offset:0,
      moblie:true
    })
    wow.init()
  },
}
</script>




<style scoped>
.box-line{
  display: flex;
  padding: 0 0 0 0.5rem;
  align-items: center;
  margin: 0.5rem;
}
.box-line img{
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
}
.box-line div{
  font-size:0.8rem; 
  margin:0 0 0 0.5rem; 
  font-family:SourceHanSansCN-Normal;
  font-weight:400;
  color:rgba(126,156,255,1);
}
.subbox{
  display:flex;
  justify-content:space-around;
  margin: 1rem 0;
}
.subbox div img{
  width: 100%;
  height: 7rem;
}
.subbox div h4{
  margin: 0.5rem 0 0 0.3rem;
  font-size:1rem;
  font-family:SourceHanSansCN-Regular;
  font-weight:400;
  color:rgba(51,51,51,1);
}
.subbox div p{
  width: 90%;
  margin:0.2rem 0 0.5rem 0.3rem;
  font-size:0.7rem;
  font-family:SourceHanSansCN-Normal;
  font-weight:400;
  color:rgba(154,147,147,1);
}
.bottom{
  font-size:0.7rem;
  letter-spacing: 0.3rem;
  font-family:SourceHanSansCN-Regular;
  font-weight:400;
  color:rgba(101,101,101,1);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 5rem;
}
.img{
  width: 96vw;
  margin: 0.5rem auto 1rem;
  display: block;
}
.bottom-btn{
  display: block;
  width: 90vw;
  height: 2.7rem;
  margin: 0 auto;
  font-size:1.1rem;
  font-family:SourceHanSansCN-Medium;
  font-weight:500;
  color:rgba(253,254,255,1);
  text-shadow:0px 3px 2px rgba(174,185,190,0.7);
  background: url('../assets/index/btn-bg.png') no-repeat ;
  background-size: 100%;
  letter-spacing: 0.2rem;
}
.bottom-div{
  width: 100vw;
  background: #fff;
  box-shadow:0 2px 5px #ccc;
  padding:0.5rem 0;
  position:fixed;
  bottom:0;
  left:0
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
.van-popup{
  background:rgba(0,0,0,0)
}
.answer-title{
  position: relative;
  top: 0;
  left:0;
  font-size:1rem;
  font-family:SourceHanSansCN-Regular;
  font-weight:400;
  color:rgba(255,255,255,1);
  position: absolute;
  top: 1.5rem;
  left:4rem;
  letter-spacing: 0.1rem;
}
.next{
  position: absolute;
  bottom: 1.5rem;
  left:1.5rem;
  display: block;
  width: 55vw;
  height: 2.5rem;
  margin: 0 auto;
  font-size:1.1rem;
  font-family:SourceHanSansCN-Medium;
  font-weight:500;
  color:rgba(253,254,255,1);
  text-shadow:0px 3px 2px rgba(174,185,190,0.7);
  background: url('../assets/index/btnnext.png') no-repeat ;
  background-size: 100%;
  letter-spacing: 0.2rem;
}
.answer-list{
  position: absolute;
  top: 5rem;
  left:0rem;
  padding:1.5rem 1rem; 
  font-size: 1rem;
  width: 100%;
  display: flex;
}
.no-select{
  border-radius: 8px;
  height:2rem;
  box-shadow:0 0 2px #ccc;
  margin: 1.5rem auto 0;
  color:rgba(73,73,73,1);
}
.select{
  background-color: #7B54E8;
  border-radius: 8px;
  height:2rem;
  box-shadow:0 0 2px #7B54E8;
  margin: 1.5rem auto 0;
}
.answer-content >>> .van-cell__title{
  font-size:.8rem;
  font-family:PingFang-SC-Medium;
  font-weight:500;
  color:rgba(255,254,254,1);
  display: flex;
  align-items: center;
}
.answer-content .no-select >>> .van-cell__title{
  color:rgba(73,73,73,1);
}
.answer-content .no-select >>> .van-cell__title span {
  white-space: nowrap;
}
.answer-content .select >>> .van-cell__title span {
  white-space: nowrap;
}
.answer{
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  padding: 1rem ;
}
.right{
  font-size:1rem;
  text-align: center;
  margin-top:.5rem;
  font-family:PingFang-SC-Medium;
  font-weight:500;
  color:rgba(255,53,53,1);
}

.fade-enter-active, .fade-leave-active {
  transition: all 1s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform:translate3d(-120px,-500px,0) scale(.5)
}






</style>

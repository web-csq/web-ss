<template>
  <div class="index">
    
    <mu-ripple color="#2196f3" :opacity="0.2" style="width:100vw;height:100vh">
      <img v-lazy="'http://www.shanshangdajiazu.com'+banner" alt="" style="width:100vw;height:100vh">
    </mu-ripple>
    <div class="box-index" style="overflow:hidden;height:9rem;padding:0;width:84vw;">
      <div :style="`transform:translateY(${-1.69*num}rem)`" class="trans">
        <div class="box-line" v-for="(item,index) in list" :key="index">
          <img v-lazy="item.imgUrl" alt="">
          <div>
            <span>{{item.nickname}}</span> 已成功订阅！
          </div>
        </div>
     </div>
    </div>

    <h2 class="title">{{sort1.sort_name}}</h2>
    <h4 class="sub-title" style="font-size:.8rem;">老师示范 &nbsp; 学员跟练</h4>

    <div class="subbox">
        <div class="wow bounceInDown" data-wow-delay="0.2s" style="border-radius:6px;box-shadow:0px 4px 10px 0px rgba(153,174,223,0.57);width:31vw" @click="level<1?showPopup(1,content1.id):jumpStudy(content1.id)">
          <img v-lazy="'http://www.shanshangdajiazu.com'+content1.img" alt="">
          <h4>爱享训练</h4>
          <p>认识自己，把握自己，爱自己</p>
        </div>



      <div class="wow bounceInDown" data-wow-delay="0.5s" style="border-radius:6px;box-shadow:0px 4px 10px 0px rgba(153,174,223,0.57);width:31vw" @click="level>1?jumpStudy(content2.id):showMiddle(2)">
        <img v-lazy="'http://www.shanshangdajiazu.com'+content2.img" alt="">
        <h4>动感强化训练</h4>
        <p>睡服她，让她欲罢 不能</p>
      </div>
      <div class="wow bounceInDown" data-wow-delay="0.8s" style="border-radius:6px;box-shadow:0px 4px 10px 0px rgba(153,174,223,0.57);width:31vw" @click="level>1?jumpStudy(content3.id):showMiddle(2)">
        <img v-lazy="'http://www.shanshangdajiazu.com'+content3.img" alt="">
        <h4>情侣双休训练</h4>
        <p>解锁性爱的高阶玩法</p>
      </div>
    </div>

    


    <h2 class="title">{{sort2.title}}</h2>
    <div class="wow bounceInLeft" data-wow-delay="0.3s">
      <img v-lazy="'http://www.shanshangdajiazu.com'+sort2.img" alt="" class="img" @click="level>1?jumpStudy(sort2.id):showMiddle(2)">
    </div>

    
    <h2 class="title">{{sort3.title}}</h2>
    <div class="wow bounceInRight" data-wow-delay="0.6s">
       <img v-lazy="'http://www.shanshangdajiazu.com'+sort3.img" alt="" class="img" @click="level<2?showMiddle(2):showAnswer()">
    </div>
   
    <div class="bottom">
      扫码加入我们，一起遇见魅力自己！
    </div>
    <div style="width:100vw;height:1rem;"></div>

    <!-- <div class="bottom-div">
      <button class="bottom-btn" @click="showPopup(2)">
      ￥{{parseInt(money2)}}元立即开通
      </button>
    </div> -->
    <div class="qrcode">
        <img v-lazy="'http://www.shanshangdajiazu.com'+qrcode" style="width:100%;height:100%">
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
        <div class="weixin" ref="pay" @click="wxPay">
          <img src="@/assets/index/weixin.png" alt="">
          <span>微信支付</span>
        </div>
        <div class="ali" @click="Alipay">
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
        <img src="@/assets/index/tip2.png" alt="" style="width:75%;margin:0 auto;display:block;" @click="showPopup(2)">
      </div>
    </van-popup>

    <!-- 答题 -->
    <van-popup v-model="anwserShow" transition="fade">
      <div style="position:relative;top:0;left:0;width:80vw;">
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

export default {
  data(){
    return{
      show:false,
      list:[
        {id:1,nickname:"孤单***的温柔",imgUrl:require('../assets/index/go1.png')},
        {id:2,nickname:"醉酒***鞭名马",imgUrl:require('../assets/index/yangyang.jpg')},
        {id:3,nickname:"敬你***春风野马",imgUrl:require('../assets/index/vuebg.png')},
        {id:4,nickname:"守我***旧时约",imgUrl:require('../assets/index/touxiang2.png')},
        {id:5,nickname:"是否就***是你的复垦",imgUrl:require('../assets/index/touxiang.png')},
        {id:6,nickname:"夏至未***至",imgUrl:require('../assets/index/teacher3.png')},
        {id:7,nickname:"新长***征路上",imgUrl:require('../assets/index/teacher.png')},
        {id:8,nickname:"青***笙挽歌余梦初",imgUrl:require('../assets/index/go3.png')},
        {id:9,nickname:"你好水***电费",imgUrl:require('../assets/index/floor2.png')},
        {id:10,nickname:"酒街***少年他是暖阳？",imgUrl:require('../assets/index/edit.png')},
        {id:11,nickname:"风***是甜的",imimgUrlg:require('../assets/index/comment.png')},
        {id:12,nickname:"是否***就是你的复垦",imgUrl:require('../assets/index/btn-bg.png')},
        {id:13,nickname:"温柔尝***尽了吗",imgUrl:require('../assets/index/dui.png')},
        {id:14,nickname:"清风***挽发",imgUrl:require('../assets/center/person.png')},
        {id:15,nickname:"听风***执酒",imgUrl:require('../assets/center/lvling.png')},
        {id:16,nickname:"一语***呢喃",imgUrl:require('../assets/center/list.png')},
        {id:17,nickname:"拂風一身***ㄡ满",imgUrl:require('../assets/center/ling.png')},
        {id:18,nickname:"醉酒***鞭名马",imgUrl:require('../assets/center/laba.png')},
        {id:19,nickname:"一抹泪***光ヽ诉尽百般思念",imgUrl:require('../assets/center/king.png')},
        {id:20,nickname:"清秋***落叶聚还散",imgUrl:require('../assets/center/intr.png')},
        {id:21,nickname:"怀抱***清风",imgUrl:require('../assets/index/go1.png')},
        {id:22,nickname:"绾起***梨花月",imgUrl:require('../assets/index/go1.png')},
        {id:23,nickname:"浅***若清风",imgUrl:require('../assets/index/go1.png')},
        {id:24,nickname:"三***代同堂。",imgUrl:require('../assets/center/huangshu.png')},
        {id:25,nickname:"是***我家的人来",imimgUrlg:require('../assets/index/go1.png')},
        {id:26,nickname:"宝贝一***家亲",imgUrl:require('../assets/center/dao.png')},
        {id:27,nickname:"看***宝宝的进来",imgUrl:require('../assets/index/go1.png')},
        {id:28,nickname:"恭喜发***财",imgUrl:require('../assets/center/centerbg.png')},
        {id:29,nickname:" we are*** 伐木累",imgUrl:require('../assets/index/go1.png')},
        {id:30,nickname:"中***国美食协会",imgUrl:require('../assets/center/book.png')},
        {id:31,nickname:"快乐***家族",imgUrl:require('../assets/index/go1.png')},
        {id:32,nickname:"生活***过得像句费话",imgUrl:require('../assets/center/bg_detail.png')},
        {id:33,nickname:"或***许、很美",imgUrl:require('../assets/index/go1.png')},
        {id:34,nickname:"爱***如柠檬滋味酸",imgUrl:require('../assets/center/bei.png')},
        {id:35,nickname:"已风干***的迷茫",imgUrl:require('../assets/index/go1.png')},
        {id:36,nickname:"亿人不***及你一人",imgUrl:require('../assets/center/sex.png')},
      ],
      timer:"",
      num:0,
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
      number:1,
      sort1:{},
      sort2:{},
      sort3:{},
      content1:"",
      content2:"",
      content3:"",
      money1:-1,
      money2:-1,
      banner:"",
      type:-1,
      level:-1,
      load:"",
      cid:-1,
      qrcode:"",
      personList:[]
    }
  },
  methods: {
    showPopup(type,cid=-1){

    },
    hide(){
     
    },
    showMiddle(){
     
    },
    pay(){
      
    },
    showAnswer(){
     
    },
    jumpStudy(cid){
      
    },
    next(){
      
 
    },
    wxPay(){
      



    },
    Alipay(){
      
     


    },
    getShowList(){
      let that=this;
      let add=1
      that.timer=setInterval(()=>{
        if(that.list.length<=5){
            clearInterval(that.timer)
        }else{
          
          that.num+=add;
          // if(that.num==that.list.length-4){
          //   add=-1
          // }
          // console.log(that.num,that.list.length)
          if(that.num==that.list.length-5){

             clearInterval(that.timer)

          }
          
        }
        


      },2000)
      

      
    },
    getData(){
      let that=this;
      that.$get('/home').then(res=>{
        that.banner=res.data.banner.b_url;
        that.sort1 =res.data.sort[0];

        that.content1 =that.sort1.content[0]
        that.content2 =that.sort1.content[1]
        that.content3 =that.sort1.content[2]

        that.sort2.img =res.data.sort[1].content[0].img;
        that.sort2.title =res.data.sort[1].content[0].c_name;
        that.sort2.id =res.data.sort[1].content[0].id;
        that.sort3.img =res.data.sort[2].content[0].img;
        that.sort3.title =res.data.sort[2].content[0].c_name;
        that.sort3.id =res.data.sort[2].content[0].id;
       
        that.money1=res.data.money[0].price;
        that.money2=res.data.money[1].price;

        
        console.log(res.data)
        setTimeout(()=>{
          // that.load.close()
        },500)
        // console.log(that.sort1)
      })
      that.$post('/refresh',{uid:window.localStorage.uid}).then(res=>{
        console.log(res)
        window.sessionStorage.level=that.level=res.data.level
      })
      that.$get('/carousel').then(res=>{
        console.log(res)
        // that.list=res.data
        that.list.sort(()=>0.5-Math.random())
      })

    },
    getQrcode(){
      let that=this;
      let uid=that.$route.query.uid
      uid= window.atob (uid)
      console.log(uid)
      that.$post('/createCode',{uid}).then(res=>{
        that.qrcode=res.data
      })
    }
    
 
  },
  created () {
    // this.load=this.$loading()
    this.getShowList();
    this.getData();
    this.getQrcode();
    
    
  },
  mounted() {
    // let that=this
    // var wow =new WOW({
    //   boxClass:"wow",
    //   live:false,
    //   offset:0,
    //   moblie:true
    // })
    // wow.init()

    // that.$config()


    //  let data={
    //     uid:window.sessionStorage.uid,
    //     cid:19,
    //     price:1,
    //     type:"微信"
    //   }
    //   var timer;
    //   timer=setInterval(()=>{
    //     var button= that.$refs.pay
      
    //      if(button){
           
    //        clearInterval(timer)
    //        that.$pay('/buy_courses',button,data)
    //      }
    //     // that.$pay('/buy_courses',data,button)

    //   },1000)
      



    
  },
  beforeDestroy(){
    
    clearInterval(this.timer)
  }
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
  border-top-right-radius: 6px;
  border-top-left-radius: 6px;
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
  border-radius: 8px;
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
  overflow: hidden;
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
  left:3.5rem;
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
.trans{
  transform: translateY(0);
  transition: .5s;
}

/* .fade-enter-active, .fade-leave-active {
  transition: all 1s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
  transform:translate3d(-120px,-500px,0) scale(.5)
} */

.index >>> .mu-ripple-wrapper{
    height: 100%!important;
}
.qrcode{
  width: 12rem;
  height: 12rem;
  padding: 1rem;
  margin: 0rem auto 2rem;
  box-shadow: 0 0 2px 1px #9EC54B;
}



</style>

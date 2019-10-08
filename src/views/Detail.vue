<template>
    <div class="container" style="overflow:hidden;" v-if="page">
        <!-- <mu-ripple color="#2196f3" :opacity="0.2" style="width:100vw;height:90vh"> -->
         <img src="@/assets/center/bg_detail.png" alt="" style="width:100vw;height:90vh">
        <!-- </mu-ripple> -->
        <van-sticky>
            <div style="display:flex;justify-content:space-around;background:#fff;height:3rem;line-height:3rem;font-size:1rem; letter-spacing:.1rem;">
                <span ref="xiangmu1" class="sp" >
                    项目介绍
                </span>
                <span ref="xiangmu2" class="sp">
                    适合人群
                </span>
                <span ref="xiangmu3" class="sp">
                    圈友指南
                </span>
            </div>

        </van-sticky>
                

            <div id="posi1" ></div>
            <div >
                <img src="@/assets/center/intr.png" alt="" class="dao">
            </div>
            
  
            <div id="posi2"></div>
            <div style="width:100vw;height:3rem;"></div>
            <div >
                <img src="@/assets/center/person.png" alt="" class="dao">
            </div>
                    
              

            
           
                <!-- <div class="box-home" style="padding:1rem;box-sizing:border-box;display:block">
                    <h4>
                        本计划的学习地点在线上社群内，付款后将获得学习委员的微信号，请添加入群。
                    </h4>
                    <h4>
                        本计划为拓展训练，需拥有体魄私教训练馆项目的学习基础，学习委员将审核入学资格。
                    </h4>
                    <h4>
                        本计划为保证课程质量及服务，采取审核限量招生制每期（30 天为一期）仅招收 60 名学员，超过 60 人将延至下一期。
                    </h4>

                    <div class="title">
                        常见问题
                    </div>
                    <h5>
                        Q：有效期是？
                    </h5>
                    <h5>
                        A：里面的所有学习计划都可以无限次免费参与，并且可 以学习不断更新的内容。
                    </h5>

                    <h5 style="color:#FF3737;margin-top:1rem">
                        Q：【成功付费】后，可以退费吗？
                    </h5>
                    <h5>
                        A：抱歉，本产品为虚拟服务产品，一经开通，概不退款。
                    </h5>

                    <h5 style="color:#FF3737;margin-top:1rem">
                        Q：我【报名成功】了，但是已经不在 60 人内？怎么办？
                    </h5>
                    <h5>
                        A：会为您自动顺延。比如您报名时是第 61 位，那么你就 是下一期的第一位成功锁定席位的学员啦。
                    </h5>
                </div> -->
                   
                    <div id="posi3"></div>
                     <div style="width:100vw;height:3rem;"></div>
                    <div >
                        <img src="@/assets/center/dao.png" alt="" class="dao">
                    </div>
                    <div style="width:100vw;height:5rem;"></div>

        
        <div class="bottom-div">
            <button class="bottom-btn" @click="showPopup">
                ￥{{Math.abs(info.price)}} 元立即开通
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
            <div class="weixin" @click="wxPay">
                <img src="@/assets/index/weixin.png" alt="">
                <span>微信支付</span>
            </div>
            <div class="ali" @click="aliPay">
                <img src="@/assets/index/ali.png" alt="">
                <span>支付宝支付</span>
            </div>
            
        </div>
        </van-popup>




    </div>
</template>


<script>
// import Scroll from 'better-scroll'
export default {
    data(){
        return{
            info:{},
            active:"",
            show:false,
            posi:"id1",
            scroll:"",
            page:false
        }
    },
    methods:{
        showPopup(){
            this.show=true
        },
        hide(){
            this.show=false
        },
        jumpPaySuccess(){
            this.$router.push('/paysuccess')
        },
        top1(e){
            console.log(e.target)
           let that=this
           this.$nextTick(()=>{
               for(let item in that.$refs){
                  that.$refs[item].style['borderBottom']="0";
               }
               document.getElementById('posi1').scrollIntoView(true)
           })
           
        },
        top2(e){
            console.log(e.target)
           let that=this
           this.$nextTick(()=>{
               for(let item in that.$refs){
                  that.$refs[item].style['borderBottom']="0";
               }
               document.getElementById('posi2').scrollIntoView(true)
           })
           
        },
        top3(e){
            console.log(e.target)
           let that=this
           this.$nextTick(()=>{
               for(let item in that.$refs){
                  that.$refs[item].style['borderBottom']="0";
               }
               document.getElementById('posi3').scrollIntoView(true)
           })
           
        },
        handleScroll(){
            let that=this
            let a = document.documentElement.scrollTop || document.body.scrollTop;

            that.$nextTick(()=>{

                let top1=a-document.getElementById('posi1').offsetTop;
                let top2=a-document.getElementById('posi2').offsetTop;
                let top3=a-document.getElementById('posi3').offsetTop;

                if(top1<1119){

                    for(let item in that.$refs){
                        that.$refs[item].style['borderBottom']="0";
                    }
                    that.$refs.xiangmu1.style['borderBottom']="3px solid rgb(255, 225, 129)";

                }
               
                if(top2>-55){
                    for(let item in that.$refs){
                        that.$refs[item].style['borderBottom']="0";
                    }
                     that.$refs.xiangmu2.style['borderBottom']="3px solid rgb(255, 225, 129)"
                }
                if(top3>-60){
                    for(let item in that.$refs){
                        that.$refs[item].style['borderBottom']="0";
                    }
                     that.$refs.xiangmu3.style['borderBottom']="3px solid rgb(255, 225, 129)"
                }

                that.$(that.$refs.xiangmu1).bind('click',function (){
                    if(document.documentElement.scrollTop){
                        console.log(document.documentElement.scrollTop=document.getElementById('posi1').offsetTop-50)
                    }else{
                        console.log(document.body.scrollTop=document.getElementById('posi1').offsetTop-50)
                    } 
                })
                that.$(that.$refs.xiangmu2).bind('click',function (){
                    if(document.documentElement.scrollTop){
                        console.log(document.documentElement.scrollTop=document.getElementById('posi2').offsetTop)
                    }else{
                        console.log(document.body.scrollTop=document.getElementById('posi2').offsetTop)
                    }
                })
                that.$(that.$refs.xiangmu3).bind('click',function (){
                    if(document.documentElement.scrollTop){
                        console.log(document.documentElement.scrollTop=document.getElementById('posi3').offsetTop)
                    }else{
                        console.log(document.body.scrollTop=document.getElementById('posi3').offsetTop)
                    }
                   
                })
                
            })





           
            // this.$nextTick(()=>{
            //    for(let item in that.$refs){
            //         if(a<1944){
            //              that.$refs['xiangmu1'].style['borderBottom']="3px solid rgb(255, 225, 129)"
            //              that.$refs['xiangmu2'].style['borderBottom']="0"
            //              that.$refs['xiangmu3'].style['borderBottom']="0"
            //         }else if (2636>a && a>2051){
            //              that.$refs['xiangmu1'].style['borderBottom']="0"
            //              that.$refs['xiangmu2'].style['borderBottom']="3px solid rgb(255, 225, 129)"
            //              that.$refs['xiangmu3'].style['borderBottom']="0"
            //         }else if(a>2637){

            //              that.$refs['xiangmu1'].style['borderBottom']="0"
            //              that.$refs['xiangmu2'].style['borderBottom']="0"
            //              that.$refs['xiangmu3'].style['borderBottom']="3px solid rgb(255, 225, 129)"
            //         }
            //    }
           
        //    })


            // if(a<1944){
            //     this.posi='id1'
            // }
            // if(a>1944){
            //     this.posi='id2'
            // }
            // if(a>2638){
            //     this.posi='id3'
            // }

        },
        getData(){
            let that=this;
            that.$get('/five').then((res)=>{
                console.log(res)
                that.info=res.data;
                setTimeout(()=>{
                    that.page=true
                },500)
            })
        },
        wxPay(){
            let that=this;
            let data={
                uid:window.localStorage.uid,
                price:that.info.price,
                type:"WeChat"
            }
            that.$pay('/buy_courses',data,that).then(()=>{
                that.$router.push('/fackback1')
            })
        },
        aliPay(){
            let money=this.info.price
            let str=`?uid=${window.localStorage.uid}&price=${money}&type=Alipay`

            window.location.href='http://www.shanshangdajiazu.com/pay/index.html'+str
        }
    },
    created() {
        this.getData()
        this.$config()
    },
    mounted () {
        window.addEventListener('scroll', this.handleScroll)
       
    }
}
</script>


<style scoped>
    
.van-tabs >>> .van-tabs__line{
    background-color: #FFE181;
}

.van-tabs >>> [class*=van-hairline]::after{
    border: 0!important;
    border-bottom: 1px solid #ccc!important;
   
}
.bottom-div{
  width: 100vw;
  background: #fff;
  box-shadow:0 2px 5px #ccc;
  padding:0.5rem 0;
  position:fixed;
  bottom:0;
  left:0;
  z-index: 100;
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
.title-1{
    font-size:1.2rem;
    font-family:SourceHanSansCN-Medium;
    font-weight:600;
    color:rgba(246,47,93,1);
    letter-spacing: .1rem;
}
.title-2{
    font-size:1rem;
    font-family:SourceHanSansCN-Medium;
    font-weight:600;
    margin-top: .3rem;
    color:#F860E1;
    letter-spacing: .1rem;
}
.box-home p{
    font-size:.7rem;
    font-family:SourceHanSansCN-Medium;
    font-weight:600;
    color:#777;
    line-height: 1.5rem;
}
.box-home h4{
    font-size:.9rem;
    font-family:SourceHanSansCN-Normal;
    font-weight:400;
    color:rgba(248,96,225,1);
}
.box-home h4:not(:first-child){
    margin-top: 1rem;
}
.box-home h5{
    font-size:0.8rem;
    font-family:SourceHanSansCN-Normal;
    font-weight:400;
    color:rgba(51,51,51,1);
    line-height:1.4rem;
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
.dao{
    width: 96vw;
    display: block;
    margin: 0 auto;
}
.van-tabs >>> .van-tab__pane{
    height: 90vh!important;
}
.container >>> .mu-ripple-wrapper{
    height: 91%!important;
}
.sp{
    
}



</style>
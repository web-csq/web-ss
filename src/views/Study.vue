<template>
    <div style="position:relative;top:0;left:0;">
        <div class="title" style="font-size:1.2rem;">
            动感强化训练
        </div>
        <img src="@/assets/index/edit.png" class="fixed" @click="showComment">
        <img src="@/assets/index/teacher.png" style="width:100vw;display:block;margin:0 auto">
        <audio :src="require('./../../public/music.mp3')" ref="audio" class="audio" preload="auto"></audio>
        <div class="audio-container">
            <img :src="isPlay==false?require('@/assets/index/bofang.png'):require('@/assets/index/zanting.png')" style="width:3.5rem;height:3.5rem;margin:0 0 0 .4rem;" @click="play">
            <div class="process">
                <van-slider v-model="value" @change="onChange"/>
            </div>
            <span class="time" v-if="eTime!=0">
                {{eTime}}
            </span>
        </div>


        <p class="p">也许你曾因为性认知的缺失，在亲密关系里失败过。不过我想告诉你，在这里，一定会改变你在两性关系中的格局。【体魄私教训练馆】让所有夫妻，告别伤害，快乐起来！
        </p>
        <p class="p">致力打造中国领先的专注于家庭幸福领域培训进化平台，以助人达成目标，共创美好未来为核心价值理念，旨在造就家庭更加和谐幸福。
        </p>
        <div class="title" style="font-size:1.2rem;">
            情侣双休训练
        </div>
        <img src="@/assets/index/teacher2.png" style="width:100vw;display:block;margin:0 auto">
        <div style="position:relative;left:0;right:0;">
            <video src="" style="width:100vw;display:block;margin:0 auto;" poster="@/assets/index/teacher3.png">
            </video>
             <img src="@/assets/index/bofang.png" class="bofang" ref="bofang">
        </div>
        <p class="p">也许你曾因为性认知的缺失，在亲密关系里失败过。不过我想告诉你，在这里，一定会改变你在两性关系中的格局。【体魄私教训练馆】让所有夫妻，告别伤害，快乐起来！
        </p>
        <p class="p">致力打造中国领先的专注于家庭幸福领域培训进化平台，以助人达成目标，共创美好未来为核心价值理念，旨在造就家庭更加和谐幸福。
        </p>

        <van-tabs v-model="activeName"
            line-height="2px"
            line-width="4rem"
        >
            <van-tab title="圈友好评" name="a">
            <div class="parent"  ref="wrapper">
            <div style="padding-top:1rem">
                <div class="wrap">
                    <div style="display:flex;align-items:center">
                        <img src="@/assets/index/banner.png" >
                        <span>John Green</span>
                    </div>
                    <div class="text">
                        上了体魄私教训练馆之后我对嗳嗳的理解更加系统科学，嗳嗳应该是一个阳光化的，而不是传统那些认为嗳嗳是不干净的话题。 那些说西方嗳嗳开放的，大概是不了解西方嗳嗳文化，婚前多尝试，婚后很忠诚，不像我们国家，婚前一片空，婚后乱哄哄。所以路漫漫，还需要很多人一起努力让嗳嗳阳光化。
                    </div>
                </div>
                <div class="wrap">
                    <div style="display:flex;align-items:center">
                        <img src="@/assets/index/banner.png" >
                        <span>John Green</span>
                    </div>
                    <div class="text">
                        上了体魄私教训练馆之后我对嗳嗳的理解更加系统科学，嗳嗳应该是一个阳光化的，而不是传统那些认为嗳嗳是不干净的话题。 那些说西方嗳嗳开放的，大概是不了解西方嗳嗳文化，婚前多尝试，婚后很忠诚，不像我们国家，婚前一片空，婚后乱哄哄。所以路漫漫，还需要很多人一起努力让嗳嗳阳光化。
                    </div>
                </div>
                <div class="wrap">
                    <div style="display:flex;align-items:center">
                        <img src="@/assets/index/banner.png" >
                        <span>John Green</span>
                    </div>
                    <div class="text">
                        上了体魄私教训练馆之后我对嗳嗳的理解更加系统科学，嗳嗳应该是一个阳光化的，而不是传统那些认为嗳嗳是不干净的话题。 那些说西方嗳嗳开放的，大概是不了解西方嗳嗳文化，婚前多尝试，婚后很忠诚，不像我们国家，婚前一片空，婚后乱哄哄。所以路漫漫，还需要很多人一起努力让嗳嗳阳光化。
                    </div>
                </div>
                <div class="wrap">
                    <div style="display:flex;align-items:center">
                        <img src="@/assets/index/banner.png" >
                        <span>John Green</span>
                    </div>
                    <div class="text">
                        上了体魄私教训练馆之后我对嗳嗳的理解更加系统科学，嗳嗳应该是一个阳光化的，而不是传统那些认为嗳嗳是不干净的话题。 那些说西方嗳嗳开放的，大概是不了解西方嗳嗳文化，婚前多尝试，婚后很忠诚，不像我们国家，婚前一片空，婚后乱哄哄。所以路漫漫，还需要很多人一起努力让嗳嗳阳光化。
                    </div>
                </div>
                <div class="wrap">
                    <div style="display:flex;align-items:center">
                        <img src="@/assets/index/banner.png" >
                        <span>John Green</span>
                    </div>
                    <div class="text">
                        上了体魄私教训练馆之后我对嗳嗳的理解更加系统科学，嗳嗳应该是一个阳光化的，而不是传统那些认为嗳嗳是不干净的话题。 那些说西方嗳嗳开放的，大概是不了解西方嗳嗳文化，婚前多尝试，婚后很忠诚，不像我们国家，婚前一片空，婚后乱哄哄。所以路漫漫，还需要很多人一起努力让嗳嗳阳光化。
                    </div>
                </div>
                <div class="wrap">
                    <div style="display:flex;align-items:center">
                        <img src="@/assets/index/banner.png" >
                        <span>John Green</span>
                    </div>
                    <div class="text">
                        上了体魄私教训练馆之后我对嗳嗳的理解更加系统科学，嗳嗳应该是一个阳光化的，而不是传统那些认为嗳嗳是不干净的话题。 那些说西方嗳嗳开放的，大概是不了解西方嗳嗳文化，婚前多尝试，婚后很忠诚，不像我们国家，婚前一片空，婚后乱哄哄。所以路漫漫，还需要很多人一起努力让嗳嗳阳光化。
                    </div>
                </div>
            </div>
            </div>



            </van-tab>
            <van-tab title="问题反馈" name="b">
                <div class="box-index" style="width:85vw;box-shadow:0 0 5px #99AEDF;margin-bottom:1rem;">
                    <div class="line">
                        <span>姓名</span>
                        <input type="text" placeholder="请输入本人姓名" v-model.trim="uname">
                    </div>
                    <div class="line">
                        <span>手机号</span>
                        <input type="text" placeholder="请输入本人手机号" v-model.trim="phone">
                    </div>
                    <div class="line">
                        <span>微信号</span>
                        <input type="text" placeholder="请输入本人微信号" v-model.trim="weixin">
                    </div>
                    <div class="line" style="flex-direction: column;">
                        <div >反馈内容</div>
                        <textarea  cols="30" rows="10" placeholder="请输入反馈内容" v-model.trim="content"></textarea>
                    </div>

                    <button class="submit" @click="submintfan">
                        提交反馈
                    </button>
                </div>
                <div style="width:100vw;height:23vh;"></div>
            </van-tab>
        </van-tabs>


        <!-- 评价弹出 -->
        <van-popup v-model="commentShow" transition="fade">
            <div class="pop">
                <img src="@/assets/index/comment.png" alt="">
                <div class="comment">
                    <textarea placeholder="请填写评价内容" rows="7" v-model.trim="comment"></textarea>
                </div>
                <div class="btns">
                    <button class="btn1" @click="submitComment">提交评价</button>
                    <button class="btn2" @click="hideComment">取消</button>
                </div>
            </div>

        </van-popup>









    </div>
</template>

<script>
import Scroll from 'better-scroll'


export default {
    data(){
        return{
            activeName:"a",
            commentShow:false,
            comment:"",
            uname:"",
            phone:"",
            weixin:"",
            content:"",
            value:0,
            eTime:"",
            isPlay:false,
        }
    },
    methods:{
        play(){
            
            var audio=this.$refs.audio;
            var that=this
            
            console.log(audio.paused+"---是否暂停")//是否暂停
            console.log(audio.currentTime+"---当前时间")//当前时间
            console.log(audio.duration+"---音频时长")//当前时间
            if(that.isPlay==false){
                audio.play()
                this.isPlay=true
                if(that.eTime==0){
                    that.$toast.success('音频加载中')
                }
                
            }else{
                audio.pause()
                this.isPlay=false
            }
            audio.addEventListener("timeupdate",function(){
                that.eTime=this.duration-this.currentTime
                var h  =   Math.floor(that.eTime/60);
                var s  =  parseInt(that.eTime%60);
                h=h+""
                s=s+""
                console.log(h.length,s.length)
                h  =   (h.length==1)?'0'+h:h;
                s  =   (s.length==1)?'0'+s:s;
                
                that.eTime=h+':'+s
                var value=parseInt(this.currentTime/this.duration*100)
                that.value=value

            })
            
            
        },
        onChange(value){
            var that=this
            var audio=this.$refs.audio;
            var current=value/100*audio.duration
            audio.currentTime=current
            audio.play()
            that.isPlay=true
            audio.addEventListener("timeupdate",function(){
                that.eTime=this.duration-this.currentTime
                var h  =   Math.floor(that.eTime/60);
                var s  =  parseInt(that.eTime%60);
                h=h+""
                s=s+""
                console.log(h.length,s.length)
                h  =   (h.length==1)?'0'+h:h;
                s  =   (s.length==1)?'0'+s:s;
                
                that.eTime=h+':'+s
                var value=parseInt(this.currentTime/this.duration*100)
                that.value=value

            })
            

        },
        showComment(){
            this.commentShow=true
        },
        hideComment(){
            this.commentShow=false
        },
        submitComment(){
            if(this.comment==""){
                this.$toast.fail('内容不能为空');
                return
            }

            this.$toast.success('提交成功');
            this.commentShow=false
        },
        submintfan(){
            if(this.uname==""){
                this.$toast.fail('姓名不能为空');
                return
            }
            if(this.phone==""){
                this.$toast.fail('手机号不能为空');
                return
            }
            if(this.weixin==""){
                this.$toast.fail('微信不能为空');
                return
            }
            if(this.content==""){
                this.$toast.fail('内容不能为空');
                return
            }
            this.$toast.success('提交成功');
        },
        setScroll(){
            var that=this
            this.$nextTick(()=>{
                that.scroll=new Scroll(that.$refs.wrapper,{
                    tap:true
                })
            })
            console.log(Scroll)
        }
    },
    mounted(){
        this.setScroll()
    }

}
</script>

<style scoped>
 .fixed{
     position: fixed;
     top: 14rem;
     right: 0.5rem;
     width: 3rem;
     height: 3rem;
     z-index: 5;
 }   
 .audio{
     display: block;
     margin: 1rem auto;
     
 }   
.p{
    padding: 1.1rem;
    font-size:0.8rem;
    font-family:SourceHanSansCN-Normal;
    font-weight:400;
    color:rgba(51,51,51,1);
    letter-spacing: 0.1rem;
}
.bofang{
    width: 4rem;
    height: 4rem;
    position: absolute;
    top:50%;
    left:50%;
    z-index: 5; 
    margin:-2rem 0 0 -2rem; 
}
       
 .van-tabs >>> .van-tabs__line{
     background-color:#FFE181;
 }
.van-tabs >>> [class*=van-hairline]::after{
    border:0!important;
    border-bottom: 1px solid #ccc!important;
}
.parent{
    width: 100%;
    height: 92vh;
    overflow-y:auto;
}
.wrap{
    display: flex;
    width: 80vw;
    margin: 1rem auto;
    flex-direction: column;
    border-bottom: 1px solid #ccc;
    padding-bottom:1rem; 
}
.wrap:first-child{
     margin: 0rem auto 1rem;
}
.wrap img{
    width: 2rem;
    height:2rem;
    border-radius: 50%;
}
.wrap span{
    font-size:1rem;
    font-family:SourceHanSansCN-Normal;
    font-weight:500;
    color:rgba(51,51,51,1);
    margin-left: 1rem;
}
.text{
    font-size:0.7rem;
    font-family:SourceHanSansCN-Normal;
    font-weight:400;
    color:rgba(51,51,51,1);
    margin-top: 0.5rem;
    letter-spacing: 0.1rem;
}
.line{
    background-color: #F2F2F2;
    border-radius: 5px;
    width: 76vw;
    margin: 1rem auto;
    display: flex;
    justify-content: space-between;
    padding: 0 1rem;
    box-sizing: border-box;
}
.line input{
    background-color: #F2F2F2;
    box-sizing: border-box;
    text-align: right;
    color:#787777;
    font-size:0.8rem;
    width: 30vw;
    overflow: hidden;
}
.line span{
    font-size:0.8rem;
    font-family:SourceHanSansCN-Normal;
    font-weight:400;
    color:#333333;
    line-height:2rem;
}
.line textarea{
    background-color: #F2F2F2;
    box-sizing: border-box;
    color:#787777;
    font-size:0.8rem;
    resize: none;
}
.line div{
    font-size:0.8rem;
    font-family:SourceHanSansCN-Normal;
    font-weight:400;
    color:#333333;
    line-height:2rem;
}
.submit{
  display: block;
  width: 80vw;
  height: 2.4rem;
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
.pop{
    position:relative;
    top:0;
    left:0;
    width:60vw;
}
.pop img{
    width: 100%;
}
.comment{
    position: absolute;
    top: 9rem;
    left: 2rem;
    border: 1px solid #ccc;
    border-radius: 5px;
    width: 43vw;
    height: 7rem;
    padding: 0.5rem;
    box-sizing: border-box;
}
.comment textarea{
    resize: none;
    width: 100%;
    color:#999;
    height: 4rem;
}
.btns{
    position: absolute;
    bottom: 1rem;
    left: 0rem;
    width: 100%;
    display: flex;
    justify-content: space-around;
}
.btn1,.btn2{
    padding: 0 1.2rem;
    border-radius: 20px;
}
.btn1{
    background: #866CFF;
    font-size:1rem;
    font-family:PingFang-SC-Regular;
    font-weight:400;
    color:rgba(255,255,255,1);
    line-height:2rem;
}
.btn2{
    border:1px solid #866CFF;
    font-size:1rem;
    font-family:PingFang-SC-Regular;
    font-weight:400;
    color:rgba(255,255,255,1);
    line-height:2rem;
    color: #866CFF;
}
.audio-container{
    width: 80vw;
    border: 1px solid #088AFF;
    margin: 0 auto;
    border-radius: 41px; 
    display: flex;
    align-items: center;
}
.process{
    width: 50vw;
    margin-left: .3rem;
}
.process >>> .van-slider--disabled{
    opacity:1;
}
.time{
    font-size:.8rem;
    font-family:PingFang-SC-Regular;
    color:#bbb;
    margin-left:.5rem;
}
.audio-container >>> .van-slider__button{
    width: 10px;
    height: 10px;
}
.van-tabs >>> .van-tab__pane{
    height: 90vh!important;
}




.fade-enter-active, .fade-leave-active {
  transition: all 1s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform:translate3d(-120px,-500px,0) scale(.5)
}

</style>
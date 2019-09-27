<template>
    <div class="container" v-if="page">
        <table></table>
        <div style="float: right;margin:27.7rem 1.5rem 0 0rem;">
            <img v-lazy="'http://www.shanshangdajiazu.com'+qrcode" alt="" class="img">
        </div>
        
            
        <button class="btn" @click="showPop">
            邀请方式
        </button>
        
        <van-popup
        v-model="show"
        round
        position="bottom"
        :style="{ height: '35%' }"
        >
        <div class="floor1">
            <span>邀请方式</span>
            <img src="@/assets/index/hide.png" @click="hide">
        </div>
        <div class="floor2">
            <span>方式一</span>
            <span style="margin-left:1rem">二维码分享</span>
        </div>
        <div class="floor3">
            <p>长按二维码进行保存二维码 </p>
            <p>通过【发送给朋友】【分享到朋友圈】推广</p>
        </div>

        <div class="floor2" style="margin-top: 1rem;">
            <span>方式二</span>
            <span style="margin-left:1rem">复制以下链接，转发推广：</span>
            <button class="share-btn" @click="copy" :data-clipboard-text="text">
                复制链接
            </button>
        </div>
        <div class="floor3" id="msg" style="width:70vw;overflow:hidden;white-space: nowrap;text-overflow: ellipsis;">
            {{text}}
           <!-- <textarea type="hidden" ref="text" v-model="text" style="opacity: 0;" readonly="readonly"></textarea> -->
        </div>
        </van-popup>
    </div>
</template>


<script>
  import Clipboard from 'clipboard';
  import wx from 'weixin-js-sdk'
export default {
    data(){
        return{
            show:false,
            text:"http://www.shanshang.com/share/erweima",
            qrcode:"",
            load:"",
            page:false
        }
    },
    methods:{
        showPop(){
            this.show=true
        },
        hide(){
            this.show=false
        },
        copy(){
            var that=this
            let clipboard = new Clipboard('.share-btn') 
            clipboard.on('success',e =>{
                that.$toast.success("复制成功")
                that.show=false;
                clipboard.destroy() //使用destroy可以清楚缓存
            })
            clipboard.on('error',e =>{
                that.$toast.fail("网络繁忙")
                clipboard.destroy()
            })
            
        },
        getData(){
            let that=this;
           let uid =that.$route.query.uid
            that.$post('/qrcode',{
                uid
            }).then(res=>{
                that.qrcode=res.data;
                 setTimeout(()=>{
                     that.page=true
                    // that.load.close()
                },1000)
            })
            that.text="http://www.shanshangdajiazu.com/ss/#/qrcode?uid="+uid
        },
        share(){
            let that=this;
            let data={
                title: '善商大家族，有胆你就来。', // 分享标题
                desc:"好好学习，天天向上，赶紧来学习吧，现在扫码还能拿到大大的红包。跟我一起加入善商大家族",
                link: "http://www.shanshangdajiazu.com/ss/#/qrcode?uid="+that.$route.query.uid, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
                imgUrl: 'http://www.shanshangdajiazu.com/pay/logo.png', // 分享图标
            }
            that.$config();
            wx.ready(()=>{
                wx.onMenuShareTimeline({
                    title: data.title, // 分享标题
                    link: data.link, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
                    imgUrl: data.imgUrl, 
                    desc:data.desc,// 分享图标
                    success: function () {
                    // 用户点击了分享后执行的回调函数
                    }
                })
                wx.onMenuShareAppMessage({
                    title: data.title, // 分享标题
                    desc: data.desc, // 分享描述
                    link: data.link, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
                    imgUrl: data.imgUrl, // 分享图标

                    success: function () {
                        // 用户点击了分享后执行的回调函数
                    }
                })


            })
        }
          
    },
    created() {
        // this.load=this.$loading()
        this.share()
        this.getData()
    },
    
}
</script>


<style scoped>
.container{
    position: relative;
    top: 0;
    left: 0;
    background: url('../assets/center/saoma.png') no-repeat;
    background-size: 100% 100%;
    width:96vw ;
    height: 35rem;
    
    margin: .5rem auto 0;
 } 
.bg{
    width: 96vw;
    display: block;
    margin: 1rem auto 0;
}
.erweima{
    width: 8rem;
    height: 8rem;
    display: block;
    margin: -12rem auto 0;
}
.btn{
    border:1px solid rgba(83,193,35,1);
    border-radius:37px;
    font-size:1rem;
    font-family:SourceHanSansCN-Regular;
    font-weight:400;
    color:rgba(83,193,35,1);
    padding: .2rem .9rem;
    display: block;
    margin: 36rem auto 2rem;
}
.floor1{
    font-size:1rem;
    font-family:PingFang-SC-Medium;
    font-weight:500;
    color:rgba(1,1,1,1);
    line-height:35px;
    text-align: center;
}
.floor1 img{
    width: 1rem;
    height: 1rem;
    float: right;
    margin: .5rem .5rem 0 0;
    
}
.floor2{
    font-size:.8rem;
    font-family:PingFang-SC-Medium;
    font-weight:500;
    color:rgba(1,1,1,1);
    padding-left: 1rem; 
}
.floor3{
    font-size:.7rem;
    font-family:PingFang-SC-Medium;
    font-weight:500;
    color:rgba(131,131,131,1);
    padding-left: 5rem;
    margin-top: 1rem;
    width: 100%;
    overflow: hidden;
    
}
.floor3 p{
    line-height: 1.5rem;
}
.share-btn{
    border:1px solid rgba(83,193,35,1);
    border-radius:25px;
    font-size:.7rem;
    font-family:PingFang-SC-Medium;
    font-weight:500;
    padding: .3rem .8rem;
    float: right;
    margin-right: 1rem;
    color:rgba(83,193,35,1);
}


.img{
    width: 6rem;

    
    
}

</style>
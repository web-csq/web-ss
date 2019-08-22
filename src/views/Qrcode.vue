<template>
    <div>
        <img src="@/assets/center/saoma.png" alt="" class="bg">
        <img src="@/assets/center/erweima.png" alt="" class="erweima">
            
       
        <button class="btn" @click="showPop">
            邀请方式
        </button>
        



        <van-popup
        v-model="show"
        round
        position="bottom"
        :style="{ height: '36%' }"
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
            <p>长按图片进行保存二维码 </p>
            <p>通过【发送给朋友】【分享到朋友圈】推广</p>
        </div>

        <div class="floor2" style="margin-top: 1rem;">
            <span>方式二</span>
            <span style="margin-left:1rem">复制以下链接，转发推广：</span>
            <button class="share-btn">
                复制链接
            </button>
        </div>
        <div class="floor3">
            http://www.shanshang.com/share/erweima
        </div>
        </van-popup>
    </div>
</template>


<script>
export default {
    data(){
        return{
            show:false
        }
    },
    methods:{
        showPop(){
            this.show=true
        },
        hide(){
            this.show=false
        }
    }
}
</script>


<style scoped>
.bg{
    width: 96vw;
    display: block;
    margin: 0 auto;
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
    margin: 4rem auto 2rem;
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
    font-size:1rem;
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





</style>
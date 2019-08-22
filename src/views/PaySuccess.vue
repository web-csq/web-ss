<template>
    <div class="content">
        <img src="@/assets/index/dui.png" alt="" class="img">
        <div class="box-index" style="background:#fff;">
            <h2>“支付成功”</h2>
            <p style="margin-top:1rem;">
                购买成功后，请将报名情趣浸泡馆的支付凭证发给维维顾问，否则将无法进入项目学习。         
            </p>
            <p>
                您可以在微信好友中搜索：维维顾问。
            </p>
            <p>
                如果您还未添加维维顾问，请扫描二维码添加好友。
            </p>
            <button class="btn" @click="jumpStudy">
                查看课程详情
            </button>
        </div>
    </div>
</template>



<script>
export default {
    data(){
        return{

        }
    },
    methods:{
        jumpStudy(){
            this.$router.push('/study')
        }
    }
}
</script>


<style scoped>
.content{
    width: 100vw;
    height: 100vh;
    background: url('../assets/index/vuebg.png') no-repeat ;
    background-size: 100%;
    padding-top:4rem;
}
.img{
    width: 20vw;
    display: block;
    margin:0 auto ;
}
.box-index h2{
    font-size:2rem;
    font-family:SourceHanSansCN-Normal;
    font-weight:bold;
    color:rgba(140,106,236,1);
    text-shadow:0px 4px 9px rgba(140,107,236,0.56);
    text-align: center;
}
.box-index p{
    font-size:0.8rem;
    font-family:SourceHanSansCN-Normal;
    font-weight:bold;
    color:rgba(131,95,234,1);
    text-shadow:0px 2px 3px rgba(221,221,221,1);
    padding: 0 2rem;
    letter-spacing: .05rem;
}
.btn{
    background: url('../assets/index/md-btn.png') no-repeat ;
    background-size: 100%;
    width: 53vw;
    font-size:1rem;
    font-family:SourceHanSansCN-Normal;
    font-weight:500;
    color:rgba(255,255,255,1);
    line-height:2rem;
    text-shadow:0px 2px 3px rgba(217,217,217,0.8);
    display: block;
    margin: 2rem auto 1rem;
    letter-spacing: 0.1rem;
    height: 3rem;
}
</style>
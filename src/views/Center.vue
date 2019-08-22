<template>
    <div>
        <div class="bg">
            <img src="@/assets/index/touxiang.png" alt="">
            <div class="name">熟悉的酱酱君少</div>
            <div class="level">健身达人</div>
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
    </div>
</template>

<script>
export default {
    data(){
        return{

        }
    },
    methods:{
        jumpMyTake(){
            this.$router.push('/mytake')
        },
        jumpCircle(){
            this.$router.push('/circle')
        }
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
</style>
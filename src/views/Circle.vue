<template>
    <div v-if="show">
        <div class="top">
            <img v-lazy="info.imgUrl" alt="" class="ava">
            <span class="uname">{{info.nickname}}</span>
            <div class="level">健身达人</div>
            <div style="width:45%;text-align: right;" @click="jumpPush">
               立即推广
            </div>
        </div>
        <div class="center">
            <div class="floor1">
                累计推广收益 (元)
            </div>
            <div class="floor2">
                <div class="money">
                    {{info.earnings}}
                </div>
                <div class="withdrap" @click="jumpWithdraw(info.money)">
                    立即提现
                </div>
            </div>
            <div class="floor3"> 
                <div class="fl" @click="jumpClient">
                    <div>累计客户 (人)</div>
                    <div>{{info.lower_level}}</div>
                </div>
                <div class="line"></div>
                <div class="fl" @click="jumpSubList">
                    <div>下级推广员 (人)</div>
                    <div>{{info.recommend}}</div>
                </div>
                <div class="line"></div>
                <div class="fl" @click="jumpPushOrder">
                    <div>推广订单 (笔)</div>
                    <div>{{info.order}}</div>
                </div>
            </div>
        </div>
        <div style="display:flex;justify-content:space-around;margin-top:1.5rem;">
            <div class="middle1" @click="jumpMessage">
                <div class="circle" v-if="info.message">{{info.message}}</div>
                <van-row>
                    <van-col span="4">
                        <img src="@/assets/center/ling.png" alt="" class="left">
                    </van-col>
                    <van-col span="18">
                        <div class="text">消息</div>
                    </van-col>
                    <van-col span="2">
                        <img src="@/assets/center/you.png" alt="" class="you">
                        
                    </van-col>
                </van-row>
                
            </div>
            <div class="middle1" @click="jumpList">
                <van-row>
                    <van-col span="4">
                        <img src="@/assets/center/king.png" alt="" class="left">
                    </van-col>
                    <van-col span="18">
                        <div class="text">排行榜</div>
                    </van-col>
                    <van-col span="2">
                        <img src="@/assets/center/you.png" alt="" class="you">
                    </van-col>
                </van-row>
            </div>
        </div>
        <div style="display:flex;padding:1rem;margin:.5rem">
            <img src="@/assets/center/redshu.png" alt="" style="height:1.5rem">
            <div class="text-title">情趣达人成长计划</div>
        </div>
        <div style="width:100vw" @click="jumpDetail">
            <img src="@/assets/center/sex.png" style="width:100%;">
        </div>







    </div>
</template>
<script>
export default {
    data(){
        return{
            info:{},
            load:"",
            show:false
        }
    },
    methods:{
        jumpWithdraw(money){
            this.$router.push('/withdraw?money='+money)
        },
        jumpMessage(){
            this.$router.push('/message')
        },
        jumpList(){
            this.$router.push('/list')
        },
        jumpClient(){
            this.$router.push('/client')
        },
        jumpSubList(){
            this.$router.push('/sublist')
        },
        jumpPushOrder(){
            this.$router.push('/pushorder')
        },
        jumpDetail(){
            this.$router.push('/detail')
        },
        jumpPush(){
            this.$router.push('/push')
        },
        getData(){
            let that=this;
            that.$post('/ally',{uid:window.localStorage.uid}).then(res=>{
               
                that.info=res.data;
                console.log(res)
                setTimeout(()=>{
                    // that.load.close()
                    that.show=true
                },500)
            })
        }
    },
    created () {
        // this.load=this.$loading()
        this.getData()
    }
}
</script>


<style scoped>
.top{
    display: flex;
    padding: 1rem;
    align-items: center;
}
.ava{
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
}
.uname{
    margin-left:1rem; 
    font-size:1rem;
    font-family:SourceHanSansCN-Regular;
    font-weight:400;
    color:rgba(1,2,7,1);
    line-height:9px;
    white-space: nowrap;
}
.level{
    border:1px solid rgba(231,93,92,1);
    border-radius:21px;
    font-size:0.7rem;
    font-family:SourceHanSansCN-Regular;
    font-weight:400;
    color:rgba(231,93,92,1);
    padding:0.3rem .6rem;
    margin-left: 1rem;
    line-height: 0.8rem;
    white-space: nowrap;
}
.link{
    font-size:1rem;
    font-family:SourceHanSansCN-Regular;
    font-weight:400;
    color:rgba(3,3,3,1);
    flex:1;
    float:right;
}
.center{
    width: 100vw;
    height: 27vh;
    background: url('../assets/center/redbg.png') no-repeat;
    background-size: 100%;
    box-sizing: border-box;
    padding: 1rem 2rem;
}
.floor1{
    font-size:1rem;
    font-family:SourceHanSansCN-Regular;
    font-weight:400;
    color:rgba(255,255,255,1);
    line-height:9px;
    margin-top: .5rem;
}
.floor2{
    display: flex;
    margin-top: 1rem;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #C09447; 
    padding-bottom: 1rem;
}
.money{
    font-size:1.5rem;
    font-family:SourceHanSansCN-Regular;
    font-weight:400;
    color:rgba(255,255,255,1);
    line-height:9px;
}
.withdrap{
    border:1px solid rgba(255,255,255,1);
    border-radius:25px;
    font-size:0.8rem;
    font-family:SourceHanSansCN-Regular;
    font-weight:400;
    color:rgba(255,255,255,1);
    line-height:9px;
    padding: .3rem .5rem;
}
.floor3{
    display: flex;
    justify-content: space-around;
    margin-top: 1rem;
}
.fl{
    display: flex;
    flex-direction: column;
    align-items: center;
}
.fl div:first-child{
    font-size:0.8rem;
    font-family:SourceHanSansCN-Regular;
    font-weight:400;
    color:rgba(255,255,255,1);
}
.fl div:nth-child(2){
    font-size:1rem;
    font-family:PingFang-SC-Medium;
    font-weight:500;
    color:rgba(255,255,255,1);
}
.line{
    width:1px;
    height:2.5rem;
    border-right:1px solid rgba(192,148,71,1);
    box-sizing: border-box;
}
.middle1{
    width: 42vw;
    box-shadow: 0 0 5px #ccc;
    border-radius: 8px;
    padding: 1rem;
    position: relative;
    top: 0;
    left: 0;
    box-sizing: border-box;
}
.left{
    width: 1.5rem;
    height: 1.5rem;
    margin-left: .5rem;
}
.text{
    font-size:1rem;
    font-family:SourceHanSansCN-Regular;
    font-weight:400;
    color:rgba(51,51,51,1);
    line-height:9px;
    margin: .5rem 0 0 1.5rem;
}
.you{
    width: .5rem;
    height: 1rem;
    margin: .4rem 0 0 0;
}
.text-title{
    font-size: 1rem;
    font-family:SourceHanSansCN-Regular;
    font-weight:400;
    color:rgba(51,51,51,1);
    margin-left: 1rem;
}
.circle{
    background: #f00;
    width: 1.2rem;
    height: 1.2rem;
    border-radius: 50%;
    position: absolute;
    top: -.5rem;
    right: -.5rem;
    color: #fff;
    text-align: center;
}









</style>
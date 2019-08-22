<template>
    <div>
        <div class="box-index" style="padding:1rem;width:82vw">
            <div class="box-title">
                <img src="@/assets/center/lvling.png" alt="">
                <div>
                    推广员系统消息
                </div>
            </div>
            <div class="content">
                恭喜您，成为【善商大家族】的推广员，推广成功可赚佣金。推广越多，赚钱越快，赶紧去推广赚钱吧！！！    
            </div>
            <div class="footer">
                <div>
                    2 小时前
                </div>
                <button @click="jumpPush">去赚钱</button>
            </div>
        </div>
        <div class="box-index" style="padding:1rem;width:82vw">
            <div class="box-title">
                <img src="@/assets/center/lvling.png" alt="">
                <div>
                    推广员系统消息
                </div>
            </div>
            <div class="content">
                恭喜您，成为【善商大家族】的推广员，推广成功可赚佣金。推广越多，赚钱越快，赶紧去推广赚钱吧！！！    
            </div>
            <div class="footer">
                <div>
                    2 小时前
                </div>
                <button>去赚钱</button>
            </div>
        </div>
        <div class="box-index" style="padding:1rem;width:82vw">
            <div class="box-title">
                <img src="@/assets/center/lvling.png" alt="">
                <div>
                    推广员系统消息
                </div>
            </div>
            <div class="content">
                恭喜您，成为【善商大家族】的推广员，推广成功可赚佣金。推广越多，赚钱越快，赶紧去推广赚钱吧！！！    
            </div>
            <div class="footer">
                <div>
                    2 小时前
                </div>
                <button>去赚钱</button>
            </div>
        </div>
        <div class="box-index" style="padding:1rem;width:82vw">
            <div class="box-title">
                <img src="@/assets/center/lvling.png" alt="">
                <div>
                    推广员系统消息
                </div>
            </div>
            <div class="content">
                恭喜您，成为【善商大家族】的推广员，推广成功可赚佣金。推广越多，赚钱越快，赶紧去推广赚钱吧！！！    
            </div>
            <div class="footer">
                <div>
                    2 小时前
                </div>
                <button>去赚钱</button>
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
        jumpPush(){
            this.$router.push('/push')
        }
    }
}
</script>


<style scoped>
.box-title{
    display: flex;

}
.box-title img{
    width: 2.5rem;
    height: 2.5rem;
    align-items: center;
}
.box-title div{
    font-size:1rem;
    font-family:SourceHanSansCN-Regular;
    font-weight:400;
    color:rgba(51,51,51,1);
    line-height:35px;
    margin-left: 1rem;
}
.content{
    font-size:.8rem;
    font-family:SourceHanSansCN-Regular;
    font-weight:400;
    color:rgba(83,83,83,1);
    margin-top:.5rem;
}
.footer{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.footer div{
    font-size:.8rem;
    font-family:SourceHanSansCN-Regular;
    font-weight:400;
    color:rgba(155,155,155,1);
    line-height:35px;
}
.footer button{
    border:1px solid rgba(83,193,35,1);
    border-radius:28px;
    font-size:.8rem;
    font-family:SourceHanSansCN-Regular;
    font-weight:400;
    color:rgba(83,193,35,1);
    padding: .2rem 1rem .3rem;
}
.box-index:last-child{
    margin-bottom: 1rem;
}
</style>
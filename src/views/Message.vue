<template>
    <div>
        <div class="box-index" style="padding:1rem;width:82vw" v-for="(item,index) in list" :key="index">
            <div class="box-title">
                <img src="@/assets/center/lvling.png" alt="">
                <div>
                    推广员系统消息
                </div>
            </div>
            <div class="content">
                {{item.msg}} 
                <img src="../assets/center/money.png" class="img">   
                <img src="../assets/center/money.png" class="img">   
                <img src="../assets/center/money.png" class="img">   
            </div>
            <div class="footer">
                <div>
                    {{item.addtime1}}
                </div>
                <button @click="jumpPush">去赚钱</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            list:[],
            msg:""
        }
    },
    methods:{
        jumpPush(){
            this.$router.push('/push')
        },
        getData(){
            let that=this;
            that.$post('/message',{
                uid:window.localStorage.uid
            }).then(res=>{
                console.log(res)
                that.list=res.data

            })
        }
    },
    created() {
        this.getData()
    },
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
.img{
    width: 1.5rem;
    height: 1.5rem;
}
</style>
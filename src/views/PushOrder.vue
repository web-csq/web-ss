<template>
    <div>
        <div class="box-home" style="padding:.5rem;box-sizing:border-box;box-shadow:0 0 5px #99AEDF;" v-for="(item,index) in list" :key="index">
            <img src="@/assets/index/touxiang.png" alt="" class="img">
            <div class="you">
                <div>{{item.title}}</div>
                <div>课程：￥{{item.title}}</div>
                <div>购买人：{{item.buy_name}}</div>
                <div>购买时间：{{item.paytime}}</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            list:[]
        }
    },
    methods:{
        getData(){
            let that=this;
            that.$post('/ally_details',{
                uid:8||window.localStorage.uid,
                type:3
            }).then(res=>{
                that.list=res.data

                console.log(res)
            })
        }
    },
    created() {
        this.getData()
    },
}
</script>


<style scoped>
.img{
    width: 7rem;
    height: 5.5rem;
}
.you{
    margin-left:1rem;
}
.you div:nth-child(1){
    font-size:.9rem;
    font-family:SourceHanSansCN-Normal;
    font-weight:400;
    color:rgba(51,51,51,1);
}
.you div:nth-child(2){
    font-size:.7rem;
    font-family:SourceHanSansCN-Normal;
    font-weight:400;
    color:rgba(157,157,157,1);
}
.you div:nth-child(3){
    margin-top: 1rem;
    font-size:.7rem;
    font-family:SourceHanSansCN-Normal;
    font-weight:400;
    color:rgba(157,157,157,1);
}
.you div:nth-child(4){
    font-size:.7rem;
    font-family:SourceHanSansCN-Normal;
    font-weight:400;
    color:rgba(157,157,157,1);
}
.box-home+.box-home{
    margin-bottom: 1rem;
}
</style>
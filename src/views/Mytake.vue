<template>
    <div>
        <div class="box-index" style="width:94vw;box-sizing:border-box;display:flex;justify-content:space-between" v-for="(item,index) in list" :key="index">
            <img v-lazy="'http://www.shanshangdajiazu.com'+item.img" alt="" class="avathor">
            <div class="right">
                <div class="text">{{item.c_name}}</div>
                <div class="price">价格： ￥{{item.money}}</div>
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
            that.$post('/my_party',{
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
.avathor{
    width: 6.5rem;
    height: 5rem;
}
.right{
    width: 57vw;
}
.text{
    font-size:1rem;
    font-family:PingFang-SC-Medium;
    font-weight:500;
    color:rgba(0,0,0,1);
    letter-spacing: 0.1rem;
    height: 2.5rem;
}
.price{
    font-size:0.8rem;
    font-family:PingFang-SC-Bold;
    font-weight:bold;
    color:rgba(0,0,0,1);
    letter-spacing: 1px;
    margin:.4rem 0 0 0;
}
</style>
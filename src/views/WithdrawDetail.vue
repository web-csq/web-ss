<template>
    <div style="text-align:left">
        <div v-if="list.length>0">
            <div class="box" v-for="(item,index) in list" :key="index">
                <div>
                    <div class="title1">
                        提现金额：{{item.money}}
                    </div>
                    <div class="time">
                        {{item.addtime}}
                    </div>
                </div>
                <div class="money">
                    手续费 ：{{item.price}}
                </div>
            </div>
            <div style="text-align:center;color:#999;">
            -------  没有更多了  -------
            </div>
        </div>
        <div class="empty" v-if="list.length<=0">
            <img src="../assets/center/empty.png" alt="">
        </div>

    </div>
</template>


<script>
export default {
    data(){
        return {
           list:[]
        }
    },
    methods:{
       
        getMoney(){
            let that=this;
            that.$post('/detail',{uid:window.localStorage.uid}).then(res=>{
                console.log(res)
                that.list=res.data;
            })
        },
        
    },
    created(){
        this.getMoney()
    }
}
</script>

<style scoped>
.box{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 1rem;
    border-bottom: 1px solid #ccc;
    width: 90vw;
    margin: 1rem auto;
}
.title1{
    font-size: 1.2rem;
}
.time{
    font-size: 1rem;
    color: #666;

}
.money{
    font-size: 1.2rem;
}
.empty{
    text-align: center;
}
</style>

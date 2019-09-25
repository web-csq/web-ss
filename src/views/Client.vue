<template>
    <div>
        <div style="width:84vw;margin:0 auto;" class="search">
            <van-search
                v-model="value"
                placeholder="请输入用户名称"
                show-action
                shape="round"
                @search="onSearch"
                >
                <div slot="action" @click="onSearch">搜索</div>
            </van-search>
        </div>
        <div class="box-index" style="display:flex;justify-content:space-between;align-items:center;width:95vw;padding:1rem" v-for="(item,index) in list" :key="index">
            <img v-lazy="item.imgUrl" alt="" class="img">
            <div class="uname">{{item.nickname}}</div>
            <div class="money">
                关注时间：{{item.addtime}}
            </div>
        </div>
        
    </div>
</template>

<script>
export default {
    data(){
        return{
            value:"",
            list:[]
        }
    },
     methods:{
        onSearch(){
            
        },
        getData(){
            let that=this;
            that.$post('/ally_details',{
                uid:window.localStorage.uid,
                type:1
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
 .img{
     width: 3rem;
     height: 3rem;
     border-radius: 50%;
     float: left;
 }   
 .uname{
    font-size:1rem;
    font-family:SourceHanSansCN-Regular;
    font-weight:400;
    color:rgba(51,51,51,1);
 }
 .money{
    font-size:.8rem;
    font-family:SourceHanSansCN-Regular;
    font-weight:400;
    color:rgba(211,150,58,1);
 }
 .search >>> .van-search{
     /* background-color: transparent!important; */
 }
</style>
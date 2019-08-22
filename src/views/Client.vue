<template>
    <div>
        <div style="width:84vw;margin:0 auto;">
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
        <div class="box-index" style="display:flex;justify-content:space-around;align-items:center;width:85vw;padding:1rem">
            <img src="@/assets/index/touxiang.png" alt="" class="img">
            <div class="uname">John Green</div>
            <div class="money">
                成交金额：￥1999.00
            </div>
        </div>
        <div class="box-index" style="display:flex;justify-content:space-around;align-items:center;width:85vw;padding:1rem">
            <img src="@/assets/index/touxiang.png" alt="" class="img">
            <div class="uname">John Green</div>
            <div class="money">
                成交金额：￥1999.00
            </div>
        </div>
        <div class="box-index" style="display:flex;justify-content:space-around;align-items:center;width:85vw;padding:1rem">
            <img src="@/assets/index/touxiang.png" alt="" class="img">
            <div class="uname">John Green</div>
            <div class="money">
                成交金额：￥1999.00
            </div>
        </div>
        <div class="box-index" style="display:flex;justify-content:space-around;align-items:center;width:85vw;padding:1rem">
            <img src="@/assets/index/touxiang.png" alt="" class="img">
            <div class="uname">John Green</div>
            <div class="money">
                成交金额：￥1999.00
            </div>
        </div>
        
    </div>
</template>

<script>
export default {
    data(){
        return{
            value:""
        }
    },
    methods:{
        onSearch(){

        }
    }
}
</script>


<style scoped>
 .img{
     width: 3rem;
     height: 3rem;
     border-radius: 50%;
 }   
 .uname{
    font-size:1rem;
    font-family:SourceHanSansCN-Regular;
    font-weight:400;
    color:rgba(51,51,51,1);
    margin-left:1rem 
 }
 .money{
    font-size:.8rem;
    font-family:SourceHanSansCN-Regular;
    font-weight:400;
    color:rgba(211,150,58,1);
    margin-left:1rem 
 }
</style>
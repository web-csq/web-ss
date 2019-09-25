<template>
    <div>
        <h2 class="title">推广员等级</h2>
        <div class="box-index" style="width:90vw;" v-for="(item,index) in level" :key="index">
            <div style="display:flex;align-items:center">
                <img src="@/assets/center/laba.png" alt="" class="laba">
                <span class="level">{{item.level_name}}</span>
            </div>
            <div class="push">
                直接推广佣金比例：{{item.direct}}%，间接推广比例：{{item.indirect}}%
            </div>
            <div class="bottom">
                用户成为推广员时，默认是该等级
            </div>
        </div>

        <div style="display:flex;padding:1rem;margin:.5rem">
            <img src="@/assets/center/huangshu.png" alt="" style="height:1.5rem">
            <div class="text-title">推广课程</div>
        </div>
        <div class="box-index" style="width:90vw;display:flex;justify-content:space-between;margin-top:.5rem;" v-for="(item,index) in push" :key="item.id">
            <img v-lazy="'http://www.shanshangdajiazu.com'+item.img" alt="" class="ava">
            <div style="width:54vw;display:flex;justify-content:space-between;">
                <div>
                    <div class="text1">{{item.c_name}}</div>
                    <div class="text2">{{item.l_id==1?"课程：":"整套价格："}}{{item.money}}</div>
                </div>
                <div class="text5" @click="jumpQrcode">推广</div>
            </div>
        </div>
      <!--   <div class="box-index" style="width:90vw;display:flex;justify-content:space-between;">
            <img src="@/assets/index/touxiang.png" alt="" class="ava">
            <div style="width:54vw;display:flex;justify-content:space-between;">
                <div>
                    <div class="text1">嘟嘟导师：动感化训练</div>
                    <div class="text2">课程：￥1999.00</div>
                    <div class="text3">直接推广佣金：<span style="color:#FF494A">￥25.50</span> </div>
                    <div class="text4">间接推广佣金：<span style="color:#FF494A">￥10.20</span> </div>
                </div>
                <div class="text5">推广</div>
            </div>
        </div>
        <div class="box-index" style="width:90vw;display:flex;justify-content:space-between;">
            <img src="@/assets/index/touxiang.png" alt="" class="ava">
            <div style="width:54vw;display:flex;justify-content:space-between;">
                <div>
                    <div class="text1">嘟嘟导师：动感化训练</div>
                    <div class="text2">课程：￥1999.00</div>
                    <div class="text3">直接推广佣金：<span style="color:#FF494A">￥25.50</span> </div>
                    <div class="text4">间接推广佣金：<span style="color:#FF494A">￥10.20</span> </div>
                </div>
                <div class="text5">推广</div>
            </div>
        </div>
        <div class="box-index" style="width:90vw;display:flex;justify-content:space-between;">
            <img src="@/assets/index/touxiang.png" alt="" class="ava">
            <div style="width:54vw;display:flex;justify-content:space-between;">
                <div>
                    <div class="text1">嘟嘟导师：动感化训练</div>
                    <div class="text2">课程：￥1999.00</div>
                    <div class="text3">直接推广佣金：<span style="color:#FF494A">￥25.50</span> </div>
                    <div class="text4">间接推广佣金：<span style="color:#FF494A">￥10.20</span> </div>
                </div>
                <div class="text5">推广</div>
            </div>
        </div>
        <div class="box-index" style="width:90vw;display:flex;justify-content:space-between;">
            <img src="@/assets/index/touxiang.png" alt="" class="ava">
            <div style="width:54vw;display:flex;justify-content:space-between;">
                <div>
                    <div class="text1">嘟嘟导师：动感化训练</div>
                    <div class="text2">课程：￥1999.00</div>
                    <div class="text3">直接推广佣金：<span style="color:#FF494A">￥25.50</span> </div>
                    <div class="text4">间接推广佣金：<span style="color:#FF494A">￥10.20</span> </div>
                </div>
                <div class="text5">推广</div>
            </div>
        </div> -->
    </div>
</template>

<script>
export default {
    data(){
        return{
            push:"",
            level:"",
            load:""
        }
    },
    methods:{
        jumpQrcode(){
            this.$router.push('/qrcode?uid='+window.localStorage.uid)
        },
        getData(){
            let that=this;
            that.$get('/shove').then(res=>{
                console.log(res)
                that.push=res.data.courses;
                that.level=res.data.level;
                setTimeout(()=>{
                    // that.load.close()
                },500)
            })
        }
    },
    created() {
        // this.load=this.$loading()
        this.getData()
    },
}
</script>

<style scoped>
.laba{
    width: 1.5rem;
    height: 1.5rem;
}
.level{
    font-size:1rem;
    font-family:SourceHanSansCN-Regular;
    font-weight:400;
    color:rgba(51,51,51,1);
    line-height:35px;
    margin-left: 1rem;
}
.push{
    font-size:.9rem;
    font-family:SourceHanSansCN-Regular;
    font-weight:400;
    color:rgba(253,106,5,1);
    margin-top: .3rem;
}
.bottom{
    font-size:.6rem;
    font-family:SourceHanSansCN-Regular;
    font-weight:400;
    color:rgba(185,185,185,1);
    line-height:1.5rem;
}
.text-title{
    font-size: 1rem;
    font-family:SourceHanSansCN-Regular;
    font-weight:400;
    color:rgba(51,51,51,1);
    margin-left: 1rem;
}
.ava{
    width: 7rem;
    height: 5rem;
    border-radius: 8px;
}
.text1{
    font-size:1rem;
    font-family:SourceHanSansCN-Regular;
    font-weight:400;
    color:rgba(51,51,51,1);
    
}
.text2{
    font-size:.9rem;
    font-family:SourceHanSansCN-Regular;
    font-weight:400;
    color:rgba(157,157,157,1);
    margin: 1rem 0 0 0;
}
.text3{
    margin-top: .5rem;
    font-size:.6rem;
    font-family:SourceHanSansCN-Regular;
    font-weight:400;
    color:rgba(157,157,157,1);
}
.text4{
    font-size:.6rem;
    font-family:SourceHanSansCN-Regular;
    font-weight:400;
    color:rgba(157,157,157,1);
}
















.text5{
    font-size:1rem;
    font-family:SourceHanSansCN-Regular;
    font-weight:400;
    color:rgba(255,255,255,1);
    background: url('../assets/center/btn11.png') no-repeat;
    background-size: 100%;
    height: 1.5rem;
    padding: 0 1rem;
    align-self: flex-end;
}

.box-index:last-child{
    margin-bottom: 2rem;
}
</style>
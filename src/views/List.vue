<template>
    <div class="bg" v-if="show">
        <div class="sub-bg">
            <img v-lazy="num2.imgUrl" alt="" class="ava">
        </div>
        <div class="sub-bg">
            <img v-lazy="num1.imgUrl" alt="" class="ava1">
        </div>
        <div class="sub-bg">
            <img v-lazy="num3.imgUrl" alt="" class="ava">
        </div>
        <img src="@/assets/center/list.png" alt="" class="list">
        <div class="sub-money sub-money1">
            <div>第一名</div>
            <div>{{num1.earnings}} 元</div>
        </div>
        <div class="sub-money sub-money2">
            <div>第二名</div>
            <div>{{num2.earnings}} 元</div>
        </div>
        <div class="sub-money sub-money3">
            <div>第三名</div>
            <div>{{num3.earnings}} 元</div>
        </div>
        <div class="box-home" style="background:#FFF;margin-top:0;display:block;">
            <div class="box" v-for="(item,index) in list" :key="index">
                <van-row>
                    <van-col span="3">
                        <div class="num">
                            {{item.cap}}
                        </div>
                    </van-col>
                    <van-col span="4">
                        <img v-lazy="item.imgUrl" alt="" class="ava-img">
                    </van-col>
                    <van-col span="6">
                        <div class="name">{{item.nickname}}</div>
                    </van-col>
                    <van-col span="11">
                        <div class="salary">
                            {{item.earnings}} 元
                        </div>
                    </van-col>
                </van-row>
            </div>
      <!--       <div class="box">
                <van-row>
                    <van-col span="3">
                        <div class="num">
                            4
                        </div>
                    </van-col>
                    <van-col span="4">
                        <img src="@/assets/index/touxiang.png" alt="" class="ava-img">
                    </van-col>
                    <van-col span="6">
                        <div class="name">Aannan</div>
                    </van-col>
                    <van-col span="11">
                        <div class="salary">
                            14456 元
                        </div>
                    </van-col>
                </van-row>
            </div>
            <div class="box">
                <van-row>
                    <van-col span="3">
                        <div class="num">
                            4
                        </div>
                    </van-col>
                    <van-col span="4">
                        <img src="@/assets/index/touxiang.png" alt="" class="ava-img">
                    </van-col>
                    <van-col span="6">
                        <div class="name">Aannan</div>
                    </van-col>
                    <van-col span="11">
                        <div class="salary">
                            14456 元
                        </div>
                    </van-col>
                </van-row>
            </div>
            <div class="box">
                <van-row>
                    <van-col span="3">
                        <div class="num">
                            4
                        </div>
                    </van-col>
                    <van-col span="4">
                        <img src="@/assets/index/touxiang.png" alt="" class="ava-img">
                    </van-col>
                    <van-col span="6">
                        <div class="name">Aannan</div>
                    </van-col>
                    <van-col span="11">
                        <div class="salary">
                            14456 元
                        </div>
                    </van-col>
                </van-row>
            </div>
            <div class="box">
                <van-row>
                    <van-col span="3">
                        <div class="num">
                            4
                        </div>
                    </van-col>
                    <van-col span="4">
                        <img src="@/assets/index/touxiang.png" alt="" class="ava-img">
                    </van-col>
                    <van-col span="6">
                        <div class="name">Aannan</div>
                    </van-col>
                    <van-col span="11">
                        <div class="salary">
                            14456 元
                        </div>
                    </van-col>
                </van-row>
            </div>
            <div class="box">
                <van-row>
                    <van-col span="3">
                        <div class="num">
                            4
                        </div>
                    </van-col>
                    <van-col span="4">
                        <img src="@/assets/index/touxiang.png" alt="" class="ava-img">
                    </van-col>
                    <van-col span="6">
                        <div class="name">Aannan</div>
                    </van-col>
                    <van-col span="11">
                        <div class="salary">
                            14456 元
                        </div>
                    </van-col>
                </van-row>
            </div> -->
        </div>
    </div>
</template>


<script>
export default {
    data(){
        return{
            num1:"",
            num2:"",
            num3:"",
            list:[],
            load:"",
            show:false
        }
    },
    methods:{
        getData(){
            let that=this;
            that.$get('/ranking').then(res=>{
               
                for(let i=0;i<res.data.length;i++){
                    res.data[i].cap=i+1
                }
                 console.log(res)
                that.num1=res.data[0]
                that.num2=res.data[1]
                that.num3=res.data[2]
                if(res.data.length>3){
                    that.list=res.data.splice(3);
                    console.log(that.list)
                }
                setTimeout(()=>{
                    // that.load.close()
                    that.show=true;
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
.bg{
    width: 100vw;
    background-image:linear-gradient(to bottom, #F75F46,#FA854F);
    position: relative;
    top:0rem;
    left:0rem;
    padding-bottom: 4rem;
} 
.sub-bg{
    width: 5rem;
    height: 6rem;
    background-size: 100%;
}
.sub-bg:nth-of-type(1){
    background: url('../assets/center/num2.png') no-repeat; 
    background-size: 100%;
    position: absolute;
    top: 8rem;
    left:2rem;
    width: 4rem;
    height: 5rem;

}
.sub-bg:nth-of-type(2){
    background: url('../assets/center/num1.png') no-repeat; 
    background-size: 100%;
    position: absolute;
    top: 4rem;
    left:50%;
    margin-left:-2.5rem; 
}
.sub-bg:nth-of-type(3){
    background: url('../assets/center/num3.png') no-repeat; 
    background-size: 100%;
    position: absolute;
    top: 9rem;
    right:2rem;
    width: 4rem;
    height: 5rem;
}
.list{
    width: 100vw;
    margin-top: 11rem;
}
.ava:nth-of-type(1){
    border-radius: 50%;
    width: 3.5rem;
    height: 3.5rem;
    margin: 1rem 0 0 0.4rem;
}
.ava1{
    border-radius: 50%;
    width: 4.5rem;
    height: 4.5rem;
    margin: 1.1rem 0 0 0.4rem;
}
.ava:nth-of-type(3){
    border-radius: 50%;
    width: 3.5rem;
    height: 3.5rem;
    margin: 1rem 0 0 0.35rem;
}
.sub-money{
    width: 20vw;
    height: 20vw;
    text-align: center;
}
.bg .sub-money1{
    position: absolute;
    top: 14rem;
    left: 50%;
    margin-left:-10vw;
}
.bg .sub-money2{
    position: absolute;
    top: 15rem;
    left: 2rem;
}
.bg .sub-money3{
    position: absolute;
    top: 16rem;
    right: 1.5rem;
}
.sub-money div:nth-child(1){
    font-size:1rem;
    font-family:SourceHanSansCN-Regular;
    font-weight:400;
    color:rgba(255,255,255,1);
    letter-spacing: 0.1rem;
}
.sub-money div:nth-child(2){
    font-size:1rem;
    font-family:SourceHanSansCN-Medium;
    font-weight:500;
    color:rgba(255,255,255,1);
}
.ava-img{
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
}
.box{
    border-bottom: 1px solid #ccc; 
    margin: 1rem 1rem;
    padding-bottom: .5rem;
}
.num{
    font-size:1.2rem;
    margin: .7rem 0 0 .5rem;
    font-family:SourceHanSansCN-Regular;
    font-weight:400;
    color:rgba(51,51,51,1);
}
.name{
    font-size:1rem;
    font-family:SourceHanSansCN-Regular;
    font-weight:400;
    color:rgba(51,51,51,1);
    margin: .8rem 0 0 0;
}
.salary{
    text-align: right;
    margin:.8rem 0 0 0;
    font-size:1rem;
    font-family:SourceHanSansCN-Regular;
    font-weight:400;
    color:rgba(51,51,51,1);
}
</style>
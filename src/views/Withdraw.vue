<template>
    <div style="text-align:left">
        <div class="balance">
            * 服务费按照单笔交易金额的0.7%收取
        </div>
         <div class="balance1">
            * 可提现金额 {{money}} 元
        </div>
        <div class="box-index" style="width:90vw;">
        <div class="box">
            <div class="sub-box">
                <div class="box-title">提现金额</div>
                <span style="color:#D3963A">￥</span>
                <input type="text" placeholder="请输入金额" style="margin-left:10px;" class="box-input" v-model.trim="tmoney">
            </div>
        </div>
         <div class="box">
            <div class="sub-box">
                <div class="box-title">开户名</div>
                <input type="text" placeholder="请输入银行卡开户姓名" class="box-input" v-model.trim="name">
            </div>
        </div>
         <div class="box">
            <div class="sub-box">
                <div class="box-title">银行卡号</div>
                <input type="text" placeholder="请输入您的银行卡号" class="box-input" v-model.trim="bank">
            </div>
        </div>
         <div class="box">
            <div class="sub-box">
                <div class="box-title">银行卡开户行</div>
                <input type="text" style="width:15rem" placeholder="请输入您的银行卡开户行，非必填" class="box-input" v-model.trim="bankname">
            </div>
        </div>
        

        <button class="con-btn" @click="submit">提交申请</button>
    </div>


    </div>
</template>


<script>
export default {
    data(){
        return {
            txmoney:"",
            money:0,
            name:"",
            bank:"",
            bankname:"",
            tmoney:""
        }
    },
    methods:{
        submit(){
            var that=this
            if(that.tmoney==""){
                that.$toast.fail('提现金额不能为空')
                return;
            }
            if(that.bank==""){
                that.$toast.fail('银行卡号不能为空')
                return;
            }
            if(that.name==""){
                that.$toast.fail('开户名不能为空')
                return;
            }
            if(that.bankname==""){
                that.$toast.fail('开户行不能为空')
                return;
            }
            that.$post('/withdraw',{
                uid:window.localStorage.uid||1,
                money:that.tmoney,
                bank:that.bank,
                bankname:that.bankname,
                name:that.name
            }).then(res=>{
                console.log(res)
                that.$toast.success(res.msg)
            })




            // that.$toast.success('点击了提交按钮')
        },
        getMoney(){
            this.txmoney=this.$route.query.money
            console.log(this.txmoney)
        }
    },
    created(){
        this.money=this.$route.query.money
        this.getMoney()
    }
}
</script>

<style scoped>
 .line{
    height:15px;
    background:rgba(234,234,234,1);
    opacity:0.4;
  }  
.balance{
    height: 61px;
    font-size:17px;
    font-family:SourceHanSansCN-Regular;
    font-weight:400;
    color:#FF3535;
    line-height:61px;
    text-align: left;
    padding:0 0 0 2rem;
    margin: 0 auto;
    white-space: nowrap;
}
.balance1{
    font-size:17px;
    font-family:SourceHanSansCN-Regular;
    font-weight:400;
    color:#D3963A;
    line-height:7px;
    text-align: left;
    margin: 0 auto;
    padding:0 0 0 2rem;
    white-space: nowrap;
}
.box{
    padding: 1.2rem 0.95rem 0rem;
}

.sub-box{
    font-size:1.1rem;
    padding-left: 1.1rem;
    font-family:SourceHanSansCN-Regular;
    font-weight:400;
    color:rgba(51,51,51,1);
    border-bottom: 1px solid rgba(240,240,240,1);
    padding-bottom:1rem;
}

.sub-box span{
    font-size:1rem;
}
.box-title{
    margin-bottom: 1rem;
    color:#D3963A;
}
.box-input{ 
    height:1.5rem;
    border:0;
    color:#ccc;
    font-size:1rem;
    font-family:SourceHanSansCN-Regular;
    width: 14.4rem;
}
::-webkit-input-placeholder { /* WebKit browsers */
  color: #ccc;
  font-size: 1rem;
}
.confirm-btn{
    width: 100%;
    background: #519CFE;
    border-radius: 20px;
}
.con-btn{
    width: 70vw;
    height: 2.8rem;
    display: block;
    margin: 25px auto 20px;
    border:0;
    background: url('../assets/center/btn222.png') no-repeat;
    background-size: 100%;
    font-size:15px;
    font-family:SourceHanSansCN-Regular;
    font-weight:400;
    color:rgba(255,255,255,1);
    line-height:20px;
    text-shadow:0px 2px 4px rgba(0, 0, 0, 0.19);
}
input{
    background-color: transparent;
}
</style>

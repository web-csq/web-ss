<template>
    <div>

    </div>
</template>


<script>
export default {
    data(){
        return{
            secret:"",
            openId:"",
            isWeixin:true,
        }
    },
    methods: {
        // get(){
        //     var that=this
        //     window.location.href=`https://open.weixin.qq.com/connect/oauth2/authorize?appid=${this.appId}&redirect_uri=${window.localStorage.beforeURL}&response_type=code&scope=SCOPE&state=123#wechat_redirect`;
        // },


        getQueryString(name) {
				var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)');
				var r = window.location.search.substr(1).match(reg);
				if (r != null) {
					return unescape(r[2]);
				} else {
					return null;
				}
			},
        getCode(){
            
            var that=this
            if(window.location.search.indexOf('code')>0){
                 window.localStorage.code= that.getQueryString('code')
                 that.$post('/wxlogin',{
                        code:window.localStorage.code
                    }).then((res)=>{
                        console.log(res)
                        window.localStorage.openId=res.data.openid
                        window.localStorage.uid=res.data.id
                    
                        window.location.href=window.localStorage.authBeforeFullPath

                    }).catch((err)=>{

                        console.log(err)
                       
                    })
            }else{
                window.localStorage.redirectUrl=window.location.href
                window.location.href=`https://open.weixin.qq.com/connect/oauth2/authorize?appid=${that.appId}&redirect_uri=${encodeURIComponent(window.localStorage.redirectUrl)}&response_type=code&scope=snsapi_userinfo&state=123&connect_redirect=1#wechat_redirect`
                window.sessionStorage.code= this.getQueryString('code')
                console.log()
            }


            

        }








    },
    
    created () {
        

        
       this.getCode()



        
        //window.location.href=`https://open.weixin.qq.com/connect/oauth2/authorize?appid=${this.appId}&redirect_uri=${window.localStorage.redirectURL}&response_type=code&scope=snsapi_base&state=123&connect_redirect=1#wechat_redirect`

        // this.axios.post('api/wxlogin',this.qs.stringify({
        //     code:"021hHj9z1icAQ90VUIbz1qre9z1hHj9S"
        // })).then((res)=>{
        //     console.log(res)
        // }).catch((err)=>{
        //     console.log(err)
        // })
        
  

    },
    
    
        

}
</script>

<style scoped>
    
</style>

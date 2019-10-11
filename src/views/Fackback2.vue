<template>
    <div>
        <div class="box-index" style="width:75vw;padding:2rem" v-html="content">
            
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            content:"",
            show:false
        }
    },
    methods:{
        getData(){
            let that=this
            let cid=this.$route.query.cid
            that.$post('/look',{
                uid:window.localStorage.uid,
                cid
            }).then(res=>{
                console.log(res)
                if(res.code===200){
                    that.content=res.data.content
                    
                    setTimeout(()=>{
                        that.show=true
                    },500)
                }
            })
        }
    },
    created() {
        this.getData()
    },
}
</script>




<style scoped>

 .box-index >>> img{
    width: 10rem !important;
    height: 10rem !important;
    
    display: block !important;
    margin: 1rem auto !important;
}
 .box-index >>> p span{
     font-size: 1rem;
 }
.box-index >>> video{
    width: 96vw !important;
    display: block !important;
    margin: 1rem auto;
}
.box-index >>> audio{
    width: 83vw !important;
    display: block !important;
    margin: 1rem auto !important;
}


</style>




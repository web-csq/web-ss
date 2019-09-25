<template>
    <div>
        <h2 class="title art">
            {{detail.title}}
        </h2>
        <div class="intr">
            <span>{{detail.author}}</span>
            <a href="javascript:;" style="margin-left:1rem">善商大家族</a>
            <span style="margin-left:1rem">{{detail.addtime}}</span>
        </div>
        <div class="cont" v-html="detail.content">
            
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            detail:{},
            load:""
        }
    },
    methods:{
        getDetail(){
            let that=this
            let id=that.$route.params.id;
            that.$post("/articleList",{id}).then(res=>{
                that.detail=res.data
                console.log(res)

                // setTimeout(()=>{
                //     that.load.close()
                // },500)
            })
        }
    },
    created() {
        // this.load=this.$loading()
        this.getDetail()
    },
}
</script>

<style scoped>
.art{
font-size: 1rem;
}
.intr{
    font-size:0.8rem;
    font-family:PingFang-SC-Medium;
    font-weight:500;
    color:rgba(180,180,180,1);
    padding: 1rem;
    letter-spacing: 0.1rem;
}
.intr a{
    color:#606B85;
}
.cont{
    width: 100vw;
    overflow: hidden;
    padding: .5rem;
    box-sizing: border-box;
}
.cont >>> img{
    width: 94vw !important;
    display: block !important;
    margin: 1rem auto !important;
}
.cont >>> video{
    width: 96vw !important;
    display: block !important;
    margin: 1rem auto;
}
.cont >>> audio{
    width: 83vw !important;
    display: block !important;
    margin: 1rem auto !important;
}
</style>

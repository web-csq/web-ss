<template>
  <div id="app">
    <!-- <transition name="slide-fade">
      <keep-alive v-if="$route.meta.keepAlive">
          <router-view/>
      </keep-alive>
    </transition>
    <transition name="slide-fade">
      <router-view v-if="!$route.meta.keepAlive&&!isRouterAlive"/>
    </transition> -->
    <div v-if="isRouterAlive">
        <router-view />
    </div>
  </div>
</template>


<script>
export default {
  data(){
    return{
      loading: false,
      isRouterAlive:true,
    }
  },
  provide(){
      return {
        reload:this.reload
      }
  },
  methods:{
    reload(){
        this.isRouterAlive = false;
        this.$nextTick(function () {
          this.isRouterAlive = true;
        })
      }
  },
  created(){
   
  }
}
</script>

<style>
.box-home{
  width: 94vw;
  display: flex;
  box-shadow: 0 0 5px #ccc;
  margin: 1rem auto 0;
  border-radius:8px;
  padding: 0.5rem 0;  
  
}
.box-index{
  width: 75vw;
  box-shadow: 0 0 5px #ccc;
  margin: 1rem auto 0;
  border-radius:8px;
  padding: 0.5rem;  
}
.title{
  font-size:1.3rem;
  letter-spacing: 0.2rem;
  font-weight:bold;
  color:rgba(51,51,51,1);
  padding: 1rem 1rem 0.5rem 1rem;
}
.sub-title{
  font-size:1rem;
  font-weight:400;
  color:rgba(154,147,147,1);
  padding:0 0 0 1rem;
}




/* .slide-fade-enter-active {
  transition:all .5s linear;
}
.slide-fade-leave-active {
  transition:all .5s linear;
}
.slide-fade-enter, .slide-fade-leave-to {
  transform: translateX(-30rem);
  opacity: 0;
} */
 #nprogress .bar {
      background: transparent !important; 
  }



</style>

<template>
  <div id="app">
    <transition name="slide-fade">
      <keep-alive v-if="$route.meta.keepAlive">
          <router-view/>
      </keep-alive>
    </transition>
    <transition name="slide-fade">
      <router-view v-if="!$route.meta.keepAlive"/>
    </transition>
    
  </div>
</template>


<script>
export default {
  data(){
    return{

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
  font-family:SourceHanSansCN-Medium;
  font-weight:bold;
  color:rgba(51,51,51,1);
  padding: 1rem 1rem 0.5rem 1rem;
}
.sub-title{
  font-size:1rem;
  font-family:SourceHanSansCN-Normal;
  font-weight:400;
  color:rgba(154,147,147,1);
  padding:0 0 0 1rem;
}




.slide-fade-enter-active {
  transition:all .5s linear;
}
.slide-fade-leave-active {
  transition:all .5s linear;
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(-30rem);
  opacity: 0;
}




</style>

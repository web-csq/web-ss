import Axios from 'axios'
import qs from 'qs'
import { resolve } from 'q';
import Vue from 'vue'
import Loading from 'muse-ui-loading';
import 'muse-ui-loading/dist/muse-ui-loading.css';
Vue.use(Loading,{
  overlayColor: 'rgba(0,0,0,0.8)',     // 背景色
  size: 50,
  color: '#ff90f3',      
  text:"加载中...",
  className:"loading"
})


let baseURL="http://www.shanshangdajiazu.com";
// let baseURL="https://yl.jiawenjie.com";

const axios =Axios.create({
    baseURL:baseURL+"/api",
    timeout:5000,
    headers:{
        "content-type":"application/x-www-form-urlencoded"
    }
})



export const get=(url,params={})=>{

    return new Promise((resolve,reject)=>{
        
        axios.get(url,{params}).then((res)=>resolve(res)).catch((err)=>reject(err))
    })
    
}


export const post=(url,data={})=>{
    return new Promise((resolve,reject)=>{
       axios.post(url,qs.stringify(data)).then(res=>resolve(res)).catch(err=>reject(err))
    })
}



//axios请求拦截
axios.interceptors.request.use(
    config=>{
       
        
        
        return config
    },
    error=>{
  

        return Promise.error(error)
    }
  )

  axios.interceptors.response.use(
    response=>{
       
        

        return Promise.resolve(response.data)
    },
    error=>{
        return Promise.reject(error.response)
    }
  )
  
  
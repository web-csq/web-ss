import Axios from 'axios'
import qs from 'qs'
import { resolve } from 'q';

const axios =Axios.create({
    baseURL:"",
    timeout:5000,
    headers:{
        "content-type":"application/x-www-form-urlencoded"
    }
})
export const get=(url,params={})=>{
    return new Promise((resolve,reject)=>{
        axios.get(url,{params}).then((res)=>resolve(res.data)).catch((err)=>reject(err))
    })
    
}
export const post=(url,data={})=>{
    return new Promise((resolve,reject)=>{
       axios.post(url,qs.stringify(data)).then(res=>resolve(res.data)).catch(err=>reject(err))
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
  
  
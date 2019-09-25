import wx from 'weixin-js-sdk'

import * as request from '../request'

export const config=()=>{
    
    let url=window.location.href.split('#')[0]
    request.post('/ticket',{url}).then(res=>{
        wx.config({
            debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来
            appId: res.appId, // 必填，公众号的唯一标识
            timestamp: res.timestamp, // 必填，生成签名的时间戳
            nonceStr: res.nonceStr, // 必填，生成签名的随机串
            signature:res.signature,// 必填，签名，
            jsApiList: [
            　　"chooseWXPay",  //支付
                "onMenuShareTimeline",//分享朋友圈
                "onMenuShareAppMessage",//分享好友
            　] // 必填，需要使用的JS接口列表，
        })
    })

}




export const pay=(requestUrl="", data={},that)=> {
        // console.log(button)
        // request.post('/ticket',{
        //    url:window.location.href.split('#')[0]
        // }).then(res=>{
        // wx.config({
        //     　debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来
        //     　appId: res.appId, // 必填，公众号的唯一标识
        //       timestamp: res.timestamp, // 必填，生成签名的时间戳
        //     　nonceStr: res.nonceStr, // 必填，生成签名的随机串
        //     　signature:res.signature,// 必填，签名，
        //     　jsApiList: [
        //     　　"chooseWXPay",  //支付
        //         "onMenuShareTimeline",//分享朋友圈
        //         "onMenuShareAppMessage",//分享好友
        //     　] // 必填，需要使用的JS接口列表，
        // })
        return new Promise((resolve,reject)=>{
        wx.ready(()=>{
            // button.onclick=()=>{
                request.post(requestUrl,data).then(res=>{
                    var data1=res.data
                    wx.chooseWXPay({
                        nonceStr: data1.nonceStr, // 支付签名随机串
                        package: data1.package, // 统一支付接口返回的prepay_id参数值，提交格式如：prepay_id=***）
                        paySign: data1.paySign, // 支付签名
                        signType: data1.signType, // 签名方式，默认为'SHA1'，使用新版支付需传入'MD5'
                        timestamp: data1.timeStamp, // 支付签名时间戳
                        // success:(result)=>{
                        //     that.$toast.success('支付成功')
                        //     setTimeout(()=>{
                        //         that.$router.push('/paysuccess')
                        //     },1500)
                             
                        // },
                        // cancel:(result)=>{
                        //     that.$toast.success('取消支付')
                        // },
                        // fail:()=>{
                        //     that.$toast.success('支付失败')
                        // }
                        success: function (res) {
                            that.hide()
                            that.$router.push('/paysuccess')
                            resolve()
                            
                        },
                        cancel: function (res) {
                            that.$toast.fail('支付取消')
                            that.hide()
                            
                           
                            resolve()
                        },
                        fail: function (res) {
                            that.$toast.fail('支付失败')
                            that.hide()
                            
                           
                        }
                        
                    })
                })
            // }
        // })
        })
    })
    
}

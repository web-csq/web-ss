import wx from 'weixin-js-sdk'

import request from '../request'

var url=window.location.href.split('#')[0]
function pay(url,button) {

        request.get('',url).then(res=>{
        wx.config({
            　debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来
            　appId: res.appId, // 必填，公众号的唯一标识
              timestamp: res.timestamp, // 必填，生成签名的时间戳
            　nonceStr: res.nonceStr, // 必填，生成签名的随机串
            　signature:res.signature,// 必填，签名，
            　jsApiList: [
            　　　"chooseWXPay"
            　] // 必填，需要使用的JS接口列表，
        })
        wx.ready(()=>{
            button.onclick=()=>{
                request.post(url,data).then(res=>{
                    wx.chooseWXPay({
                        nonceStr: data.nonceStr, // 支付签名随机串
                        package: data.package, // 统一支付接口返回的prepay_id参数值，提交格式如：prepay_id=***）
                        paySign: data.paySign, // 支付签名
                        signType: data.signType, // 签名方式，默认为'SHA1'，使用新版支付需传入'MD5'
                        timestamp: data.timeStamp, // 支付签名时间戳
                        success:(result)=>{

                        },
                        cancel:(result)=>{

                        }
                        
                    })
                })
            }
        })
    })
    
}

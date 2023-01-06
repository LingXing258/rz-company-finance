import request from '@/utils/request'
import qs from 'qs'
export const getCode = data => {
    return request({
        headers:{
           ' Content-Type': 'application/json'
        },
        method: 'post',
        url: `weixin/send-code.ht`,
        data:qs.stringify(data)
    })
}
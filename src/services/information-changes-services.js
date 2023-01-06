import request from '@/utils/request'
import qs from 'qs'
export const sendStartForm  = data => {
    return request({
        method: 'post',
        url: 'weixin/bpm/getStartForm.ht',
        data: qs.stringify(data)
    })
}
export const sendNewsChangeForm  = data => {
    return request({
        method: 'post',
        url: './data.json',
        data: qs.stringify(data)
    })
}

import request from '@/utils/request'
import qs from 'qs'
export const sendStopForm = data => {
    return request({
        method: 'post',
        url: './data.json',
        data: qs.stringify(data)
    })
}

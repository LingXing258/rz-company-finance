import request from '@/utils/request'
import qs from 'qs'
export const sendRegistForm = data => {
    return request({
        method: 'post',
        url: './data.json',
        data: qs.stringify(data)
    })
}

import store from '@/store'
import request from '@/utils/request'
import qs from 'qs'
export const getGZTPZ = data => {
    return request({
        headers:{
           ' Content-Type': 'application/json',
        },
        method: 'get',
        url: `getGZTPZ.ht?parentId=0`,
    })
}
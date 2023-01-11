import request from '@/utils/request'
import qs from 'qs'
export const getStockData = param => {
    return request({
        method: 'get',
        url: `getGZTPZ.ht?parentId=0`,
        params:param
    })
}
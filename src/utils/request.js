import axios from 'axios'
import store from '@/store'
import router from '@/router'
import qs from 'qs'
const request = axios.create({
    headers:{
        'Content-Type': 'application/x-www-form-urlencoded'
    }
})

request.interceptors.request.use(function(config) {
   const { user } = store.state
   if(user && user.token) {
    config.headers.Authorization=store.state.user.token
   }
   return config
})

function redirectLogin () {
    router.push({
        path:  '/',
        query:{
         redirect: router.currentRoute.fullPath
        }
     })
}

let isRefreshing = false
let requests = []

request.interceptors.response.use(function(response) {
   return response
 },function(error) {
    const { status } = error.response
    //就是没有token情况下
   if(status == 401) {
    if(!store.state.user) {
        redirectLogin()
        return Promise.reject(error)
    }
   //有token情况下
   if(isRefreshing) {
     return requests.push(()=> {
        request(error.config)
     })
}
   isRefreshing=true
     return request({
        method:'Post',
        url: '',
        data: qs.stringify({
            refreshtoken: store.state.user.refresh
        }).then(res => {
            if(res.data.state != 1) {
                store.commit('setUser',null)
                redirectLogin()
                return Promise.reject(error)
            }
            store.commit('setUser',res.data.content)
            // requests.forEach(callback => callback())
            // requests = [ ]
            return request(error.config)
        }).catch(err => {

        }).finally(function(){
            isRefreshing = false
        })
     })
   }
 })
export default  request
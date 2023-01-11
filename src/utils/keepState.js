import { Base64 } from 'js-base64'
export const getCanExpireLocal = function(key){
    let  user =window.localStorage.getItem(key)
    if(user) {
        let  decodeUser = Base64.decode(user)
        let  userParse= JSON.parse(decodeUser )
        if (Date.now() > userParse.time + userParse.expire) {
            localStorage.removeItem(key)
            return null
          }
       return userParse
    }else {
        return null
    }
    }
    
export  const setCanExpireLocal = (key, value, expire) => {
    if (isNaN(expire) || expire < 1) {
        throw new Error('有效期应为一个有效数值')
      }
      // 86_400_000一天时间的毫秒数，_是数值分隔符
      let $time = expire * 86_400_000
     if(value){
        let obj = {
            saveTime: Date.now(), //存值时间戳
            expire: $time, //过期时间
      }
      let assignObject = Object.assign(value,obj)
      let user = JSON.stringify(assignObject)
      let encodeUser = Base64.encode(user)
      console.log(user)
      console.log(encodeUser)
      window.localStorage.setItem(key, JSON.stringify(encodeUser))
     }
}



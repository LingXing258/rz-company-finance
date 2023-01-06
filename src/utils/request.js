import axios from 'axios'

const request = axios.create({
    headers:{
        'Content-Type': 'application/x-www-form-urlencoded'
    }
})
export default  request
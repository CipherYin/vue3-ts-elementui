import axios from "axios";
import { ElMessage } from 'element-plus'
enum MSGS {
    "操作成功" = 200,
    "密码错误" = 201,
    "账号错误" = 202,
    "请求异常" = 203
}

// 创建HTTP实例
const $http = axios.create({
    baseURL:"https://wwww.v3-test/mock/api",
    timeout:2000,
    headers:{
        "Content-Type":"application/json;charset=utf-8"
    }
})

// 请求拦截
$http.interceptors.request.use(config=>{
    config.headers = config.headers || {}
    if(localStorage.getItem("token")){
        config.headers.token = localStorage.getItem("token") || ''
    }
    return config;
})

// 响应拦截
$http.interceptors.response.use(res=>{
    const code:number = res.data?.code
    if(code!=200){
        ElMessage.error(MSGS[code])
        return Promise.reject(res.data)
    }
    return res.data;
},err=>{
    console.log(err);
})

export default $http
<template>
    <div class="login-box">
       
        <el-form
        ref="loginFormRef"
        :model="loginForm"
        status-icon
        :rules="rules"
        label-width="70px"
        class="loginForm"
    >
        <h1>后台管理系统</h1>
        <el-form-item label="账号：" prop="userName">
        <el-input v-model="loginForm.userName"  autocomplete="off" />
        </el-form-item>
        <el-form-item label="密码：" type="password" prop="password">
        <el-input
            v-model="loginForm.password"
            type="password"
            autocomplete="off"
        />
        </el-form-item>
        <el-form-item>
        <el-button class="sub-btn" type="primary" @click="submitForm"
            >登陆</el-button
        >
        </el-form-item>
    </el-form>
    </div>
</template>



 <script lang="ts">
import { defineComponent, reactive,toRefs } from 'vue'
import {InitData} from "../types/login"


export default defineComponent({
    setup () {
        const data = reactive(new InitData())
        const rules = {
                userName: [
                { required: true, message: '请输入账号', trigger: 'blur' },
                { min: 6, max: 24, message: '账号长度需要在6~24之间', trigger: 'blur' },
                ],
                password: [
                { required: true, message: '请输入密码', trigger: 'blur' },
                { min: 6, max: 24, message: '密码长度需要在6~24之间', trigger: 'blur' },
                ]
            }

        const submitForm = ()=>{
            data.loginFormRef?.validate((valid)=>{
                if(valid){
                    alert("验证通过，发送请求")
                }
            })
        }
        
        return {
            ...toRefs(data),
            rules,
            submitForm
        }
    }
})
</script> 

<style lang="scss" scoped>
.login-box{
    background: url("../assets/bg.jpg") no-repeat;
    background-size: cover;
    height: 100%;
    width: 100%;
    box-sizing: border-box;
    padding-top: 200px;
    .loginForm{
        width: 400px;
        padding: 20px;
        background-color: #fff;
        border-radius: 20px;
        margin: 0 auto;
        .sub-btn{
            width: 100px;
        }
        h1{
            text-align: center;
            margin: 20px 0;
        }
    }

}

</style>
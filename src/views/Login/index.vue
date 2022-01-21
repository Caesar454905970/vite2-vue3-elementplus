<template>
 <div>


   <!--登录表单区域-->
   <div class="login-content">
     <el-form :model="loginForm"
              ref="loginFormRef"
              :rules="loginFormRules"
              label-width="100px"
              class="demo-ruleForm">
        <el-form-item label="用户名" prop="userName">
           <el-input v-model="loginForm.userName"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
           <el-input type="password" v-model="loginForm.password"></el-input>
        </el-form-item>
        <el-form-item>
           <el-button class="btn-login" type="primary" @click="submitLoginForm()">登录</el-button>
        </el-form-item>
     </el-form>


   </div>
 </div>
</template>

<script  setup>
import {reactive, ref} from "vue";

import {Login} from '../../utils/api.js'
// import {useRouter} from 'vue-router'

import router from  '../../router/index.js'
// const router = router
  /**
   * 登录业务逻辑
   * @type {UnwrapNestedRefs<{password: string, account: string}>}
   */
  //登录表单数据
  const loginForm = reactive({
    userName:'chengqiang',
    password:'1234'
  })
  //登录表单数据验证
  const loginFormRules= reactive({
    userName: [// 验证用户名是否合法
      { required: true, //必填字段
        message: '请输入登录名称',
        trigger: 'blur' }, // 失去焦点时触发
      { min: 1,
        max: 10,
        message: '长度在 1 到 10 个字符',
        trigger: 'blur' },// 失去焦点时触发
    ],
    password: [ // 验证密码是否合法
      { required: true,
        message: '请输入登录密码',
        trigger: 'blur' }, // 失去焦点时触发
      { min: 1,
        max: 15,
        message: '长度在 1 到 15 个字符',
        trigger: 'blur' }// 失去焦点时触发
    ]
  })
  const  loginFormRef = ref(null)
  //登录按钮提交 表单信息
  const submitLoginForm= ()=>{
    // 表单登录之前预验证
   loginFormRef.value.validate(async (valid) => {
      if (!valid) {
        // 预验证失败
        alert("预验证失败,表单信息有误，请检查")
        return //拦截
      }

      //预验证通过
      // console.log("表单预校验验证成功")

     //数据交互
     Login(loginForm).then(res => {
       //接受到响应结果
       if(res.code ===200){
         //页面跳转:到主页
         router.push('/home');
       }else {
         alert("登录失败")
         //登录失败
       }

     })

    })

  }



</script>

<style scoped>

</style>

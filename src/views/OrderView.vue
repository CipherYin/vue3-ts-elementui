<template>
    <div>
        <div class="select-box">
        <el-form :inline="true" :model="selectData" class="demo-form-inline">
    <el-form-item label="标题搜索">
      <el-input v-model="selectData.title" placeholder="请输入关键字" clearable />
    </el-form-item>

    <el-form-item label="详情">
      <el-input v-model="selectData.body" placeholder="请输入关键字" clearable />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" >查询</el-button>
    </el-form-item>
  </el-form>
    </div>
</div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'
import {InitData} from "../types/order"
export default defineComponent({
    setup () {
        const data = reactive(new InitData())

        return {
            ...toRefs(data)
        }
    }
})
</script>

<style scoped>

</style>
<template>

  <!--左侧栏菜单 menu-->
  <el-aside width="200px">
    <div style="width: 200px">
      <el-menu
          style="height: calc(100vh - 51px)"
          default-active="/home"
          router
      >

        <el-sub-menu index="1">
          <template #title>
            <el-icon><location /></el-icon>
            <span>菜单一</span>
          </template>
          <el-menu-item index="/home">
            <el-icon><icon-menu /></el-icon>
            <span>主页</span>
          </el-menu-item>
          <el-menu-item index="/about">
            <el-icon><icon-menu /></el-icon>
            <span>关于</span>
          </el-menu-item>
        </el-sub-menu>

        <el-menu-item index="2">
          <el-icon><icon-menu /></el-icon>
          <span>菜单二</span>
        </el-menu-item>
      </el-menu>
    </div>
  </el-aside>
</template>

<script setup>
/**
 *   <!--左侧栏菜单 menu-->
 */
//引入图标库
import {
  Location,
  Document,
  Menu as IconMenu,
  Setting,
  ArrowDown,
} from '@element-plus/icons-vue'

</script>


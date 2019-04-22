<template>
  <el-container class="index-container">
    <!-- 头部标题 -->
    <el-header class="index-header">
      <div class="herder-title">运营平台</div>
      <div class="header-tag">用户A</div>
      <el-button class="header-right" type="success" @click="logout">退出</el-button>
    </el-header>
    <!-- 左边导航栏 -->
    <el-container class="index-left">
      <el-aside class="index-aside" width="201px">
        <el-menu
          default-active="/home"
          class="el-menu-vertical-demo"
          background-color="#545c64"
          router
          text-color="#fff"
          active-text-color="#ffd04b"
        >
          <el-menu-item index="/home" > 
            <i class="el-icon-menu"></i>
            <span class="span-title" slot="title">首页</span>
          </el-menu-item>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>首页tab配置</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="bannerConfig">banner配置</el-menu-item>
              <el-menu-item index="quickEntry">快捷入口配置</el-menu-item>
              <el-menu-item index="themeCard">首页tab主题卡片配置</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>应用tab配置</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="aBannerConfig">banner配置</el-menu-item>
              <el-menu-item index="aQuickEnter">快速入口配置</el-menu-item>
              <el-menu-item index="aThemeCard">应用tab主题卡片管理</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="4">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>游戏tab配置</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="1-1">选项1</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="5">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>banner资源库管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="bannerResource">banner资源库管理</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="6">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>快捷入口资源库管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="eQuickEnter">快捷入口资源库管理</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="7">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>主题卡片库管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="1-1">选项1</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="8">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>辅助工具</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="1-1">选项1</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>
      <!-- 左侧内容栏 -->
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      activeIndex:'0',
    };
  },
  methods: {
    logout() {
      this.$confirm("是否退出", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$message({
            type: "success",
            message: "退出成功!"
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消退出"
          });
        });
    }
  }
};
</script>

<style>
html,
body {
  height: 100%;
  margin: 0;
  padding: 0;
}
body > div:first-of-type {
  height: 100%;
}
.el-header {
  padding: 0px;
  margin: 0px;
}
.index-container {
  height: 100%;
  background-color: #f2f3f5;
}
.index-header {
  background-color: #fff;
  border-bottom: 1px solid #ccc;
  position: relative;
}
.herder-title {
  width: 200px;
  line-height: 60px;
  font-size: 26px;
  color: #fff;
  font-weight: 700;
  text-align: center;
  background-color: #434a50;
  position: absolute;
  left: 0;
}
.header-tag,
.header-right {
  position: absolute;
  top: 8px;
  font-size: 16px;
  width: 70px;
  text-align: center;
}
.header-tag {
  right: 120px;
  line-height: 44px;
}
.el-menu {
  height: 100%;
}
.header-right {
  right: 20px;
}
.text {
  font-size: 14px;
}
.item {
  margin-bottom: 18px;
}
.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}
</style>

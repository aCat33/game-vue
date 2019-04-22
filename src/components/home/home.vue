<template>
  <div>
      <!-- 左侧内容栏 -->
      <el-main>
        <el-row :gutter="20" class="index-card">
          <el-col :span="12" :offset="1">
            <div class="grid-content bg-purple">
              <el-card class="box-card">
                <div slot="header" class="clearfix">
                  <span>平台说明</span>
                  <span class="el-icon-span">
                    <i class="el-icon-setting"></i>
                  </span>
                </div>
                <div v-for="o in 4" :key="o" class="text item">{{'内容 ' + o }}</div>
              </el-card>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="12" :offset="1">
            <div class="grid-content bg-purple">
              <el-card class="box-card">
                <div slot="header" class="clearfix">
                  <span>联系人列表</span>
                  <span class="el-icon-span">
                    <i class="el-icon-setting"></i>
                  </span>
                </div>
                <div v-for="o in 4" :key="o" class="text item">{{'内容 ' + o }}</div>
              </el-card>
            </div>
          </el-col>
        </el-row>
      </el-main>
  </div>
</template>

<script>
export default {

};
</script>

<style>
.box-card {
  width: 480px;
}
.index-card {
  margin-bottom: 20px;
}
.el-icon-span {
  float: right;
}
.el-icon-setting {
  cursor: pointer;
  color: #97a8bc;
}

</style>

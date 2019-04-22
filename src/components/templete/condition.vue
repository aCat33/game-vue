<template>
<!-- 搜索查询模板 -->
  <el-row class="condition">     
    <el-col :span="21">
      <el-form :inline="true" :model="formInline" class="demo-form-inline">        
        <el-form-item :label="first">
          <el-select v-model="formInline.region" placeholder="请选择">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item :label="second">
          <el-select v-model="formInline.region" placeholder="请选择">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">查询</el-button>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="reset">重置</el-button>
        </el-form-item>
      </el-form>
      <div class="grid-content bg-purple"></div>
    </el-col>
    <el-col :span="3">
      <div class="grid-content bg-purple-light">
          <el-button type="primary" @click="reset">{{third}}</el-button>
      </div>
    </el-col>
  </el-row>
</template>

<script>

export default {
    props:['first','second','third'],
  data() {
    return {
      formInline: []
    };
  },
  methods:{
      onSubmit(){

      },
      reset(){

      }
  }
};
</script>

<style>
</style>

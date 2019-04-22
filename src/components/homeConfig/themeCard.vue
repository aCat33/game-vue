<template>
  <div>
    <div>
      <!-- 搜索栏 -->
      <el-row class="condition">
        <el-col :span="21">
          <el-form :inline="true" :model="formInline" class="demo-form-inline">
            <el-form-item label="位置">
              <el-select v-model="formInline.region" placeholder="请选择">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="状态">
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
            <el-button type="primary" @click="addFormVisiable=true">新增卡片</el-button>
          </div>
        </el-col>
      </el-row>
      <!-- <condition first="位置" second="状态" third="配置banner"></condition> -->
    </div>
    <!-- 信息列表 -->
    <el-table :data="tableData" style="width: 90%" border>
      <el-table-column type="index" :index="indexMethod" label="位置" width="50"></el-table-column>
      <el-table-column prop="quickEnter" label="卡片名" width="100"></el-table-column>
      <el-table-column prop="cardStyle" label="卡片样式"></el-table-column>
      <el-table-column prop="status" label="样式状态" width="100"></el-table-column>
      <el-table-column prop="operation" label="操作">
        <el-button type="primary" size="small">上线</el-button>
        <el-button type="info" size="small">下线</el-button>
        <el-button type="danger" size="small">移除</el-button>
      </el-table-column>
    </el-table>
    <!-- 分页 -->
    <el-pagination
      :page-sizes="[2, 4, 6, 8]"
      :page-size="sendData.pagesize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
      @size-change="sizeChange"
      @current-change="currentChange"
    ></el-pagination>
    <!-- 配置快捷入口 新增 -->
    <el-dialog title="添加banner资源" :visible.sync="addFormVisiable">
      <el-form
        ref="addForm'"
        :model="addForm"
        :rules="rules"
        label-width="150px"
        class="banner-form"
        label-position="left"
      >
        <el-form-item label="添加卡片">
          <el-select v-model="form.region" placeholder="主题卡片名">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="位置">
          <el-input v-model="form.name" class="bannersate"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('addForm')">提交</el-button>
          <el-button @click="addFormVisiable = false">取消</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
// import condition from "../templete/condition";

export default {
  // components: { condition },
  data() {
    return {
      // 标记新增框是否显示
      addFormVisiable: false,
      // 标记新增框是否显示
      editFormVisiable: false,
      // 标记角色框是否显示
      ruleFormVisiable: false,
      //新增的表单数据
      addForm: {},
      //新增的表单数据验证
      rules: {},
      //总条数
      total: 0,
      tableData: [
        {
          quickEnter: "热门应用",
          cardStyle: "大标题竖向列表",
          status: "上线中",
          city: "普陀区",
          operation: "上海市普陀区金沙江路 1518 弄"
        },
        {
          quickEnter: "横排1",
          cardStyle: "无标题横向",
          status: "已下线",
          city: "普陀区",
          operation: "上海市普陀区金沙江路 1517 弄"
        },
        {
          quickEnter: "精选游戏",
          cardStyle: "首应用带截图列表",
          status: "已下线",
          city: "普陀区",
          operation: "上海市普陀区金沙江路 1519 弄"
        }
      ],
      formInline: {},
      indexMethod: 0,
      form: {
        name: "",
        region: ""
      }
    };
  },
  methods: {
    onSubmit() {},
    reset() {},
    Submit() {
      console.log("submit!");
    },
    submitForm() {},
    //页容量改变
    sizeChange() {},
    sendData() {},
    currentChange() {}
  }
};
</script>

<style>
.banner-form {
  height: auto;
  padding-left: 100px;
}

.bannersate {
  width: 80px;
}
</style>

<template>
  <div>
    <div>
      <!-- 搜索栏 -->
      <el-row class="condition">
        <el-col :span="21">
          <el-form :inline="true" :model="formInline" class="demo-form-inline">
            <el-form-item label="所属页面">
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
            <el-button type="primary" @click="addFormVisiable=true">新增快捷入口</el-button>
          </div>
        </el-col>
      </el-row>
      <!-- <condition first="位置" second="状态" third="配置banner"></condition> -->
    </div>
    <!-- 信息列表 -->
    <el-table :data="tableData" style="width: 90%" border>
      <el-table-column prop="quickEnter" label="快捷入口" width="100"></el-table-column>
      <el-table-column prop="belongToPage" label="所属页面" width="100"></el-table-column>
      <el-table-column prop="location" label="位置" width="50"></el-table-column>
      <el-table-column prop="icon" label="图标" width="100"></el-table-column>
      <el-table-column prop="character" label="文字" width="100"></el-table-column>
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
        <el-form-item label="banner标题">
          <el-input v-model="form.title" class="bannersate" placeholder="文本输入"></el-input>
        </el-form-item>
        <el-form-item label="banner图片">
          <el-upload
            action="https://jsonplaceholder.typicode.com/posts/"
            list-type="picture-card"
            :on-preview="handlePictureCardPreview"
            :on-remove="handleRemove"
          >
            <i class="el-icon-plus"></i>
          </el-upload>
          <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt>
          </el-dialog>
        </el-form-item>
        <el-form-item label="跳转链接">
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
      dialogImageUrl: "",
      dialogVisible: false,
      tableData: [
        {
          quickEnter:'xx应用',  
          belongToPage: "首页",
          location: "1",
          icon: "上线中",
          character: "xxxxx",
          operation: "上海市xxxxx金沙江路 1518 弄"
        },
        {
          quickEnter:'xx应用',  
          belongToPage: "应用页",
          location: "1",
          icon: "已下线",
          character: "xxxxx",
          operation: "上海市普陀区金沙江路 1517 弄"
        },
        {
          quickEnter:'xx应用',  
          belongToPage: "应用页",
          location: "1",
          icon: "已下线",
          character: "zzzz",
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
    currentChange() {},
        //图片上传
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    }
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

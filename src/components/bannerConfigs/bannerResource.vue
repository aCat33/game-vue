<template>
  <div>
    <div class="grid-content bg-purple-light banner-box">
      <el-button type="primary" @click="addFormVisiable=true">新增banner</el-button>
    </div>
    <!-- 信息列表 -->
    <el-table :data="tableData" style="width: 90%" border>
      <el-table-column prop="bannerTitle" label="banner标题" width="100"></el-table-column>
      <el-table-column prop="link" label="链接"></el-table-column>
      <el-table-column prop="status" label="样式状态" width="100"></el-table-column>
      <el-table-column prop="operation" label="操作">
        <el-button type="primary" size="small">启用</el-button>
        <el-button type="info" size="small">编辑</el-button>
        <el-button type="danger" size="small">删除</el-button>
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
    <!-- 配置banner 新增 -->
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
          bannerTitle: "五一活动",
          link: "http://localhost:8080/#/bannerConfig",
          status: "上线中",
          city: "普陀区",
          operation: "上海市普陀区金沙江路 1518 弄"
        },
        {
          bannerTitle: "五一活动",
          link: "http://localhost:8080/#/bannerConfig",
          status: "已下线",
          city: "普陀区",
          operation: "上海市普陀区金沙江路 1517 弄"
        },
        {
          bannerTitle: "五一活动",
          link: "http://localhost:8080/#/bannerConfig",
          status: "已下线",
          city: "普陀区",
          operation: "上海市普陀区金沙江路 1519 弄"
        }
      ],
      formInline: {},
      indexMethod: 0,
      form: {
        name: "",
        region: "",
        titlt: ""
      },
      dialogImageUrl: "",
      dialogVisible: false
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
.banner-box {
  margin-left: 800px;
  margin-bottom: 20px;
}


</style>

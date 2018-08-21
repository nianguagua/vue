<template>
  <el-container>
    <el-main>
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="标题">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="时间">
          <el-col :span="11">
            <el-date-picker type="date" placeholder="开始日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
          </el-col>
          <el-col class="line" :span="2">-</el-col>
          <el-col :span="11">
            <el-date-picker type="date" placeholder="结束日期" v-model="form.date2" style="width: 100%;"></el-date-picker>
          </el-col>
        </el-form-item>
        <el-form-item label="简述">
          <el-input type="textarea" :rows="16" v-model="form.desc"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary">确定</el-button>
          <el-button>清空</el-button>
        </el-form-item>
      </el-form>
    </el-main>
    <el-aside>
      <el-header>
        <el-input placeholder="请输入内容" v-model="searchContent" class="input-with-select">
          <el-select style="width:80px" v-model="searchType" slot="prepend" placeholder="请选择">
            <el-option label="标题" value="1"></el-option>
            <el-option label="时间" value="2"></el-option>
            <el-option label="内容" value="3"></el-option>
          </el-select>
          <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
      </el-header>
      <div class="put-card">
        <el-card shadow="never" class="box-card" v-for="box in 6">
          <div slot="header" class="clearfix">
            <div style="margin:-10px;">
              <span>
                小标题<small>(2018-08-21 13:21:15)</small>
              </span>
              <el-button style="float: right; padding: 3px 0" type="text">
                <i class="el-icon-delete"></i>
                <span>/</span>
                <i class="el-icon-edit"></i>
              </el-button>
            </div>
          </div>
          <div class="text item">
            <div style="margin:-8px -10px;font-size:14px;">
              这里是详细描述,这里是详细描述,这里是详细描述
            </div>
          </div>
        </el-card>
      </div>
    </el-aside>
  </el-container>
</template>
<script>
//import Bus from '../../assets/js/common/eventBus'
export default {
  name: 'girlFourthComponent',
  props:["fourthInfo"],
  data () {
    return {
      searchType:'1',
      searchContent:"",
      activeName:"first",
      form:{
        name:"",
        date1:"",
        date2:"",
        desc:""
      }
    }
  },
  mounted:function(){
  },
  methods: {
  }
}
</script>
<style scoped>
  .el-header{
    padding: 0;
  }
  .el-aside{
    padding: 5px;
    /*background: #999;*/
  }
  .el-card{
    margin-bottom: 5px;
  }
  .put-card{
    /*height: 660px;*/
    /*overflow-y: scroll;*/
  }
  .put-card i{
    cursor: pointer;
  }
  .el-form{
    margin-top: 5px;
  }
  .line{
    text-align: center;
  }
</style>

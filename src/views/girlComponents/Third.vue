<template>
  <el-container>
    <el-header style="height:120px;border-bottom:1px solid #ccc;">
      <el-row :gutter="10">
        <el-col :span="6">
          <headnavLeft></headnavLeft>
        </el-col>
        <el-col :span="14">
          <div class="box nav">
            <template>
              <headnavCenter :activeIndex="activeIndex"></headnavCenter>
            </template>
          </div>  
        </el-col>
        <el-col :span="4">
          <headnavGirlRight></headnavGirlRight>
        </el-col>
      </el-row> 
    </el-header> 
    <el-container style="padding-top:10px;background: #eee;">
      <el-aside width="300px">
        <div class="tab-name">
            
        </div>
        <div class="menu">
          <el-menu default-active="app" style="border:none;">
            <el-menu-item index="app" @click="changeTab('app')">
                <i class="el-icon-document"></i>
                <span slot="title">APP</span>
            </el-menu-item>
            <el-menu-item index="demo" @click="changeTab('demo')">
                <i class="el-icon-location"></i>
                <span slot="title">DEMO</span>
            </el-menu-item>
          </el-menu>
        </div>
      </el-aside>
      <el-main>
        <div class="app" v-if="currentShow == 'app'">
          <el-card v-for="app in apps" :key="app.id" shadow="never">
            <span style="margin-right:10px">
            名称:<font style="color:#409EFF">{{app.name}}</font>
            </span>
            <span>描述:{{app.des}}</span>
            <el-button style="float: right; padding: 3px 0" type="text">
              <a :href="app.download">下载</a>
            </el-button>
          </el-card>
        </div>
        <div class="demo" v-if="currentShow == 'demo'">
          <el-card v-for="de in demos" :key="de.id" shadow="never">
            <span>{{de.des}}</span>
            <el-button style="float: right; padding: 3px 0" type="text">
              <a :href="de.url">详情></a>
            </el-button>
          </el-card>
        </div>
      </el-main>
    </el-container>
    <el-footer style="height:20px">
      
    </el-footer>
    <codeDialog></codeDialog>
  </el-container>
</template>
<script>
import headnavCenter from "../../components/headnavCenter"
export default {
  name: 'Third',
  data () {
    return {
      activeIndex: 'third',
      currentShow: "app",
      apps:[
        {
          id:1,
          name:"猫宁",
          des:"this is a description...",
          download:"http://www.baidu.com"
        },
        {
          id:2,
          name:"猫宁2",
          des:"this is a description...",
          download:"http://www.baidu.com"
        }
      ],
      demos:[
        {
          id:1,
          des:"冬日的傍晚，纷飞的雪花...",
          url:"http://www.baidu.com"
        }
      ]
    }
  },
  components:{
    headnavCenter:headnavCenter
  },
  methods:{
    changeTab:function(type){
      var _self = this;
      _self.currentShow = type;
    }
  }
}
</script>
<style scoped>
  a{
    color: #409EFF;
  }
  .el-card{
    margin-bottom: 5px;
  }
  .el-aside{
    margin-right: 2px;
  }
</style>
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
    <el-container style="background: #eee;">
      <el-aside width="300px">
        <el-menu :default-active="currentShow" :unique-opened=true>
          <div class="tab-name">
            <el-input placeholder="请输入内容" class="input-with-select">
              <el-button slot="append" icon="el-icon-search"></el-button>
            </el-input>
          </div>
          <el-submenu v-for="da,index in allData" :key="da.name" :index="index+1+''">
            <template slot="title">
              <i v-bind:class="da.icon"></i>
              <span>{{da.name}}</span>
            </template>
            <el-menu-item-group>
              <el-menu-item v-for="it in da.data" :key="it.tagName" :index="it.tagName" @click="changeTab(it.tagName)">{{it.tagName}}</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main>
        <div v-for="it in allItemData" v-if="currentShow == it.tagName">
          <secondDataComponent :activeName="1" :itemInfo="it.data"></secondDataComponent>
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
import secondDataComponent from "@/views/girlComponents/secondDataComponent"
export default {
  name: 'Second',
  data () {
    return {
      activeIndex: 'second',
      currentShow: 'Vue.js',
      allData:[
          {
            name:"VUE",
            icon:"el-icon-location",
            data:[
              {
                id:1,
                type:"VUE",
                tagName:"Vue.js"
              },
              {
                id:2,
                type:"VUE",
                tagName:"Element UI"
              }
            ]
          },
          {
            name:"HTML5",
            icon:"el-icon-menu",
            data:[
              {
                id:1,
                type:"HTML5",
                tagName:"localStorge"
              },
              {
                id:2,
                type:"HTML5",
                tagName:"sessionStorge"
              },
              {
                id:3,
                type:"HTML5",
                tagName:"canvas"
              }
            ]
          },
          {
            name:"ES6",
            icon:"el-icon-setting",
            data:[
              {
                id:1,
                type:"ES6",
                tagName:"ES6"
              }
            ]
          },
          {
            name:"LESS",
            icon:"el-icon-document",
            data:[
              {
                id:1,
                type:"LESS",
                tagName:"LESS"
              },
              {
                id:2,
                type:"LESS",
                tagName:"LESS进阶"
              }
            ]
          },
          {
            name:"CSS3",
            icon:"el-icon-phone-outline",
            data:[
              {
                id:1,
                type:"CSS3",
                tagName:"CSS3动画"
              },
              {
                id:2,
                type:"CSS3",
                tagName:"兼容性"
              }
            ]
          }
        ],
      allItemData:[
        {
          tagName:"Vue.js",
          data:[
            {
              id:1,
              title:"vue 路由",
              time:"2018-08-10 14:17:30",
              content:"Vue.js列表内容,我们提供了通用的项目模板，你可以直接使用。对于 Laravel 用户，我们也准备了相应的模板，同样可以直接下载使用。如果不希望使用我们提供的模板，请继续阅读。"
            },
            {
              id:2,
              title:"vue 组件",
              time:"2018-08-10 14:17:30",
              content:"组件列表内容"
            },
            {
              id:3,
              title:"vue 表单",
              time:"2018-08-10 14:17:30",
              content:"表单列表内容"
            }
          ]
        },
        {
          tagName:"Element UI",
          data:[
            {
              id:1,
              title:"scoped属性",
              time:"2018-08-10 14:17:30",
              content:"Element UI列表内容"
            },
            {
              id:2,
              title:"dialog",
              time:"2018-08-10 14:17:30",
              content:"dialog列表内容"
            }
          ]
        },
        {
          tagName:"localStorge",
          data:[
            {
              id:1,
              title:"localStorge的基础使用 ",
              time:"2018-08-10 14:17:30",
              content:"HTML5列表内容"
            }
          ]
        },
        {
          tagName:"sessionStorge",
          data:[
            {
              id:1,
              title:"sessionStorge ",
              time:"2018-08-10 14:17:30",
              content:"HTML5I列表内容"
            }
          ]
        },
        {
          tagName:"canvas",
          data:[
            {
              id:1,
              title:"canvas的基础使用",
              time:"2018-08-10 14:17:30",
              content:"HTML5I列表内容"
            }
          ]
        },
        {
          tagName:"ES6",
          data:[
            {
              id:1,
              title:"ES6基础",
              time:"2018-08-10 14:17:30",
              content:"ES6基础"
            }
          ]
        },
        {
          tagName:"LESS",
          data:[
            {
              id:1,
              title:"LESS基础",
              time:"2018-08-10 14:17:30",
              content:"LESS基础列表内容"
            }
          ]
        },
        {
          tagName:"LESS进阶",
          data:[
            {
              id:1,
              title:"LESS进阶",
              time:"2018-08-10 14:17:30",
              content:"LESS进阶列表内容"
            }
          ]
        },
        {
          tagName:"CSS3动画",
          data:[
            {
              id:1,
              title:"rotate",
              time:"2018-08-10 14:17:30",
              content:"rotate列表内容"
            }
          ]
        },
        {
          tagName:"兼容性",
          data:[
            {
              id:1,
              title:"IE兼容性",
              time:"2018-08-10 14:17:30",
              content:"IE兼容性列表内容"
            }
          ]
        }
      ]
    }
  },
  components:{
    headnavCenter:headnavCenter,
    secondDataComponent:secondDataComponent
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
  .tab-name{
    margin: 5px 0;
  }
  .el-main{
    /*margin-left:10px;*/
  }
  .el-aside{
    margin-right: 2px;
  }
</style>
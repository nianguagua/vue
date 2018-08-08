<template>
 <el-container>
   <el-aside width="300px">
      <div class="title"></div>
      <el-menu background-color="#404b56" text-color="#ccc" active-text-color="#00d9ed" default-active="girlFirst" :unique-opened=true>
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>Boy</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="boyFirst" @click="changeTab('boyFirst')">boyFirst</el-menu-item>
            <el-menu-item index="boySecond" @click="changeTab('boySecond')">boySecond</el-menu-item>
            <el-menu-item index="boyThird" @click="changeTab('boyThird')">boyThird</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-menu"></i>
            <span slot="title">Girl</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="girlFirst" @click="changeTab('girlFirst')">girlFirst</el-menu-item>
            <el-menu-item index="girlSecond" @click="changeTab('girlSecond')">girlSecond</el-menu-item>
            <el-menu-item index="girlThird" @click="changeTab('girlThird')">girlThird</el-menu-item>
            <el-menu-item index="girlFourth" @click="changeTab('girlFourth')">girlFourth</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title">
            <i class="el-icon-setting"></i>
            <span slot="title">Common</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="commonHome" @click="changeTab('commonHome')">commonHome</el-menu-item>
            <el-menu-item index="commonSecond" @click="changeTab('commonSecond')">commonSecond</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
   </el-aside>
   <el-main>
      <el-container>
        <el-header style="text-align: right">
          <i class="el-icon-message header-icon"></i>
          <i class="el-icon-menu header-icon" @click="logout"></i>
        </el-header>
        <el-main>
          <div id="boyHomeAdmin" v-show="currentShow == 'boyFirst'">
            boyFirstAdmin
          </div>
          <div id="boySecondAdmin" v-show="currentShow == 'boySecond'">
            boySecondAdmin
          </div>
          <div id="boyThirdAdmin" v-show="currentShow == 'boyThird'">
            boyThirdAdmin
          </div>
          <div id="girlHomeAdmin" v-show="currentShow == 'girlFirst'">
            <el-row class="nav">
              <el-col :span="20" style="padding-left:10px;">
                <el-date-picker v-model="girlFirstData.girlFirstStart" type="date" placeholder="开始时间"></el-date-picker>
                <span>-</span>
                <el-date-picker v-model="girlFirstData.girlFirstEnd" type="date" placeholder="结束时间"></el-date-picker>
                <el-button type="primary" icon="el-icon-search">搜索</el-button>
              </el-col>
              <el-col :span="4" style="text-align: right;"><i class="el-icon-upload" @click="upload"></i></el-col>
            </el-row>
            <el-row class="box" style="padding-top:10px" :gutter="2">
              <el-col :span="14">
                <el-table :data="girlFirstData.tableData" style="width: 100%">
                  <el-table-column type="selection"></el-table-column>
                  <el-table-column label="图片概况" prop="pic">
                    <template slot-scope="scope">
                      <el-row>
                        <el-col class="face">
                          <img v-bind:src="scope.row.pic" alt="">
                        </el-col>
                        <el-col class="info-box" :span="14">
                          <div class="time">{{scope.row.time}}</div>
                          <div class="describe">{{scope.row.des}}</div>
                        </el-col>
                      </el-row>
                    </template>
                  </el-table-column>
                  <el-table-column label="操作" align="center" width="120">
                    <template slot-scope="scope">
                      <el-button-group>
                        <el-button type="primary" size="small" icon="el-icon-edit"></el-button>
                        <el-button type="danger" size="small" icon="el-icon-delete"></el-button>
                      </el-button-group>
                    </template>
                  </el-table-column>
                </el-table>
                <div class="page">
                  <el-pagination background layout="prev, pager, next" :total="1000"></el-pagination>
                </div>
              </el-col>
              <el-col :span="10">
                <div class="top" id="echart-pie" :style="{width: '100%',height:'255px'}">
                  
                </div>
                <div class="bottom" id="echart-line" :style="{width: '100%',height:'270px'}">
                  
                </div>
              </el-col>
            </el-row>
            <uploadPicture ref="pic"></uploadPicture>
          </div>
          <div id="girlSecondAdmin" v-show="currentShow == 'girlSecond'">
            girlSecondAdmin
          </div>
          <div id="girlThirdAdmin" v-show="currentShow == 'girlThird'">
            girlThirdAdmin
          </div>
          <div id="girlFourthAdmin" v-show="currentShow == 'girlFourth'">
            girlFourthAdmin
          </div>
          <div id="commonHomeAdmin" v-show="currentShow == 'commonHome'">
            commonHomeAdmin
          </div>
          <div id="commonSecondAdmin" v-show="currentShow == 'commonSecond'">
            commonSecondAdmin
          </div>
        </el-main>
      </el-container>
   </el-main>
 </el-container>
</template>
<script>
import uploadPicture from '@/views/adminComponents/uploadPicture'
import {initChart} from '../../assets/js/admin/adminHome.js'
export default {
  name: 'AdminHome',
  data () {
    return {
      currentShow:'girlFirst',
      girlFirstData:{
        girlFirstStart:"",
        girlFirstEnd:"",
        tableData:[
          {pic:"../../../static/image/photo1.jpg",time:"2018-08-03",des:"photo1"},
          {pic:"../../../static/image/photo2.jpg",time:"2018-08-03",des:"photo2"},
          {pic:"../../../static/image/photo3.jpg",time:"2018-08-03",des:"photo3"},
          {pic:"../../../static/image/photo1.jpg",time:"2018-08-03",des:"photo1"},
          {pic:"../../../static/image/photo2.jpg",time:"2018-08-03",des:"photo2"}
        ],
        lineData:[
          {
            name:"2018-08-07",
            value:["2018-08-07",669]
          },
          {
            name:"2018-09-07",
            value:["2018-09-07",444]
          },
          {
            name:"2018-10-07",
            value:["2018-10-07",347]
          },
          {
            name:"2018-11-07",
            value:["2018-11-07",800]
          }
        ]
      }
    }
  },
  components:{
    uploadPicture:uploadPicture
  },
  mounted:function(){
    var data = this.girlFirstData.lineData;
    initChart.self = this;
    initChart.initPie("echart-pie");
    initChart.initLine("echart-line",data);
  },
  methods: {
    changeTab:function(val){
      var _self = this;
      _self.currentShow = val;
    },
    logout:function(){
      this.$store.commit('logout','');
      this.$router.push({path: '/login'})
    },
    upload:function(){
      this.$refs.pic.upload();
    }
  }
}
</script>
<style scoped>
  .header-icon{
    /*color: #fff;*/
    margin: 0 10px;
    line-height: 60px;
  }
  .el-aside{
    background: #404b56;
  }
  .el-main{
    background: #eee;
    padding: 0;
  }
  .el-header{
    background: #fff;
  }
  .title{
    height: 120px;
    background: #404b56;
  }
  .el-menu{
    border: none;
  }
  /**/
  #girlHomeAdmin .nav{
    /*background: #ccc;*/
    height: 50px;
    line-height: 50px;
  }
  #girlHomeAdmin .box{
    /*background: #999;*/
  }
  #girlHomeAdmin .el-icon-upload{
    margin-right: 25px;
  }
  #girlHomeAdmin .el-date-editor{
    margin:0 10px;
  }
  #girlHomeAdmin .face{
    width:60px;
    height:60px;
    line-height: 60px;
    background: #333;
    text-align: center;
  }
  #girlHomeAdmin .face>img{
    max-width: 100%;
    max-height: 100%;
    display: inline-block;
    vertical-align: middle;
  }
  #girlHomeAdmin .info-box{
    height:60px;
    /*border: 1px solid #eee;*/
  }
  #girlHomeAdmin .info-box .time{
    padding-left: 10px;
    font-size: smaller;
    /*border-bottom: 1px solid #eee*/
  }
  #girlHomeAdmin .info-box .describe{
    padding-left: 10px;
  }
  #girlHomeAdmin .page{
    background: #fff;
    text-align: center;
    padding: 10px;
  }
  #girlHomeAdmin .top{
    height: 255px;
    background: #fff;
  }
  #girlHomeAdmin .bottom{
    height: 270px;
    background: #fff;
  }
</style>
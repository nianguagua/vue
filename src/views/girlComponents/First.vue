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
    <el-main  style="background: #eee;">
      <el-container>
        <el-aside width="300px">
          <el-menu default-active="photo">
            <el-menu-item index="photo" @click="changeTab('photo')">
                <i class="el-icon-document"></i>
                <span slot="title">PHOTO</span>
            </el-menu-item>
            <el-menu-item index="comic" @click="changeTab('comic')">
                <i class="el-icon-location"></i>
                <span slot="title">COMIC</span>
            </el-menu-item>
          </el-menu>
        </el-aside>
        <el-main>
          <div class="photo" v-if="currentShow == 'photo'">
            <el-row :gutter="10">
              <el-col :span="6">
                <el-card>
                  <div class="img">
                    <img src="../../../static/image/photo1.jpg" class="image">
                  </div>
                  <div style="padding: 14px;">
                    <span>
                      <el-rate v-model="value1" :icon-classes="['el-icon-cn-jushoucanggift', 'el-icon-cn-jushoucanggift','el-icon-cn-jushoucanggift']" void-icon-class="el-icon-cn-jushoucang" 
                      :colors="['#99A9BF', '#F7BA2A', '#f70303']">
                      </el-rate>
                    </span>
                    <div class="bottom clearfix">
                      <time class="time">2018-08-01</time>
                      <el-button type="text" class="button" icon="el-icon-download"></el-button>
                    </div>
                  </div>
                </el-card>
              </el-col>
              <el-col :span="6">
                <el-card>
                  <div class="img">
                    <img src="../../../static/image/photo2.jpg" class="image">
                  </div>
                  <div style="padding: 14px;">
                    <span>
                      <el-rate v-model="value1" :icon-classes="['el-icon-cn-jushoucanggift', 'el-icon-cn-jushoucanggift','el-icon-cn-jushoucanggift']" void-icon-class="el-icon-cn-jushoucang" 
                      :colors="['#99A9BF', '#F7BA2A', '#f70303']">
                      </el-rate>
                    </span>
                    <div class="bottom clearfix">
                      <time class="time">2018-08-01</time>
                      <el-button type="text" class="button" icon="el-icon-download"></el-button>
                    </div>
                  </div>
                </el-card>
              </el-col>
              <el-col :span="6">
                <el-card>
                  <div class="img">
                    <img src="../../../static/image/photo3.jpg" class="image">
                  </div>
                  <div style="padding: 14px;">
                    <span>
                     <el-rate v-model="value1" :icon-classes="['el-icon-cn-jushoucanggift', 'el-icon-cn-jushoucanggift','el-icon-cn-jushoucanggift']" void-icon-class="el-icon-cn-jushoucang" 
                      :colors="['#99A9BF', '#F7BA2A', '#f70303']">
                      </el-rate>
                    </span>
                    <div class="bottom clearfix">
                      <time class="time">2018-08-01</time>
                      <el-button type="text" class="button" icon="el-icon-download"></el-button>
                    </div>
                  </div>
                </el-card>
              </el-col>
              <el-col :span="6">
                <el-card>
                  <div class="img">
                    <img src="../../../static/image/photo1.jpg" class="image">
                  </div>
                  <div style="padding: 14px;">
                    <span>
                      <el-rate v-model="value1" :icon-classes="['el-icon-cn-jushoucanggift', 'el-icon-cn-jushoucanggift','el-icon-cn-jushoucanggift']" void-icon-class="el-icon-cn-jushoucang" 
                      :colors="['#99A9BF', '#F7BA2A', '#f70303']">
                      </el-rate>
                    </span>
                    <div class="bottom clearfix">
                      <time class="time">2018-08-01</time>
                      <el-button type="text" class="button" icon="el-icon-download"></el-button>
                    </div>
                  </div>
                </el-card>
              </el-col>
              <el-col :span="6">
                <el-card>
                  <div class="img">
                    <img src="../../../static/image/photo2.jpg" class="image">
                  </div>
                  <div style="padding: 14px;">
                    <span>
                      <el-rate v-model="value1" :icon-classes="['el-icon-cn-jushoucanggift', 'el-icon-cn-jushoucanggift','el-icon-cn-jushoucanggift']" void-icon-class="el-icon-cn-jushoucang" 
                      :colors="['#99A9BF', '#F7BA2A', '#f70303']">
                      </el-rate>
                    </span>
                    <div class="bottom clearfix">
                      <time class="time">2018-08-01</time>
                      <el-button type="text" class="button" icon="el-icon-download"></el-button>
                    </div>
                  </div>
                </el-card>
              </el-col>
              <el-col :span="6">
                <el-card>
                  <div class="img">
                    <img src="../../../static/image/photo1.jpg" class="image">
                  </div>
                  <div style="padding: 14px;">
                    <span>
                      <el-rate v-model="value1" :icon-classes="['el-icon-cn-jushoucanggift', 'el-icon-cn-jushoucanggift','el-icon-cn-jushoucanggift']" void-icon-class="el-icon-cn-jushoucang" 
                      :colors="['#99A9BF', '#F7BA2A', '#f70303']">
                      </el-rate>
                    </span>
                    <div class="bottom clearfix">
                      <time class="time">2018-08-01</time>
                      <el-button type="text" class="button" icon="el-icon-download"></el-button>
                    </div>
                  </div>
                </el-card>
              </el-col>
              <el-col :span="6">
                <el-card>
                  <div class="img">
                    <img src="../../../static/image/photo3.jpg" class="image">
                  </div>
                  <div style="padding: 14px;">
                    <span>
                      <el-rate v-model="value1" :icon-classes="['el-icon-cn-jushoucanggift', 'el-icon-cn-jushoucanggift','el-icon-cn-jushoucanggift']" void-icon-class="el-icon-cn-jushoucang" 
                      :colors="['#99A9BF', '#F7BA2A', '#f70303']">
                      </el-rate>
                    </span>
                    <div class="bottom clearfix">
                      <time class="time">2018-08-01</time>
                      <el-button type="text" class="button" icon="el-icon-download"></el-button>
                    </div>
                  </div>
                </el-card>
              </el-col>
            </el-row>
          </div>
          <div class="comic" v-if="currentShow == 'comic'">
            comic
          </div>
        </el-main>
      </el-container>
    </el-main>
    <el-footer style="height:20px">
      
    </el-footer>
    <codeDialog></codeDialog>
  </el-container>
</template>
<script>
export default {
  name: 'First',
  data () {
    return {
      activeIndex: 'first',
      currentShow: "photo",
      value1: 3
    }
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
  .el-container{
    
  }
  .el-card{
    height: 300px;
    margin-bottom: 10px; 
  }
  div.img{
    text-align: center;
    height: 200px;
    background: #333;
  }
  img{
    max-width: 100%;
    max-height: 200px;
  }
  p.heart{
    text-align: right;
  }
  .comic-box{
    height: 250px;
    background: #ccc;
    margin-bottom: 10px;
  }
  .button {
    padding: 0;
    float: right;
  }
</style>
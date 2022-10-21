<template>
       <el-menu default-active="1-4-1" class="el-menu-vertical-demo" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
      <h3 >{{isCollapse ? '后台' : '通用后台管理系统'}}</h3>
       
      <el-menu-item @click="clickMenu(i)" v-for="i in noChildren" :index="i.path+''" :key="i.path">
    <i :class="'el-icon-'+i.icon"></i>
    <span slot="title">{{i.label}}</span>
  </el-menu-item>
  <el-submenu v-for="i in Children" :index="i.path+''" :key="i.path">
    <template slot="title">
      <i :class="'el-icon-'+i.icon"></i>
      <span slot="title">{{i.label}}</span>
    </template>
    <el-menu-item-group  v-for="subItem in i.children" :key="subItem.path">
      <el-menu-item @click="clickMenu(subItem)" :index="subItem.path">{{subItem.label}}</el-menu-item>
    </el-menu-item-group>
  </el-submenu>
   
</el-menu> 
</template>


<style lang="less" scoped>


  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
     min-height :780px;
  }
  /* .el-menu--collapse{
      
       min-height: 100%;
  } */
  .el-menu {
    height: 720px;
    border:none;
    h3 {
      background-color:"#00284d";
      color:#fff;
      text-align:center;
      line-height: 48px;
    }
  }
</style>

<script>
  export default {
    data() {
      return {
        /* isCollapse: false, */
        
        menu:
        [
        /* {
          path: '/',
          name: 'home',
          label: '首页',
          icon: 's-home',
          url: 'home/index'
        },
        {
          path: '/mall',
          name: 'mall',
          label: '商品管理',
          icon: 'video-play',
          url: 'mall/index'
        },
        {
          path: '/user',
          name: 'user',
          label: '用户管理',
          icon: 'user',
          url: 'User/index'
        },
        { 
          
          label: '其他',
          icon: 'location',
          children: [
            {
              path: '/page1',
              name: 'page1',
              label: '页面1',
              icon: 'setting',
              url: 'other/page1'
            },
            {
              path: '/page2',
              name: 'page2',
              label: '页面2',
              icon: 'setting',
              url: 'other/page2'
            }
          ]
        } */
      ]
      };
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      clickMenu(i){
        this.$router.push({
          name:i.name
        })
        this.$store.commit('selectMenu',i)
      }

    },
    computed:{
      noChildren(){
        return this.asyncMenu.filter(
          item=>!item.children
        )
      },
      Children(){
        return this.asyncMenu.filter(
          item=>item.children
        )
      },
      isCollapse(){
        return this.$store.state.tab.IsCollapse
      },
      asyncMenu(){
        return this.$store.state.tab.menu
      }
    }
  }
</script>
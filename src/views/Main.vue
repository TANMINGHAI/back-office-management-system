<template>
  <div><el-container style="height:100%">
  <el-aside width="auto">
    <Common/>
  </el-aside>
  <el-container >
    <el-header>
      <Crm-header/>
      </el-header>
      <Crm-tag/>
    <el-main>
      <router-view></router-view>
    </el-main>
  </el-container>
</el-container></div>
</template>

<script>
import Common from '@/components/Common.vue'
import CrmHeader from '@/components/CrmHeader.vue'
import CrmTag from '@/components/CrmTag.vue'

export default {
    name:'Main',
    components:{
      Common,CrmHeader,CrmTag
    },
    data(){
      return {}
    },
    
}
</script>

<style lang="less" scoped>
  .el-header{
    background-color: #ffffff;
  }
  .el-main{
    padding-top: 0;
  }
</style>>


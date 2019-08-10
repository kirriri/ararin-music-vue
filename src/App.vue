<template>
  <div id="app" @touchmove.prevent>
    <t-header></t-header>
    <tab></tab>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script type="text/ecmascript-6">
import THeader from 'components/header/header'
import Tab from 'components/tab/tab'

export default {
  components: {
    THeader,
    Tab
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
</style>

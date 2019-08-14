<template>
  <div id="app" @touchmove.prevent>
    <t-header></t-header>
    <tab></tab>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <player></player>
  </div>
</template>

<script type="text/ecmascript-6">
import THeader from 'components/header/header'
import Tab from 'components/tab/tab'
import Player from 'components/player/player'

export default {
  components: {
    THeader,
    Tab,
    Player
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
</style>

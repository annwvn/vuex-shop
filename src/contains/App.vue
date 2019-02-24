<template>
  <div id="app">
    <Header></Header>
    <router-view/>
  </div>
</template>

<script>
import Header from 'view/header/index'
import home from 'view/home/home'

export default {
  name: 'app',
  components:{
    Header,home
  }
}
</script>

<style>

</style>

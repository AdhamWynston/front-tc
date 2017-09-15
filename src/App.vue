<template>
  <div id="app">
    <navbar></navbar>
    <router-view></router-view>
    </div>
</template>

<script>
  import Ccnav from './components/Navbar.vue'

export default {
  components: {
      'navbar': Ccnav,
  }
}
</script>

<style>

</style>

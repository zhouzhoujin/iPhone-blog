<template>
  <div id="app">
    <Header></Header>
    <router-view class="view"></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from './components/Footer.vue'
import Header from './components/Header.vue'
export default {
  name: 'app',
  components: {
    Footer,
    Header,
  },
}
</script>

<style>
html,body,#app{
  height: 100%;
  background-color: rgb(119, 108, 93)
}
.view{
  height: 465px;
  width: 300px;
  position: relative;
  left: 50%;
  top: 54px;
  transform: translateX(-50%);
  border: 10px solid black
}
</style>

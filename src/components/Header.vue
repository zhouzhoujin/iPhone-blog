<template>
  <div class="header">
    <div class="header-radius"></div>
    <div class="header-horn">
      <div class="header-horn-radius"></div>
      <div class="header-horn-radio"></div>
    </div>
    <StatusBar></StatusBar>

  </div>
</template>
<script>
import StatusBar from './statusBar.vue'
export default {
  components:{
    StatusBar
  }
}
</script>
<style>

.header {
  width: 320px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
  height: 54px;
  background: black;
  position: absolute;
  top: 0;
  border-radius: 30px 30px 0 0;
}
.header-radius {
  margin: 0 auto;
  margin-top: 6px;
  width: 10px;
  height: 10px;
  background: black;
  opacity: 0.3;
  border-radius: 50%;
  border: 1px solid rgb(238, 238, 206);
}
.header-horn {
  margin-top: 6px;
  position: relative;
}
.header-horn-radius {
  width: 8px;
  height: 8px;
  background: black;
  margin-left: 120px;
  opacity: 0.3;
  border-radius: 50%;
  border: 1px solid rgb(238, 238, 206);
}
.header-horn-radio {
  width: 50px;
  height: 8px;
  background: black;
  opacity: 0.3;
  border-radius: 10px;
  border: 1px solid rgb(238, 238, 206);
  position: absolute;
  left: 50%;
  top: 0;
  transform: translateX(-50%);
}

</style>
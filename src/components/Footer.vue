<template>
  <div class="footer">
    <div class="footer-radius"></div>
  </div>

</template>
<script>
import NavBar from './navgationBar.vue'
export default {
}
</script>
<style>
.footer{
  width: 320px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
  height: 54px;
  background: black;
position: absolute;
  bottom: 54px;
  border-radius: 0 0 30px 30px
}
.footer-radius{
  width: 42px;
  height: 42px;
  margin: 0 auto;
  margin-top: 7px;
  margin-bottom: 7px;  
  background:black;
  opacity: 0.3;
  border-radius: 50%;
  border: 1px solid rgb(238, 238, 206)
}
</style>
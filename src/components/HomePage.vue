<template>
  <div>
    <div class="block">
      <el-carousel height="390px" :autoplay="false">
        <el-carousel-item v-for="item in 3" :key="item">
          <h3 class="small">{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>
    </div>
    <NavBar></NavBar>
  </div>
</template>
<script>
import NavBar from "./navgationBar.vue";
export default {
  components: {
    NavBar
  }
};
</script>
<style>
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
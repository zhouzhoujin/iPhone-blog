<template>
  <div>
    <Suspention></Suspention>
    <div class="block">
      <el-carousel height="390px" :autoplay="false">
        <el-carousel-item v-for="item in list" :key="item.id">
          <h3 class="small">{{ item.id }}</h3>
        </el-carousel-item>
      </el-carousel>
    </div>
    <NavBar></NavBar>
  </div>
</template>
<script>
import NavBar from "./navgationBar.vue";
import Suspention from './Suspention'
export default {
  components: {
    NavBar,
    Suspention
  },
  data(){
    return{
      list:[
        {
          id: 1
        },
        {
          id: 2
        },
        {
          id: 3
        },
        
      ]
    }
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

/* /.el-carousel__item::-webkit-scrollbar { width: 0 !important } */
.el-carousel__item{
  height: 100%;
  /* -ms-overflow-style: none; 
  overflow: -moz-scrollbars-none;  */
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
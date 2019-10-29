<template>
  <div class="homepage">
    <div class="slider-page-container" @mousedown="slidePage($event)" @mousemove.stop="throttle($event)" @mouseup.stop="up($event)">
      <div :class="['slider-page','page1',{'select': !flag1}]"><h1>1</h1></div>
      <div :class="['slider-page','page2',{'select': flag1}]"><h2>2</h2></div>
    </div>
    <div class="slider-control">
      <span :class="['btn' ,{'btnselect': !flag1}]" ></span>
      <span :class="['btn' ,{'btnselect': flag1}]"></span>
      <span class="btn"></span>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      flag: false,
      run: true,
      origin: 0,
      left: 0,
      flag1: false
    };
  },
  mounted(){
  },
  methods: {
    slidePage(ev) {
      this.flag = !this.flag;
      this.origin = ev.clientX
    },
    move(ev) {
      let arr = document.querySelectorAll(".slider-page")
      if(this.flag == true){
        let distance = ev.clientX - this.origin
        if(distance < -20){
          arr[0].style.left = -300 + `px`
          arr[1].style.left = 0 + `px`
        }
        if(distance > 20){
           arr[0].style.left = 0 + `px`
           arr[1].style.left = 300 + `px`
        }
      }
    },
    up(){
      this.flag = !this.flag
      this.flag1 = !this.flag1
    },
    throttle(ev){
      if (!this.run) {
        return;
      }
      this.run = false;
      setTimeout(() => {
        this.move(ev)
        this.run = true;
      }, 16);
    }
  }
};
</script>
<style scoped>
.slider-page-container {
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 400px;

}
.slider-page {
  position: absolute;
  width: 300px;
  height: 400px;

}
.page1 {
  left: 0px;
}
.page2{
  left: 300px;
}

.slider-control {
  position: absolute;
  top: 370px;
  left: 50%;
  transform: translate(-50%);
}
.select{
  display: block;
  background:burlywood;
}
.homepage .btnselect{
  background-color: black
}
.btn {
  display: inline-block;
  width: 8px;
  height: 8px;
  border-radius: 4px;
  background-color: #bab3ac;
  margin: 0 6px;
}

</style>
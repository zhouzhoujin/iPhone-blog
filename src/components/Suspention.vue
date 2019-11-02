<template>
  <div class="suspention">
    <div id="dialog" v-show="isTrue"></div>
    <div :class="['small-ball',{'isActive': isFlag}]" @click="ifOpen = !ifOpen" v-if="!ifOpen"></div>
    <div :class="['small-square',{'isActive': isFlag}]" v-if="ifOpen" @click="ifOpen = !ifOpen">
      <div @click="capture" :class="['capture']">截图</div>
    </div>
  </div>
</template>
<script>
import domtoimage from "dom-to-image";
export default {
  data() {
    return {
      isTrue: false,
      isFlag: false,
      ifOpen: false
    };
  },
  methods: {
    capture() {
      var node = document.getElementById("app");
      this.isFlag = !this.isFlag;
      var that = this;
      console.log(node);
      domtoimage
        .toSvg(node)
        .then(function(dataUrl) {
          var img = new Image();
          img.setAttribute("crossOrigin", "anonymous");
          var width = document.body.offsetWidth;
          img.width = 300;
          img.src = dataUrl;
          that.isTrue = !that.isTrue;
          document.getElementById("dialog").appendChild(img);
        })
        .catch(function(error) {
          console.error("oops, something went wrong!", error);
        });
    }
  }
};
</script>
<style lang="css" scoped>
.suspention{
    cursor: pointer;
}
.capture {
  width: 50px;
  height: 50px;
  background: gray;
}
.small-ball {
  position: fixed;
  width: 50px;
  height: 50px;
  border-radius: 10px;
  background: white;
  opacity: 0.5;
  z-index: 4;
  right: 0;
  top: 50%;
}
.small-square{
position: fixed;
  width: 200px;
  height: 200px;
  border-radius: 10px;
  background: white;
  opacity: 0.5;
  z-index: 4;
  right: 50%;
  top: 50%;
  transform: translate(50%,-50%)
}
#dialog {
  position: fixed;
  z-index: 4;
  background: gray;
  align-items: center;
  vertical-align: middle;
  display: flex;
  height: 390px;
}
.isActive {
  /* background: transparent */
  display: none;
}
</style>
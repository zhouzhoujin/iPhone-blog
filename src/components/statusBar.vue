<template>
    <ul class="index-body-header">
      <li class="li1"></li>
      <li class="li2"></li>
      <li class="li3"></li>
      <li class="li4"></li>
      <li class="li5">中国联通</li>      
      <li class="center" v-if="flag">{{time | formatTime}}</li>
      <li class="center" v-if="!flag">
        <img src="../../public/suo.svg"/>
      </li>
      <li class="right">
        80%
        <img src="../../public/dianchi.svg" alt />
      </li>
    </ul>
</template>
<script>
import Bus from '../uilt/eventBus'
export default {
    data(){
        return{
            time: new Date(),
            flag: false
        }
    },
    mounted(){
        Bus.$on("deblocking",(msg)=>{
            this.flag = msg
        })
    },
  filters:{
    formatTime(value){
        var d = new Date(value)
        var hour = d.getHours();
         var minutes = d.getMinutes() <10 ? '0' + d.getMinutes() : '' + d.getMinutes();
        return  hour + ':' + minutes
    }
  }
}
</script>
<style scoped>
.index-body-header {
  height: 16px;
  position: relative;
  top: 32px;
  margin: 0 10px 0 10px;
}
.index-body-header li {
  position: absolute;
  background: white;
  bottom: 0;
  border-radius: 10px;
}
.li1 {
  height: 5px;
  width: 3px;
  left: 4px;
}
.li2 {
  height: 7px;
  width: 3px;
  left: 8px;
}
.li3 {
  height: 9px;
  width: 3px;
  left: 12px;
  animation: shine 10s infinite;
}
.li4 {
  height: 11px;
  width: 3px;
  left: 16px;
  animation: shine 10s infinite;
}
.index-body-header .li5 {
  left: 25px;
  height: 16px;
  background: transparent;
  bottom: 0;
  color: white;
}
.index-body-header .center {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 0;
  height: 16px;
  background: transparent;
  color: white
}
.center img {
  width: 14px;
  height: 22px;
}
.index-body-header .right {
  position: absolute;
  right: 0;
  bottom: 0;
  height: 16px;
  color: white;
  background: transparent;
}
.right img {
  width: 25px;
  height: 22px;
}
</style>
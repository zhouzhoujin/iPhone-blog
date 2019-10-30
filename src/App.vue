<template>
  <div id="app">
    <Header></Header>
    <router-view class="view"></router-view>
    <div id="dialog" style="position:absolute; top:0; left:0; right:0; bottom:0; z-index:2; background:gray" v-show="isTrue"></div>
    <div  @click="fxx" :class="['normal',{'isActive': isFlag}]">1</div>
    <Footer></Footer>

  </div>
</template>

<script>
import Footer from './components/Footer.vue'
import Header from './components/Header.vue'
import domtoimage from 'dom-to-image'
export default {
  name: 'app',
  components: {
    Footer,
    Header,
  },
  data(){
    return{
      isTrue: false,
      isFlag: false
    }
  },
      methods:{
         fxx(){
            var node = document.getElementById('app');
            this.isFlag = !this.isFlag
            var that = this
            domtoimage.toSvg(node)
            .then(function (dataUrl) {
                var img = new Image();
                img.setAttribute('crossOrigin', 'anonymous');
                img.width = 500
                img.src = dataUrl;
                that.isTrue = !that.isTrue
                document.getElementById('dialog').appendChild(img);
            })
            .catch(function (error) {
                console.error('oops, something went wrong!', error);
            });
        }
    }

}
</script>

<style>
html,body,#app{
  height: 100%;
  background-color: rgb(119, 108, 93)
}
.normal{
  width: 50px; 
  height: 50px; 
  background: gray
}
#app .isActive{
  background: transparent
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

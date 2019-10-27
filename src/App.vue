<template>
  <div id="app">
    <div class="iphone">
      <div class="index">
          <div class="header">
            <div class="header-radius"></div>
            <div class="header-horn">
              <div class="header-horn-radius"></div>
              <div class="header-horn-radio"></div>
            </div>
          </div>
          <div class="index-body">
              <ul class="index-body-header">
                <li class="li1"></li>
                <li class="li2"></li>
                <li class="li3"></li>
                <li class="li4"></li>
                <li class="li5">中国联通</li>              
                <span class="center"><img src="../public/suo.svg" alt=""></span>
                <span class="right">80%<img src="../public/dianchi.svg" alt=""></span>
              </ul>
              <div class="index-body-time">
                <center class="time">{{date | formatTime}}</center>
                <center class="date">{{date | formatDate}}</center>
              </div>                
              <div class="deblocking">
                <div class="arrow" @mousedown="down($event)" @mousemove="move($event)" 
                @mouseup="up()">
                  <img src="../public/jiantou.svg" alt="">
                </div>
                >>>滑动解锁</div>
          </div>
          <div class="footer">
            <div class="footer-radius"></div>
          </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      date: new Date(),
      flag: false,
      curx: 0,
      cury: 0,
      dx: 0,
      dy: 0,
    }
  },
  filters:{
    formatTime(value){
        var d = new Date(value)
        var hour = d.getHours();
         var minutes = d.getMinutes() <10 ? '0' + d.getMinutes() : '' + d.getMinutes();
        return  hour + ':' + minutes
    },
    formatDate(value){
      var d = new Date(value)
      //var year = d.getFullYear();
      var month = d.getMonth() + 1;
      var day = d.getDate() <10 ? '0' + d.getDate() : '' + d.getDate();
      return month + '月' + day + '日'
    }
  },
  mounted(){
    var that = this;
    this.timer = setInterval(() => {
      that.date = new Date()
    }, 60000);
  },
  beforeDestory(){
    if(this.timer){
      clearInterval(this.timer)
    }
  },
  methods:{
    down(ev){
        this.flag = true;
        var touch = ev;
        this.curx = touch.clientX;
        this.cury = touch.clientY;
        this.dx = document.getElementsByClassName("arrow")[0].offsetLeft,
        this.dy = document.getElementsByClassName("arrow")[0].offsetTop
    },
    move(ev){
       if(this.flag){
            console.log(ev.clientX-this.curx)
            let nx = ev.clientX - this.curx;
            let ny = ev.clientY - this.cury;
            let x = this.dx + nx;
            let y = this.dy + ny;
            console.log(nx,ny,x,y)
            document.getElementsByClassName("arrow")[0].style.left = x+"px";
            document.getElementsByClassName("arrow")[0].style.top = y +"px";
      }
    },
    up(){
      this.flag = !this.flag
    }
  }

}
</script>

<style>
.deblocking .arrow{
  border: 2px solid white;
  position: absolute;
  left: 0;
  height: 35px;
}
.deblocking .arrow img{
  height: 34px;
}
.deblocking{
  font-size: 22px;
  color: white;
  text-align: center;
  position: relative;
  top: 150px;
  background-color:rgba(255, 253, 253, 0.1);
}
.index-body-header{
  height: 70px;
  position: relative;
}
.index-body-header li{
  position: absolute;
  background: white;
  bottom: 0;
  border-radius: 10px;
}
.li1{
  height: 5px;
  width: 3px;
  left: 4px;
  
}
.li2{
  height: 7px;
  width: 3px;
  left: 8px;
}
.li3{
  height: 9px;
  width: 3px;
  left: 12px;
  animation: shine 10s infinite
}
.li4{
  height: 11px;
  width: 3px;
  left: 16px;
  animation: shine 10s infinite;
}
.index-body-header .li5{
  left: 25px;
  height: 18px;
  background: transparent;
  bottom: 0;
  color: white
}
.center{
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 0;
  height: 12px;
}
.center img{
  width: 12px;
  height: 12px;
}
.right{
  position: absolute;
  right: 0;
  bottom: 0;
  height: 16px;
  line-height: 16px;
  color: white
}
.right img{
  width: 25px;
  height: 16px;

}

    @keyframes shine {
      0% {
        opacity: 1;
      }
      100% {
        opacity: 0.4;
      }
    }
html,body,#app{
  width: 100%;
  height: 100%;
}
.iphone{
  background: rgb(192, 185, 185);
  width: 100%;
  height: 100%;
}
#app .index{
  width: 320px;
  background: rgb(129, 124, 124);
  height: 568px;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 20px;
  border: 2px solid black
}
.index-body{
  background-image: url("../public/2.jpg");
  background-size: 320px 100%;
  height: 100%;
  border-radius: 20px;
}
.index-body p{
  position: absolute;
  top: 54px;
}
.header,.footer{
  width: 100%;
  height: 54px;
  background: black
}
.header{
  position: absolute;
  top: 0;
  border-radius: 20px 20px 0 0;
} 
.header-radius{
  margin: 0 auto;
  margin-top: 6px;
  width: 10px;
  height: 10px;
  background:black;
  opacity: 0.3;
  border-radius: 50%;
  border: 1px solid rgb(238, 238, 206)

}
.header-horn{
  margin-top: 6px;
  position: relative;
}
.header-horn-radius{
  width: 8px;
  height: 8px;
  background:black;
  margin-left: 120px;
  opacity: 0.3;
  border-radius: 50%;
  border: 1px solid rgb(238, 238, 206)
}
.header-horn-radio{
  width: 50px;
  height: 8px;
  background:black;
  opacity: 0.3;
  border-radius: 10px;
  border: 1px solid rgb(238, 238, 206);
  position: absolute;
  left: 50%;
  top: 0;
  transform: translateX(-50%)
}

.footer{
  position: absolute;
  bottom: 0;
  border-radius: 0 0 20px 20px
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

.index-body-time .time{
  font-size: 45px;
  height: 70px;
  margin-top: 40px;
  color: white
}
.index-body-time .date{
  color: white;
}
@media(max-width: 700px) {
  #app .index{
    width: 100%;
    background:  rgb(129, 124, 124);
    height: 100%;
  }
  .header,.footer{
  width: 100%;
  height: 1rem;
  background: black
}
}
</style>

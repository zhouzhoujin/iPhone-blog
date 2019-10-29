 <template>
    <div>
    <div class="iphone">
          <div class="index-body">
              <div class="index-body-time">
                <center class="time">{{date | formatTime}}</center>
                <center class="date">{{date | formatDate}}</center>
              </div>                
              <div class="deblocking">
                <div class="arrow" @mouseenter="down($event)" @mousemove="move($event)" 
                @mouseup="up()">
                  <img src="../../public/jiantou.svg" alt="">
                </div>
                >>>滑动解锁</div>
      </div>
    </div>
  </div>
</template>
<script>
import Bus from '../uilt/eventBus'
export default {
  data(){
    return{
      date: new Date(),
      flag: false,
      curx: 0,
      cury: 0,
      dx: 0,
      dy: 0,
      goFlag: false
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
    methods:{
    down(ev){
        this.flag = true;
        var touch = ev;
        this.curx = touch.clientX;
        this.cury = touch.clientY;
        this.dx = document.getElementsByClassName("arrow")[0].offsetLeft
        this.dy = document.getElementsByClassName("arrow")[0].offsetTop
    },
    move(ev){
       if(this.flag){
            let nx = ev.clientX - this.curx;
            //let ny = ev.clientY - this.cury;
            let x = this.dx + nx;
            if(x < -56){
              x = -56;
            }if(x > 206){
              x = 206
            }
            //let y = this.dy + ny;
            document.getElementsByClassName("arrow")[0].style.left = x+"px";
            if( x == 206){
                this.goFlag = true
            }
            //document.getElementsByClassName("arrow")[0].style.top = y +"px";
      }
    },
    up(){
      this.flag = !this.flag
    },
    go(){
        Bus.$emit("deblocking",true)
        this.$router.push('/page')
    }
  },
  watch:{
      goFlag(){
        this.go()
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
}
</script>

<style>
.deblocking .arrow{
  position: absolute;
  left: -56px;
  height: 35px;
  width: 50%;
}
.deblocking .arrow img{
  height: 34px;
  border: 2px solid white
}
.deblocking{
  font-size: 22px;
  color: white;
  text-align: center;
  position: relative;
  top: 150px;
  background-color:rgba(255, 253, 253, 0.1);
}
@keyframes shine {
      0% {
        opacity: 1;
      }
      100% {
        opacity: 0.4;
      }
    }
.iphone{
  width: 100%;
  height: 100%;
}
.index-body{
  background-image: url("../../public/2.jpg");
  background-size: 320px 100%;
  height: 100%;
}
.index-body p{
  position: absolute;
  top: 54px;
}

.index-body-time .time{
  font-size: 45px;
  height: 70px;
  color: white;
  padding-top: 60px
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
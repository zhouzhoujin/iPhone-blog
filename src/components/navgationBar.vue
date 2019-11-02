<template>

        <div class="nav">
        <div class="nav-bar" v-for="(item,index) in list" :key="index">
            <a href="/"><img :src="item.imgSrc"></a>
        </div>
    </div>

</template>
<script>
export default {
    data(){
        return{
            list: [{
                imgSrc: require('../assets/img/duanxin.svg'),
            },
            {
                imgSrc: require('../assets/img/weixin.svg'),
            },
            {
                imgSrc: require('../assets/img/GitHub.svg'),
            },
            {
                imgSrc: require('../assets/img/liulanqi.svg'),
            },
            ]
        }
    }
}
</script>
<style scoped>
.nav{
    display: flex;
}
.nav-bar{
    width: 80px;
    height: 50px;
    text-align: center;
    padding-top: 6px;
    padding-bottom: 6px;
    background: rgb(124, 120, 120)
}
.nav-bar img{
    width: 50px;
    height: 50px;
    flex-grow: 1 
}
</style>
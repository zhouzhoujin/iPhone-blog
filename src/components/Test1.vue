<template>
<div>
        <div id="my-node" >
             <img style="width: 320px; height: 400px" src="../../public/1.jpg" @click="fxx">
    </div>
</div>

</template>
<script>
import domtoimage from 'dom-to-image';
export default {
    methods:{
         fxx(){
            var node = document.getElementById('my-node');
            console.log(node)
            domtoimage.toSvg(node)
            .then(function (dataUrl) {
                var img = new Image();
                img.setAttribute('crossOrigin', 'anonymous');
                img.width = 320
                img.src = dataUrl;
                document.body.appendChild(img);
            })
            .catch(function (error) {
                console.error('oops, something went wrong!', error);
            });
        }
    }
}
</script>
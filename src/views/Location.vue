<template>
  <div id="location">
   <Maps/>  
  </div>
</template>

<script>
import Maps from '@/components/Maps.vue'
export default {
    name:'Location',
    components:{
      Maps
    }
}
</script>

<style>
#location{
    position:absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    top:20%;
    left: 0;
    margin-left: 10%;
}
</style>
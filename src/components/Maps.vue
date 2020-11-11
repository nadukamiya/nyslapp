<template>
<div id="maps">
  <iframe src="https://www.google.com/maps/d/embed?mid=1joZo-pbJlJnxdjn32AattA3cFJNV2AHN" ></iframe>
</div>
</template>

<script>
export default {
    name:'Maps'
}
</script>

<style>

iframe{
  width:300px;
  height:400px;
}

@media (orientation: landscape) { 

  iframe{
      width:500px;
  height:300px;
  }
}

</style>
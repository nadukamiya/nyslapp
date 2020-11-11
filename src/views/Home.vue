<template>
  <div class="home">
    <div id="img-header">
    </div>
    <div class="black"> 
      <h2>Upcoming Events</h2> 
    </div>
        <main>
          <h5 >August 4</h5>
          <p>NYSL Fundraiser</p>
          <h5>August 16</h5>
          <p>Season Kick-off: Meet the Teams</p>
          <h5>September 1</h5>
          <p>First Game of the Season (Check Game Schedule for details)</p>
        </main>    
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',

}
</script>
<style scoped>
*{
  font-family: 'Nunito', sans-serif;
}
 .home{
   margin:0;
   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: row;
 }
 #img-header{
   left:0;
 }

 .black{
   left:0;
 }

 #img-header{
  position: absolute;
  background-image: url("../assets/6471.jpg");
  background-size: cover;
  width: 100%;
  height: 30%;
  z-index: 0;
  top: 15%;
}

.black{
  width: 100%;
  height: 7%;
  background-color: black;
  z-index: 99;
  position: absolute;
  top: 40%;
  text-align: center;
  color: white;
}

 h2{
  margin:0;
  padding: 0.3em;
  font-size: 1.5em;
  z-index: 91;
}

main{
  width: 80%;
  position: absolute;
  margin-top: 7%;
  top: 45%;
  text-align: center;
  font-size: 1em;
}

#logo{
  z-index: 999;
}


@media(orientation: landscape) { 
    #img-header{
      display: none;
    }
    .black{
      height: 12%;
      top: 27%;
    }
    main{
      top: 29%;
    }
    
}

</style>

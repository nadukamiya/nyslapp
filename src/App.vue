<template>
  <div id="app">

      <!--     <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
      </div> -->
      <!-- <router-view/> -->
      <div id=header>
        <img id="logo" src="./assets/nysl_logo.png" alt="logo">
        <h1 >Northside Youth <br> Soccer League</h1>
      </div>
      <div>
        <router-view/>
      </div>    
        <div id="nav-menu">
            <router-link to="/">
            <i id="ihome" class="fas fa-home"></i>
          </router-link>
          <router-link to="/about">
            <i id="iabout" class="fas fa-info-circle"></i>
          </router-link>
          <router-link to="/calendar">
            <i id="icalendar" class="far fa-calendar-alt"></i>
          </router-link>
          <router-link to="/location">
            <i id="imaps" class="fas fa-map-marked-alt"></i>
          </router-link>
          <router-link to="/user">
            <i class="fas fa-user"></i>
          </router-link>  
          <router-link to="/selectchat">
            <i class="fas fa-comments"></i>
          </router-link>    
        </div>

        
    </div>
  
</template>


<script>
import { mapMutations } from 'vuex'
export default {
  name:'App',
  methods:{
    ...mapMutations(['listenUser']),
  },
      beforeMount(){
      this.listenUser()
    }
}
</script>

<style lang="scss" scoped>


#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
    display: flex;
  justify-content: center;
  align-items: flex-end;
  height: 100vh;
}

body{
  margin: 0;
  height: 100%;
      display: flex;
}
#header {
      background: yellowgreen;
      height: 20%;
      width: 100vw;
      margin: 0;
      top: 0;
      right: 0;
      position: absolute;
      border-bottom: black 1.75em solid;
      z-index: 999;
}


#logo{
  position: absolute;
  height: 6em;
  left:1em;
  top: 0.35em;
  z-index: 900;
}

h1{
  position: absolute;
  font-size: 1.75em;
  top: 0.7em;
  left: 5em;
  margin: 0;
  font-weight: bold;
  font-family: 'Nunito', sans-serif;
}

#nav-menu{
  width: 90%;
  height: 7%;
  background-color: yellowgreen;
  z-index: 1000;
  position: fixed;
  top: 90%;
  margin-bottom: 10%;
  border-radius: 1em;
    display: flex;
    justify-content: space-around;
    align-items: center;
}

i{
    color: black;
    font-size: 1.7rem;
  }

  .router-link-exact-active{

    i{
      color: white;
    }
    
  }



  @media (orientation: landscape) { 
    #header{
      height: 30%;
      border-bottom: black 1em solid;
    }

  #nav-menu{
    height: 20%;
    width: 40%;
    margin-bottom: 10%;
    top: 0%;
    right:0;
    position: absolute;
  }

  h1{
    font-size: 1.6em;
  }
  }
  @media (max-width: 320px){
 h1{
    font-size: 1.4em;
      left: 5.5em;
  }
  }

</style>

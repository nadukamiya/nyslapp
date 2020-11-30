<template>
  <div id="user">
      <div id="img-user"></div>
      <template v-if="user == null">
          <button type="button" class="btn black-background white btn-lg" @click="login()">Login with Google</button>
          <i id="ball" class="fas fa-futbol"></i>
    </template>
          <template v-else>
              <div id="profilemenu">
                <button type="button" class="btn black-background white  btn-lg">
                <router-link to="profile">
                    My Info
                </router-link>
                </button>
              <button type="button" class="btn black-background white  btn-lg" @click="logout()">Logout</button>
              </div>

              </template>
  </div>
</template>

<script>

import firebase from "firebase/app"
import "firebase/auth"
import {mapState} from "vuex";

export default {
name:'User',

computed:{
    ...mapState(["user"])
},

methods:{

    login(){
        let provider = new firebase.auth.GoogleAuthProvider()

        firebase
        .auth()
        .signInWithPopup(provider)
        .then(result =>{
            console.log(result.user)
        })
        .catch(error =>{
            console.log(error.code)
        })
    },
    logout(){
        firebase
        .auth()
        .signOut()
        .then(() => {
           console.log("logged out")
        })
        .catch(error => {
            console.log(error.code)
        })
    }
}
}
</script>

<style>
*{
  font-family: 'Nunito', sans-serif;
}
#user{
position: absolute;
width: 100vw;
height: 60%;
top: 20%;
left:0;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

}

#profilemenu button{
    margin: 10px 10px;
}

#img-user{
  position: absolute;
  background-image: url("../assets/photoUser.jpg");
  background-size: cover;
  width: 100%;
  height: 40%;
  z-index: 0;
  top: 0%;
  border-bottom: yellowgreen 20px solid;
}

a{
    text-decoration: none;
    color: white;
}

#ball{
    display:none
}

.black-background {background-color:#000000;} 
.white {color:#ffffff;} 
.green-background {background-color: yellowgreen;}

@media(orientation: landscape) { 
    #img-user{
      display: none;
    }
    #ball{
        display: block;
        color: black;
        font-size: 2rem;
        margin-top: 10px;
    }
    
}

</style>
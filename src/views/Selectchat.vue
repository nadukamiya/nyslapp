<template>
  <div id="selectchat">
          <div class="green"> 
      <h3>Chatroom</h3> 
    </div>
       <template v-if = "user==null">
        <div class="black"> 
       <h5>Log in into your account</h5> 
      </div>
        <router-link id="loguearse" to="user" tag="button" class="btn black-background white btn-lg">
        Go to User
        </router-link>
        <i id="ball" class="fas fa-futbol"></i>
    </template>
    <template v-else> 
            <div class="black"> 
       <h5>Select your game date</h5> 
      </div>
    <div id="dates">

                <b-button v-b-toggle="'collapse-2'" class="m-1 black-background white">September</b-button>
            <b-collapse id="collapse-2">
                <b-dropdown id="dropdown-1" text="09/01" class="m-1">
                    <b-dropdown-item class="green-background"><router-link to="/Chatroom/0">U1 vs U2</router-link></b-dropdown-item>
                    <b-dropdown-item class="black-background"><router-link to="/Chatroom/1">U3 vs U2</router-link></b-dropdown-item>
                </b-dropdown>
                <b-dropdown id="dropdown-2" text="09/08" class="m-1">
                    <b-dropdown-item class="green-background"><router-link to="/Chatroom/2">U5 vs U6</router-link></b-dropdown-item>
                    <b-dropdown-item class="black-background"><router-link to="/Chatroom/3">U2 vs U4</router-link></b-dropdown-item>
                </b-dropdown>
                <b-dropdown id="dropdown-3" text="09/15" class="m-1">
                    <b-dropdown-item class="green-background"><router-link to="/Chatroom/4">U2 vs U4</router-link></b-dropdown-item>
                    <b-dropdown-item class="black-background"><router-link to="/Chatroom/5">U3 vs U5</router-link></b-dropdown-item>
                </b-dropdown>
                <b-dropdown id="dropdown-4" text="09/22" class="m-1">
                    <b-dropdown-item class="green-background"><router-link to="/Chatroom/6">U1 vs U3</router-link></b-dropdown-item>
                    <b-dropdown-item class="black-background"><router-link to="/Chatroom/7">U2 vs U6</router-link></b-dropdown-item>
                </b-dropdown>
                <b-dropdown id="dropdown-5" text="09/29" class="m-1">
                    <b-dropdown-item class="green-background"><router-link to="/Chatroom/8">U4 vs U5</router-link></b-dropdown-item>
                </b-dropdown>
            </b-collapse>

        <b-button v-b-toggle.collapse-3 class="m-1 black-background white">October</b-button>
            <b-collapse id="collapse-3">
                <b-dropdown id="dropdown-6" text="10/06" class="m-1">
                    <b-dropdown-item class="green-background"><router-link to="/Chatroom/9">U2 vs U5</router-link></b-dropdown-item>
                    <b-dropdown-item class="black-background"><router-link to="/Chatroom/10">U1 vs U6</router-link></b-dropdown-item>
                </b-dropdown>
                <b-dropdown id="dropdown-7" text="10/13" class="m-1">
                    <b-dropdown-item class="green-background"><router-link to="/Chatroom/11">U3 vs U4</router-link></b-dropdown-item>
                    <b-dropdown-item class="black-background"><router-link to="/Chatroom/12">U5 vs U1</router-link></b-dropdown-item>
                </b-dropdown>
                <b-dropdown id="dropdown-8" text="10/20" class="m-1">
                    <b-dropdown-item class="green-background"><router-link to="/Chatroom/13">U6 vs U3</router-link></b-dropdown-item>
                    <b-dropdown-item class="black-background"><router-link to="/Chatroom/14">U2 vs U4</router-link></b-dropdown-item>
                </b-dropdown>
                <b-dropdown id="dropdown-9" text="10/27" class="m-1">
                    <b-dropdown-item class="green-background"><router-link to="/Chatroom/15">U1 vs U3</router-link></b-dropdown-item>
                    <b-dropdown-item class="black-background"><router-link to="/Chatroom/16">U5 vs U6</router-link></b-dropdown-item>
                </b-dropdown>
         </b-collapse>

            
    </div>
    </template>
  </div>
</template>

<script>
import {mapState} from "vuex";
export default {
    name:'Selectchat',
    computed:{
        ...mapState(['user'])
    },
}
</script>

<style>
*{
  font-family: 'Nunito', sans-serif;
}
#selectchat{
   margin:0;
   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: row;
}
#dates{
  display: flex;
  justify-content: center;
  flex-direction: column;
  position: absolute;
  margin-top: 7%;
  margin-bottom: 20%;
  top: 28%;
  text-align: center;
  font-size: 1rem;
  width: 80%;
}

#collapse-2{
   margin:0;
   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: column;
        
}

#collapse-3{
 margin:0;
   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: column;

}

#loguearse{
    position: absolute;
    top:35%;
}

.green{
  width: 100vw;
  height: 5%;
  background-color: yellowgreen;
  z-index: 99;
  position: absolute;
  top: 20%;
  text-align: center;
  color: white;

}

.black{
  width: 100vw;
  height: 5%;
  background-color: black;
  z-index: 99;
  position: absolute;
  top: 25%;
  text-align: center;
  color: white;

}

#ball{
    display:none
}
.black-background {background-color:#000000;} 
.white {color:#ffffff;} 
.green-background {background-color: yellowgreen;}


@media(orientation: landscape) { 

    #ball{
        position: absolute;
        top:70%;
        display: block;
        color: black;
        font-size: 2rem;
        margin-top: 10px;
    }
    .green{
      top: 30%;
      height: 10%;
    }
    .black{
        top:40%;
        height: 10%;
    }
    #loguearse{
    position: absolute;
    top:55%;
    }
    #dates{
        top:40%
    }
    #collapse-2{
        flex-direction: row;
    }
    #collapse-3{
        flex-direction: row;
    }
}
</style>
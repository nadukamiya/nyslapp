<template>
  <div id="myinfo">
      <div id="profile">
        <img id="user-photo" :src="user.photoURL" alt="">
      <h3>{{user.displayName}}</h3>
      </div>
      <div id="info">
          <p>{{user.email}}</p>

      </div>
    <button type="button" id="return" class="btn black-background btn-lg">
    <router-link to="user">
     Return
    </router-link>
    </button>
  </div>
</template>

<script>
import{mapState} from 'vuex';
export default {
    name:'UserInfo',
    computed: {
        ...mapState(['user'])
    }
}
</script>

<style>
*{
  font-family: 'Nunito', sans-serif;
}

#myinfo{
    position: absolute;
    left: 0;
    width: 100vw;
    top: 20%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
#profile{
    margin-top: 5%;
    background: yellowgreen;
    padding: 5px;
    left: 0;
    width: 100vw;
    top: 20%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    border-bottom: yellowgreen solid 3px;
    border-top: yellowgreen solid 3px;
}
#user-photo{
    width: 100px;
    border-radius: 50%;
}
#info{
    margin-top: 10px
}

#return{
    margin-top:2%;
}

a{
    color:white;
}
.black-background {background-color:#000000;} 
.white {color:#ffffff;} 
.green-background {background-color: yellowgreen;}
</style>
<template>
  <div id="chatroom">
    <template v-if = "user==null">
        <router-link to="user" tag="button" class="btn btn-dark btn-lg">
        Loggin
        </router-link>
         </template>
    <template v-else> 
        <div id="bodychat">
            <div v-for="(message, index) in messages" :key="index" id="chat">
                <p>
                    <strong> {{message.author}} said:</strong>
                </p>
                <p>
                    {{message.body}}
                </p>
            </div>
        </div>

        <div id="submit">
            <form @submit.prevent= "post()">
                <input type="text" placeholder="Enter your message..."   v-model = "input"/>
                <button type="submit" class="btn black-background white">Send</button>
            </form>
        </div>
 
    </template>
  </div>
</template>

<script>
    import {mapState} from "vuex";
    import {db} from "../firebase/db";
export default {
    name:'Chatroom',
    data(){
        return{
            messages:[],
            input:null
        }
    },

    methods:{
        post: function(){
            console.log(this.input)
            let folder = db.ref("forum/match" + this.$route.params.id)
            let message = {
                body: this.input,
                author: this.user.displayName,
                date: new Date()
            }
             folder.push(message)
             this.input=null
        }
    },
    computed:{
        ...mapState(['user'])
    },
    mounted(){
        this.messages = [];
        db.ref("forum/match" + this.$route.params.id).on("child_added", (snapshot)=>{
            this.messages.push(snapshot.val())
        })
    }


}
</script>

<style>
#chatroom{
    position:absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    top:20%;
    left: 0;
    margin-left: 15%;
}
#bodychat{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    top: 25%;
}
#chat{
color: black;
background-color: #7aa326;
text-align: left;
padding: 0.2em 2em;
margin: 5px 0;
border-radius: 10px;
min-width: 25vw;

}

#submit{
    margin-top: 5%;
    margin-bottom: 30%;
      z-index: 1000;

}
#submit button{
    margin-left: 5px;
}

#submit input{
    height: 6vh;
}

.black-background {background-color:#000000;} 
.white {color:#ffffff;} 
</style>
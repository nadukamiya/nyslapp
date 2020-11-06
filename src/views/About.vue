<template>
  <div class="about">

    <div class="green"> 
      <h3>About Us</h3> 
    </div>
    <main>
      <b-button v-b-toggle="'collapse-2'" class="m-1 black-background white">Mission</b-button>
    <b-collapse id="collapse-2">
    <b-card>To support young athletes living in Chicago's northside neighborhoods, who have an interest in learning and playing soccer, with opportunities to learn and practice skills related to the game of soccer, specifically those skille around team cooperation and good sportsmanship.</b-card>
    </b-collapse>
    <b-button v-b-toggle="'collapse-3'" class="m-1 black-background white">Vision</b-button>
    <b-collapse id="collapse-3">
    <b-card>The Northside Youth Soccer League aspires to develop strong, well-rounded, and mindful athletes through the building of character, self-discipline, and leadership.</b-card>
    </b-collapse> 
    <b-button v-b-toggle="'collapse-4'" class="m-1 black-background white">General Information</b-button>
       <b-collapse id="collapse-4">
    <b-card>The Northside Youth Soccer League was established in 1996 to provide athletes residing in Chicago's northside neighborhoods an environment in which to learn and play soccer. To be a member of NYSL, you must be between the ages of 4-12 and reside in Chicago northside neighborhood. NYSL is ran by a small full-time staff, and relies on the generous volunteer time of parents and previous league members.</b-card>
   </b-collapse>
   <b-button v-b-toggle="'collapse-5'" class="m-1 green-background white">Contact</b-button>
       <b-collapse id="collapse-5" >
    <b-card>     
        <p>Please email us at <a href="mailto:nysl@chisoccer.org">nysl@chisoccer.org</a>
        </p>
        <p>We will reply to your email as soon as we can</p></b-card>
   </b-collapse>
    

    </main>
  </div>
</template>

<style scoped>

*{
  font-family: 'Nunito', sans-serif;
}
 .about{
   margin:0;
   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: row;
 }



.green{
  width: 100vw;
  height: 5%;
  background-color: yellowgreen;
  z-index: 99;
  position: absolute;
  top: 16%;
  text-align: center;
  color: white;

}

 h2{
  margin:0;
  padding: 0.1em;
}

main{
  display: flex;
  justify-content: center;
  flex-direction: column;
  position: absolute;
  margin-top: 7%;
  margin-bottom: 20%;
  top: 20%;
  text-align: center;
  font-size: 1rem;
  width: 80%;
  
}

.black-background {background-color:#000000;} 
.white {color:#ffffff;} 
.green-background {background-color: yellowgreen;}

</style> 


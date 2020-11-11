<template>
<div id="date">
  <div id="calendar">
  <vue-event-calendar :events="demoEvents"></vue-event-calendar>
  </div>   
</div>
 
</template>

<script>
export default {
  data () {
    return {
      demoEvents: [{
        date: '2020/09/01', // Required
        title: 'U1 and U2', // Required
        desc: 'AJ Katzenmaier - 9:30am.'
      }, {
        date: '2020/09/01',
        title: 'U3 and U2',
        desc: 'Greenbay - 1:00pm.',
      }, {
        date: '2020/09/08',
        title: 'U5 and U6',
        desc: 'Howard A Yeager - 9:30am.',
      }, {
        date: '2020/09/08',
        title: 'U2 and U4',
        desc: 'Marjorie P Hart - 1:00pm.',
      }, {
        date: '2020/09/15',
        title: 'U2 and U4',
        desc: 'North - 9:30am.',
      }, {
        date: '2020/09/15',
        title: 'U3 and U5',
        desc: '	AJ Katzenmaier - 1:00pm.',
      }, {
        date: '2020/09/22',
        title: 'U1 and U3',
        desc: 'South - 9:30am.',
      }, {
        date: '2020/09/22',
        title: 'U2 and U6',
        desc: 'Howard A Yeager- 1:00pm.',
      },  {
        date: '2020/09/29',
        title: 'U4 and U5',
        desc: 'Greenbay- 9:30am.',
      }, {
        date: '2020/10/06',
        title: 'U2 and U5',
        desc: 'Marjorie P Hart- 9:30am.',
      }, {
        date: '2020/10/06',
        title: 'U1 and U6',
        desc: 'South- 1:00pm.',
      }, {
        date: '2020/10/13',
        title: 'U3 and U4',
        desc: '	Howard A Yeager- 9:30am.',
      }, {
        date: '2020/10/13',
        title: 'U5 and U1',
        desc: 'Greenbay- 1:00pm.',
      }, {
        date: '2020/10/20',
        title: 'U6 and U3',
        desc: 'North- 9:30am.',
      }, {
        date: '2020/10/20',
        title: 'U2 and U4',
        desc: 'Marjorie P Hart- 1:00pm.',
      }, {
        date: '2020/10/27',
        title: 'U3 and U1',
        desc: 'AJ Katzenmaier- 9:30am.',
      }, {
        date: '2020/10/27',
        title: 'U5 and U6',
        desc: 'Howard A Yeager - 1:00pm.',
      },]
    }
  }
}
</script>
<style>

#date{
  display: flex;
  justify-content: center;
  align-items: center;
}
#calendar{
  position: absolute;
  top:20%;
  margin-bottom: 10%;
}
.events-wrapper {
    background-color: yellowgreen;
}

@media (min-width: 600px) and (orientation: landscape) { 
    #calendar{
      top: 30%;
      height: 10%;
    }
    }
</style>

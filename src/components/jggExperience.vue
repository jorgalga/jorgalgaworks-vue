<template>
  <div class="hello">
    <h1>{{ msg }} </h1>
    <!--ul>
      <li v-for="item in studies" :key="item.year" >
        <span class="year">{{ item.year}}</span><h2>{{ item.message }}</h2>{{ item.place }}
      </li>
    </ul-->

    <div class="masonry-cnt">
      <masonry
        :cols="{default: 3, 1000: 3, 700: 2, 400: 2}"
        :gutter="{default: '5px', 700: '10px'}"
        >
        <div class="work-item" v-for="item in studies" :key="item.year">
          <span class="year">{{ item.year}}</span><h3>{{ item.message }}</h3>{{ item.place }}
        </div>
      </masonry>
    </div>

    <div class="divisor">
    </div>
  </div>
</template>

<script>
export default {
  name: 'JggExperience',
  data () {
    return {
      msg: 'Who I have worked for?',
      studies: [
        { year: '08/2017 -', message: 'Front End Developer', place: 'Ogilvy & Mather (Madrid).' },
        { year: '06/2016 - 07/2017', message: 'Developer', place: 'B-reel (Barcelona).' },
        { year: '06/2015 - 06/2016', message: 'Front End Developer', place: 'UOC - Oberta publishing (Barcelonas).' },
        { year: '09/2014 -', message: 'Creative Technologist Freelance', place: '' },
        { year: '02/2015 - 06/2015', message: 'Audiovisual Technical', place: 'UOC (Barcelona).' },
        { year: '09/2014 - 12/2014', message: 'Media editor', place: 'UOC - Mosaic Magazine (Barcelona).' },
        { year: '10/2013 - 08/2014', message: 'Creative Engineer', place: 'Ars Electronica Solutions (Linz - Austria).' },
        { year: '07/2012 - 09/2012', message: 'Multimedia developer (Scholar)', place: 'Villar del Arzobispo Council. (Valencia)' },
        { year: '08/2011 - 04/2012', message: 'Computer Technical', place: 'Mancomunidad La Serrania. (Valencia)' },
        { year: '01/2011 - 11/2011', message: 'Multimedia developer (Scholar)', place: 'MAVM - UPV (Valencia)' },
        { year: '07/2010 - 11/2010', message: 'Multimedia developer (Scholar)', place: 'Andilla Council. (Valencia)' },
        { year: '10/2009 - 01/2010', message: 'Multimedia developer (Scholar)', place: 'ETSINF - UPV (Valencia)' },
        { year: '09/2009 - 10/2009', message: 'Film studio technical', place: 'Polimedia - UPV (Valencia)' },
        { year: '03/2009 - 05/2009', message: 'Interviewer', place: 'ICE - UPV (Valencia)' },
        { year: '11/2008 - 03/2009', message: 'Multimedia developer (Scholar)', place: 'CCD - UPV (Valencia)' },
        { year: '10/2008 - 11/2008', message: 'Computer Technical', place: 'Casa del Alumno - UPV (Valencia)' }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.text-elements{
    text-align: center;
}
.hello{
  background-color: white;
}
h1,h2,h3{
  margin: 15px;
}
ul{
  text-align: center;
  max-width: 1024px;
  width: 100%;
  display: inline-block;
  list-style-type: none;
  padding: 0;
}
li {
  margin-bottom: 30px;
  max-width: 33%;
  margin: 10px auto 30px;
}
.masonry-cnt{
  max-width: 1024px;
  display: block;
  margin: 0 auto;
  padding: 30px 0;
}
.work-item{
  min-height: 100px;
  background-color: #EEEEFF88;
  margin: -15px 15px 25px 0 ;
  padding: 45px 0;
  clip-path: polygon(0 20px, 100% 0, 100% calc(100% - 20px), 0 100%);
}

.divisor{
    width: 100%;
    height: 50px;
    background-color: aliceblue;
}
span.year{
  display: inline-block;
  transform: skewY(-3.5deg);
  background-color: #00000077;
  color: white;
  padding: 3px 5px;
  font-weight: 900;
  font-size: 14px;
  font-style: italic;
  margin-bottom: 15px
}
</style>

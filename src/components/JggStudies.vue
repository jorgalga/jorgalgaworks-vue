<template>
  <div class="hello">
    <div class="text-elements">
      <h1>{{ msg }}</h1>
      <ul>
        <li v-for="item in studies" :key="item.year" >
          <span class="year">{{ item.year}}</span> <br> {{ item.message }} <br> {{ item.place }}
        </li>
      </ul>
    </div>
    <div class="divisor">
    </div>
  </div>
</template>

<script>
export default {
  name: 'JggStudies',
  data () {
    return {
      msg: 'Which are my studies?',
      studies: [
        { year: '2009', message: 'Ingeniero informático técnico en gestión con intensificación en multimedia.', place: 'UPV (València).' },
        { year: '2011', message: 'Máster en artes visuales y multimedia (tesis pendiente).', place: 'UPV (València).' },
        { year: '2013', message: 'Programa de intercambio en el Interface cultures Master programme.', place: 'Kunstuniversität Linz (Austria).' },
        { year: '2015', message: 'Licenciado en comunicación audiovisual.', place: 'UOC (Barcelona). ' }
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
h1{
  font-weight: normal;
  margin: 0;
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
}
.divisor{
    width: 100%;
    height: 50px;
    background-color: aliceblue;
}
span.year{
  display: inline-block;
  transform: skewY(-3.5deg);
  background-color: #000000bb;
  color: white;
  padding: 6px 10px;
  font-weight: 900;
  font-size: 20px;
  font-style: italic;
  margin-bottom: 5px
}
</style>

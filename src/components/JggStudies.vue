<template>
  <div class="hello">
    <div class="text-elements">
      <h1>{{ msg }}</h1>
      <ul>
        <li v-for="item in studies" :key="item.year" >
          <b>{{ item.year}}</b> - {{ item.message }}
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
      msg: 'Estudios',
      studies: [
        { year: '2009', message: 'Ingeniero informático técnico en gestión con intensificación en multimedia. UPV (València)' },
        { year: '2011', message: 'Máster en artes visuales y multimedia (tesis pendiente). UPV (València)' },
        { year: '2013', message: 'Programa de intercambio en el Interface cultures Master programme. Kunstuniversität Linz(Austria)' },
        { year: '2015', message: 'Licenciado en comunicación audiovisual. UOC (Barcelona)' }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello{
  background-color: pink;
}
h1{
  font-weight: normal;
  margin: 0;
}
ul{
  text-align: left
}
.divisor{
    width: 100%;
    height: 50px;
    background-color: aliceblue;
}
</style>

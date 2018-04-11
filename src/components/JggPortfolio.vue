<template>
  <div class="hello">
    <div class="text-elements">
      <h1>{{ msg }}</h1>
      <input type="text" v-model="search" placeholder="Filtrar proyecto" />
      <ul>
        <li v-for="item in filteredProyects" :key="item.message">
          {{ item.year}} - <b>{{ item.message }}</b> - [{{item.context}}] - <a @click.prevent="openModal(item)" href="#">[+]</a>
        </li>
      </ul>
    </div>
    <div class="divisor">
    </div>
    <modal ref="mymodal"></modal>
  </div>
</template>

<script>
import Modal from '@/components/Modal'
export default {
  name: 'JggPortfolio',
  data () {
    return {
      msg: 'Portfolio',
      portfolio: [
        { id: 'PR201803', year: '2018', context: 'Ogilvy & Mather', message: 'Ready player one' },
        { id: 'PR201802', year: '2018', context: 'Ogilvy & Mather', message: 'Ogilvy Music prototype' },
        { id: 'PR201801', year: '2018', context: 'Ogilvy & Mather', message: 'Cruzcampo new site' },
        { id: 'PR201703', year: '2017', context: 'Ogilvy & Mather', message: 'Santander Futbol Pasión' },
        { id: 'PR201702', year: '2017', context: 'B-Reel', message: 'B-Reel Films site upgrades' },
        { id: 'PR201701', year: '2017', context: 'B-Reel', message: 'Google My Account' },
        { id: 'PR201603', year: '2016', context: 'B-Reel', message: 'Skulls and bones' },
        { id: 'PR201602', year: '2016', context: 'B-Reel', message: 'VR Made by Makers' },
        { id: 'PR201601', year: '2016', context: 'Personal project', message: 'Poster of The Villar del Arzobispo Carnival 2017' },
        { id: 'PR201502', year: '2015', context: 'Ars Electronica', message: 'Sypmap touchable interface' },
        { id: 'PR201501', year: '2015', context: 'Freelancer', message: 'Lisboa - Ciencia Viva interactives' },
        { id: 'PR201403', year: '2014', context: 'Personal project', message: 'Poster of The Villar del Arzobispo Carnival 2015' },
        { id: 'PR201402', year: '2014', context: 'Ars Electronica', message: 'Agora Table' },
        { id: 'PR201401', year: '2014', context: 'Ars Electronica', message: 'Austrian Images for the ITB' },
        { id: 'PR201305', year: '2013', context: 'Ars Electronica', message: 'Drei - "There is another way"' },
        { id: 'PR201304', year: '2013', context: 'Personal project', message: 'Tropers: Trbovlje Serie ' },
        { id: 'PR201303', year: '2013', context: 'Personal project', message: 'Poster of The Villar del Arzobispo Carnival 2014' },
        { id: 'PR201302', year: '2013', context: 'Personal project', message: 'Seqduino' },
        { id: 'PR201301', year: '2013', context: 'Personal project', message: 'ScreenSaver' }
      ],
      search: ''
    }
  },
  computed: {
    filteredProyects: function () {
      return this.portfolio.filter((item) => {
        return item.message.match(this.search)
      })
    }
  },
  components: {
    'modal': Modal
  },
  methods: {
    openModal (item) {
      this.$refs.mymodal.msg = 'a sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró h<br><br>a sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró h'
      this.$refs.mymodal.isActive = true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .hello{
    background-color: beige;
  }
  .text-elements{
    text-align: left;
  }
  h1{
    font-weight: normal;
    margin: 0;
  }
  li{
    text-align: left;
  }
  .divisor{
      width: 100%;
      height: 50px;
      background-color: aliceblue;
  }
  a{
    color: purple
  }
</style>

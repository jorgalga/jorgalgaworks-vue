<template>
  <div class="hello">
    <div class="text-elements">
      <h1>{{ msg }}</h1>
      <input type="text" v-model="search" placeholder="Filtrar proyecto" />
      <!--ul>
        <li v-for="item in filteredProyects" :key="item.message">
          {{ item.year}} - <b>{{ item.message }}</b> - [{{item.context}}] - <a @click.prevent="openModal(item)" href="#">[+]</a>
        </li>
      </ul-->
      <div class="masonry-cnt">
        <masonry
          :cols="{default: 3, 1000: 3, 700: 2, 400: 2}"
          :gutter="{default: '5px', 700: '10px'}"
          >
          <div class="portfolio-item1"  v-for="item in filteredProyects" :key="item.message">
            <div class="portfolio-cnt">
              <div v-if="item.thumb !== undefined" class="thumb-el-wrapp ">
                <img v-bind:src="item.thumb">
              </div>
              <div class="text-els">
                <p>{{ item.year}}<p>
                <p><b>{{ item.message }}</b></p>
                <p><a @click.prevent="openModal(item)" href="#"><b>[+info]</b></a> <a v-if="item.url !== undefined"  v-bind:href="item.url" target="blank"><b>[site]</b></a></p>
              </div>
            </div>
          </div>
        </masonry>
      </div>
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
        { id: 'PR201803',
          thumb: '/static/thumb-readyplayerone-c.png',
          year: '2018',
          context: 'Ogilvy & Mather',
          message: 'Los archivos de Oasis',
          url: '//losarchivosdeoasis.com/'
        },
        { id: 'PR201802',
          thumb: '/static/thumb-ogilvymusic-c.png',
          year: '2018',
          context: 'Ogilvy & Mather',
          message: 'Ogilvy Music prototype',
          url: '//ogilvyapps.com/music1/'
        },
        { id: 'PR201801',
          thumb: '/static/thumb-cruzcampo-c.png',
          year: '2018',
          context: 'Ogilvy & Mather',
          message: 'Cruzcampo new site',
          url: '//cruzcampo.es'
        },
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
        { id: 'PR201306', year: '2013', context: 'Ars Electronica', message: 'Drei - "There is another way"' },
        { id: 'PR201305', year: '2013', context: 'Personal project', message: 'Tropers: Trbovlje Serie ' },
        { id: 'PR201304', year: '2013', context: 'Personal project', message: 'Poster of The Villar del Arzobispo Carnival 2014' },
        { id: 'PR201303', year: '2013', context: 'Personal project / Interface Cultures', message: 'Seqduino' },
        { id: 'PR201302', year: '2013', context: 'Personal project / Interface Cultures', message: 'Troopers' },
        { id: 'PR201301', year: '2013', context: 'Personal project / Interface Cultures', message: 'ScreenSaver' },
        { id: 'PR201203', year: '2012', context: 'Personal project', message: 'Poster of The Villar del Arzobispo Carnival 2013' },
        { id: 'PR201202', year: '2012', context: 'Personal project', message: 'Paris, Paris, Paris.' },
        { id: 'PR201201', year: '2012', context: 'Personal project', message: 'The Coffee men' },
        { id: 'PR201107', year: '2011', context: 'Personal project', message: 'Poster of The Villar del Arzobispo Carnival 2012' },
        { id: 'PR201106', year: '2011', context: 'Personal project / MAVM', message: 'Paris_8_11' },
        { id: 'PR201105', year: '2011', context: 'Personal project', message: '15M Assembly in Valencia' },
        { id: 'PR201104', year: '2011', context: 'Personal project / MAVM', message: 'EMCTV3000' },
        { id: 'PR201103', year: '2011', context: 'Personal project', message: 'Imatges i moviments' },
        { id: 'PR201102', year: '2011', context: 'Personal project / MAVM', message: 'Le memoire des ondes' },
        { id: 'PR201101', year: '2011', context: 'Personal project / MAVM', message: 'An old dream' },
        { id: 'PR201009', year: '2010', context: 'Personal project', message: 'Emi' },
        { id: 'PR201008', year: '2010', context: 'Personal project / Council of Andilla', message: 'Andilla vale la pena' },
        { id: 'PR201007', year: '2010', context: 'Personal project', message: 'Protest in Parpallo' },
        { id: 'PR201006', year: '2010', context: 'Personal project / MAVM', message: 'Un huevo de cortinillas' },
        { id: 'PR201005', year: '2010', context: 'Personal project / MAVM', message: 'Una mirada fragmentada' },
        { id: 'PR201004', year: '2010', context: 'Personal project', message: 'Poster of The Villar del Arzobispo Carnival 2011' },
        { id: 'PR201003', year: '2010', context: 'Personal project / MAVM', message: 'La ciutat dels errors collaboration' },
        { id: 'PR201002', year: '2010', context: 'Personal project / MAVM', message: 'FAV3.0 / AFAV2010.fav' },
        { id: 'PR201001', year: '2010', context: 'Personal project / MAVM', message: 'Coltan comes' },
        { id: 'PR200905', year: '2009', context: 'Personal project', message: 'Tiende lo + positivo' },
        { id: 'PR200904', year: '2009', context: 'Personal project', message: '¿Qué es de tu vihda?' },
        { id: 'PR200903', year: '2009', context: 'Personal project', message: 'El Paradigma: Un estudiante, una visión, una lucha ' },
        { id: 'PR200902', year: '2009', context: 'Personal project / ETSINF', message: 'Biktor, Jorgalga, videobloggers' },
        { id: 'PR200901', year: '2009', context: 'Personal project', message: 'Carnval Inside' },
        { id: 'PR200804', year: '2008', context: 'Personal project', message: 'AE pieces' },
        { id: 'PR200803', year: '2008', context: 'Personal project', message: 'TABU - Mad Yerba' },
        { id: 'PR200802', year: '2008', context: 'Personal project / ETSINF', message: 'La vella y el western' },
        { id: 'PR200801', year: '2008', context: 'Personal project / ETSINF', message: 'Nostalgia' }
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
    background-color: white;
  }
  .text-elements{
    text-align: center;
  }
  input {
    font-size: 16px;
    text-align: center;
    margin: 15px;
    padding: 10px;
    width: 100%;
    max-width: 375px;
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
  .portfolio-item1{
      margin-top: 0px
  }
  .portfolio-item1:hover .thumb-el-wrapp img{
    filter: grayscale(0);
  }
  .portfolio-cnt{
    margin: 0 15px;
    //background-color: #EEEEFF88;
    border-radius: 2px;
    //box-shadow: 0 2px 10px #80808080

  }
  .thumb-el-wrapp{
    width: 100%;
    position: relative;
    z-index: 10;
  }
  .thumb-el-wrapp img{
     width: 100%;
     background-size: cover;
     background-position: center;
     background-repeat: no-repeat;
     transition: 0.25s;
     cursor: pointer;
     filter: grayscale(100%);
     clip-path: polygon(0 40px, 100% 0, 100% calc(100% - 40px), 0 100%);
     //transform: translate3d(0,-40px,0)
  }

  .text-els{
    padding: 55px 15px 55px 15px;
    background-color: #EEEEFF88;
    position: relative;
    z-index: 5;
    transform: translate3d(0,-40px,0);
    clip-path: polygon(0 40px, 100% 0, 100% calc(100% - 40px), 0 100%);
  }
  .masonry-cnt{
      max-width: 1024px;
      margin: 40px auto
  }
  p{
    margin: 0 0 15px 0
  }
</style>

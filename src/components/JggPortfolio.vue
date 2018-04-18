<template>
  <div class="hello">
    <div class="text-elements">
      <h1>{{ msg }} </h1>
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
          <div class="portfolio-item1"  v-bind:class="{ 'mtop-50': item.thumb }"  v-observe-visibility="visibilityChanged" v-for="item in filteredProyects" :key="item.id">
            <div class="portfolio-cnt">
              <div v-if="item.thumb !== undefined" class="thumb-el-wrapp ">
                <img class="front" v-bind:src="item.thumb">
                <img class="floating" v-bind:src="item.thumbB">
              </div>
              <div class="text-els">
                <p><span class="year">{{ item.year}}</span><p>
                <p><b v-html="item.message"></b></p>
                <p><a v-if="item.modalContent !== undefined" @click.prevent="openModal(item)" href="#"><b>[+info]</b></a> <a v-if="item.url !== undefined"  v-bind:href="item.url" target="blank"><b>[site]</b></a></p>
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
  props: ['id'],
  data () {
    return {
      msg: 'Portfolio',
      initModal: 'Makers',
      portfolio: [
        { id: 'PR201803',
          thumb: '/static/thumb-readyplayerone-c.png',
          thumbB: '/static/thumb-readyplayerone.png',
          year: '2018',
          context: 'Ogilvy & Mather',
          message: 'Los archivos de Oasis',
          url: '//losarchivosdeoasis.com/'
        },
        { id: 'PR201802',
          thumb: '/static/thumb-ogilvymusic-c.png',
          thumbB: '/static/thumb-ogilvymusic.png',
          year: '2018',
          context: 'Ogilvy & Mather',
          message: 'Ogilvy Music prototype',
          url: '//ogilvyapps.com/music1/'
        },
        { id: 'PR201801',
          thumb: '/static/thumb-cruzcampo-c.png',
          thumbB: '/static/thumb-cruzcampo.png',
          year: '2018',
          context: 'Ogilvy & Mather',
          message: 'Cruzcampo new site',
          url: '//cruzcampo.es'
        },
        { id: 'PR201703', year: '2017', context: 'Ogilvy & Mather', message: 'Santander Futbol Pasión' },
        { id: 'PR201702', year: '2017', context: 'B-Reel', message: 'B-Reel Films site upgrades', url: 'https://brf.co/' },
        { id: 'PR201701',
          year: '2017',
          context: 'B-Reel',
          message: 'Google My Account',
          modalContent: '<iframe width="560" height="394" src="https://www.youtube.com/embed/_Jor3TRXniw?rel=0&amp;controls=0&amp;showinfo=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>',
          contentCentered: true
        },
        { id: 'PR201603', year: '2016', context: 'B-Reel', message: 'Skulls and bones' },
        { id: 'PR201602', year: '2016', context: 'B-Reel', message: 'VR Made by Makers', url: 'https://b-reel.github.io/vr-madebymakers/' },
        { id: 'PR201601', year: '2016', context: 'Personal project', message: 'Poster of The Villar del Arzobispo Carnival 2017' },
        { id: 'PR201502',
          thumb: '/static/thumb-spymap-c.png',
          thumbB: '/static/thumb-spymap.png',
          year: '2015',
          context: 'Ars Electronica',
          message: 'SPY MUSEUM BERLIN:<br>Spymap interface',
          modalContent: '<img class="modal-full" src="/static/PR201502-img01.jpg"><br><iframe width="700" height=394 src="https://www.youtube.com/embed/Fv6rrRQ_sPE?rel=0&amp;controls=0&amp;showinfo=0&amp;start=394" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>'
        },
        { id: 'PR201501', year: '2015', context: 'Freelancer', message: 'Lisboa - Ciencia Viva interactives' },
        { id: 'PR201403', year: '2014', context: 'Personal project', message: 'Poster of The Villar del Arzobispo Carnival 2015' },
        { id: 'PR201402', year: '2014', context: 'Ars Electronica', message: 'Agora Table' },
        { id: 'PR201401', year: '2014', context: 'Ars Electronica', message: 'Austrian Images for the ITB' },
        { id: 'PR201306',
          year: '2013',
          context: 'Ars Electronica',
          message: 'Drei - "There is another way"',
          modalText: '<p>„Es geht auch anders” (“There is another way”) is the theme of a unique interactive installation now on display at Austrian Star Alliance Terminal Check-in 3 at Vienna International Airport. The project was realized by Ars Electronica Solutions for Hutchison Drei Austria. The pictures that take the passengers into a magical world were created by the Swedish artist Kari Modén; the software that converted them into breathtaking tracking shots through these colorful worlds was developed by Ars Electronica.</p><p>n the Security Area of the airport’s new terminal, 165 screens have been clustered into a jumbo 15-meter-wide, 9-meter-high, 530-megapixel display. It takes 60 servers, 720 gigahertz of processing speed and software specially developed by Ars Electronica in order to showcase images on this one-of-a-kind photowall. The software breaks up the high-definition pictures into minute fragments and distributes them to the servers. This is what makes it possible to display the gargantuan graphics with no loss of clarity. And it’s precisely this prototypical interplay of hardware and software components that delivers breathtaking visual impressions to passengers passing through Vienna International Airport.</p><p>Different worlds, such as an underwater world, an urban world, or a starry sky react to the passengers passing through Check-in 3. Each passenger sends a virtual fish, bird or butterfly on a journey or makes clouds disappear from a virtual mountain world. These interactions cause the display of the “Drei” logo and the company’s claim “Es geht auch anders” (“There is another way”) which is displayed on the screens in a variety of ways.</p>',
          modalContent: '<img class="modal-full" src="/static/slider-4.jpg"><br><iframe width="700" height="394" src="https://www.youtube.com/embed/NgO2WekVk2o?rel=0&amp;controls=0&amp;showinfo=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>'
        },
        { id: 'PR201305',
          thumb: '/static/thumb-troops-trb-c.png',
          thumbB: '/static/thumb-troops-trb.png',
          year: '2013',
          context: 'Personal project',
          message: 'Tropers: Trbovlje Serie',
          modalText: '<p>Troopers Trbovlje" is part of the photography Serie called Troopers. The work combines photographic and synthetic image in order to create a particular universe between the reality and the fiction.</p><p>This serie was developed for the exhibition "<a href="http://speculumartium.si/" target="_blank">Apologists of the new Civilization</a>" which took place in Trbovlje (Slovenia) in October 2013.</p><p><a href="http://speculumartium.si/wp-content/uploads/2015/08/katalog-SA2013.pdf" target="_blank">[Catalogue]</a></p>',
          modalContent: '<img class="modal700" src="/static/PR201305-img01.jpg"><br><img class="modal700" src="/static/PR201305-img02.jpg"><br><img class="modal700" src="/static/PR201305-img03.jpg"><br><img class="modal700" src="/static/PR201305-img04.jpg">'
        },
        { id: 'PR201304', year: '2013', context: 'Personal project', message: 'Poster of The Villar del Arzobispo Carnival 2014' },
        { id: 'PR201303', year: '2013', context: 'Personal project / Interface Cultures', message: 'Seqduino' },
        { id: 'PR201302',
          year: '2013',
          context: 'Personal project / Interface Cultures',
          message: 'ScreenSaver'
        },
        { id: 'PR201301',
          thumb: '/static/thumb-troops-c.png',
          thumbB: '/static/thumb-troops.png',
          year: '2013',
          context: 'Personal project / Interface Cultures',
          message: 'Troopers',
          modalText: '<p>Troopers is a series of photography mostly that combines photographic and synthetic image. It uses different sources of images as a backdrop where intervention is proceed. these sources range from world famous art pieces to recognized places and moments of the social panorama. The intervention process involves the synthetic simulation and integration of the figure of a Stormtrooper 3D modeled (Imperial soldier from Star Wars saga) inside the picture creating a personal universe between reality and fiction.</p>',
          modalContent: '<img class="modal700" src="/static/PR201301-img01-rodin.jpg"><br><img class="modal700" src="/static/PR201301-img02-miron.jpg"><br><img class="modal700" src="/static/PR201301-img03-david.jpg"><br><img class="modal700" src="/static/PR201301-img04-duschamp.jpg"><br><img class="modal700" src="/static/PR201301-img05-rio.jpg"><br><img class="modal700" src="/static/PR201301-img06-pope.jpg"><br> <iframe width="700" height="394" src="https://www.youtube.com/embed/8i3LqZglMzU?rel=0" frameborder="0"></iframe><br /><br /><img class="modal700" src="/static/PR201301-img07-family.jpg"><br><img class="modal700" src="/static/PR201301-img08-terracota.jpg"><br><img class="modal700" src="/static/PR201301-img09-happiness.jpg"><br>'
        },
        { id: 'PR201203', year: '2012', context: 'Personal project', message: 'Poster of The Villar del Arzobispo Carnival 2013' },
        { id: 'PR201202', year: '2012', context: 'Personal project', message: 'Paris, Paris, Paris.' },
        { id: 'PR201201', year: '2012', context: 'Personal project', message: 'The Coffee men' },
        { id: 'PR201107', year: '2011', context: 'Personal project', message: 'Poster of The Villar del Arzobispo Carnival 2012' },
        { id: 'PR201106', year: '2011', context: 'Personal project / MAVM', message: 'Paris_8_11' },
        { id: 'PR201105', year: '2011', context: 'Personal project', message: '15M Assembly in Valencia' },
        { id: 'PR201104', year: '2011', context: 'Personal project / MAVM', message: 'EMCTV3000' },
        { id: 'PR201103', year: '2011', context: 'Personal project', message: 'Imatges i moviments' },
        { id: 'PR201102',
          year: '2011',
          context: 'Personal project / MAVM',
          message: 'Le memoire des ondes',
          modalContent: '<iframe width="700" height="394" src="https://www.youtube.com/embed/Uiqkr3r0-jU?rel=0&amp;controls=0&amp;showinfo=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>',
          contentCentered: true
        },
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
  mounted () {
    if (this.id !== undefined) {
      console.log('-' + this.id)
      var modal = this.portfolio.filter((item) => {
        return item.message.match(this.id)
      })
      this.openModal(modal[0])
    }
  },
  methods: {
    openModal (item) {
      document.getElementsByTagName('body')[0].classList.add('no-scroll')
      this.$refs.mymodal.title = item.message
      this.$refs.mymodal.year = item.year
      this.$refs.mymodal.msg = item.modalText
      this.$refs.mymodal.smedia = item.modalContent
      this.$refs.mymodal.isActive = true
      if (item.contentCentered !== undefined) {
        this.$refs.mymodal.isCentered = item.contentCentered
      } else {
        this.$refs.mymodal.isCentered = false
      }
    },
    getParams (url) {
      var params = {}
      var parser = document.createElement('a')
      parser.href = url
      var query = parser.search.substring(1)
      var vars = query.split('&')
      for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split('=')
        params[pair[0]] = decodeURIComponent(pair[1])
      }
      return params
    },
    visibilityChanged: function (isVisible, entry) {
      if (entry.isIntersecting && !entry.target.classList.contains('displayed')) {
        entry.target.classList.add('displayed')
      }
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
    margin: 15px 0 65px;
    padding: 10px;
    width: 100%;
    max-width: 300px;
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
    transition: 0.5s;
    opacity: 0;
    transform: translate3d(0,35%,0);
  }
  .portfolio-item1.mtop-50{
    margin-top: -50px
  }
  .portfolio-item1.displayed{
    opacity: 1;
    transform: translate3d(0,0,0);
  }
  .portfolio-cnt{
    margin: 0 15px;
    //background-color: #EEEEFF88;
    border-radius: 2px;
    //box-shadow: 0 2px 10px #80808080;
    margin-bottom: 20px;
  }
  @media only screen and (max-width : 600px) {
    .portfolio-cnt{
      margin: 0;
    }
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
     cursor: pointer;
     clip-path: polygon(0 20px, 100% 0, 100% calc(100% - 20px), 0 100%);
     //transform: translate3d(0,-40px,0);
     opacity: 1;
     z-index: 10;

  }
  .thumb-el-wrapp img.front{
    filter: grayscale(100%);
    transition: 0.5s;
    position: relative;
    z-index: 10;
  }
  .thumb-el-wrapp img.floating{
    position: absolute;
    top: 0;
    left: 0;
    z-index: 5;
  }
  .portfolio-cnt:hover img.front{
    opacity: 0;
  }

  .text-els{
    padding: 55px 15px 55px 15px;
    background-color: #EEEEFF88;
    position: relative;
    z-index: 5;
    transform: translate3d(0,-40px,0);
    clip-path: polygon(0 20px, 100% 0, 100% calc(100% - 20px), 0 100%);
    margin-top: -10px;
  }
  .masonry-cnt{
      max-width: 1024px;
      margin: 40px auto
  }
  p{
    margin: 0 0 15px 0
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
  }
</style>

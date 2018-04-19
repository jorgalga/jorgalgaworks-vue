<template>
  <div class="hello">
    <div class="text-elements">
      <h1>{{ msg }} </h1>
      <input type="text" v-model="search" placeholder="Filter project" />
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
                <p><br><b v-html="item.message"></b></p>
                <p v-if="item.function !== undefined"><span class="function">{{ item.function}}</span><p>
                <p><br><a v-if="item.modalContent !== undefined" @click.prevent="openModal(item)" href="#"><b>[+info]</b></a> <a v-if="item.url !== undefined"  v-bind:href="item.url" target="blank"><b>[site]</b></a></p>
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
      msg: 'What have I done?',
      initModal: 'Makers',
      portfolio: [
        { id: 'PR201804',
          year: '2018',
          function: '3D Modeling',
          context: 'Personal project',
          message: 'Troopers: War times Serie',
          modalText: '<p></p>',
          modalContent: '<img class="modal700" src="/static/PR201804-img01.jpg"><img class="modal700" src="/static/PR201804-img02.jpg"><img class="modal700" src="/static/PR201804-img03.jpg">'
        },
        { id: 'PR201803',
          thumb: '/static/thumb-readyplayerone-c.png',
          thumbB: '/static/thumb-readyplayerone.png',
          year: '2018',
          function: 'Front-end development',
          context: 'Ogilvy & Mather',
          message: 'Los archivos de Oasis<br>(Campaign finished)',
          url: '//losarchivosdeoasis.com/'
        },
        { id: 'PR201802',
          thumb: '/static/thumb-ogilvymusic-c.png',
          thumbB: '/static/thumb-ogilvymusic.png',
          year: '2018',
          function: 'Front-end development',
          context: 'Ogilvy & Mather',
          message: 'Ogilvy Music prototype',
          url: '//ogilvyapps.com/music1/'
        },
        { id: 'PR201801',
          thumb: '/static/thumb-cruzcampo-c.png',
          thumbB: '/static/thumb-cruzcampo.png',
          year: '2018',
          function: 'Front-end development',
          context: 'Ogilvy & Mather',
          message: 'Cruzcampo new site',
          url: '//cruzcampo.es'
        },
        { id: 'PR201704',
          year: '2017',
          function: 'Front-end development',
          context: 'Ogilvy & Mather',
          message: 'Santander Futbol Pasión<br>(Not Active)'
        },
        { id: 'PR201703',
          year: '2017',
          function: 'Wordpress development',
          context: 'Freelancer',
          message: 'Nalbatech site',
          url: 'http://es.nalbatech.com/'
        },
        { id: 'PR201704',
          year: '2017',
          function: 'Wordpress development',
          context: 'B-Reel',
          message: 'B-Reel Films site upgrades',
          url: 'https://brf.co/'
        },
        { id: 'PR201703',
          year: '2017',
          function: 'Full-stack development',
          context: 'B-Reel',
          message: 'Google My Account',
          modalContent: '<iframe width="700" height="394" class="youtube-video" src="https://www.youtube.com/embed/_Jor3TRXniw?rel=0&amp;controls=0&amp;showinfo=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>',
          contentCentered: true
        },
        { id: 'PR201702',
          year: '2017',
          function: 'Cordova android plugin & Front-end development',
          context: 'B-Reel',
          message: 'The Lenz by Electronic Beats.',
          url: 'https://play.google.com/store/apps/details?id=com.telekom.electronicbeats&hl=es'
        },
        { id: 'PR201701',
          year: '2017',
          function: 'Full-stack development',
          context: 'B-Reel',
          message: 'AI Director / AI Selector<br>(Pitch)',
          modalContent: '<iframe width="700" height="394" class="youtube-video" src="https://www.youtube.com/embed/M5lPTepouZM?rel=0&amp;showinfo=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>',
          contentCentered: true
        },
        { id: 'PR201604',
          year: '2016',
          function: 'Video editing',
          context: 'Personal project',
          message: 'City in progress: Nightwatch Barcelona',
          modalText: '<p>Citiy in progress is a serie of short documentaries on cities and how capitalism is modulating life of their citizens.</p><p>Nightwatch Barcelona represents the issue of the accommodation and how in fact it has become in something global around the whole world.</p><p>The voice off belongs to several speeches of David Harvey (The crisis of planetary urbanization, The Neoliberal City)</p>',
          modalContent: '<iframe width="700" height="394" class="youtube-video" src="https://www.youtube.com/embed/amqMt3xW36Q?rel=0&amp;controls=0&amp;showinfo=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>',
          contentCentered: true
        },
        { id: 'PR201603',
          year: '2016',
          function: '3D Modeling',
          context: 'B-Reel',
          message: 'Skulls and bones<br>(Not Active)'
        },
        { id: 'PR201602',
          year: '2016',
          function: 'Front-end development',
          context: 'B-Reel',
          message: 'VR Made by Makers',
          url: 'https://b-reel.github.io/vr-madebymakers/'
        },
        { id: 'PR201601',
          year: '2016',
          function: '3D Modeling / Graphic design',
          context: 'Personal project',
          message: 'Poster of The Villar del Arzobispo Carnival 2017',
          modalText: '<p>Poster for advertising the 2017 Carnival`s event of Villar del arzobispo. Presented to the contest mounted over a hard surface of 50x70 cm.</p><p><b>Winner of the first prize</b>.<p>',
          modalContent: '<img class="modal500" src="/static/PR201601-img01.jpg">'
        },
        { id: 'PR201503', year: '2015', context: 'Ars Electronica', message: 'METEC 2015<br>(Rotating displays concept)', url: 'https://www.aec.at/solutions/en/caesar2016/' },
        { id: 'PR201502',
          thumb: '/static/thumb-spymap-c.png',
          thumbB: '/static/thumb-spymap.png',
          year: '2015',
          function: 'Full-stack development',
          context: 'Ars Electronica',
          message: 'SPY MUSEUM BERLIN:<br>Spymap interface',
          modalContent: '<img class="modal-full" src="/static/PR201502-img01.jpg"><br><iframe class="youtube-video" width="700" height=394 src="https://www.youtube.com/embed/Fv6rrRQ_sPE?rel=0&amp;controls=0&amp;showinfo=0&amp;start=394" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>',
          url: 'https://www.aec.at/solutions/en/ars-electronica-solutions-eroeffnet-spymuseum-in-berlin/'
        },
        { id: 'PR201501',
          year: '2015',
          function: 'Front-end development',
          context: 'Freelancer',
          message: 'Lisboa - Ciencia Viva interactives'
        },
        { id: 'PR201403',
          year: '2014',
          function: 'Graphic design',
          context: 'Personal project',
          message: 'Poster of The Villar del Arzobispo Carnival 2015',
          modalText: '<p>Poster for advertising the 2015 Carnival`s event of Villar del arzobispo. Presented to the contest mounted over a hard surface of 50x70 cm.</p><p><b>Winner of the local artist prize</b>.<p>',
          modalContent: '<img class="modal500" src="/static/PR201403-img01.jpg">'
        },
        { id: 'PR201402',
          year: '2014',
          function: 'Front-end development',
          context: 'Ars Electronica',
          message: 'Agora Table',
          modalText: '<p>Agora Table is a multitouch interface for accesing multimedia data. The front-end application is based on <a href="http://openframeworks.cc/" target="new">OpenFrameworks</a> and the interaction is done by a multitouch frame and by an QR scan conecterd to an Arduino board. It is part of the "Solutions Center" developed by <a href="http://www.aec.at/solutions/en/" target="new">Ars Electronica Solutions</a> inside the exibition called <a href="http://www.oraclepapillon.ch/fr/accueil.html" target="new">L´oracle du papillon</a> in Friburg (switzerland).</p><p>In the <strong>Solutions Centre</strong>, the focus is on transportation, housing, energy and consumer behavior, and how simple it is to implement CO2-reducing measures in everyday life. There are 40 so-called gestures, 10 per theme. The ambitious aim is to reduce CO2 output by one ton per resident per year. Here’s how it works: For the duration of their stay in the Solutions Centre, each visitor has the use of a tablet PC that enables them to access and assemble additional information about the various suggestions. Working either on their tablet or at an interactive Agora table with multiuser function, they can then put together individualized packages of lifestyle changes they pledge to comply with. Many of these gestures are supported by local and nationwide companies whose business plan increasingly emphasizes sustainability and whose products are conceived accordingly. A 4×4-meter visualization of each individual’s pledge rounds out visitors’ Solutions Centre sojourn. And finally, each person’s promise is depicted in the form of butterflies taking wing—this installation’s vivid, emotional visualization emblematic of how important it is for people to work together on behalf of a clean environment.</p>',
          modalContent: '<iframe class="youtube-video" width="700" height="394" src="https://www.youtube.com/embed/7uu-0nTqgqM?rel=0&amp;controls=0&amp;showinfo=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>',
          contentCentered: true,
          url: 'https://www.aec.at/solutions/en/loracle-du-papillon-die-ausstellung/'
        },
        { id: 'PR201401',
          year: '2014',
          function: 'Full-stack development',
          context: 'Ars Electronica',
          message: 'Austrian Images for the ITB',
          url: 'https://www.aec.at/solutions/en/aes-bei-der-itb-berlin/'
        },
        { id: 'PR201306',
          year: '2013',
          function: 'Full-stack development',
          context: 'Ars Electronica',
          message: 'Drei - "There is another way"',
          modalText: '<p>„Es geht auch anders” (“There is another way”) is the theme of a unique interactive installation now on display at Austrian Star Alliance Terminal Check-in 3 at Vienna International Airport. The project was realized by Ars Electronica Solutions for Hutchison Drei Austria. The pictures that take the passengers into a magical world were created by the Swedish artist Kari Modén; the software that converted them into breathtaking tracking shots through these colorful worlds was developed by Ars Electronica.</p><p>n the Security Area of the airport’s new terminal, 165 screens have been clustered into a jumbo 15-meter-wide, 9-meter-high, 530-megapixel display. It takes 60 servers, 720 gigahertz of processing speed and software specially developed by Ars Electronica in order to showcase images on this one-of-a-kind photowall. The software breaks up the high-definition pictures into minute fragments and distributes them to the servers. This is what makes it possible to display the gargantuan graphics with no loss of clarity. And it’s precisely this prototypical interplay of hardware and software components that delivers breathtaking visual impressions to passengers passing through Vienna International Airport.</p><p>Different worlds, such as an underwater world, an urban world, or a starry sky react to the passengers passing through Check-in 3. Each passenger sends a virtual fish, bird or butterfly on a journey or makes clouds disappear from a virtual mountain world. These interactions cause the display of the “Drei” logo and the company’s claim “Es geht auch anders” (“There is another way”) which is displayed on the screens in a variety of ways.</p>',
          modalContent: '<img class="modal-full" src="/static/slider-4.jpg"><br><iframe class="youtube-video" width="700" height="394" src="https://www.youtube.com/embed/NgO2WekVk2o?rel=0&amp;controls=0&amp;showinfo=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>',
          url: 'https://www.aec.at/solutions/en/drei-es-geht-auch-anders-am-flughafen-wien/'
        },
        { id: 'PR201305',
          thumb: '/static/thumb-troops-trb-c.png',
          thumbB: '/static/thumb-troops-trb.png',
          year: '2013',
          function: '3D Modeling',
          context: 'Personal project',
          message: 'Troopers: Trbovlje Serie',
          modalText: '<p>Troopers Trbovlje" is part of the photography Serie called Troopers. The work combines photographic and synthetic image in order to create a particular universe between the reality and the fiction.</p><p>This serie was developed for the exhibition "<a href="http://speculumartium.si/" target="_blank">Apologists of the new Civilization</a>" which took place in Trbovlje (Slovenia) in October 2013.</p><p><a href="http://speculumartium.si/wp-content/uploads/2015/08/katalog-SA2013.pdf" target="_blank">[Catalogue]</a></p>',
          modalContent: '<img class="modal700" src="/static/PR201305-img01.jpg"><br><img class="modal700" src="/static/PR201305-img02.jpg"><br><img class="modal700" src="/static/PR201305-img03.jpg"><br><img class="modal700" src="/static/PR201305-img04.jpg">'
        },
        { id: 'PR201304',
          year: '2013',
          function: '3D Modeling / Graphic design',
          context: 'Personal project',
          message: 'Poster of The Villar del Arzobispo Carnival 2014',
          modalText: '<p>Poster for advertising the 2014 Carnival`s event of Villar del arzobispo. Presented to the contest mounted over a hard surface of 50x70 cm.</p>',
          modalContent: '<img class="modal500" src="/static/PR201304-img01.jpg">'
        },
        { id: 'PR201303',
          year: '2013',
          context: 'Personal project / Interface Cultures',
          message: 'Seqduino',
          modalText: '<p>Audio interface made with Arduino. In this video the interface is used as a sequencer.</p>',
          modalContent: '<iframe width="700" height="394" class="youtube-video" src="https://www.youtube.com/embed/Qi-WaEiNMJQ?rel=0&amp;controls=0&amp;showinfo=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>',
          contentCentered: true
        },
        { id: 'PR201302',
          year: '2013',
          context: 'Personal project / Interface Cultures',
          message: 'ScreenSaver',
          modalText: '<p>Installation for the exhibition "Methapors" which took place at Nomadetappe gallery (Linz - Austria) in the beginning of 2013</p>',
          modalContent: '<style>video.labnol, img.labnol {max-width:100%; width: 100% !important; height: auto !important;}</style> <img class="modal500" src=https://instagram.fsjc1-3.fna.fbcdn.net/vp/c265bdf4100414cc7b3fcc3ad2a641e0/5B754022/t51.2885-15/e15/11195621_1436800149954394_1025606787_n.jpg width=612  />Credit: @<a href=https://instagram.com/jorgalga>Jorge Galvez</a>'
        },
        { id: 'PR201301',
          thumb: '/static/thumb-troops-c.png',
          thumbB: '/static/thumb-troops.png',
          year: '2013',
          function: '3D Modeling',
          context: 'Personal project / Interface Cultures',
          message: 'Troopers',
          modalText: '<p>Troopers is a series of photography mostly that combines photographic and synthetic image. It uses different sources of images as a backdrop where intervention is proceed. these sources range from world famous art pieces to recognized places and moments of the social panorama. The intervention process involves the synthetic simulation and integration of the figure of a Stormtrooper 3D modeled (Imperial soldier from Star Wars saga) inside the picture creating a personal universe between reality and fiction.</p>',
          modalContent: '<img class="modal700" src="/static/PR201301-img01-rodin.jpg"><br><img class="modal700" src="/static/PR201301-img02-miron.jpg"><br><img class="modal700" src="/static/PR201301-img03-david.jpg"><br><img class="modal700" src="/static/PR201301-img04-duschamp.jpg"><br><img class="modal700" src="/static/PR201301-img05-rio.jpg"><br><img class="modal700" src="/static/PR201301-img06-pope.jpg"><br> <iframe width="700" height="394" src="https://www.youtube.com/embed/8i3LqZglMzU?rel=0" frameborder="0"></iframe><br /><br /><img class="modal700" src="/static/PR201301-img07-family.jpg"><br><img class="modal700" src="/static/PR201301-img08-terracota.jpg"><br><img class="modal700" src="/static/PR201301-img09-happiness.jpg"><br>'
        },
        { id: 'PR201203',
          year: '2012',
          function: 'Graphic design',
          context: 'Personal project',
          message: 'Poster of The Villar del Arzobispo Carnival 2013',
          modalText: '<p>Poster for advertising the 2013 Carnival`s event of Villar del arzobispo. Presented to the contest mounted over a hard surface of 50x70 cm.</p>',
          modalContent: '<img class="modal500" src="/static/PR201203-img01.jpg">'
        },
        { id: 'PR201202',
          year: '2012',
          context: 'Personal project',
          message: 'Paris, Paris, Paris.',
          modalText: '<p>Video experiment about the database cinema applied to a personal context.</p><p>Developed with ActionScript</p>',
          modalContent: '<iframe class="youtube-video" width="700" height="394" src="https://www.youtube.com/embed/v5wIZMwMDkY?rel=0&amp;controls=0&amp;showinfo=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>',
          contentCentered: true
        },
        { id: 'PR201201', year: '2012', context: 'Personal project', message: 'The Coffee men', url: '//www.youtube.com/watch?v=uxH-3BngmpQ' },
        { id: 'PR201107',
          year: '2011',
          function: '3D Modeling / Graphic Design',
          context: 'Personal project',
          message: 'Poster of The Villar del Arzobispo Carnival 2012',
          modalText: '<p>Poster for advertising the 2012 Carnival`s event of Villar del arzobispo. Presented to the contest mounted over a hard surface of 50x70 cm.</p><p><b>Winner of the first prize</b>.<p>',
          modalContent: '<img class="modal500" src="/static/PR201107-img01.jpg">'
        },
        { id: 'PR201106',
          year: '2011',
          context: 'Personal project / MAVM',
          message: 'Paris/8/11',
          modalText: '<p>Video expertiment about situationist narratives. During a University exchange trip to Paris on summer 2011, every day a video sumarizing the day was edited and published using only an smartphone.</p>',
          modalContent: '<iframe width="560" height="315" src="https://www.youtube.com/embed/5CtWh3MSdM0?rel=0&amp;controls=0&amp;showinfo=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>'
        },
        { id: 'PR201105', year: '2011', context: 'Personal project', message: '15M Assembly in Valencia', url: '//www.youtube.com/watch?v=rU33nWEsRbY' },
        { id: 'PR201104', year: '2011', context: 'Personal project / MAVM', message: 'EMCTV3000', url: 'http://www.mafreino.com/portfolio/emctv-3000/' },
        { id: 'PR201103', year: '2011', context: 'Personal project', message: 'Imatges i moviments' },
        { id: 'PR201102',
          year: '2011',
          context: 'Personal project / MAVM',
          message: 'Le memoire des ondes',
          modalText: '<p>La Memoria De Las Ondas<br>Found footage basado en la metáfora de la ciudad laberinto. Desarrollado en el contexto del Máster en Artes visuales y multimedia pasa la asignatura de Medios fílmicos y procesos de intervención en el espacio público. </p>',
          modalContent: '<iframe width="700" height="394" class="youtube-video" src="https://www.youtube.com/embed/Uiqkr3r0-jU?rel=0&amp;controls=0&amp;showinfo=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>',
          contentCentered: true
        },
        { id: 'PR201101',
          year: '2011',
          context: 'Personal project / MAVM',
          message: 'An old dream',
          modalContent: '<iframe width="560" height="315" class="youtube-video-small" src="https://www.youtube.com/embed/8P7_foNh8Lc?rel=0&amp;controls=0&amp;showinfo=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>',
          contentCentered: true
        },
        { id: 'PR201009',
          year: '2010',
          context: 'Personal project',
          message: 'Emi',
          modalText: '<p>Cortometraje sobre los recuerdos, finalista en Notodofilmfest.</p>',
          modalContent: '<iframe width="700" height="394" class="youtube-video" src="https://www.youtube.com/embed/sswNC1MREkk?rel=0&amp;controls=0&amp;showinfo=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>',
          contentCentered: true
        },
        { id: 'PR201008',
          year: '2010',
          context: 'Personal project / Council of Andilla',
          message: 'Andilla vale la pena',
          modalContent: '<iframe width="700" height="394" class="youtube-video" src="https://www.youtube.com/embed/7wdASltkNK8" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>',
          contentCentered: true
        },
        { id: 'PR201007',
          year: '2010',
          context: 'Personal project',
          message: 'Protest in Parpallo',
          url: 'https://www.youtube.com/watch?v=TCb_3sw38D8'
        },
        { id: 'PR201006', year: '2010', context: 'Personal project / MAVM', message: 'Un huevo de cortinillas', url: '//www.youtube.com/watch?v=wI3W_kxA7QU&feature=youtu.be&hd=1' },
        { id: 'PR201005',
          year: '2010',
          context: 'Personal project / MAVM',
          message: 'Una mirada fragmentada',
          modalText: '<p>En la vida, el conocimiento de nuestro mundo se reduce a aquello que podemos ver, oir, tocar... A nuestro alrededor existen mundos de los que apenas conocemos. Uno de esos mundos esta en Valencia. Es el centro de día de la AFAV.</p><p>Hoy en día son muchas las incógnitas que tiene la sociedad sobre el Alzheimer, visto como tema tabú al juntar enfermedad y vejez. En esta mirada fragmentada, desde el punto de vista de los trabajadores especializados en la enfermedad, se persigue alcanzar algunas respuestas.</p>',
          modalContent: '​<iframe width="700" height="394" class="youtube-video" src="https://www.youtube.com/embed/videoseries?list=PL9D13B9F02DE6BF5A" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>',
          contentCentered: true
        },
        { id: 'PR201004',
          year: '2010',
          function: '3D Modeling / Graphic Design',
          context: 'Personal project',
          message: 'Poster of The Villar del Arzobispo Carnival 2011',
          modalText: '<p>Poster for advertising the 2011 Carnival`s event of Villar del arzobispo. Presented to the contest mounted over a hard surface of 50x70 cm.</p><p><b>Winner of the first prize</b>.<p>',
          modalContent: '<img class="modal500" src="/static/PR201004-img01.jpg">'
        },
        { id: 'PR201003', year: '2010', function: 'Photo collaboration', context: 'Personal project / MAVM', message: 'La ciutat dels errors', url: 'http://blogs.cccb.org/veus/exposicions/la-ciutat-dels-horrors-premiada-al-congres-museum-and-the-web/?lang=es' },
        { id: 'PR201002',
          year: '2010',
          context: 'Personal project / MAVM',
          message: 'FAV3.0 / AFAV2010.fav',
          modalText: '<p>Dispositivo de reproducción de documentales interactivos. Documental interactivo con testimonios de trabajadores y volutarios en el centro de Día para enfermos de Alzheimer de Valencia.</p><p>Instalación desarrollada con el software de detección de marcadores tipo fiducial (Reactivision) usada con la Reactable</p>',
          modalContent: '<iframe width="700" height="394" src="https://www.youtube.com/embed/ffiXD6m_6vM?rel=0&amp;controls=0&amp;showinfo=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>',
          contentCentered: true
        },
        { id: 'PR201001',
          year: '2010',
          context: 'Personal project / MAVM',
          message: 'Coltan comes',
          modalContent: '<img class="modal700" src="/static/PR201001-img01.jpg"><img class="modal700" src="/static/PR201001-img02.jpg"><img class="modal700" src="/static/PR201001-img03.jpg"><img class="modal700" src="/static/PR201001-img04.jpg">'
        },
        { id: 'PR200905',
          year: '2009',
          context: 'Personal project',
          message: 'Tiende lo + positivo',
          modalContent: '​<iframe width="700" height="394" class="youtube-video" src="https://www.youtube.com/embed/videoseries?list=PLAB3001A218EEF944" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>',
          contentCentered: true
        },
        { id: 'PR200904',
          year: '2009',
          context: 'Personal project',
          message: '¿Qué es de tu vihda?',
          modalContent: '​<iframe width="700" height="394" class="youtube-video" src="https://www.youtube.com/embed/videoseries?list=PL5E9D02AA7C1AD620" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>',
          contentCentered: true
        },
        { id: 'PR200903',
          year: '2009',
          context: 'Personal project',
          message: 'El Paradigma: Un estudiante, una visión, una lucha',
          modalText: '<p>El mundo actual es testigo de una lucha sin cuartel entre dos realidades enfrentadas. De un lado, las sociedades ricas viven ancladas en un modelo económico irracional generador de hambre y pobreza; del otro, millones de personas sufren las penosas consecuencias ese modelo.</p><p>Las Universidades no permanecen ajenas a esta lucha.</p><p> Funcionando casi de un modo clandestino, existe en la Universidad una organización de personas lideradas por el profesor Santiago Martín. Defienden el Desarrollo Humano Sostenible. Saben que, incorporando este nuevo paradigma, la Universidad jugará un papel activo en la construcción de otro mundo socialmente más justo. A pesar de sus esfuerzos Santiago está al borde del desánimo. ¡Son muy pocos y están perdiendo!</p><p>En medio de esta lucha un estudiante (Bíktor) duda acerca de estas cuestiones. Cree que la Universidad está tomando una deriva peligrosa y se atreve a decirlo. Es en este momento cuando Santiago piensa que no todo está perdido. Bíktor puede ser el revulsivo que necesitan para trasmitir el paradigma del Desarrollo Humano Sostenible en su Escuela e inspirar a sus semejantes mostrándoles que otro mundo es posible. Aunque no lo tendrán fácil, pues la triple A (Asociación de Alumnos Aventajados), apoyada desde la dirección del Centro, trabaja por consolidar el sistema actual a toda costa.</p>',
          modalContent: '​<iframe width="700" height="394" class="youtube-video" src="https://www.youtube.com/embed/videoseries?list=PLB70C5BF8A7EFDBF6" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>',
          contentCentered: true
        },
        /* { id: 'PR200902', year: '2009', context: 'Personal project', message: 'Biktor, Jorgalga, videobloggers' }, */
        { id: 'PR200901',
          year: '2009',
          context: 'Personal project',
          message: 'Carnval Inside',
          modalText: '<p>Documental sobre los Carnavales de Villar del Arzobispo. "Carnaval Inside" es retrospectiva de la fiesta desde los puntos de vista de dos narradores que desentrañan a través de su testimonio audiovisual, lo que acontece durante esos esperados días del mes de Febrero.</p>',
          modalContent: '​<iframe width="700" height="394" class="youtube-video" src="https://www.youtube.com/embed/videoseries?list=PL943E4C2F33D64B2A" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>',
          contentCentered: true
        },
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
      document.getElementById('app').classList.add('no-scroll')
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
    margin: 0 0 5px 0
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

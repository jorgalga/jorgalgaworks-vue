var dataConfig = {
  data: {
    max_width: 1600,
    mobile_width: 800,
    img_src: '/static/unleash/images/',
    page_names:{
      home: 'Home',
      speakers: 'Speakers & Artists',
      space: 'The Space',
      agenda: 'Agenda',
      partners: 'Partners',
      organizers: 'Organizers'
    },
    page_content: {
      home:{
        questions:[
          {
            title: 'What is Unleash?',
            title_color: '#FF00FF',
            description: '<p>Unleash is the biggest young international talent festival designed for the youth, where knowledge, enjoyment and excitement converge in one unique experience. It is an unconventional 3-day lasting event held every year in Madrid, Spain for 1.000 assistants who come from more than 100 countries.</p>'
          },
          {
            title: '-> Why Unleash? <-',
            title_color: '#FF00FF',
            description: '<p>We want to up the powerful potential of all the young generation, giving them the opportunity to be in touch with the new reality that they must be part of.</p><p>Our objective is to connect this emergent talent with the increíble opportunities that the big companies offer nowadays, and position Madrid and Spain into the Worldwide Capital of Talent. The best we have is our people, it is time to demonstrate it.</p>'
          }
        ]
      },
      speakers: {
        claim: 'Talent has<br>many forms',
        breadcum: '→ Speakers → Artists → The Host',
        title: 'Talent has many forms',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        questions:[
          {
            title: 'Do you want to be<br>the last in<br>Unleash 2019?',
            title_color: '#FFFFFF',
            description: '',
            question_btn: 'YEAH'
          }
        ]
      },
      space: {
        claim: 'Teatro Goya<br>Calle Sepúlveda, 3 - 5<br>Madrid',
        breadcum: '→ Enter → Shift → Escape', 
        title: 'Where talent emerges',
        description: 'This year’s ticket isn’t just a regular entry: Unleash 2019 enforces new technologies, this is why with something as simple as a Glownet wristband you’ll have access to tons of activities, food and drinks!',
        mapinfo: 'Teatro Goya -> Calle Sepúlveda, 3 - 5. Madrid',
      },
      agenda: {
        claim: '3 days of<br>nont-stop talent',
        breadcum: '→ 11 → 12 → 13 September',
        title: 'Non-stop talent',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
      },
      partners: {
        claim: 'The most ambitious<br>entities that support<br>the best talent',
        breadcum: 'Globals → Generation → Collaborators',
        title: 'It´s all about talent',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        questions:[
          {
            title: 'Do you want to<br>become a partner?',
            title_color: '#FFFFFF',
            description: '',
            question_btn: 'YEAH'
          }
        ]
      },
      organizers: {
        claim: 'Wo would do it<br>if not us?',
        breadcum: '→ Trivu → Why → Play',
        title: '',
        description: '',
        showlogo: true,
        questions:[
          {
            title: '',
            title_color: '',
            description: '<p>We are the largest environment for young talent in the world</p><p>“Think with no boundaries.<br>Speak with no fear.<br>Act with no limits”</p>',
            biginfo: '<a href="https://wearetrivu.com/" target="_blank">wearetrivu.com</a>',
            question_btn: ''
          }
        ]
      }
    },
    speakers: [
      {
        id: 0,
        name: 'Melati Wijsen',
        img: 'MelatiWijsten.jpg',
        social: [
          {
            id: 0,
            class: 'icon-ig',
            url: 'www.'
          },
          {
            id: 1,
            class: 'icon-ig',
            url: 'www.'
          }
        ],
        description: '<p>Melati Wijsen is half Indonesian and half Dutch but born and raised on the island of Bali.</p><p>In 2013, when she was just 12 years old, Wijsen started a social initiative called Bye Bye Plastic Bags with her younger sister, Isabel Wijsen, who was 10 at that time. Their goal? To help Bali residents say no to plastic bags.</p><p>Her journey in the last five years has taken her to the international stage and given her opportunities to meet world leaders and celebrities, as well as speak at global events — but there’s more to be done.</p><p><span style="color:white">Now it’s time to Unleash.</span></p>'
      },
      {
        id: 1,
        name: 'Amber Yang',
        img: 'AmberYang.jpg',
        description: 'blah blah 2'
      },
      {
        id: 2,
        name: 'Ousman Umar',
        img: 'OusmanUmar.jpg',
        description: 'blah blah 3'
      },
      {
        id: 3,
        name: 'Benjamin Zaid',
        img: 'BenjaminZaid.jpg',
        description: 'blah blah 4'
      }
    ],
    artists: [
      {
        id: 0,
        name: 'Amber Yang',
        img: 'MelatiWijsten.jpg',
        description: 'blah blah'
      },
      {
        id: 1,
        name: 'Amber Yang',
        img: 'MelatiWijsten.jpg',
        description: 'blah blah'
      }
    ],
    hosts: [
      {
        id: 0,
        name: 'name Surname',
        img: 'host.jpg',
        social: [
          {
            id: 0,
            class: 'icon-ig',
            url: 'www.'
          },
          {
            id: 1,
            class: 'icon-ig',
            url: 'www.'
          }
        ],
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      }
    ],
    space_enter:{
      title: 'Enter',
      text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation',
      map: 'enter_map.png',
      items: [
        {
          id: 0,
          name: 'Melati Wijsen',
          img: 'MelatiWijsten.jpg'
        },
        {
          id: 1,
          name: 'Melati Wijsen',
          img: 'MelatiWijsten.jpg'
        }
      ]
    },
    space_shift:{
      title: 'Shift',
      text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation',
      map: 'enter_map.png',
      items: [
        {
          id: 0,
          name: 'Melati Wijsen',
          img: 'MelatiWijsten.jpg'
        },
        {
          id: 1,
          name: 'Melati Wijsen',
          img: 'MelatiWijsten.jpg'
        }
      ]
    },
    space_escape:{
      title: 'Escape',
      text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation',
      map: 'enter_map.png',
      items: [
        {
          id: 0,
          name: 'Melati Wijsen',
          img: 'MelatiWijsten.jpg'
        },
        {
          id: 1,
          name: 'Melati Wijsen',
          img: 'MelatiWijsten.jpg'
        }
      ]
    },
    partner_x:{
      name:'"x" partner',
      gsize: 'col-12',
      items_row: 1,
      max_height: 800, 
      items: [
        {
          id: '0',
          img: 'partners/rafaeldelpino.png',
          name: 'Fundación Rafael del Pino',
          url: 'https://frdelpino.es/'
        }
      ]
    },
    partner_global:{
      name:'Global partners',
      gsize: 'col-6',
      items_row: 2, 
      max_height: 400, 
      items: [
        {
          id: '0',
          img: 'partners/estrellagalicia.png',
          name: 'Estrella Galicia',
          url: 'https://estrellagalicia.es/'
        },
        {
          id: '1',
          img: 'partners/rb.png',
          name: '',
          url: ''
        },
        {
          id: '2',
          img: 'partners/minsait.png',
          name: '',
          url: ''
        },
        {
          id: '3',
          img: 'partners/axa.png',
          name: 'Axa',
          url: 'https://www.axa.es/'
        }
      ] 
    },
    partner_generations:{
      name:'Generation partners',
      gsize: 'col-3',
      items_row: 4, 
      max_height: 300, 
      items: [
        {
          id: '0',
          img: 'partners/durex.png',
          name: 'Durex',
          url: 'https://www.durex.es/'
        },
        {
          id: '1',
          img: 'partners/logo.png',
          name: '',
          url: ''
        },
        {
          id: '2',
          img: 'partners/logo.png',
          name: '',
          url: ''
        },
        {
          id: '3',
          img: 'partners/logo.png',
          name: '',
          url: ''
        },
        {
          id: '4',
          img: 'partners/logo.png',
          name: '',
          url: ''
        },
        {
          id: '5',
          img: 'partners/logo.png',
          name: '',
          url: ''
        },
        {
          id: '6',
          img: 'partners/logo.png',
          name: '',
          url: ''
        },
        {
          id: '7',
          img: 'partners/logo.png',
          name: ' ',
          url: ' '
        }
      ] 
    },
    partner_colaborator:{
      name:'Colaborators',
      gsize: 'col-2',
      items_row: 5, 
      max_height: 200, 
      items: [
        {
          id: '0',
          img: 'partners/logo.png',
          name: '',
          url: ''
        },
        {
          id: '1',
          img: 'partners/logo.png',
          name: '',
          url: ''
        },
        {
          id: '2',
          img: 'partners/logo.png',
          name: '',
          url: ''
        },
        {
          id: '3',
          img: 'partners/logo.png',
          name: '',
          url: ''
        },
        {
          id: '4',
          img: 'partners/logo.png',
          name: '',
          url: ''
        },
        {
          id: '5',
          img: 'partners/logo.png',
          name: '',
          url: ''
        },
        {
          id: '6',
          img: 'partners/logo.png',
          name: '',
          url: ''
        },
        {
          id: '7',
          img: 'partners/logo.png',
          name: '',
          url: ''
        },
        {
          id: '8',
          img: 'partners/logo.png',
          name: '',
          url: ''
        },
        {
          id: '9',
          img: 'partners/logo.png',
          name: '',
          url: ''
        }
      ] 
    }
  } 
}
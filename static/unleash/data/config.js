	var dataConfig = {
  data: {
    testmode: false,
    max_width_limit: 1024,
    max_width: 1600,
    mobile_width: 800,
    img_src: '/static/unleash/images/',
    cookiespolicy: '/static/unleash/docs/Unleash-cookiespolicy.pdf',
    privacypolicy: '/static/unleash/docs/Unleash-privacypolicy.pdf',
    termsandconditions: '/static/unleash/docs/Unleash-termsandconditions.pdf',
    cookie_message: '<p>We use our own and third-party cookies to improve the user´s experience through your browsing. If you continue browsing we understand that you accept its use. <a href="/static/unleash/docs/Unleash-cookiespolicy.pdf" target="_blank">Cookie policy</a></p>',
    hubspot: '<!--[if lte IE 8]><script charset="utf-8" type="text/javascript" src="//js.hsforms.net/forms/v2-legacy.js"></script> <![endif]--><script charset="utf-8" type="text/javascript" src="//js.hsforms.net/forms/v2.js"></script> <script>hbspt.forms.create({portalId: "3937715",formId: "45d1019d-f008-42a3-8945-73942b7160d8"});</script>',
    initDate: 'September 11,2019 00:00:00',
    toffers:{
      "2x1offer": { 
        path: '/2x1offer',
        name: 'Two tickets by the price of one',
        eb_id: '65098500367',
        setCookie: true,
      },
      "ESNoffer": { 
        path: '/ESNoffer',
        name: 'Special tickets ESN',
        eb_id: '70477085861',
        setCookie: true,
    }
    },
    page_names:{
      home: 'Home',
      speakers: 'Speakers & Artists',
      space: 'Space',
      agenda: 'Agenda',
      partners: 'Partners',
      organizers: 'Organizers'
    },
    rains_elements:{
      space:[
        {
          src:'/static/unleash/rain/freefood.png',
          size: 10,
          position: {
            x: -3.5,
            y: 3.5,
            z: 0
          },
          rotation: {
            z: 3
          }
        },
        {
          src:'/static/unleash/rain/freedrinks.png',
          size: 11,
          position: {
            x: 2,
            y: 1,
            z: 0
          },
          rotation: {
            z: -3
          }
        },
        {
          src:'/static/unleash/rain/welcomepack.png',
          size: 12,
          position: {
            x: -2.75,
            y: -1.25,
            z: 0
          },
          rotation: {
            z: 3
          }
        },
        {
          src:'/static/unleash/rain/afterparty.png',
          size: 11,
          position: {
            x: 3,
            y: -3.5,
            z: 0
          },
          rotation: {
            z: -3
          }
        },
        {
          src:'/static/unleash/rain/grapes.png',
          size: 2,
          position: {
            x: -5,
            y: 2.25,
            z: 3
          },
          rotation: {
            z: -6
          }
        },
        {
          src:'/static/unleash/rain/coffee.png',
          size: 2,
          position: {
            x: 0,
            y: 1.5,
            z: 3
          },
          rotation: {
            z: 45
          }
        },
        {
          src:'/static/unleash/rain/present.png',
          size: 1.75,
          position: {
            x: 2,
            y: -0.5,
            z: 3
          },
          rotation: {
            z: -30
          }
        },
        {
          src:'/static/unleash/rain/mask.png',
          size: 2,
          position: {
            x: -2,
            y: -2.5,
            z: 3
          },
          rotation: {
            z: 30
          }
        }
      ],
      organizers:[
        {
          src:'/static/unleash/rain/buyticket_magenta.png',
          size: 2,
          position: {
            x: -4.7,
            y: 12.8,
            z: 0
          },
          rotation: {
            z: -15
          }
        },
        {
          src:'/static/unleash/rain/buyticket_magenta.png',
          size: 2,
          position: {
            x: -0.7,
            y: 12.8,
            z: 0
          },
          rotation: {
            z: -15
          }
        },
        {
          src:'/static/unleash/rain/buyticket_magenta.png',
          size: 2,
          position: {
            x: 5.3,
            y: 10.8,
            z: 0
          },
          rotation: {
            z: 15
          }
        },
        {
          src:'/static/unleash/rain/buyticket_white.png',
          size: 2,
          position: {
            x: -5.1,
            y: 8.8,
            z: -1
          },
          rotation: {
            z: 15
          }
        },
        {
          src:'/static/unleash/rain/buyticket_white.png',
          size: 2,
          position: {
            x: 0.5,
            y: 9,
            z: -1
          },
          rotation: {
            z: 5
          }
        },
        {
          src:'/static/unleash/rain/buyticket_magenta.png',
          size: 2,
          position: {
            x: 5.1,
            y: 8.8,
            z: 0
          },
          rotation: {
            z: -30
          }
        },
        {
          src:'/static/unleash/rain/buyticket_white.png',
          size: 2,
          position: {
            x: -4.5,
            y: 6.8,
            z: -1
          },
          rotation: {
            z: 10
          }
        },
        {
          src:'/static/unleash/rain/buyticket_magenta.png',
          size: 2,
          position: {
            x: 0,
            y: 6.2,
            z: -1
          },
          rotation: {
            z: 5
          }
        },
        {
          src:'/static/unleash/rain/buyticket_white.png',
          size: 2,
          position: {
            x: 4.3,
            y: 6.6,
            z: 0
          },
          rotation: {
            z: -5
          }
        },
        {
          src:'/static/unleash/rain/buyticket_magenta.png',
          size: 2,
          position: {
            x: -4.5,
            y: 4,
            z: -1
          },
          rotation: {
            z: 15
          }
        },
        {
          src:'/static/unleash/rain/buyticket_magenta.png',
          size: 2,
          position: {
            x: 0,
            y: 3.9,
            z: -1
          },
          rotation: {
            z: 5
          }
        },
        {
          src:'/static/unleash/rain/buyticket_white.png',
          size: 2,
          position: {
            x: 4.5,
            y: 4.1,
            z: 0
          },
          rotation: {
            z: -10
          }
        },
        {
          src:'/static/unleash/rain/buyticket_white.png',
          size: 2,
          position: {
            x: -4.7,
            y: 1.5,
            z: 0
          },
          rotation: {
            z: 10
          }
        },
        {
          src:'/static/unleash/rain/buyticket_white.png',
          size: 2,
          position: {
            x: 0.1,
            y: 1.3,
            z: 0
          },
          rotation: {
            z: 0
          }
        },
        {
          src:'/static/unleash/rain/buyticket_magenta.png',
          size: 2,
          position: {
            x: 4.4,
            y: 1.7,
            z: -1
          },
          rotation: {
            z: 15
          }
        },
        {
          src:'/static/unleash/rain/buyticket_magenta.png',
          size: 2,
          position: {
            x: -5,
            y: -1.2,
            z: -1
          },
          rotation: {
            z: -5
          }
        },
        {
          src:'/static/unleash/rain/buyticket_white.png',
          size: 2,
          position: {
            x: 0.1,
            y: -1.3,
            z: 0
          },
          rotation: {
            z: 30
          }
        },
        {
          src:'/static/unleash/rain/buyticket_magenta.png',
          size: 2,
          position: {
            x: 4.8,
            y: -1.2,
            z: -1
          },
          rotation: {
            z: 5
          }
        },
        {
          src:'/static/unleash/rain/buyticket_white.png',
          size: 2,
          position: {
            x: -4.4,
            y: -4.2,
            z: 0
          },
          rotation: {
            z: 10
          }
        },
        {
          src:'/static/unleash/rain/buyticket_magenta.png',
          size: 2,
          position: {
            x: -0.8,
            y: -4.3,
            z: -1
          },
          rotation: {
            z: -10
          }
        },
        {
          src:'/static/unleash/rain/buyticket_white.png',
          size: 2,
          position: {
            x: 4.4,
            y: -4,
            z: 0
          },
          rotation: {
            z: -5
          }
        },  
      ]
    },
    page_content: {
      home:{
        qheight: 900,
        questions:[
          {
            title: 'What is Unleash?',
            title_color: '#FF00FF',
            description: '<p>Unleash is the biggest international talent festival designed for the youth, where knowledge, enjoyment and excitement converge into one unique experience. It is a free-spirited event lasting 3 days and held every year in Madrid, Spain for 1,000+ people who come from more than 100 countries.</p>'
          },
          {
            title: '-> Why Unleash? <-',
            title_color: '#FF00FF',
            description: '<p>We want to increase the powerful potential of the young generation, giving them the opportunity to be in touch with the new reality that they must be a part of.</p><p>Our objective is to connect this emergent talent with the incredible opportunities that big companies offer nowadays, and position Madrid, and Spain as a whole, into the Worldwide Capital of Talent. The best that we have is our people, it is time to demonstrate it.</p>'
          }
        ]
      },
      speakers: {
        claim: 'Talent has<br>many forms',
        breadcum: '→ Speakers → Artists → The Host',
        title: 'Talent has many forms',
        description: '',
        qheight: 1024,
        questions:[
          {
            title: 'Do you want to leave a lasting impact in Unleash 2019?',
            title_color: '#FFFFFF',
            description: '<p>Everyone has distinct things to tell the world, this is why we want YOU to have the opportunity to experience the act of sharing stories and knowledge in the Shift Stage of Unleash 2019!</p>',
            question_btn: 'YES'
          }
        ]
      },
      space: {
        claim: 'Teatro Goya<br>Calle Sepúlveda, 3 - 5<br>Madrid',
        breadcum: '→ Enter → Shift → Escape', 
        title: 'Where talent emerges',
        description: 'This year’s ticket isn’t just a regular entry: Unleash 2019 enforces new technologies, this is why with something as simple as a wristband you’ll have access to tons of activities, food and drinks!',
        qheight: 850,
        ftheight: 850,
        mapinfo: 'Teatro Goya -> Calle Sepúlveda, 3 - 5. Madrid',
      },
      agenda: {
        claim: '3 days of<br>nont-stop talent',
        breadcum: '11 → 12 → 13 SEPTEMBER',
        title: 'Coming soon',
        description: 'Don’t miss out on our newest edition of Unleash'
      },
      partners: {
        claim: 'The most ambitious<br>entities that support<br>the best talent',
        breadcum: 'Global → Generation → Collaborators',
        title: 'It´s all about talent',
        description: 'Our partners help us bring you to Unleash. Thanks to their sponsorship, your tickets are affordable. Take a look and you will see which firms are going to be at the biggest and craziest talent festival.',
        qheight: 850,
        questions:[
          {
            title: 'Do you want to<br>become a partner?',
            title_color: '#FFFFFF',
            description: '',
            question_btn: 'YES'
          }
        ]
      },
      organizers: {
        claim: 'Who would do it<br>if not us?',
        breadcum: '→ Trivu → Why → Play',
        title: '',
        description: '',
        showlogo: true,
        qheight: 550,
        ftheight: 1000,
        qbackground: 'trivu_team.png',
        questions:[
          {
            title: '',
            title_color: '',
            description: '<p>We are the largest environment and company that focuses on young talent in the world and connect people through different communities.</p><p>“Think with no boundaries,<br>Speak with no fear,<br>Act with no limits.”</p>',
            biginfo: '<a href="https://wearetrivu.com/" target="_blank">wearetrivu.com</a>',
            question_btn: ''
          }
        ]
      },
      tickets: {
        breadcum: '11 → 12 → 13 SEPTEMBER',
        description: '<p>Don´t wait any longer and buy your tickets to the craziest talent festival in the world.<br>There´s only one type of ticket that covers all three days and thanks to Glownet you will have a wristband which allow you to get your free food and beer among many other cool stuff!</p>'
      }
    },
    speakers: [
      {
        id: 0,
        name: 'Ousman Umar',
        img: 'OusmanUmar.jpg',
        description: '<p>Ousman Umar is a social intrapreneur who is NASCO Foundation’s founder & president. After crossing half of Africa on a 5 year journey, Umar crossed the Sahara on foot, crossed the sea on a boat, and saw many of his traveling companions die on the way. In 2012, Umar founded NASCO, an NGO based in Ghana and Barcelona, which provides equipment and education in Ghana. NASCO Foundation believes in saving the lives of thousands of people who deserve access to opportunities and information before risking this trip.</p>',
        description_short: '<p>Once upon a time there was a dreamy kid who started a terrible journey. I need to tell this story til there are no more stories like this to tell.</p>', 
        social: [
          {
            id: 0,
            class: 'icon-twitter',
            url: 'https://twitter.com/ousmanumar'
          },
          {
            id: 1,
            class: 'icon-facebook',
            url: 'https://www.facebook.com/randy.ousman'
          },
          {
            id: 2,
            class: 'icon-instagram',
            url: 'https://www.instagram.com/ousmanumar'
          }
        ]
      },
      {
        id: 1,
        name: 'Guillermo Martinez',
        img: 'Unleash_Speaker_GuillermoMartinez_Web.jpg',
        description: '<p>Guillermo Martinez is 25 and from Madrid. He studied business and industrial engineering in college. Currently, he works as a Product Manager but in his free time he uses his hobby (3D printers) to help others. Martinez created a project called Ayudame3D.org to help people who don´t have hands and give them a second chance thanks to 3D printing technology. This project started in Kenya when he traveled there and gave 5 arms to people who requested. Guille created the first 3D-printed-arm with no electronic components for people without an elbow. After that, he expanded the project around the world and nowadays, they send more than 60 arms to people from more than 10 countries. This is what he loves to do, this is his passion. </p>',
        description_short: '<p>Meet Guillermo, a product manager by day, but an innovator by night. Guille created Ayudame3D.org, a project dedicated to help people without elbow. He created the first 3D-printer arm with no electronic components. Now, his project has expanded worldwide, for more than 10 countries. Are you ready to hear his story @ UNLEASH 2019?</p>', 
        social: [
          {
            id: 0,
            class: 'icon-twitter',
            url: 'https://twitter.com/willperman'
          },
          {
            id: 1,
            class: 'icon-facebook',
            url: 'https://facebook.com/ayudame3d'
          },
          {
            id: 2,
            class: 'icon-instagram',
            url: 'https://instagram.com/ayudame3d'
          }
        ]
      },
      {
        id: 2,
        name: 'Jamala Osman',
        img: 'Jamala.jpg',
        description: '<p>Jamala Osman is a 25-year-old social entrepreneur and former Bank Manager at Barclays plc. She was one of the youngest bank managers in the country and was tasked with running her first branch at the age of 21. Having had a difficult start to life, her dramatic turnaround inspired her to create pathways and programmes for other struggling individuals to help break down barriers. Winner of Great Britain and Ireland´s Young Citizen Award for 2018 and TEDx London Speaker, Jamala is on a mission to help bridge the gap between young talent and organizations. </p>',
        description_short: '<p>Jamala Osman is a 25-year-old social entrepreneur and former Bank Manager at Barclays plc. She was one of the youngest bank managers in the country and was tasked with running her first branch at the age of 21. Having had a difficult start to life, her dramatic turnaround inspired her to create pathways and programmes for other struggling individuals to help break down barriers. Winner of Great Britain and Ireland´s Young Citizen Award for 2018 and TEDx London Speaker, Jamala is on a mission to help bridge the gap between young talent and organizations.</p>', 
        social: [
          {
            id: 0,
            class: 'icon-twitter',
            url: 'https://twitter.com/Jamala_Osman'
          },
          {
            id: 1,
            class: 'icon-instagram',
            url: 'https://www.instagram.com/Jamala_Osman/'
          }
        ]
      },
      {
        id: 3,
        name: 'Benjamin Zand',
        img: 'BenjaminZand.jpg',
        description: '<p>Named ‘Young talent of the year’ by the Royal Television Society, Benjamin Zand is an Iranian-British journalist and filmmaker for the BBC from Liverpool. He makes controversial and thought-provoking documentaries. He focuses on big investigations into some of the most controversial characters of our time, such as “R Kelly: Sex Girls and Videotapes”, and documentaries that take us to places we may not care to go ourselves, such as “World’s Most Dangerous Cities”. He was previously head of the BBC´s documentary bureau, BBC Pop Up, and his work has taken him around the world – meeting some of the most dangerous, and famous, people.</p>',
        description_short: '<p>Named ‘Young talent of the year’ by the Royal Television Society, Benjamin Zand is an Iranian-British journalist and filmmaker for the BBC from Liverpool. He makes controversial and thought-provoking documentaries. He focuses on big investigations into some of the most controversial characters of our time, such as “R Kelly: Sex Girls and Videotapes”, and documentaries that take us to places we may not care to go ourselves, such as “World’s Most Dangerous Cities”. He was previously head of the BBC´s documentary bureau, BBC Pop Up, and his work has taken him around the world – meeting some of the most dangerous, and famous, people.</p>', 
        social: [
          {
            id: 0,
            class: 'icon-twitter',
            url: 'https://twitter.com/BenjaminZand'
          },
          {
            id: 1,
            class: 'icon-instagram',
            url: 'https://www.instagram.com/benjaminzand/'
          },
          {
            id: 2,
            class: 'icon-facebook',
            url: 'https://www.facebook.com/benjaminzand'
          }
        ]
      },
      {
        id: 4,
        name: 'Simon Bernard',
        img: 'Simon.jpg',
        description: '<p>Simon Bernard, 24, is a graduate of the French merchant navy academy (ENSM). He has sailed on several merchant vessels as a deck officer and engine officer. Passionate about finding solutions to environmental issues, he carried out several studies and projects on eco-friendly ships, CO2 emission reduction, circular economy and low technologies for developing countries. In 2016, he won the Green Tech Award initiated by the Ministry of the environment before founding Plastic Odyssey NGO that aims to reduce ocean’s pollution by promoting plastic recycling solutions adapted to developing countries. In 2020, he is set to depart on the world’s first round-the-world expedition on a boat powered solely by plastic waste.</p>',
        description_short: '<p>Simon is passionate about finding solutions to environment issues. He founded Plastic Odyssey NGO that aims to reduce the ocean`s pollution by promoting plastic recycling solutions adapted to developing countries. Find out what #SimonSays at UNLEASH 2019</p>',
        social: [
          {
            id: 0,
            class: 'icon-twitter',
            url: 'https://twitter.com/simn_bernard'
          },
          {
            id: 1,
            class: 'icon-instagram',
            url: 'https://www.instagram.com/plasticodyssey/'
          },
          {
            id: 2,
            class: 'icon-facebook',
            url: 'https://www.facebook.com/plasticodyssey'
          }
        ]
      },
      {
        id: 5,
        name: 'Laura García Pesquera',
        img: 'LauraGarcíaPesquera.jpg',
        description: '<p>Laura García Pesquera is the winner of the Unleash Speaker Contest! She is a journalist and advertiser & PR graduate, cofounder of Oficial Rewind, a project lead by young people that fights against hate speech in social media that has been recognized the third best idea worldwide to stop online hate speech by Facebook for the second time. They propose the use of the Rewind emoji as an universal answer to hate speech. Plus, they focus on education on the use of social media and creating awareness on the identification of hate speech.</p>',
        description_short: '<p>Laura García Pesquera is the winner of the Unleash Speaker Contest! She is a journalist and advertiser & PR graduate, cofounder of Oficial Rewind, a project lead by young people that fights against hate speech in social media that has been recognized the third best idea worldwide to stop online hate speech by Facebook for the second time. They propose the use of the Rewind emoji as an universal answer to hate speech. Plus, they focus on education on the use of social media and creating awareness on the identification of hate speech.</p>',
        social: [
          {
            id: 0,
            class: 'icon-twitter',
            url: 'https://twitter.com/OficialRewind'
          },
          {
            id: 1,
            class: 'icon-instagram',
            url: 'https://www.instagram.com/oficialrewind/'
          },
          {
            id: 2,
            class: 'icon-facebook',
            url: 'https://www.facebook.com/OficialRewind/'
          } 
        ]
      },
      {
        id: 6,
        name: 'Hanan Challouki',
        img: 'Hanan_Challouki.jpg',
        description: '<p>Hanan Challouki, age 26, studied Strategic Communications at the University of Antwerp and today, she`s a managing partner at the creative agency Allyens. The main expertise of Allyens is inclusive, viral communications, with millennials as primary target group. Besides this, she’s also the co-founder of the online platform Mvslim.com, created to break stereotypes about Muslims. Mvslim spreads inspiring stories of role models and has already reached millions of people worldwide. Meanwhile, Hanan Challouki is also on the prestigious "30-Under-30"-list of Forbes, awarded for her innovative approach in creating a more inclusive society. </p>',
        description_short: '<p>Hanan Challouki is making things happen at creative agency Allyens & online media platform Mvslim.com. She wants a more inclusive society and is working on that through her website ‘Mvslim’, which allows for people to learn more about Muslims and how diverse the community is. Hanan is a powerful woman who wants people to be more accepting of distinct cultures in this world. Attend Unleash 2019 and learn more about Hanan’s life story.</p>',
        social: [
          {
            id: 0,
            class: 'icon-twitter',
            url: 'https://twitter.com/HananChll'
          },
          {
            id: 1,
            class: 'icon-instagram',
            url: 'https://www.instagram.com/hananchll/'
          },
          {
            id: 2,
            class: 'icon-facebook',
            url: 'https://www.facebook.com/HananChallouki'
          }
        ]
      },
      {
        id: 7,
        name: 'Eric Matamoros',
        img: 'EricMatamoros.jpg',
        description: '<p>Eric Matamoros Morales’ passion for curing cancer developed overtime after seeing his aunt, a superwoman, fight and survive cancer multiple times. At the age of 15, Eric was exposed to science in a way that changed him. He began a three-year entrepreneurial journey that landed him as COO and co-founder of Biop AI, a leading startup making usage of computer vision and artificial intelligence for skin cancer analysis. While running his company, Eric is passionate about motivational speaking to the youth in an effort to show them the impact that they can make at any age.</p>',
        description_short: '<p>Talent transcends age for this young entrepreneur. At 15 years, Eric Matamoros Morales manifested a passion for curing cancer, and, 3 years later, established himself as COO and co-founder of Biop AI. Using computers, the firm analyzes skin cancer and saves lives!</p>',
        social: [
          {
            id: 0,
            class: 'icon-instagram',
            url: 'https://www.instagram.com/biop.ai/'
          }
        ]
      },
      {
        id: 8,
        name: 'Benjamin Stern',
        img: 'BenjaminStern.jpg',
        description: '<p>Ben Stern, 20 years old, runs a 18,000 sqft. beauty and personal care manufacturing factory in Melbourne, Florida, which is not only limited to producing and making Nohbo Drops for its commercial partners, but also makes a variety of goodies for sustainable beauty brands. NOHBO Drops are single use, water soluble Drops containing shampoo, conditioner, body wash or shaving cream. Each Drop, when mixed with shower water for 2-4 seconds, will produce an excellent personal care experience with no harsh chemicals, free of parabens and sulfates, and NO DAMAGE to the environment.</p>',
        description_short: '<p>Benjamin Zand is an Iranian-British journalist and filmmaker working primarily for the BBC from Liverpool, England. He makes documentaries for different channels in the UK and beyond as a documentary maker for BBC Studios and his own production company, ZANDLAND Films. He was formerly head of BBC documentary team, BBC Pop Up and also presents the BBC podcast, The Next Episode.</p>',
        social: [
          {
            id: 0,
            class: 'icon-twitter',
            url: 'https://twitter.com/itsbenjyyy/'
          },
          {
            id: 1	,
            class: 'icon-facebook',
            url: 'https://www.facebook.com/NohboDrops/'
          },
        {
            id: 2	,
            class: 'icon-instagram',
            url: 'https://www.instagram.com/nohbodrops/'
          }
        ]
      },
      {
        id: 9,
        name: 'Jeremy Miller',
        img: 'JeremyMiller.jpg',
        description: '<p>20-year-old Jeremy Miller is no stranger to entrepreneurship. He started his first business, custom longboarding, at the age of 16 as a way to bring his community together and create a safe space for people to talk about life. Although his first venture didn’t pan out, he couldn’t give up his passion for entrepreneurship after seeing the positive impact it made. Since then, Jeremy has built an advertising agency called Inspired Blue Media gaining national clients and national press recognition. Now, still only 20 years old, he is the co-founder and VP of Marketing at the STARTedUP Foundation where he inspires and creates opportunities for students to act on their business ideas.</p>',
        description_short: '<p>Longboards are more than just a mode for transportation, this young entrepreneur used his first venture, a longboard business as a vehicle for bringing people together. Two businesses later, 20-year-old Jeremy Miller is inspiring students to go after their dreams through his STARTedUP Foundation.</p>',
        social: [
          {
            id: 0,
            class: 'icon-twitter',
            url: 'https://twitter.com/jjeremymiller/'
          },
          {
            id: 1	,
            class: 'icon-facebook',
            url: 'https://www.facebook.com/JeremyRossmiller/'
          },
        {
            id: 2	,
            class: 'icon-instagram',
            url: 'https://www.instagram.com/jeremyrossmiller/'
          }
        ]
      },
      {
        id: 10,
        name: 'Matheusz Mach',
        img: 'MateuszMach.jpg',
        description: '<p>22-year-old Mateusz Mach got his start when he created the world’s first sign-language messenger, leading him to become Poland’s youngest person to secure a $200,000 investment from a VC. After his first taste of entrepreneurship, Mateusz discovered an interest in cryptocurrency and blockchain. He is now Co-Founder and CEO of Nextrope.com - a blockchain-oriented software house delivering scalable blockchain platforms to startups, enterprises, and governments. His diverse ventures have gained Mateusz international recognition in the technology sector; among others, he is a Forbes 30 Under 30 winner.</p>',
        description_short: '<p>Since the age of 18, Mateusz Mach has been taking the world by storm with his innovative ideas. He created Five App, the world’s first sign language messenger and now he is the CEO and co-founder of Nextrope.com, a blockchain platform. What will he come up with next?</p>',
        social: [
          {
            id: 0,
            class: 'icon-twitter',
            url: 'https://twitter.com/mandmach/'
          },
          {
            id: 1	,
            class: 'icon-facebook',
            url: 'https://www.facebook.com/mach.mateusz/'
          },
        {
            id: 2	,
            class: 'icon-instagram',
            url: 'https://www.instagram.com/mach.matteusz/'
          }
        ]
      },
      {
        id: 11,
        name: 'Hannah Herbst',
        img: 'HannahHerbst.jpg',
        description: '<p>Hannah Herbst is a 19-year-old student and social innovator. At age 14, she invented a small turbine that converts energy from ocean currents into electricity, earning her the title “America’s Top Young Scientist” in 2015. She recently graduated from high school after being dually enrolled in Florida Atlantic University (having the earned-credit equivalency of a college junior) and is pursuing her undergraduate degree in Management IT. She is exploring the properties of shark skin for medical applications at the Florida Atlantic Biomechanics Lab and has additionally researched identification methods for hazardous airborne chemicals. Hannah’s efforts have granted her a well-earned place on the prestigious Forbes Forbes 30 Under 30 list in 2018.</p>',
        description_short: '<p>Age is just a number! Student and social innovator, Hannah Herbst, created her first big invention when she was 14! She currently researches shark skin for medical applications and identifies methods for hazardous airborne chemicals at Florida Atlantic Biomechanics Lab. Hear what’s up next for her at #Unleash 2019.</p>',
        social: [
          {
            id: 0,
            class: 'icon-twitter',
            url: 'https://twitter.com/hannahherbst07/'
          },
          {
            id: 1	,
            class: 'icon-facebook',
            url: 'https://www.facebook.com/profile.php?id=100010927574962/'
          },
        {
            id: 2	,
            class: 'icon-instagram',
            url: 'https://www.instagram.com/hannahherbst/'
          }
        ]
      },
      {
        id: 12,
        name: 'Robert Fratila',
        img: 'RobertFratila.jpg',
        description: '<p>Through the study of computer science and biology, Robert Fratila has developed a passion for combining medicine and artificial intelligence (AI). While a student at McGill University, he worked as a software developer at the Montreal Neurological Institute, where he developed state-of-the-art deep learning techniques in the healthcare industry, specifically brain imaging. He participated in the NeuroTechX Competition with a team and won the Consumer Grand Prize for building a tool to identify the user’s attentive state with a commercially available EEG headset. During this time, he also co-founded Aifred Health, the leading startup in the IBM Watson AI XPRIZE global competition, and now serves as the CTO. Fratila is working hard to develop machine learning to process brain scans and improve treatments for mental health.</p>',
        description_short: '<p>Through the study of computer science and biology, Robert Fratila has developed a passion for combining medicine and artificial intelligence (AI). While a student at McGill University, he worked as a software developer at the Montreal Neurological Institute, where he developed state-of-the-art deep learning techniques in the healthcare industry, specifically brain imaging. He participated in the NeuroTechX Competition with a team and won the Consumer Grand Prize for building a tool to identify the user’s attentive state with a commercially available EEG headset. During this time, he also co-founded Aifred Health, the leading startup in the IBM Watson AI XPRIZE global competition, and now serves as the CTO. Fratila is working hard to develop machine learning to process brain scans and improve treatments for mental health.</p>',
        social: [
          {
            id: 0,
            class: 'icon-twitter',
            url: 'https://twitter.com/robert__fratila/'
          }
        ]
      },
      {
        id: 13,
        name: 'Tashi Baiguerra',
        img: 'TashiBaiguerra.jpg',
        description: '<p>Born and raised in Melbourne, Australia, Natasha graduated from the Howard Fine Acting Studio and moved to London in 2018 to train with Frantic Assembly and work in the vibrant London theatre scene. As an actor with Aspergers Syndrome, Natasha is proud to be a voice for the Autism community through her work, playing both autistic and non-autistic roles, and spoke about her autism journey at TEDxLondon 2019, after being chosen out of over 500 young Londoners. She is passionate about including disability in the arts, and often works with companies to ensure their work is diverse and innovative. Alongside theatre, Natasha also works as a vocalist and folk musician, playing multiple instruments including strings and keys, as well as contemporary dance and puppeteer work. She is a proud member of Actors Equity Australia and UK.</p>',
        description_short: '<p>Born and raised in Melbourne, Australia, Natasha graduated from the Howard Fine Acting Studio and moved to London in 2018 to train with Frantic Assembly and work in the vibrant London theatre scene. As an actor with Aspergers Syndrome, Natasha is proud to be a voice for the Autism community through her work, playing both autistic and non-autistic roles. She is passionate about including disability in the arts and often works with companies to ensure their work is diverse and innovative. Alongside theatre, Natasha also works as a vocalist and folk musician, playing multiple instruments including strings and keys, as well as contemporary dance and puppeteer work.</p>',
        social: [
          {
            id: 0,
            class: 'icon-twitter',
            url: 'https://twitter.com/tashiktt/'
          },
          {
            id: 1,
            class: 'icon-instagram',
            url: 'https://www.instagram.com/tashiktt/'
          }
        ]
      },
      {
        id: 14,
        name: 'Pau García-Milà',
        img: 'PauGarcia-Mila.jpg',
        description: '<p>Pau Garcia-Milá Pujol is a Spanish businessman and entrepreneur. He co-founded his first company, eyeOS, a pioneer in the development of virtualization solutions in cloud computing when he was only 17 year old, later acquired by Telefónica in 2014. After his first taste in entrepreneurship, he pursued more opportunities such as his social networking site, Bananity, in 2011, as well as IdeaFoster, an innovation consultancy aimed at helping companies create projects following methodologies by Start-ups. He is currently an associate professor in the ESADE Digital Business Master, making him the youngest teacher in this entity.</a></p>',
        description_short: '<p>Pau co-founded his first company, eyeOS, when he was only 17 year old, later acquired by Telefónica in 2014. After his first taste in entrepreneurship, he pursued more opportunities such as his social networking site, Bananity, in 2011, as well as IdeaFoster, an innovation consultancy aimed at helping companies create projects following methodologies by Start-ups. He is currently an associate professor in the ESADE Digital Business Master, making him the youngest teacher in this entity.</a></p>',
        social: [
          {
            id: 0,
            class: 'icon-twitter',
            url: 'https://twitter.com/pau'
          },
          {
            id: 1,
            class: 'icon-facebook',
            url: 'https://www.facebook.com/paugarciamila'
          },
          {
            id: 2,
            class: 'icon-instagram',
            url: 'https://www.instagram.com/paugarciamila/'
          }
        ]
      }
    ],
    artists: [
      {
        id: 0,
        name: 'Paloma Pujol',
        img: 'Paloma-Freestyle.jpg',
        description: '<p>Paloma Pujol Mayo has always loved soccer. Growing up in Mexico made it difficult for her to play soccer as part of a team, because at that time there were no women teams, so she had to find a way to play in the men teams. Years later, Paloma moved to Madrid. Here she discovered a sport called Footbag, which is played with a small bag filled with steel. This sport has given her the feeling of freestyle, a way of expressing herself. Today, she competes professionally and she is the current world champion. Paloma decided to go further and try something new so she began doing Freestyle Football. Only a few years later, with a lot of training and sacrifice, she became the first professional Freestyler in Spain.</p>',
        description_short: '<p>Paloma Pujol Mayo is a professional Freestyler in Spain. She is an avid player of freestyle football, where she believes she can openly express herself. Watch her #UNLEASH herself as she takes on the stage to show you her incredible skills at such a young age.</p>', 
        social: [
          {
            id: 0,
            class: 'icon-twitter',
            url: 'https://twitter.com/freestyle_smile'
          },
          {
            id: 1,
            class: 'icon-facebook',
            url: 'https://www.facebook.com/palomafreestyle/'
          },
          {
            id: 2,
            class: 'icon-instagram',
            url: 'https://www.instagram.com/paloma_freestyle/'
          }
        ]
      },
      {
        id: 1,
        name: 'EL TRINIDAD',
        img: 'ElTrinidad.jpg',
        description: '<p>EL TRINIDAD is an artist, singer and producer from Madrid, Spain. Having made his live debut in Spain´s FIB Festival, his style moves within club vibes such as trap, dancehall, reggaeton and other electronic hybrids.</p>',
        description_short: '<p>EL TRINIDAD is an artist, singer and producer from Madrid, Spain. Having made his live debut in Spain´s FIB Festival, his style moves within club vibes such as trap, dancehall, reggaeton and other electronic hybrids.</p>', 
        social: [
          {
            id: 0,
            class: 'icon-twitter',
            url: 'https://twitter.com/freestyle_smile'
          },
          {
            id: 1,
            class: 'icon-facebook',
            url: 'https://www.facebook.com/eltrinidad111'
          },
          {
            id: 2,
            class: 'icon-instagram',
            url: 'https://www.instagram.com/eltrinidad111/'
          }
        ]
      },
      {
        id: 2,
        name: 'Gabyx & Ali Beats',
        img: 'GabyxAliBeats.jpg',
        description: '<p>Meet the actual Spanish BeatBox Champions, Gabyx & Ali Beats. They play their show called "BEATBOX LIVE MUSIC" all around Spain. Gabyx & Ali Beats have been in Spanish TV SHOWS like GOT TALENT, FACTOR X, and LA VOZ. They create their own versions of any style of music. This creative duo has been playing together for 5 years, but they have played this style of music for more than 10 years. Gabyx is the one who creates the music with just his mouth and records it live in a LoopStation, where he has unlimited options to create any type of Music. Pop, Comercial, Rock, House, Techno, Chill Out, Reggaeton, and more. Ali Beats is the "Multi" vocalist who sings all styles. She arrived with her unique voice to the TV program "La Voz" in Spain. Together, they can create any song in less than 1 minute. These two do not use any instrument, MP3 player, or any Dj, but simply just their mouth.</p>',
        description_short: '<p>Meet the actual Spanish BeatBox Champions, Gabyx & Ali Beats. They play their show called "BEATBOX LIVE MUSIC" all around Spain. Gabyx & Ali Beats have been in Spanish TV SHOWS like GOT TALENT, FACTOR X, and LA VOZ. They create their own versions of any style of music. This creative duo has been playing together for 5 years, but they have played this style of music for more than 10 years. Gabyx is the one who creates the music with just his mouth and records it live in a LoopStation, where he has unlimited options to create any type of Music. Pop, Comercial, Rock, House, Techno, Chill Out, Reggaeton, and more. Ali Beats is the "Multi" vocalist who sings all styles. She arrived with her unique voice to the TV program "La Voz" in Spain. Together, they can create any song in less than 1 minute. These two do not use any instrument, MP3 player, or any Dj, but simply just their mouth.</p>', 
        social: [
          {
            id: 0,
            class: 'icon-twitter',
            url: 'https://twitter.com/Gabyx_Beatbox'
          },
          {
            id: 1,
            class: 'icon-facebook',
            url: 'https://www.facebook.com/GabyxBeatBox/'
          },
          {
            id: 2,
            class: 'icon-instagram',
            url: 'https://www.instagram.com/alibeats.92/'
          }
        ]
      },
      {
        id: 3,
        name: 'Andrés Madruga',
        img: 'Ándres_Madrugá.jpg',
        description: '<p>Andres Madruga is 34 years old and he is a magician and stand up comedian. He would love to contribute his experience about what changes someone´s life when they do what they love. Andres dedicated himself to computer science. He had a job that he didn’t necessarily dislike and he was doing well, but he did not feel fulfilled. One day, through a course he took, they gave him the opportunity to get on stage. He felt a rush of adrenaline and experienced a sensation that he has become addicted to. Andres discovered what he was passionate about at the age of 26. He made decisions, he made changes, and with work and effort he finally got what he was set out to do. He changed his profession and now he dedicates himself to acting. He can provide the tools, tricks and tips that helped him a lot along the way. And of course, he has the incredible talent to entertain everyone and leave them surprised like never before.</p>',
        description_short: '<p>Andres Madruga, a magician and stand up comedian who loves the feeling of being on stage and acting in front of people. Madruga is truly a talented artist who went through a lot of changes/decisions to be who he truly wanted to be. Get ready for surprises because a touch of magic is coming to UNLEASH 2019. VOILA!</p>',
        social: [
          {
            id: 0,
            class: 'icon-twitter',
            url: 'https://twitter.com/m4drug4dor'
          },
          {
            id: 1,
            class: 'icon-facebook',
            url: 'https://www.facebook.com/Mago.Madruga/'
          },
          {
            id: 2,
            class: 'icon-instagram',
            url: 'https://www.instagram.com/andres.madruga/'
          }
        ]
      },
      {
        id: 4,
        name: 'Burdeos',
        img: 'Burdeos.jpg',
        description: '<p>Music group from Madrid born in 2017 formed by Pablo Rojo (voice and rhythmic guitar), Juan Carlos Alonso-Esturillo (drums), Toni Matesanz (bass) and Miguel Pellicer (solo guitar). In their songs you can recognize a great influence of rock and indie English that is integrated with Spanish lyrics giving rise to themes with strength and personality. In April of 2018 they published their debut EP recorded at the Neo de Aranda de Duero studios, which is named `Burdeos’ as a presentation.</p>',
        description_short: '<p>Music group from Madrid born in 2017 formed by Pablo Rojo (voice and rhythmic guitar), Juan Carlos Alonso-Esturillo (drums), Toni Matesanz (bass) and Miguel Pellicer (solo guitar). In their songs you can recognize a great influence of rock and indie English that is integrated with Spanish lyrics giving rise to themes with strength and personality. In April of 2018 they published their debut EP recorded at the Neo de Aranda de Duero studios, which is named `Burdeos’ as a presentation.</p>',
        social: [
          {
            id: 0,
            class: 'icon-facebook',
            url: 'https://www.facebook.com/burdeosmusica/'
          },
          {
            id: 1,
            class: 'icon-instagram',
            url: 'https://www.instagram.com/burdeosmusica/'
          }
        ]
      },
      {
        id: 5,
        name: 'Simply Broke',
        img: 'SimplyBroke.jpg',
        description: '<p>We are a musical duo that emerged in the streets of Madrid, frequently playing in places in Madrid such as Parque Reitor, the templo de debod, the calle preciados as well as open mic and jams. Then we started to perform concerts and little by little our repertoire grew with our own music. We then extended the project to duo format + band format.</p>',
        description_short: '<p>We are a musical duo that emerged in the streets of Madrid, frequently playing in places in Madrid such as Parque Reitor, the templo de debod, the calle preciados as well as open mic and jams. Then we started to perform concerts and little by little our repertoire grew with our own music. We then extended the project to duo format + band format.</p>',
        social: [
          {
            id: 0,
            class: 'icon-facebook',
            url: 'https://www.facebook.com/wearesimplybroke/'
          },
          {
            id: 1,
            class: 'icon-instagram',
            url: 'https://www.instagram.com/wearesimplybroke/'
          }
        ]
      },
      {
        id: 6,
        name: 'Expoart',
        img: 'Expoart.jpg',
        description: '<p>When Javier was 8-years-old, he noticed the colorful graffiti painted on the streets of his neighborhood and spent his afternoons trying to understand what their message portrayed. Some years passed, and at age 14, an innate feeling of expression came out, and he decided to buy his first spray can. Javier now paints with friends, traveling to new cities, and enjoying all of the amazing things that the different cultures bring. He continues to enhance his painting in local festivals and contests, and he also teaches classes in a school setting. Today, he has a clear goal to devote all of his time and effort to continually improve and paint all over the world.</p>',
        description_short: '<p>When Javier was 8-years-old, he noticed the colorful graffiti painted on the streets of his neighborhood and spent his afternoons trying to understand what their message portrayed. Some years passed, and at age 14, an innate feeling of expression came out, and he decided to buy his first spray can. Javier now paints with friends, traveling to new cities, and enjoying all of the amazing things that the different cultures bring. He continues to enhance his painting in local festivals and contests, and he also teaches classes in a school setting. Today, he has a clear goal to devote all of his time and effort to continually improve and paint all over the world.</p>',
        social: [
          {
            id: 0,
            class: 'icon-facebook',
            url: 'https://www.facebook.com/decoracionesexpoart/'
          },
          {
            id: 1,
            class: 'icon-instagram',
            url: 'https://www.instagram.com/decoracionesexpoart/'
          }
        ]
      },
      {
        id: 7,
        name: 'Rita Gasala',
        img: 'RitaGasala.jpg',
        description: '<p>Born in Spain, at just 21 years old, mezzosoprano Rita Gasala has already performed in national and international stages like El Ateneo (Madrid), the Teatro Rosalía de Castro (A Coruña), and the Theâtre des Champs Elysées (Paris). Currently she is studying with Claire Lefilliâtre, one of the most renowned specialists in the 17th century French and Italian music. Rita has been recognised for her dedication and talent in a variety of ways. In 2016, she placed as finalist in the V Concurso para Jóvenes Intérpretes of the Wagner Association of Madrid. More recently, in 2018 she recorded the Kur for the Spanish Olympic medallist of Dressage Beatriz Ferrer-Salat & Delgado. Lastly, she was invited to present a TEDx conference which now has over 15,000 views on YouTube.</p>',
        description_short: '<p>Born in Spain, at just 21 years old, mezzosoprano Rita Gasala has already performed in national and international stages like El Ateneo (Madrid), the Teatro Rosalía de Castro (A Coruña), and the Theâtre des Champs Elysées (Paris). Currently she is studying with Claire Lefilliâtre, one of the most renowned specialists in the 17th century French and Italian music. Rita has been recognised for her dedication and talent in a variety of ways. In 2016, she placed as finalist in the V Concurso para Jóvenes Intérpretes of the Wagner Association of Madrid. More recently, in 2018 she recorded the Kur for the Spanish Olympic medallist of Dressage Beatriz Ferrer-Salat & Delgado. Lastly, she was invited to present a TEDx conference which now has over 15,000 views on YouTube.</p>',
        social: [
          {
            id: 0,
            class: 'icon-instagram',
            url: 'https://www.instagram.com/ritagasala/'
          }
        ]
      },
      {
        id: 8,
        name: 'Carla Prado',
        img: 'CarlaPrado.jpg',
        description: '<p>Carla Prado is a professional Spanish-dance dancer. She´s been dancing since she was 3 years old, which it´s her profession, dance.</p>',        
        description_short: '<p>Carla Prado is a professional Spanish-dance dancer. She´s been dancing since she was 3 years old, which it´s her profession, dance.</p>',
        social: [
          {
            id: 0,
            class: 'icon-facebook',
            url: 'https://www.facebook.com/carla.pradogonzalez'
          },
          {
            id: 1,
            class: 'icon-instagram',
            url: 'https://www.instagram.com/carlapg_/'
          }
        ]
      },
      {
        id: 9,
        name: 'Leonardo Iker',
        img: 'LeonardoIker.jpg',
        description: '<p>Leonardo is a breakdancer and hip-hop artist, and he has his own project called "Killin Makako". Their mission is to get talented young people out of the streets through dancing and singing. He wants to create a worldwide community of artists and give them the connections and resources they need to become professionals. He has been dancing in many cities like Madrid, Barcelona, ​​London, Rio de Janeiro or Milan. Luckily, he has had the opportunity to perform in clubs, theaters, television shows, commercials and even in the cinema. But, sometimes it is hard to get the job of your dreams, so you have to work in a normal job or just go and hit the streets to not starve.</p>',
        description_short: '<p>Leonardo is a breakdancer and hip-hop artist, and he has his own project called "Killin Makako". Their mission is to get talented young people out of the streets through dancing and singing. He wants to create a worldwide community of artists and give them the connections and resources they need to become professionals. He has been dancing in many cities like Madrid, Barcelona, ​​London, Rio de Janeiro or Milan. Luckily, he has had the opportunity to perform in clubs, theaters, television shows, commercials and even in the cinema. But, sometimes it is hard to get the job of your dreams, so you have to work in a normal job or just go and hit the streets to not starve.</p>',
        social: [
          {
            id: 0,
            class: 'icon-twitter',
            url: 'https://twitter.com/wikerfcw'
          },
          {
            id: 1,
            class: 'icon-facebook',
            url: 'https://www.facebook.com/leonardo.iker'
          },
          {
            id: 2,
            class: 'icon-instagram',
            url: 'https://www.instagram.com/leonardo.iker/'
          }
        ] 
      }
    ],
    host: [
      {
        id: 0,
        name: 'Berry Berryuca',
        img: 'BerryBerryuca.jpg',
        description: '<p>Irene, better known as Berry Berryuca, is the new host of UNLEASH Festival 2019 - the largest festival of talent in the world. The young Youtuber, who studies Teaching, began her career in Vine, where she grew enormously to make then the great jump to YouTube, in which she accumulates more than 143,000 subscribers and 10 million reproductions. Now it’s your time to see her at UNLEASH.Are you ready?</p>',
        social: [
          {
            id: 0,
            class: 'icon-instagram',
            url: 'https://www.instagram.com/berryuca/'
          },
          {
            id: 1,
            class: 'icon-twitter',
            url: 'https://twitter.com/berry_qb_'
          }
        ]
      }
    ],
    space_enter:{
      title: 'Enter',
      text: 'Enter is the place where it all begins. And ends. The start of everything and the end of what you think you know. Are you ready to be transformed?',
      map: 'enter_map.png',
      items: [
        {
          id: 0,
          name: '',
          img: 'Unleash_EnterCover.jpg'
        },
        {
          id: 1,
          name: '',
          img: 'Unleash_Web_Enter_2.jpg'
        }
      ]
    },
    space_shift:{
      title: 'Shift',
      text: 'Shift is the area where all the attendees take a seat to inspire themselves with the sensational stories of the speakers, the amazing shows of the artists and other incredible things.',
      map: 'shift_map.png',
      items: [
        {
          id: 0,
          name: '',
          img: 'Unleash_ShiftCover.jpg'
        },
        {
          id: 1,
          name: '',
          img: 'Unleash_Web_Shift_2.jpg'
        }
      ]
    },
    space_escape:{
      title: 'Escape',
      text: 'Escape is the most experiential area of Unleash. All of your senses will be stimulated. Outdoor. Music. Networking. Free food and drinks. Unlike any other networking place you have ever been to, Escape features Unleash’s spirit and purpose. There, you will be able to share all your thoughts, ideas and impressions among all participants of this adventure: attendees, partners, speakers and artists. It will be full of live entertainment and an energetic yet cool atmosphere that will inspire you to explore, discover and participate in engaging activities.',
      map: 'escape_map.png',
      items: [
        {
          id: 0,
          name: '',
          img: 'Unleash_Espacios_Escape_2.jpg'
        },
        {
          id: 1,
          name: '',
          img: 'Unleash_EscapeCover.jpg'
        }
      ]
    },
    partner_x:{
      name:'Founding<br>partner',
      gsize: 'col-12',
      items_row: 1,
      max_height: 500, 
      items: [
        {
          id: '0',
          tag_id: 'tag-rafaeldelpino',
          img: 'partners/rafaeldelpino.png',
          name: 'Fundación Rafael del Pino',
          url: 'https://frdelpino.es/'
        }
      ]
    },
    partner_global:{
      name:'Global<br>partners',
      gsize: 'col-3',
      items_row: 4, 
      max_height: 300, 
      items: [
        {
          id: '1',
          tag_id: 'tag-estrellagalicia',
          img: 'partners/estrellagalicia.png',
          name: 'Estrella Galicia',
          url: 'https://estrellagalicia.es/'
        },
        {
          id: '2',
          tag_id: 'tag-minsait',
          img: 'partners/minsait.jpg',
          name: '',
          url: 'https://www.minsait.com'
        },
        {
          id: '0',
          tag_id: 'tag-axa',
          img: 'partners/axa.png',
          name: 'Axa',
          url: 'https://www.axa.es/'
        },
      ] 
    },
    partner_generations:{
      name:'Generation<br>partners',
      gsize: 'col-3',
      items_row: 4, 
      max_height: 300, 
      items: [
        /*
        {
          id: '0',
          img: 'partners/durex.png',
          name: 'Durex',
          url: 'https://www.durex.es/'
        },
       */ 
        {
          id: '2',
          tag_id: 'tag-cepsa',
          img: 'partners/Cepsa_Logo.png',
          name: 'Cepsa',
          url: 'https://www.cepsa.com/es/talento'
        },
        {
          id: '3',
          tag_id: 'tag-iberia',
          img: 'partners/Iberia-Express-logo.png',
          name: 'Iberia Express',
          url: 'https://www.iberiaexpress.com/'
        },
        {
          id: '1',
          tag_id: 'tag-mediamark',
          img: 'partners/MediaMarkPeople.jpg',
          name: 'MediaMarkPeople',
          url: 'https://specials.mediamarkt.es/nuestra-empresa/nuestros-valores-y-principios-eticos/'
        },
        {
          id: '4',
          tag_id: 'tag-bplus',
          img: 'partners/beplus.png',
          name: 'bplus',
          url: 'https://beplusbio.com/'
        },
        {
          id: '5',
          tag_id: 'tag-adevinta',
          img: 'partners/adevinta.jpg',
          name: 'adevinta',
          url: 'https://www.adevinta.com/'
        },
        {
          id: '6',
          tag_id: 'tag-schneider',
          img: 'partners/schneider.png',
          name: 'schneider',
          url: 'https://www.se.com/es/es/'
        },
        {
          id: '7',
          tag_id: 'tag-merck',
          img: 'partners/Merck.png',
          name: 'Merck',
          url: 'https://www.merckgroup.com/es-es'
        },
        {
          id: '8',
          img: 'partners/N26_Logo.png',
          name: '',
          url: 'https://n26.com/es-es'
        },
      ] 
    },
    partner_colaborator:{
      name:'Collaborators',
      gsize: 'col-2',
      items_row: 5, 
      max_height: 200,
      items: [
        {
          id: '0',
          tag_id: 'tag-sparkup',
          img: 'partners/Sparkup_logo.png',
          name: '',
          url: 'https://sparkup.app/es/'
        },
        {
          id: '1',
          tag_id: 'tag-fuckupmadrid',
          img: 'partners/Fuckup_Nights_Madrid.png',
          name: '',
          url: 'https://fuckupnights.com/madrid/?locale=en'
        },
        {
          id: '2',
          tag_id: 'tag-REDI',
          img: 'partners/REDI.png',
          name: '',
          url: 'http://www.redi-lgbti.org/'
        },
        {
          id: '3',
          tag_id: 'tag-womenalia',
          img: 'partners/positivo_con_lema.png',
          name: 'womenalia',
          url: 'http://www.womenalia.com/es/'
        },
        {
          id: '4',
          tag_id: 'tag-focus',
          img: 'partners/Focus_V4.png',
          name: '',
          url: 'http://focusprogramme.com/'
        },
        {
          id: '5',
          tag_id: 'tag-uxer',
          img: 'partners/Logo_UXER_Positivo.png',
          name: '',
          url: 'http://www.uxerschool.com/'
        },
        {
          id: '6',
          tag_id: 'tag-fever',
          img: 'partners/fever.png',
          name: 'fever',
          url: 'https://feverup.com/madrid'
        },
        {
          id: '7',
          tag_id: 'tag-ESN',
          img: 'partners/ESN_colour.png',
          name: 'ESN',
          url: 'https://www.esn-spain.org'
        },
        {
          id: '8',
          tag_id: 'tag-VOI',
          img: 'partners/voi_logo_coral.png',
          name: 'VOI',
          url: 'https://www.voiscooters.com/es/'
        },
        {
          id: '9',
          tag_id: 'tag-badi',
          img: 'partners/badi_logo.png',
          name: 'badi',
          url: 'https://badi.com/es'
        },
        {
          id: '10',
          tag_id: 'tag-BlueBanana',
          img: 'partners/BlueBanana.png',
          name: 'BlueBanana',
          url: 'https://www.bluebananabrand.com'
        },
        {
          id: '11',
          tag_id: 'tag-Utopicus',
          img: 'partners/Utopicus.png',
          name: 'Utopicus',
          url: 'https://www.utopicus.es/'
        },
        {
          id: '12',
          tag_id: 'tag-Campton',
          img: 'partners/campton.png',
          name: 'campton',
          url: 'https://www.instagram.com/campton.official/'
        },
        {
          id: '13',
          tag_id: 'tag-Icex',
          img: 'partners/icex_denominacion.png',
          name: 'Icex',
          url: 'https://www.icex.es/icex/es/index.html'
        },
        {
          id: '14',
          tag_id: 'tag-UnLtd',
          img: 'partners/UnLtd.png',
          name: 'UnLtd',
          url: 'https://www.unltdspain.org'
        },
        {
          id: '15',
          tag_id: 'tag-FutureLeaders',
          img: 'partners/FutureLEaders.png',
          name: 'FutureLEaders',
          url: 'https://thefutureleaders.thepowermba.com'
        },
        {
          id: '16',
          tag_id: 'tag-TalentGarden',
          img: 'partners/Talent_Garden.png',
          name: 'TalentGarden',
          url: 'https://talentgarden.org/es/'
        },
        {
          id: '17',
          tag_id: 'tag-Esgoa',
          img: 'partners/Esgoa.png',
          name: 'Esgoa',
          url: 'https://esgoa.es'
        },
        {
          id: '18',
          tag_id: 'tag->GoStudy',
          img: 'partners/GOSTUDY.png',
          name: 'GoStudy',
          url: 'https://www.gostudyaus.es'
        },
        {
          id: '19',
          tag_id: 'tag->ACNUR',
          img: 'partners/ACNUR.png',
          name: 'ACNUR',
          url: 'https://eacnur.org/es'
        }
      ] 
    },     
    agenda_list: {
      day_1: [
        {id: 0, class:'magenta-txt', time:'09:30 - 11:00', text: 'CHECK-IN'},
        {id: 1, class:'black-txt', time:'11:00 - 11:15', text: 'Open Performance'},
        {id: 2, class:'black-txt', time:'11:15 - 11:45', text: 'Welcome'},
        {id: 3, class:'black-txt', time:'11:45 - 12:15', text: 'Eric Matamoros'},
        {id: 4, class:'black-txt', time:'12:15 - 12:25', text: 'Xperience'},
        {id: 5, class:'black-txt', time:'12:25 - 12:40', text: 'Refresh One'},
        {id: 6, class:'black-txt', time:'12:40 - 13:00', text: 'Hanna Herbst'},
        {id: 7, class:'black-txt', time:'13:00 - 13:30', text: 'Ousman Umar'},
        {id: 8, class:'black-txt', time:'13:30 - 13:45', text: 'Performance'},
        {id: 9, class:'magenta-txt', time:'13:45 - 15:30', text: 'SCAPE ZONE'},
        {id: 10, class:'black-txt', time:'15:30 - 15:50', text: 'Jeremy Ross Miller'},
        {id: 11, class:'black-txt', time:'15:50 - 16:00', text: 'Xperience'},
        {id: 12, class:'black-txt', time:'16:00 - 16:20', text: 'Refresh Two'},
        {id: 13, class:'black-txt', time:'16:30 - 16:45', text: 'Performance'},
        {id: 14, class:'black-txt', time:'16:45 - 17:15', text: 'Jamala Osman'},
        {id: 15, class:'black-txt', time:'17:15 - 17:25', text: 'Xperience'},
        {id: 16, class:'black-txt', time:'17:25 - 17:55', text: 'Robert Fratilla'},
        {id: 17, class:'black-txt', time:'17:55 - 18:10', text: 'Xperience'},
        {id: 18, class:'black-txt', time:'18:10 - 18:20', text: 'Performance'},
        {id: 19, class:'magenta-txt', time:'18:30 - 19:30', text: 'SCAPE ZONE'},
      ],
      day_2: [
        {id: 0, class:'magenta-txt', time:'10:00 - 11:00', text: 'CHECK-IN'},
        {id: 1, class:'black-txt', time:'11:00 - 11:15', text: 'Performance'},
        {id: 2, class:'black-txt', time:'11:15 - 11:35', text: 'Tashi Baig'},
        {id: 3, class:'black-txt', time:'11:35 - 11:45', text: 'Xperience'},
        {id: 4, class:'black-txt', time:'11:45 - 12:15', text: 'Refresh Three'},
        {id: 5, class:'black-txt', time:'12:15 - 12:25', text: 'Xperience'},
        {id: 6, class:'black-txt', time:'12:25 - 12:45', text: 'Mach Mateuz'},
        {id: 7, class:'black-txt', time:'12:45 - 13:00', text: 'Performance'},
        {id: 8, class:'black-txt', time:'13:00 - 13:20', text: 'Benjamin Zand'},
        {id: 9, class:'black-txt', time:'13:20 - 13:30', text: 'Performance'},
        {id: 10, class:'magenta-txt', time:'13:30 - 15:30', text: 'SCAPE ZONE'},
        {id: 11, class:'black-txt', time:'15:30 - 15:50', text: 'Bisman Deu'},
        {id: 12, class:'black-txt', time:'15:50 - 16:00', text: 'Xperience'},
        {id: 13, class:'black-txt', time:'16:00 - 16:30', text: 'Refresh Four'},
        {id: 14, class:'black-txt', time:'16:30 - 16:40', text: 'Performance'},
        {id: 15, class:'black-txt', time:'16:40 - 17:00', text: 'Benjamin Stern'},
        {id: 16, class:'black-txt', time:'17:00 - 17:10', text: 'Xperience'},
        {id: 17, class:'black-txt', time:'17:10 - 17:30', text: 'Hanan Challouki'},
        {id: 18, class:'black-txt', time:'17:30 - 17:40', text: 'Xperience'},
        {id: 19, class:'black-txt', time:'17:40 - 18:00', text: 'Pau García-Milà'},
        {id: 20, class:'black-txt', time:'18:00 - 18:10', text: 'Xperience'},
        {id: 21, class:'black-txt', time:'18:10 - 18:20', text: 'Performance'}
      ],
      day_3: [
        {id: 0, class:'magenta-txt', time:'10:00 - 11:00', text: 'CHECK-IN'},
        {id: 1, class:'black-txt', time:'11:00 - 11:15', text: 'Performance'},
        {id: 2, class:'black-txt', time:'11:15 - 11:35', text: 'Guillermo Martínez'},
        {id: 3, class:'black-txt', time:'11:35 - 11:45', text: 'Xperience'},
        {id: 4, class:'black-txt', time:'11:45 - 12:15', text: 'Refresh Five'},
        {id: 5, class:'black-txt', time:'12:15 - 12:25', text: 'Xperience'},
        {id: 6, class:'black-txt', time:'12:25 - 12:45', text: 'Speaker'},
        {id: 7, class:'black-txt', time:'12:45 - 13:45', text: 'Unleash Awards'},
        {id: 8, class:'black-txt', time:'13:45 - 14:45', text: 'Farewell Surprise'},
        {id: 9, class:'magenta-txt', time:'14:45 - 15:30', text: 'SCAPE ZONE'},
      ]
    }
  } 
}
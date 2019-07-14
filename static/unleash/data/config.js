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
      half: { 
        path: '/half',
        name: 'Tickets with 50% discount',
        eb_id: '65098500367',
        setCookie: false,
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
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
      },
      partners: {
        claim: 'The most ambitious<br>entities that support<br>the best talent',
        breadcum: 'Globals → Generation → Collaborators',
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
        name: 'Bisman deu',
        img: 'Bisman_Deu.jpg',
        description: '<p>At the young age of 15 years, Bisman invented a low-cost building material, called ‘Green Wood’, a substance made from rice waste and an alternative to more expensive, less eco-friendly products. Bisman is passionate about sustainability and innovation, looking to provide more affordable housing with ‘Green Wood’ and further develop underprivileged areas. Bisman works hard to be a role model in entrepreneurship and leadership among girls, ultimately aiming to bridge the gap in ambition. She has spoken at several notable conferences and summits with big-name organizations like Unicef and Nexus, and she leads her own campaign, ‘Coulour the World Pink’, promoting women’s rights and empowerment.</p>',
        description_short: '<p>At the young age of 15, Bisman Deu invented a low-cost building material, called ‘Green Wood’, a substance made from rice waste and an alternative to more expensive, less eco-friendly products. Bisman is also a big promoter of women’s rights and empowerment leading her own campaign, ‘Coulour the World Pink’.</p>',
        social: [
          {
            id: 0,
            class: 'icon-facebook',
            url: 'https://www.facebook.com/BismanDeu'
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
        name: 'Coming soon',
        img: 'Unleash_Web_Speaker.jpg',
        description: '<p>You will see who´s coming soon, but just know one thing: It´s going to be AMAZING!</p>',
        description_short: '<p>You will see who´s coming soon, but just know one thing: It´s going to be AMAZING!</p>',
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
        id: 8,
        name: 'Coming soon',
        img: 'Unleash_Web_Speaker.jpg',
        description: '<p>You will see who´s coming soon, but just know one thing: It´s going to be AMAZING!</p>',
        description_short: '<p>You will see who´s coming soon, but just know one thing: It´s going to be AMAZING!</p>'
      },
      {
        id: 9,
        name: 'THIS COULD BE YOU!',
        img: 'Unleash_Web_Speaker.jpg',
        description: '<p>Be part of Unleash, the craziest talent festival. You can show what you have to all the people attending the festival. You are interested to share your art, talent or history with an awesome audience?</p><p class="cta-parent"><a class="cta" onclick="openPopupcontact()"  target="_blank">YES</a></p>',
        description_short: '<p>Are you interested in sharing your art, talent or history with an awesome audience?</p><p class="cta-parent"><a class="cta" onclick="openPopupcontact()" target="_blank">YES</a></p>'
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
        description: '<p>Andres Madruga is 34 years old and he is a magician and stand up comedian. He would love to contribute his experience about what changes someone´s life when they do what they love. Andres dedicated himself to computer science. He had a job that he didn’t necessarily dislike and he was doing well, but he did not feel fulfilled. One day, through a course he took, they gave him the opportunity to get on stage. He felt a rush of adrenaline and experienced a sensation that he has become addicted to. Andres discovered what he was passionate about at the age of 26. He made decisions, he made changes, and with work and effort he finally got what he was set out to do. He changed his profession and now he dedicates himself to acting. He can provide the tools, tricks and tips that helped him a lot along the way. And of course, he has the incredible talent to entertain everyone and leave them surprised like never before</p>',
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
        description: '<p>Music group from Madrid born in 2017 formed by Pablo Rojo (voice and rhythmic guitar), Juan Carlos Alonso-Esturillo (drums), Toni Matesanz (bass) and Miguel Pellicar (solo guitar). In their songs you can recognize a great influence of rock and indie English that is integrated with Spanish lyrics giving rise to themes with strength and personality. In April of 2018 they published their debut EP recorded at the Neo de Aranda de Duero studios, which is named `Burdeos’ as a presentation.</p>',
        description_short: '<p>Music group from Madrid born in 2017 formed by Pablo Rojo (voice and rhythmic guitar), Juan Carlos Alonso-Esturillo (drums), Toni Matesanz (bass) and Miguel Pellicar (solo guitar). In their songs you can recognize a great influence of rock and indie English that is integrated with Spanish lyrics giving rise to themes with strength and personality. In April of 2018 they published their debut EP recorded at the Neo de Aranda de Duero studios, which is named `Burdeos’ as a presentation.</p>',
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
        name: 'Coming soon',
        img: 'artist.jpg',
        description: '<p>You will see who´s coming soon, but just know one thing: It´s going to be AMAZING!</p>',
        description_short: '<p>You will see who´s coming soon, but just know one thing: It´s going to be AMAZING!</p>'
      },
      {
        id: 6,
        name: 'Coming soon',
        img: 'artist.jpg',
        description: '<p>You will see who´s coming soon, but just know one thing: It´s going to be AMAZING!</p>',
        description_short: '<p>You will see who´s coming soon, but just know one thing: It´s going to be AMAZING!</p>'
      },
      {
        id: 7,
        name: 'Coming soon',
        img: 'artist.jpg',
        description: '<p>You will see who´s coming soon, but just know one thing: It´s going to be AMAZING!</p>',
        description_short: '<p>You will see who´s coming soon, but just know one thing: It´s going to be AMAZING!</p>'
      },
      {
        id: 8,
        name: 'Coming soon',
        img: 'artist.jpg',
        description: '<p>You will see who´s coming soon, but just know one thing: It´s going to be AMAZING!</p>',
        description_short: '<p>You will see who´s coming soon, but just know one thing: It´s going to be AMAZING!</p>'
      },
      {
        id: 9,
        name: 'Coming soon',
        img: 'artist.jpg',
        description: '<p>You will see who´s coming soon, but just know one thing: It´s going to be AMAZING!</p>',
        description_short: '<p>You will see who´s coming soon, but just know one thing: It´s going to be AMAZING!</p>'
      }
    ],
    host: [
      {
        id: 0,
        name: 'Coming soon',
        img: 'Unleash_Web_Host.jpg',
        description: '<p>Our host will be the soul of Unleash. Any ideas of who it can be? We are listening to you all on social media, let us know!</p>'
        /*
        social: [
          {
            id: 0,
            class: 'icon-ig',
            url: 'www.'
          }min,
          {
            id: 1,
            class: 'icon-ig',
            url: 'www.'
          }
        ],
        */
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
      name:'Founding partner',
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
      name:'Global partners',
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
      name:'Generation partners',
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
       {
          id: '1',
          img: 'partners/BNPPF-2019_IMG_FR_Credtk_big.jpg',
          name: '',
          url: 'https://www.bnpparibas.es/en/'
        },

        */
        {
          id: '2',
          tag_id: 'tag-cepsa',
          img: 'partners/Cepsa_Logo.png',
          name: 'Cepsa',
          url: 'https://www.cepsa.es/'
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
          tag_id: 'tag-bnp',
          img: 'partners/BNPPF-2019_IMG_FR_Credtk_big.jpg',
          name: '',
          url: 'https://www.bnpparibas.es/en/'
        },
        {
          id: '4',
          tag_id: 'tag-bplus',
          img: 'partners/beplus.png',
          name: '',
          url: 'https://beplusbio.com/'
        },
        {
          id: '5',
          tag_id: 'tag-adevinta',
          img: 'partners/adevinta.jpg',
          name: '',
          url: 'https://www.adevinta.com/'
        },
        {
          id: '6',
          tag_id: 'tag-schneider',
          img: 'partners/schneider.png',
          name: '',
          url: 'https://www.se.com/es/es/'
        }
      ] 
    },
    partner_colaborator:{
      name:'Colaborators',
      gsize: 'col-3',
      items_row: 4, 
      max_height: 300,
      items: [
        {
          id: '1',
          tag_id: 'tag-sparkup',
          img: 'partners/Sparkup_logo.png',
          name: '',
          url: 'https://sparkup.app/es/'
        },
        {
          id: '2',
          tag_id: 'tag-fuckupmadrid',
          img: 'partners/Fuckup_Nights_Madrid.png',
          name: '',
          url: 'https://fuckupnights.com/madrid/?locale=en'
        },/*
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
        */
      ] 
    }
  } 
}
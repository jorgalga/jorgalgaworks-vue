var dataConfig = {
  testmode: false,
  max_width_limit: 1024,
  max_width: 1500,
  mobile_width: 600,
  img_src: '/static/minsait/images/',
  cookiespolicy: '',
  privacypolicy: '',
  termsandconditions: '',
  webex_url: 'https://onesaitplatform.atlassian.net/wiki/spaces/OP/overview',
  page_names: {
    home: 'Home'
  },
  video_home: {
    en: '<iframe src="https://player.vimeo.com/video/356611066" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>',
    es: '<iframe src="https://player.vimeo.com/video/357822581" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>'
  },
  /* Hay que borrar el parametro with y height del embed code para que el video sea responsive */
  video_purposes: {
    en: '<iframe src="https://player.vimeo.com/video/358023797" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>',
    es: '<iframe src="https://player.vimeo.com/video/358023797" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>'
  },
  copy: {
    en: {
      responses: {
        code_200: {
          response_msg: 'The user has been successfully registered',
          response_btn: 'OK',
        },
        code_400: {
          response_msg: 'The e-mail address is not valid. Only Minsait members can participate in this phase.<br>If you want to be the first one to be part of this community, once it is open to the public. Sign up  over here:',
          response_btn: 'I want to participate',
        },
        code_406: {
          response_msg: 'It seems that you have already registered with this e-mail, stay tuned because you will receive some steps to follow.',
          response_btn: 'OK',
        }
      },
      make_scroll: '& # 60 more info & # 62',
      cookie_message: '<p> We use our own and third party cookies to improve the user experience through your browsing. If you continue browsing we understand that you accept its use. <a href="/static/minsait/docs/minsait-cookiespolicy.pdf" target="_blank"> Cookies policy </a> </p> ',
      logo_copy: 'Help us build an OpenSource community, from the inside.<br>We need the best ones.<br>Join to the revolution.',
      video_ptitle: 'Info',
      video_description: '<p>We want to create an <b>Opensource</b> platform of reference, where people share knowledge of various disciplines such as <b>Big Data, Internet of Everything, Intelligencia Artificial...</br> and to get do so we need the best.</b></p>',
      video_ptitle2: 'Onesait Platform<br><span>Driving the creation of new solutions<br>in the digital age.</span>',
      video_description2: 'Build new business applications.',
      form_ptitle: 'form',
      form_fisrtP: 'Tell us who you are to participate.',
      form_name: 'Name:',
      form_email: 'Email:',
      form_twitter: 'Twitter:',
      form_check_bases: 'I Accept <a target="_blank" href="/static/minsait/docs/Bases_legales_Minsait_onesaitRevolution.pdf">the competition rules</a>',
      form_inputvalue: 'Leave your mark',
      form_contact: 'If you still have any doubts:',
      form_contact_btn: 'CONTACT US',
      info_ptitle: 'Phases',
      info_description: '<p>You will go through two phases of the competition, one individual and the other in teams.<br>Be part of an online event where all the details of the revolution will be unveiled.</p>',
      infoitems: [{
          order: 1,
          title: '1. Apply ',
          description: 'Individual Challenges<br>during the initial phase.'
        },
        {
          order: 2,
          title: '2. WebEx ',
          description: 'We will tell you everything<br>about the revolution.'
        },
        {
          order: 3,
          title: '3. Compete as a team',
          description: '2 weeks working <br>as a team to win.'
        },
        {
          order: 4,
          title: '4. Win Prizes',
          description: 'Only the best will get their prize in the afterwork and leave their mark.'
        }
      ],
      info_claim: 'We trust in our internal talent to consolidate Minsait as a leader brand for open culture. Leave your mark',
      ranking_ptitle: 'Ranking',
      ranking_description: '<p>Our developers are<br>are trying to revolutionize Onesait Platform<br>The revolution is now</p>',
      ranking_btn_copy: 'Follow it on Twitter',
      menu_left_copy: 'An Indra company',
      menuparticipabtn: 'Participate',
      menubtn: 'MENU',
      menu_links: {
        home: 'Home',
        rules: 'Rules',
        purpose: 'Purpose',
        ranking: 'Ranking',
        webex: 'Developer',
        contact: 'Contact',
        blog: 'Blog'
      },
      reglas_ptitle: 'Rules',
      reglas_items: [{
          id: '1',
          title: 'Rule 1',
          text: '<p>Only Minsait employees may participate. Remember that this initiative is optional and should therefore be developed after working hours.</p>'
        },
        {
          id: '2',
          title: 'Rule 2',
          text: '<p>There are 2 phases of the competition, one individual and one in teams.</p><p>In the individual phase the participants will earn points by completing different tests and will be selected for their skills. Those who obtain the highest number of points will be part of the priviledged ones that will be able to move on to the second phase.</p><p><b>How do I earn points during the individual phase?</b></p><p>It is essential that you register with Github and Codewars with the corporate mail with which you have registered at first.</p><ol><li>Follow this iniciative on Twitter<a href="https://twitter.com/onesaitplatform" target="_blank">@onesaitplatform</a>.<br>(5 puntos)</li><li>Follow on Github with your Minsait user the user <a href="https://github.com/onesaitplatform/" target="_blank">onesaitplatform</a>.<br>(5 puntos)</li><li>Request in github a Pull Request in our repository <a href="https://github.com/onesaitplatform/onesaitplatform-revolution" target="_blank">onesaitplatform-revolution</a>.<br>(10 points)</li><li> Complete with your Minsait user challenges on the platform <a href="https://www.codewars.com" target="_blank">Codewars</a>. (As many points as kyus you get at the time of the contest)</li></ol><p>In the group stage, teams will be set up and a mentor will be assigned to help them in their development. The operation through a Webex will be explained in detail to those who manage to move on to the second phase.</p><p><b>¿How is the group phase evaluated?</b></p><ol><li>Based on the contribution to Onesait Platform</li><li>Depending on the technological complexity of development</li><li>CHow it brings value to the company</li><li>Teamwork with the mentor.</li></ol>'
        },
        {
          id: '4',
          title: 'OpenSource presentation event',
          text: '<p>The three finalist teams will be transferred to Madrid to attend the OpenSource presentation event.</p><p>All the participants with level 2 will be able to attend the presentation event at their own expense while transporting their expenses.</p>'
        }
      ],
      props_items: [{
          id: 0,
          title: '1. Build a comprehensive data strategy ',
          description: 'Because you understand the relevance of data for decision making in business processes, we offer you the tools you need to unify data management, wherever it is produced and with the latest technologies.',
          icon_items: [{
              id: 0,
              src: '1.Congnitive_Service.png',
              txt: 'Cognitive Services'
            },
            {
              id: 1,
              src: '1.Data_Flow.png',
              txt: 'Data Flow'
            },
            {
              id: 2,
              src: '1.Data_Mining.png',
              txt: 'Data Mining'
            },
            {
              id: 3,
              src: '1.Datahub.png',
              txt: 'Datahub'
            },
            {
              id: 4,
              src: '1.Notebook.png',
              txt: 'Notebooks'
            },
            {
              id: 5,
              src: '1.Report_Engine.png',
              txt: 'Report Engine'
            }
          ]
        },
        {
          id: 1,
          title: '2. Connects the physical and virtual world',
          description: 'Go a step further and integrate the physical world into your digital solutions, from sensor data capture to edge analytics, merge the IT and OT worlds to develop business applications across the entire value chain.',
          icon_items: [{
              id: 0,
              src: '2.Device_Mamnagement.png',
              txt: 'Device Management'
            },
            {
              id: 1,
              src: '2.Digital_Twin.png',
              txt: 'Digital Twin'
            },
            {
              id: 2,
              src: '2.Edge_Engine.png',
              txt: 'Edge Engine'
            },
            {
              id: 3,
              src: '2.IoT_Broker.png',
              txt: 'IoT Broker'
            },
            {
              id: 4,
              src: '2.Synoptics.png',
              txt: 'Synoptics'
            },
            {
              id: 5,
              src: '2.workload_consolidation.png',
              txt: 'Workload consolidation'
            }
          ]
        },
        {
          id: 2,
          title: '3. Control and grow in a flexible way',
          description: 'The digital environment is vibrant and dynamic and you must ensure the scalability and security of the new software solutions from the proof of concept while you start to develop and test new applications, with ambition for the future.<br>Think Big, Start Small.',
          icon_items: [{
              id: 0,
              src: '3.API_Manager.png',
              txt: 'API Manager'
            },
            {
              id: 1,
              src: '3.Dashboards.png',
              txt: 'Dashboards'
            },
            {
              id: 2,
              src: '3.Digital_Brokers.png',
              txt: 'Digital Brokers'
            },
            {
              id: 3,
              src: '3.Flow_Engine.png',
              txt: 'Flow Engine'
            },
            {
              id: 4,
              src: '3.Geo_Services.png',
              txt: 'Geo Services'
            },
            {
              id: 5,
              src: '3.Identity_SSO.png',
              txt: 'Identity SSO'
            },
            {
              id: 6,
              src: '3.microservices.png',
              txt: 'Micro-services'
            },
            {
              id: 7,
              src: '3.Persintents.png',
              txt: 'Persistent'
            },
            {
              id: 8,
              src: '3.Rules_Engine.png',
              txt: 'Rules Engine'
            },
            {
              id: 9,
              src: '3.Semantic_Models.png',
              txt: 'Semantic Models'
            }
          ]
        },
        {
          id: 3,
          title: '4. Boost your business in a free way ',
          description: 'Access a container-based architecture, designed to guarantee you interoperability with the main IaaS suppliers and give you the freedom to create new solutions ensuring scalability and technological independence.',
          icon_items: [{
              id: 0,
              src: 'OpenShift.png'
            },
            {
              id: 1,
              src: 'Rancher.png'
            },
            {
              id: 2,
              src: 'Microsoft_Azure_Cloud_Computing.png'
            },
            {
              id: 3,
              src: 'AmazonWebservices_Logo.svg'
            },
            {
              id: 4,
              src: 'oracle_logo500x500.png'
            },
            {
              id: 5,
              src: 'Google_Cloud_.png'
            }
          ]
        },
        {
          id: 4,
          title: '5. Innovate in an open and community way',
          description: 'Join the Open Source development community and collaborate with other professionals who, like you, believe that together, sharing our knowledge, we can go further and make the latest technologies accessible to society.',
          icon_items: [{
            id: 0,
            src: 'opensource.png'
          }]
        },
        {
          id: 5,
          title: '6. It brings strength to the deployment of your applications',
          description: 'Complements the Open Source distribution with an Enterprise version in which we make sure everything is ready for the most critical business processes and allows the deployment of On Premise and On Cloud applications.',
          icon_items: [{
            id: 0,
            src: 'connect.png'
          }]
        }
      ],
      props_trust_title: 'They already trust Onesait Platform',
      trust_items: [
        {
        id: 0,
        src: 'acerinox.png'
        },
        {
          id: 1,
          src: 'airbus.png'
        },
        {
          id: 2,
          src: 'antewerk.png'
        },
        {
          id: 3,
          src: 'aspo.png'
        },
        {
          id: 4,
          src: 'azkar.png'
        },
        {
          id: 5,
          src: 'bancooccidente.png'
        },
        {
          id: 7,
          src: 'bsh.png'
        },
        {
          id: 8,
          src: 'caceressmartcity.png'
        },
        {
          id: 10,
          src: 'claro.png'
        },
        {
          id: 11,
          src: 'cpse.png'
        },
        {
          id: 12,
          src: 'devops.png'
        },
        {
          id: 13,
          src: 'dia.png'
        },
        {
          id: 14,
          src: 'ecoembes.png'
        },
        {
          id: 15,
          src: 'enaire.png'
        },
        {
          id: 16,
          src: 'ence.png'
        },
        {
          id: 17,
          src: 'endesa.png'
        },
        {
          id: 18,
          src: 'entet.png'
        },
        {
          id: 19,
          src: 'eputacion.png'
        },
        {
          id: 20,
          src: 'esa.png'
        },
        {
          id: 21,
          src: 'eu.png'
        },
        {
          id: 22,
          src: 'evacuate.png'
        },
        {
          id: 23,
          src: 'ficosa.png'
        },
        {
          id: 24,
          src: 'helsinki.png'
        },
        {
          id: 26,
          src: 'ibbva.png'
        },
        {
          id: 27,
          src: 'IT2rail.png'
        },
        {
          id: 28,
          src: 'las_palmas_smart_city.png'
        },
        {
          id: 29,
          src: 'logronyosmartcity.png'
        },
        {
          id: 30,
          src: 'musei_vaticani.png'
        },
        {
          id: 31,
          src: 'palenciasmartcity.png'
        },
        {
          id: 32,
          src: 'pascual.png'
        },
        {
          id: 33,
          src: 'repsol.png'
        },
        {
          id: 34,
          src: 'sena.png'
        },
        {
          id: 35,
          src: 'servicio_gallegosalud.png'
        },
        {
          id: 36,
          src: 'smartcity.png'
        },
        {
          id: 37,
          src: 'TIM.png'
        },
        {
          id: 38,
          src: 'wizink.png'
        },
        {
          id: 39,
          src: 'woldbank.png'
        }
      ],
      footer_col1: 'Onesait Platform®',
      footer_col2: 'Game Rules'
    },
    es: {
      responses: {
        code_200: {
          response_msg: 'El usuario ha sido registrado correctamente',
          response_btn: 'OK',
        },
        code_400: {
          response_msg: 'La dirección de correo electrónico no es válida. En esa fase solo pueden participar integrantes de Minsait.<br>Si quieres ser el primero en formar parte de la comunidad una vez esté abierta al publico. Apúntate aqui.',
          response_btn: 'Quiero participar',
        },
        code_406: {
          response_msg: 'Parece que ya te has registrado con este correo, estáte atento a tu email para recibir los siguietes pasos.',
          response_btn: 'OK',
        }
      },
      make_scroll: '&#60 más info &#62',
      cookie_message: '<p>Utilizamos cookies propias y de terceros para mejorar la experiencia del usuario a través de su navegación. Si continúa navegando entendemos que acepta su uso. <a href="/static/minsait/docs/minsait-cookiespolicy.pdf" target="_blank">Política de cookies</a></p>',
      logo_copy: 'Ayúdanos a construir una comunidad OpenSource, desde dentro.<br>Necesitamos a los mejores.<br>Únete a la revolución.',
      video_ptitle: 'Info',
      video_description: '<p>Queremos crear la plataforma <b>Opensource</b> de referencia, donde se comparten conocimientos de diversas disciplinas como <b>Big Data, Internet of Everything, Intelligencia Artificial...</br> y para conseguirlo necesitamos a los mejores.</b></p>',
      video_ptitle2: 'Onesait Platform<br><span>Impulsando la creación de nuevas soluciones<br>en la era digital.</span>',
      video_description2: 'Construye nuevas aplicaciones de negocio.',
      form_ptitle: 'formulario',
      form_fisrtP: 'Dinos quien eres para participar.',
      form_name: 'Nombre:',
      form_email: 'Email:',
      form_twitter: 'Twitter:',
      form_check_bases: 'Acepto las <a target="_blank" href="/static/minsait/docs/Bases_legales_Minsait_onesaitRevolution.pdf">bases de la competición</a>',
      form_inputvalue: 'Deja huella',
      form_contact: 'Si aun tienes dudas:',
      form_contact_btn: 'Contacta con nosotros',
      info_ptitle: 'Fases',
      info_description: '<p>Pasarás por dos fases de competición, una individual y otra en equipo.<br>Asistiendo a aun evento online donde se conocerán todos los detalles de la revolución.</p>',
      infoitems: [{
          order: 1,
          title: '1. Postulate',
          description: 'Retos individuales<br>como fase inicial.'
        },
        {
          order: 2,
          title: '2. WebEx',
          description: 'Te contaremos todo<br>sobre la revolución.'
        },
        {
          order: 3,
          title: '3. Compite en equipo',
          description: '2 semanas trabajando<br>en equipo para ganar.'
        },
        {
          order: 4,
          title: '4. Gana Premios',
          description: 'Solo los mejores conseguirán su premio en el afterwork y dejarán su huella.'
        }
      ],
      info_claim: 'Confiamos en nuestro talento interno para consolidar a Minsait como referente de la cultura abierta. Deja tu huella',
      ranking_ptitle: 'Ranking',
      ranking_description: '<p>Nuestros desarrolladores están<br>tratando de revolucionar Onesait Platform<br>Empieza la revolución</p>',
      ranking_btn_copy: 'Síguelo en Twitter',
      menu_left_copy: 'Una empresa de Indra',
      menuparticipabtn: 'Participa',
      menubtn: 'MENÚ',
      menu_links: {
        home: 'Inicio',
        rules: 'Reglas',
        purpose: 'Propósito',
        ranking: 'Ranking',
        webex: 'Desarrollador',
        contact: 'Contacto',
        blog: 'Blog'
      },
      reglas_ptitle: 'Reglas',
      reglas_items: [{
          id: '1',
          title: 'Regla 1',
          text: '<p>Solo podrán participar empleados de Minsait. Recordar que esta iniciativa es opcional y por tanto deberá desarrollarse después del horario laboral.</p>'
        },
        {
          id: '2',
          title: 'Regla 2',
          text: '<p>Hay 2 fases de la competición, una individual y otra en equipos.</p><p>En la fase individual los participantes irán acumulando puntos al ir completando pruebas y serán seleccionados por sus habilidades. Aquellos que consigan el mayor número de puntos formarán parte de los seleccionados y podrán pasar a la segunda fase.</p><p><b>¿Cómo acumulo puntos en la fase individual?</b></p><p>Es imprescindible que te registres en Github y Codewars con el correo corporativo con el que te has registrado a la iniciativa.</p><ol><li>Sigue en Twitter el perfil de la iniciativa <a href="https://twitter.com/onesaitplatform" target="_blank">@onesaitplatform</a>.<br>(5 puntos)</li><li>Sigue en Github con tu usuario de Minsait al usuario <a href="https://github.com/onesaitplatform/" target="_blank">onesaitplatform</a>.<br>(5 puntos)</li><li>Solicita en github una Pull Request en nuestro repositorio <a href="https://github.com/onesaitplatform/onesaitplatform-revolution" target="_blank">onesaitplatform-revolution</a>.<br>(10 puntos)</li><li> Completa con tu usuario de Minsait retos en la plataforma <a href="https://www.codewars.com" target="_blank">Codewars</a>. (Tantos puntos como kyus obtengas en el tiempo del concurso)</li></ol><p>En la fase de grupos, se configurarán los equipos y se asignará un mentor que les ayudará en su desarrollo. Se explicará en detalle el funcionamiento a través de un Webex a aquellos que consigan pasar a la segunda fase. </p><p><b>¿Cómo se evalúa la fase grupal?</b></p><ol><li>En base a la aportación a Onesait Platform</li><li>Dependiendo de la complejidad Tecnológica del desarrollo</li><li>Cómo aporta valor a la compañía</li><li>Trabajo en equipo con el mentor.</li></ol>'
        },
        {
          id: '4',
          title: 'Evento de presentación OpenSource',
          text: '<p>Los tres equipos finalistas serán trasladados a Madrid para acudir al evento de presentación de OpenSource.</p><p>Todos los participantes de Nivel 2 podrán asistir al evento de presentación corriendo a su cargo los gastos de transporte.</p>'
        }
      ],
      props_items: [{
          id: 0,
          title: '1. Crea una estrategia integral de datos',
          description: 'Porque entiendes la relevancia del dato para la toma de decisiones en los procesos de negocio, te ofrecemos las herramientas que necesitas para unificar la gestión del dato, allá donde se produzca y con las últimas tecnologías',
          icon_items: [{
              id: 0,
              src: '1.Congnitive_Service.png',
              txt: 'Cognitive Services'
            },
            {
              id: 1,
              src: '1.Data_Flow.png',
              txt: 'Data Flow'
            },
            {
              id: 2,
              src: '1.Data_Mining.png',
              txt: 'Data Mining'
            },
            {
              id: 3,
              src: '1.Datahub.png',
              txt: 'Datahub'
            },
            {
              id: 4,
              src: '1.Notebook.png',
              txt: 'Notebooks'
            },
            {
              id: 5,
              src: '1.Report_Engine.png',
              txt: 'Report Engine'
            }
          ]
        },
        {
          id: 1,
          title: '2. Conecta el mundo físico y el virtual',
          description: 'Da un paso mas allá e integra el mundo físico en tus soluciones digitales, desde la toma de datos de sensores hasta la analítica en el edge para fusionar los mundos IT y OT para desarrollar aplicaciones de negocio en toda la cadena de valor.',
          icon_items: [{
              id: 0,
              src: '2.Device_Mamnagement.png',
              txt: 'Device Management'
            },
            {
              id: 1,
              src: '2.Digital_Twin.png',
              txt: 'Digital Twin'
            },
            {
              id: 2,
              src: '2.Edge_Engine.png',
              txt: 'Edge Engine'
            },
            {
              id: 3,
              src: '2.IoT_Broker.png',
              txt: 'IoT Broker'
            },
            {
              id: 4,
              src: '2.Synoptics.png',
              txt: 'Synoptics'
            },
            {
              id: 5,
              src: '2.workload_consolidation.png',
              txt: 'Workload consolidation'
            }
          ]
        },
        {
          id: 2,
          title: '3. Controla y crece de una forma flexible',
          description: 'El entorno digital es vibrante y dinámico y debes asegurar la escalabilidad y seguridad de las nuevas soluciones software desde la prueba de concepto a la vez que te lanzas a desarrollar y testar nuevas aplicaciones, con ambición de futuro.<br>Think Big, Start Small.',
          icon_items: [{
              id: 0,
              src: '3.API_Manager.png',
              txt: 'API Manager'
            },
            {
              id: 1,
              src: '3.Dashboards.png',
              txt: 'Dashboards'
            },
            {
              id: 2,
              src: '3.Digital_Brokers.png',
              txt: 'Digital Brokers'
            },
            {
              id: 3,
              src: '3.Flow_Engine.png',
              txt: 'Flow Engine'
            },
            {
              id: 4,
              src: '3.Geo_Services.png',
              txt: 'Geo Services'
            },
            {
              id: 5,
              src: '3.Identity_SSO.png',
              txt: 'Identity SSO'
            },
            {
              id: 6,
              src: '3.microservices.png',
              txt: 'Micro-services'
            },
            {
              id: 7,
              src: '3.Persintents.png',
              txt: 'Persistent'
            },
            {
              id: 8,
              src: '3.Rules_Engine.png',
              txt: 'Rules Engine'
            },
            {
              id: 9,
              src: '3.Semantic_Models.png',
              txt: 'Semantic Models'
            }
          ]
        },
        {
          id: 3,
          title: '4. Impulsa tu negocio de una forma libre',
          description: 'Accede a una arquitectura basada en contenedores, diseñada para garantizarte la interoperabilidad con los principales proveedores de IaaS y darte la libertad de crear nuevas soluciones asegurando la escalabilidad y la independencia tecnológica.',
          icon_items: [{
              id: 0,
              src: 'OpenShift.png'
            },
            {
              id: 1,
              src: 'Rancher.png'
            },
            {
              id: 2,
              src: 'Microsoft_Azure_Cloud_Computing.png'
            },
            {
              id: 3,
              src: 'AmazonWebservices_Logo.svg'
            },
            {
              id: 4,
              src: 'oracle_logo500x500.png'
            },
            {
              id: 5,
              src: 'Google_Cloud_.png'
            }
          ]
        },
        {
          id: 4,
          title: '5. Innova de una forma abierta y en comunidad',
          description: 'Únete a la comunidad de desarrollo Open Source y colabora con otros profesionales que, como tú, creen que juntos, compartiendo nuestro conocimiento, podemos llegar más lejos y hacer accesible a la sociedad las últimas tecnologías.',
          icon_items: [{
            id: 0,
            src: 'opensource.png'
          }]
        },
        {
          id: 5,
          title: '6. Aporta solidez al despliegue de tus aplicaciones',
          description: 'Complementa la distribución Open Source con una versión Enterprise en la que nos aseguramos de que todo esté listo para los procesos de negocio más críticos y permitimos el despliegue de aplicaciones On Premise y On Cloud.',
          icon_items: [{
            id: 0,
            src: 'connect.png'
          }]
        }
      ],
      props_trust_title: 'Ellos ya confían en Onesait Platform',
      trust_items: [{
          id: 0,
          src: 'acerinox.png'
        },
        {
          id: 1,
          src: 'airbus.png'
        },
        {
          id: 2,
          src: 'antewerk.png'
        },
        {
          id: 3,
          src: 'aspo.png'
        },
        {
          id: 4,
          src: 'azkar.png'
        },
        {
          id: 5,
          src: 'bancooccidente.png'
        },
        {
          id: 7,
          src: 'bsh.png'
        },
        {
          id: 8,
          src: 'caceressmartcity.png'
        },
        {
          id: 10,
          src: 'claro.png'
        },
        {
          id: 11,
          src: 'cpse.png'
        },
        {
          id: 12,
          src: 'devops.png'
        },
        {
          id: 13,
          src: 'dia.png'
        },
        {
          id: 14,
          src: 'ecoembes.png'
        },
        {
          id: 15,
          src: 'enaire.png'
        },
        {
          id: 16,
          src: 'ence.png'
        },
        {
          id: 17,
          src: 'endesa.png'
        },
        {
          id: 18,
          src: 'entet.png'
        },
        {
          id: 19,
          src: 'eputacion.png'
        },
        {
          id: 20,
          src: 'esa.png'
        },
        {
          id: 21,
          src: 'eu.png'
        },
        {
          id: 22,
          src: 'evacuate.png'
        },
        {
          id: 23,
          src: 'ficosa.png'
        },
        {
          id: 24,
          src: 'helsinki.png'
        },
        {
          id: 26,
          src: 'ibbva.png'
        },
        {
          id: 27,
          src: 'IT2rail.png'
        },
        {
          id: 28,
          src: 'las_palmas_smart_city.png'
        },
        {
          id: 29,
          src: 'logronyosmartcity.png'
        },
        {
          id: 30,
          src: 'musei_vaticani.png'
        },
        {
          id: 31,
          src: 'palenciasmartcity.png'
        },
        {
          id: 32,
          src: 'pascual.png'
        },
        {
          id: 33,
          src: 'repsol.png'
        },
        {
          id: 34,
          src: 'sena.png'
        },
        {
          id: 35,
          src: 'servicio_gallegosalud.png'
        },
        {
          id: 36,
          src: 'smartcity.png'
        },
        {
          id: 37,
          src: 'TIM.png'
        },
        {
          id: 38,
          src: 'wizink.png'
        },
        {
          id: 39,
          src: 'woldbank.png'
        }
      ],
      footer_col1: 'Onesait Platform®',
      footer_col2: 'Reglas del juego',
    }
  }
}

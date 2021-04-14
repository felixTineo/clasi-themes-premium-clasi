export default (data) => {
  return(
    {
      builderId: data._id ? data._id : "5fb2a5f3ea262c2e14e462ad",
      typeId: data.user ? "user" : "office",
      officeId: data.user ? data.user : data.office,
      primaryColor: data.primaryColor ? data.primaryColor : "#00aeef",
      address: data.address ? data.address : "La Capitanía 80, Las Condes, Región Metropolitana",
      email: data.email ? data.email : "paola.munoz@pmasesoriasinmobiliarias.cl",
      facebook: data.facebook ? data.facebook : "https://www.facebook.com/PAOLA-MU%C3%91OZ-Asesora-inmobiliaria-1019102384919138",
      twitter: data.twitter ? data.twitter : "https://twitter.com",
      instagram: data.instagram ? data.instagram : "https://www.instagram.com/pmasesoriasinmobiliarias/",
      favicon: data.favicon ? data.favicon : require("../images/icon.png"),      
      lat: data.lat ? data.lat : "-33.410167",
      lng: data.lng ? data.lng : "-70.655265",
      logo: data.logo ? data.logo : require("../images/logo-light.jpg"),
      logoDark: data.logoDark ? data.logoDark : require("../images/logo-light.jpg"),
      movil: data.movil ? data.movil : "",
      phone: data.phone ? data.phone : "(+569) 4265 6968",
      footerText: data.footerText ? data.footerText : "Somos una empresa con más de 1.400 clientes satisfechos.",
      home:{
        hero: {
          background: data.home && data.home.hero && data.home.hero.background ? data.home.hero.background : require("../images/template-home-hero-background.jpg"),
          title: data.home && data.home.hero && data.home.hero.title ? data.home.hero.title : "Tenemos propiedades <br /> exclusivas pensadas para tí"
        },        
        properties: {
          title: data.home && data.home.properties && data.home.properties.title ? data.home.properties.title : "Contamos con una selección exclusiva de propiedades.",
          maxProperties: data.home && data.home.properties && data.home.properties.maxProperties ? data.home.properties.maxProperties : 9,
          footer: data.home && data.home.properties && data.home.properties.footer ? data.home.properties.footer : "Estas son solo algunas de las propiedades que tenemos para ofrecerte",
          buttonText: data.home && data.home.properties && data.home.properties.buttonText ? data.home.properties.buttonText : "Ver más"
        },        
        about: {
          banner: {
            image: data.home && data.home.about && data.home.about.banner && data.home.about.banner.image ? data.home.about.banner.image : require("../images/template-home-about-hero-background.jpg"),
            title: data.home && data.home.about && data.home.about.banner && data.home.about.banner.title ? data.home.about.banner.title : "Somos una empresa con más de 1.400 clientes satisfechos",
            subTitle: data.home && data.home.about && data.home.about.banner && data.home.about.banner.subTitle ? data.home.about.banner.subTitle : "Somos una empresa inmobiliaria destinada a satisfacer las necesidades de nuestros clientes compradores y vendedores, asegurando un proceso de negociación confiable, contamos con personal altamente calificado basándonos en herramientas tecnológicas que nos permite tener un mayor alcance en el mercado.",
            buttonText: data.home && data.home.about && data.home.about.banner && data.home.about.banner.buttonText ? data.home.about.banner.buttonText : "Conózcanos"
          }
        },  
        services: {
          items: data.home && data.home.services && data.home.services.items.length ? data.home.services.items : [
            {
              title: "Compras",
              description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium fringilla ex at hendrerit"
            },
            {
              title: "Arriendo",
              description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium fringilla ex at hendrerit"
            },
            {
              title: "Compras",
              description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium fringilla ex at hendrerit"
            }
          ]
        },  
        reviews: {
          items: data.home && data.home.reviews && data.home.reviews.items.length ? data.home.reviews.items : [
            {
              id: null,
              review: "La atención profesional y personalizada de Paola es algo que se agradece totalmente. Dejar en las manos la venta de mi departamento fue la mejor decisión que pude tomar. Se vendió en un excelente precio y en un buen plazo, totalmente recomendable.",
              author: "Karen Báez."
            },
            {
              id: null,
              review: "Excelente servicio, todo fue un proceso claro y transparente. Muy recomendable Paola Muñoz.",
              author: "Luis Chadwick."
            },
            {
              id: null,
              review: "Necesitaba encontrar una propiedad con algunas características un poco especiales, gracias al servicio de PM Asesorías, pude concretar mi proyecto, muchas gracias.",
              author: "Iñigo Bustamante."
            },
            {
              id: null,
              review: "Encargué la venta de mi propiedad, todo el proceso fue muy bien llevado y se vendió bastante rápido, muy buena experiencia.",
              author: "Hernán le Roux Fossatti."
            }
          ]
        }                    
      },
      about:{
        hero: {
          background: data.about && data.about.hero && data.about.hero.background ? data.about.hero.background : require("../images/template-about-hero-background.jpg"),
          title: data.about && data.about.hero && data.about.hero.title ? data.about.hero.title : "Un equipo de profesionales especializados en el sector inmobiliario."
        },
        history: {
          background: data.about && data.about.history && data.about.history.background ? data.about.history.background : require("../images/template-about-history-background.jpg"),
          description: data.about && data.about.history && data.about.history.description ? data.about.history.description : "<p>Somos una empresa inmobiliaria destinada a satisfacer las necesidades de nuestros clientes compradores y vendedores, asegurando un proceso de negociación confiable, contamos con personal altamente calificado basándonos en herramientas tecnológicas que nos permite tener un mayor alcance en el mercado.<p/>",
          title: data.about && data.about.history && data.about.history.title ? data.about.history.title : "Nuestra Historia"
        },
        description: {
          items: data.about && data.about.description && data.about.description.items.length ? data.about.description.items : [
            {
              title: "PROFESIONALIDAD",
              description: "Agencias consolidadas en el mercado son garantía de éxito y dan mucha tranquilidad a los futuros compradores.Cada vez son más los índices de satisfacción y las encuestas que favorecen esta actividad. Encuestas sobre calidad de servicio han arrojado una muy buena calificación a inmobiliarias formales. Una razón para elegir  una inmobiliaria es la formalidad a la hora de dejar en manos de otros su inmueble."
            },
            {
              title: "NEGOCIACIÓN",
              description: "Los asesores inmobiliarios tienen especialmente desarrolladas las capacidades para negociar, por lo que es más probable que consigan mejores condiciones de venta de las que lograrías tú. Además, así te evitas pasar por algunos malos tragos derivados de este tipo de acuerdos."
            },
            {
              title: "TIEMPO",
              description: "Dejar el proceso de compra en manos de una inmobiliaria te evitará muchos dolores de cabeza. Visitas innecesarias, llamadas telefónicas, tramitación de papeles, largos tiempo de espera y muchos otros asuntos. Todo eso queda en manos del asesor inmobiliario, tú tan sólo tendrás que escoger la propiedad que te interesa y desentenderte de lo demás."
            },
            {
              title: "ASESORAMIENTO LEGAL Y FINANCIERO",
              description: "Al ser especialistas en transacciones inmobiliarias, los asesores pueden brindarte información en temas legales y económicos. También pueden gestionar los trámites ante notarios y abogados, figuras importantes en este tipo de procesos y que mucha gente desconoce hasta que no se encuentra en una situación así."
            },
            {
              title: "ESPECIALISTAS",
              description: "Al conocer el sector inmobiliario aporta una seguridad extra a quienes quieren adquirir una vivienda. Las agencias pueden encontrar ofertas interesantes, dar con los propietarios adecuados, buscar zonas que sean una buena inversión y muchas otras cosas más, logrando de esta forma la optimización de los recursos confiados a nuestra empresa. Es lo que brinda la experiencia y la personalización del negocio."
            }
          ]
        },
        stats: {
          proffesionals: data.about && data.about.stats && data.about.stats.proffesionals ? data.about.stats.proffesionals : 70,
          properties: data.about && data.about.stats && data.about.stats.properties ? data.about.stats.properties : 1000,
          years: data.about && data.about.stats && data.about.stats.years ? data.about.stats.years : 50,
          transactions: data.about && data.about.stats && data.about.stats.transactions ? data.about.stats.transactions : 500
        },
        team: {
          visible: true,
          items: data.about && data.about.team && data.about.team.items.length ? data.about.team.items : [
            {
              id: "user-1",
              avatar: require("../images/template-team-member-1.jpg"),
              cv: "Ingeniero Comercial, Master en Finanzas. Inversor inmobiliario, con 6 años de experiencia en Banca, Mesa de Dinero. 6 años en el corretaje de propiedades, especializado en el manejo de cartera de propiedades. ",
              email: "usuario1@example.com",
              fullName: "Jhoana Doe",
              phone: "+56 9 5555 5555"
            },
            {
              id: "user-2",
              avatar: require("../images/template-team-member-2.jpg"),
              cv: "Ingeniero Comercial, Master en Finanzas. Inversor inmobiliario, con 6 años de experiencia en Banca.",
              email: "usuario2@example.com",
              fullName: "Jhon Doe",
              phone: "+56 9 5555 5555"
            },
            {
              id: "user-3",
              avatar: require("../images/template-team-member-3.jpg"),
              cv: "Ingeniero Comercial, Master en Finanzas. Inversor inmobiliario, con 6 años de experiencia en Banca, Mesa de Dinero. 6 años en el corretaje de propiedades, especializado en el manejo de cartera de propiedades. ",
              email: "usuario3@example.com",
              fullName: "James Doe",
              phone: "+56 9 5555 5555"
            }                        
          ]
        },
        ubication: {
          title:  data.about && data.about.ubication && data.about.ubication.title ? data.about.ubication.title : "¿Necesitas vender, arrendar o comprar una propiedad? Somos tu socio perfecto"
        }
      },
      contact: {
        map: {
          title: data.contact && data.contact.map && data.contact.map.title ? data.contact.map.title : "Encuéntranos en Sucursal Chicureo Camino a Chicureo 2 km. esquina Los Ingleses Colina - Santiago",
          subTitle: data.contact && data.contact.map && data.contact.map.subTitle ? data.contact.map.subTitle : "234"
        },
        title: data.contact && data.contact.title ? data.contact.title : "¿Dudas? ¿Consultas? Estamos aquí para ayudarlo.",
        subTitle: data.contact && data.contact.subTitle ? data.contact.subTitle : "Envienos un mensaje y uno de nuestros asesores se pondra en contacto a la brevedad"        
      },
    }
  )
}
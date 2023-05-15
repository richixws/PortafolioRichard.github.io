import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  //baseUrl = environment.baseUrl;

  constructor(
    private http: HttpClient
  ) { }

  projects:any = [
    {
      id:1,
      title: 'Convertidor Divisa Java Spring boot - Microservicios - Angular',
      desc:'',
      livedemo: '',
      githurl:'https://github.com/richixws/Convertidor_Divisa',
      mediumlink:'',
      imgUrl:'assets/images/convertidor.jpg',
      tech: ', Spring Boot, Angular 12, Microservicios, Spring Cloud '

    },

    {
      id:2,
      title: 'Sistema Facturacion Java Spring boot - Angular',
      desc:'',
      livedemo: '',
      githurl:'https://github.com/richixws/Frontend-Angular-Sistema-Facturacion',
      mediumlink:'',
      imgUrl:'assets/images/ventas.jpg',
      tech: 'Angular 8 , Spring Boot'

    },
    {
      id:3,
      title: 'Microservicio Métricas Piggy',
      desc:'',
      livedemo: '',
      githurl:'https://github.com/richixws/piggymetrics',
      mediumlink:'',
      imgUrl:'assets/images/piggy.png',
      tech: 'Spring Boot, Spring Cloud, Microservicios, Java, Azure'

    },
    
   /** 
    {
      id: 1,
      title: 'Read data from Google spreadsheet in Angular',
      desc: '',
      livedemo: 'https://mehulk05.github.io/MyShop/#/',
      githurl: 'https://github.com/mehulk05/MyShop',
      mediumlink: 'https://itnext.io/read-data-from-google-spreadsheet-in-angular-209ee74b6cb4',
      imgUrl: 'assets/images/z1.png',
      tech: 'Angular 10 , Google SpreadsheetApi'
    },

    {
      id: 2,
      title: 'Blog App Using MERN Stack',
      desc: '',
      livedemo: 'https://mehulk05.github.io/Blogapp-using-MERN/#/',
      githurl: 'https://github.com/mehulk05/Blogapp-using-MERN',
      mediumlink: 'https://itnext.io/blog-app-using-mern-stack-b0b4d69d7ea1',
      imgUrl: 'assets/images/z26.png',
      tech: 'React, Node, MongoDB, Express'
    },


    {
      id: 3,
      title: 'CRUD operation using MEAN stack',
      desc: '',
      livedemo: 'https://mehulk05.github.io/Blog-using-mean/#/',
      githurl: 'https://github.com/mehulk05/Blog-using-mean',
      mediumlink: 'https://itnext.io/crud-operation-using-mean-stack-7dfa2f51ec8c',
      imgUrl: 'assets/images/z27.png',
      tech: 'Angular 10, Node, MongoDB, Express'
    },

    {
      id: 4,
      title: 'Multiroom Chat Application in Node JS',
      desc: '',
      livedemo: 'https://chatapp-using-node.herokuapp.com/',
      githurl: 'https://github.com/mehulk05/Chat-app-using-Nodejs',
      mediumlink: 'https://medium.com/weekly-webtips/building-a-multiroom-chat-application-in-node-js-8a8adca5acf2',
      imgUrl: 'assets/images/z23.png',
      tech: 'Node JS,Socket IO'
    },


    {
      id: 5,
      title: 'Integrate Medium Blogs on your React App',
      desc: '',
      livedemo: 'https://mehulk05.github.io/Medium-Blog-On-React-App#/',
      githurl: 'https://github.com/mehulk05/Medium-Blog-On-React-App',
      mediumlink: 'https://javascript.plainenglish.io/how-to-add-medium-blogs-on-your-react-app-a3898a729aad',
      imgUrl: 'assets/images/z4.png',
      tech: 'React JS'
    },



    {
      id: 6,
      title: 'News App using ReactJS (Parsing XML to JSON)',
      desc: '',
      livedemo: 'https://mehulk05.github.io/NewsApp-using-React',
      githurl: 'https://github.com/mehulk05/NewsApp-using-React',
      mediumlink: 'https://codeburst.io/news-app-using-reactjs-f9752d7ab6ce',
      imgUrl: 'assets/images/z24.png',
      tech: 'React JS, XMl to JSON'
    },



    {
      id: 7,
      title: 'Medium-Like Blog App Using Angular 9 and Firebase',
      desc: '',
      livedemo: 'https://mehulk05.github.io/Blog-Book/',
      githurl: 'https://github.com/mehulk05/Blog-Book',
      mediumlink: 'https://codeburst.io/blogging-app-using-angular-9-and-firebase-98e36168d850',
      imgUrl: 'assets/images/z21.png',
      tech: 'HTML, Bootstrap, CSS, Angular-9, Firebase'
    },



    {
      id: 8,
      title: 'COVID 19 Tracker (Statistics) app Using Angularr',
      desc: '',
      livedemo: 'https://mehulk05.github.io/COVOID-19/',
      githurl: 'https://github.com/mehulk05/COVOID-19',
      mediumlink: 'https://codeburst.io/covoid-19-tracker-statistics-app-using-angular-2358347b3d1f',
      imgUrl: 'assets/images/z2.png',
      tech: 'Angular 10 ,Bootstrap,Javascript'
    },


    {
      id: 9,
      title: 'Weather App with React',
      desc: '',
      livedemo: 'https://mehulk05.github.io/React-Weather/',
      githurl: 'https://github.com/mehulk05/React-Weather-App',
      mediumlink: 'https://medium.com/analytics-vidhya/weather-app-with-react-adaa7268bbdb',
      imgUrl: 'assets/images/z9.png',
      tech: 'React, Open MAp Api'
    },


    {
      id: 10,
      title: 'Spring Boot + Angular 8 CRUD Example',
      desc: '',
      livedemo: 'https://github.com/mehulk05/Spring-Boot-Angular-8-CRUD-Example',
      githurl: 'https://github.com/mehulk05/Spring-Boot-Angular-8-CRUD-Example',
      mediumlink: 'https://medium.com/analytics-vidhya/spring-boot-angular-8-crud-example-8aeafd47b54',
      imgUrl: 'assets/images/z28.png',
      tech: 'Angular8, Java ,Hibernate'
    },
   **/
  /** 
    {
      id: 11,
      title: 'Personal Portfolio Using Angular',
      desc: '',
      livedemo: 'https://personal-portfolio0320.000webhostapp.com/',
      githurl: 'https://github.com/mehulk05/Personal-Portfolio-Angular-Updated',
      mediumlink: 'https://javascript.plainenglish.io/personal-portfolio-using-angular-8-and-bootstrap-5dde6fc7cf9b',
      imgUrl: 'assets/images/z11.png',
      tech: 'Angular ,Bootstrap'
    },


    {
      id: 12,
      title: 'Personal Portfolio Using Django',
      desc: '',
      livedemo: 'https://personal-portfolio0320.000webhostapp.com/',
      githurl: 'https://github.com/mehulk05/My-Personal-Portfolio',
      mediumlink: 'https://mehulkothari05.medium.com/personal-portfolio-using-django-dba49c355905',
      imgUrl: 'assets/images/z12.png',
      tech: 'Django'
    },

    {
      id: 13,
      title: 'Movie Success Prediction',
      desc: '',
      livedemo: 'https://mehulkothari05.medium.com/',
      githurl: 'https://github.com/mehulk05',
      mediumlink: 'https://mehulkothari05.medium.com/movie-success-prediction-a67d871a7b1',
      imgUrl: 'assets/images/z13.png',
      tech: 'Python, Machine Learning, Django Framework.'
    },

    {
      id: 14,
      title: 'Matrimonial Website',
      desc: '',
      livedemo: 'https://mehulkothari05.medium.com/',
      githurl: 'https://github.com/mehulk05/Matrimonial-Website.git',
      mediumlink: 'https://mehulkothari05.medium.com/matrimonial-website-9cd5247f477d',
      imgUrl: 'assets/images/z14.png',
      tech: 'HTML, CSS, Bootstrap, Jquery'
    },
   **/
  ]
  about2 = `Analista Desarrollador Java con 3+ años de experiencia .
  experiencia y conocimientos en  el diseño y desarrollo de  aplicaciones  web
  utilizando la tecnología Java,  Spring  Boot, Microservicios, Jee  y base de datos.
  Sólidos conocimientos en programación y soporte de aplicaciones web orientado al
  cliente.
  trabajo bajo la metodologuias aguiles.`
 // Expertise in Angular 2+ All versions, Javascript and UI with Responsive Designs .
 // Have good understanding of Python, Jquery, Bootstrap, MongoDB, Firebase, and MYSQL`

  about = "Amante de la innovación y todo lo relacionado para generar nuevos conocimientos. Enfrenta los problemas con una sonrisa y resolverlos lo antes posible. Muy calculado sobre el tiempo que dedico y el trabajo que realizo"
  //resumeurl = "https://drive.google.com/file/d/1XY0xlYDX8aZA1KwCnnjH6Y3G4iTWcV-D/view?usp=sharing"
  resumeurl ="https://drive.google.com/file/d/1v_eXgbvuq23qVfxmpWVV-JPAR4LZ4vbm/view?usp=share_link"

  skillsData: any = [
    {
      'id': '1',
      'skill': 'JAVA',
      'progress': '85%'
    },
    {
      'id': '2',
      'skill': 'SPRING BOOT, SPRING DATA, SPRING SECURITY',
      'progress': '80%'
    },
    {
      'id': '3',
      'skill': 'MICROSERVICIOS,DEVOPS',
      'progress': '50%'
    },
    {
      'id': '4',
      'skill': 'ORACLE,SQL,MYSQL,MONGO,AZURE',
      'progress': '75%'
    },
    {
      'id': '5',
      'skill': 'ANGULAR 8+',
      'progress': '75%'
    },
    {
      'id': '6',
      'skill': 'HTML, CSS, JAVASCRIPT',
      'progress': '70%'
    }
  ];


  educationData: any = [
    {
      'id': '1',
      'from_to_year': '2015 - 2019',
      'education': 'Bachelor\'s Degree',
      'stream': 'Bachelor of Engineering',
      'info': `Aditya Silver Oak Institute is GTU Affiliated and ranks 7th in Gujurat
Completed B.E in Computer Engineering with 9.54 CGPA.  
Won the Best Student Award 3 times for excellent Academic records at College. 
Maintained above 9.1 spi in every semester of college academic .`,
      'institution': 'ADITYA SILVER OAK INSTITUTE OF TECHNOLOGY, AHMEDABAD'
    },
    {
      'id': '2',
      'from_to_year': '2013 - 2015',
      'education': 'Higher Secondary',
      'stream': 'Science and Mathematics',
      'institution': 'GYANDEEEP VIDHYALAYA,AHMEDABAD',
      'info': `The High School was mainly focus on the bases of science, mathematics, and Chemistry
There was also a good base on physics, mathematics and chemistry.
Completed my high school with 78%.`
    },
    {
      'id': '3',
      'from_to_year': '2012 - 2013',
      'education': 'Secondary  School',
      'stream': 'Science and Mathematics',
      'institution': 'GYANDEEEP VIDHYALAYA,AHMEDABAD',
      'info': `The Secondary aims at Maths , English , Science, Social Science, Litrature and Languages.
Completed my Secondary school with 84%.`
    }
  ];
    exprienceData: any = [
    {
      id: 4,
      company: 'Hermes Transportes Blindados',
      location: 'Lima',
      timeline: 'Mayo 2021 - Enero 2022',
      role: 'Analista Programador Java',
      work: `Proyecto; Sistema Hermetic que permite visualizar las transacciones de los clientes realizados
      Realice el análisis desarrollo e implementación de los modulo Hermetic con 
      framework Spring, Hibernate , Spring Jpa, Spring Rest, para la seguridad se utilizó 
      Jwt y Auth .
      Realice la estimación para ejecutar requerimientos, evolutivos e incidencias .
      Participación en todas las fases de desarrollo de software .
      Preparación de los documentos de diseño funcional, diseño técnico, plan de 
      pruebas y documentos de pase .
      Despliegue de la solución construida en los ambientes Desarrollo y QA .
      Desarrollo de aplicaciones web y webservices REST y SOAP .
      Technologias :  Java 8, Spring Boot,Jwt, Auth 2.0, Hibernate, Jpa, Postman, Oracle 11g, Git,
      Junit, Mockito, Jira, Slack, WebLogic`
      
    },
    {
      id: 3,
      company: 'Everis Perú S.A.C',
      location: 'Lima',
      timeline: 'Marzo 2020 - Octubre 2020',
      role: 'Software Developer Backend Java',
      work: `
      Diseñe y desarrolle los microservicios de la API de gestión de eventos RESTFul utilizando Spring data Rest(Hibernate) .
      Escribí pruebas unitarias y de integración(testing) a los distintos microservicios usando Junit, Mockito y Spring Mvc 
      Simulado .
      Integrar los microservicios con la base de datos Relacionar MySQl se utilizo Spring Jpa e Hibernate .
      Dockerize las diferentes aplicaciones realizadas y la implementé en Azure .
      Se realizo la documentación de Apis con Swagger .
      Utilización Maven como manejadores de dependencias .
      Trabajé con el equipo de DevOps en Azure para crear una canalización de entrega continua
      Despliegue en los diferentes ambientes de desarrollo y calidad .
      Technologias : Spring Boot, Java, Microservicios,MongoDB, Azure, Junit, Mockito. `
    },

    {
      id: 2,
      company: 'Diresa Lima',
      location: 'Huacho',
      timeline: 'Febrero 2019 - Diciembre 2019',
      role: 'Auxiliar Sistemas',
      work: ` 
      Desarrolle, implemente y realice el mantenimiento del modulo del sistema web SAMU de Inventario en atención al
      requerimiento . 
      Participe en el análisis y diseño de la base de datos del sistema en coordinación con el jefe de área Funcionales
      de desarrollo tecnológico . 
      Elabore, revise y corregí los manuales técnicos y de usuarios del aplicativo web desarrollado . 
      Realizar pruebas de los sistemas web para su posterior pase a producción .
      Despliegue en los ambientes de desarrollo y producción .
      Las demás funciones que le asigne el jefe inmediato .
      Technologias : Spring Framework, Java8, Mysql, Angular. 
  `
    },
 
  /**   
    {
      id: 1,
      company: 'Tata Consultancy Services',
      location: 'Gandhinagar and Pune',
      timeline: 'June 2019 - Jan 2021',
      role: 'Assistant System Engineer Trainee',
      work: `Technologies : Angular , JavaSpring Boot , SQL. Apache Solr . 
  
  Project 1 : Worked on uploading two excel sheets with bulk of data and finding the matches for each business . 
  
  Project 2 : Worked on indexing the search results inside the application with bulk of data using Apache Solr and configuring the server with cron jobs and shell scripts . 
  
  Worked on ranking the search results based on various criteria,features and delivering the accurate results based on generated scores.
  `
    },
  **/

  ]
  // contactus(data: any): Observable<any> {
  //   return this.http.post(this.baseUrl + 'contact', data);
  // }

  skills(): Observable<any> {
    // return this.http.get(this.baseUrl + 'skills');
    return this.skillsData;
  }

  getProjects(): Observable<any> {
    // return this.http.get(this.baseUrl + 'skills');
    return this.projects;
  }
  education(): Observable<any> {
    // return this.http.get(this.baseUrl + 'education');
    return this.educationData;
  }

  exprience(): Observable<any> {
    // return this.http.get(this.baseUrl + 'exprience');
    return this.exprienceData;
  }
}

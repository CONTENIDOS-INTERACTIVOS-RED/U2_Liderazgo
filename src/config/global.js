export default {
  global: {
    numeroUnidad: '2',
    tituloUnidad: 'Roles dentro de una organización',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Roles organizacionales y factor humano',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Identificación de roles y responsabilidades',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'El factor humano como eje estratégico',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Inteligencia emocional y gestión de conflictos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Componentes de la inteligencia emocional',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Inteligencia emocional en la toma de decisiones ',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Bienestar organizacional y coaching',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Identificación de factores psicosociales y estrés laboral',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Estrategias de intervención con enfoque en coaching',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Lazzati, S. C. & Tailhade, M. (2019). Liderazgo gerencial: ( ed.). Ediciones Granica.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/151212',
    },
    {
      referencia:
        'Gómez Moldes, J. (2019). Liderazgo educacional: ( ed.). Editorial Académica Universitaria (Edacun).',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/151748',
    },
    {
      referencia:
        'Rodríguez Aranday, F. (2024). Liderazgo transformador: (1 ed.). Instituto Mexicano de Contadores Públicos.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/280488',
    },
    {
      referencia:
        'Lapuente Álvarez, I. (2020). Liderazgo y rendimiento deportivo: ( ed.). Wanceulen Editorial.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/175840',
    },
    {
      referencia:
        'Siliceo Aguilar, A. (2021). Liderazgo: imperativo ético: ( ed.). Editorial Miguel Ángel Porrúa.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/191645',
    },
    {
      referencia:
        'Paladino, M. Debeljuh, P. & Delbosco, P. (2019). Integridad: un liderazgo diferente: ( ed.). LID Editorial Empresarial.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/199881',
    },
    {
      referencia:
        'López González, J. (Coord.), Picazo Villaseñor, N. (Coord.) & Martínez, E. A. (Coord.). (2023). Liderazgo de acción positiva: (1 ed.). Ediciones Octaedro, S.L.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/233426',
    },
    {
      referencia:
        'Villa Sánchez, A. (2024). 13 perspectivas del liderazgo: (1 ed.). Dykinson.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/279524',
    },
    {
      referencia:
        'Villace Fernández, C. (2024). El liderazgo y el gobierno estratégico de las universidades: (1 ed.). Editorial Universidad de Burgos.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/255023',
    },
    {
      referencia:
        'Rojas, Á. (2022). El eslabón perdido del liderazgo 4.0: (1 ed.). Bubok Publishing S.L.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/260284',
    },
    {
      referencia:
        'Udaondo, M. (2020). Comunica: las claves de la comunicación para el liderazgo: (1 ed.). LID Editorial España.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/270018',
    },
    {
      referencia:
        'Doménech, P. (2024). Liderazgo Kumano: una nueva propuesta para dirigir: (1 ed.). Bubok Publishing S.L.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/280214',
    },
    {
      referencia:
        'Köhler Peláez, M. (2022). Comunicación + Liderazgo: un enfoque constructivista por competencias: ( ed.). Grupo Editorial Éxodo.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/207663',
    },
    {
      referencia:
        'Labrador, M. J. (Coord.), Rodríguez, A. (Coord.) & Betzhold, J. (Coord.). (2024). Liderazgo y transformación en la comunicación estratégica, marketing y negocios: (1 ed.). RIL editores.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/281464',
    },
    {
      referencia:
        'Guilera, L. (2021). Competencias directivas: claves para la gestión y el liderazgo (2a. Ed.): ( ed.). Marge Books.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/175253',
    },
    {
      referencia:
        'Reza Trosino, J. C. (2019). El gerente efectivo: los fundamentos de la administración, el trabajo en equipo y el liderazgo: (1 ed.). Universidad Nacional Autónoma de México (UNAM).',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/228831',
    },
    {
      referencia:
        'Goldverg, D. (2024). Liderazgo para los tiempos actuales: nuevos paradigmas y habilidades de coaching: (1 ed.). Ediciones Granica.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/253130',
    },
    {
      referencia:
        'De Arco Paternina, L. K. Santana Galindo, P. V. & Gómez, Y. V. (2022). Habilidades blandas para el profesional del siglo XXI (Soft skills): (1 ed.). Corporación Universitaria Minuto de Dios.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/232097',
    },
    {
      referencia:
        'Rey Romero, M. R. & Peña Lapeira, C. J. (2021). Las Competencias Blandas en el emprendimiento: (1 ed.). Corporación Universitaria Minuto de Dios.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/231775',
    },
    {
      referencia:
        'Gonzalez Molina, M. G. (Il.) & Calixto Sandoval, N. P. (Il.). (2024). Desarrolla tus habilidades y potencia tu vida: (1 ed.). Editorial Politécnico Grancolombiano.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/279920',
    },
    {
      referencia:
        'Instituto Nacional de Seguridad y Salud en el Trabajo (INSST). (2024). Riesgos Laborales Psicosociales.',
      link: 'https://www.insst.es/materias/riesgos/riesgos-psicosociales',
    },
    {
      referencia:
        'Instituto Nacional de Seguridad y Salud en el Trabajo (INSST). (2024). Estrés laboral.',
      link:
        'https://www.insst.es/materias/riesgos/riesgos-psicosociales/estres-laboral',
    },
    {
      referencia:
        'El País. (2025, mayo 3). Las bajas laborales por salud mental no paran de crecer: sanidad y educación, los sectores más afectados.',
      link:
        'https://elpais.com/sociedad/2025-05-03/las-bajas-laborales-por-salud-mental-no-paran-de-crecer-sanidad-y-educacion-los-sectores-mas-afectados.html',
    },
    {
      referencia:
        'Superintendencia de Seguridad Social (SUSESO). (2024). Cuestionario de Evaluación de Riesgos Psicosociales en el Trabajo.',
      link: 'https://www.suseso.cl/606/w3-article-19640.html',
    },
    {
      referencia:
        'Secretaría del Trabajo y Previsión Social (STPS). (2024). Norma Oficial Mexicana NOM-035-STPS-2018, Factores de riesgo psicosocial en el trabajo-Identificación, análisis y prevención.',
      link:
        'https://www.gob.mx/stps/articulos/norma-oficial-mexicana-nom-035-stps-2018-factores-de-riesgo-psicosocial-en-el-trabajo-identificacion-analisis-y-prevencion',
    },
    {
      referencia:
        'Fondo de Riesgos Laborales. (2018). Guía técnica general: Promoción, prevención e intervención de los factores psicosociales en el trabajo.',
      link:
        'https://fondoriesgoslaborales.gov.co/wp-content/uploads/2018/09/01-Guia-tecnica-general.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Adaptabilidad',
      significado:
        'Capacidad de una persona o equipo para ajustarse a cambios en el entorno, condiciones de trabajo o nuevas exigencias organizacionales.',
    },
    {
      termino: 'Asertividad',
      significado:
        'Habilidad para expresar ideas, emociones y necesidades de forma clara y respetuosa, sin agresividad ni pasividad.',
    },
    {
      termino: 'Autoconocimiento',
      significado:
        'Proceso mediante el cual una persona identifica y comprende sus emociones, valores, fortalezas y áreas de mejora.',
    },
    {
      termino: 'Clima organizacional',
      significado:
        'Percepción colectiva de los empleados sobre el ambiente de trabajo, que influye en la motivación y el desempeño.',
    },
    {
      termino: 'Coaching',
      significado:
        'Proceso de acompañamiento profesional que busca desarrollar el potencial de una persona o grupo para lograr metas personales u organizacionales.',
    },
    {
      termino: 'Colaboración',
      significado:
        'Acción de trabajar de forma conjunta con otros para alcanzar un objetivo común, basada en la confianza y el respeto mutuo.',
    },
    {
      termino: 'Comunicación efectiva',
      significado:
        'Intercambio de información claro, preciso y oportuno que favorece el entendimiento y reduce los conflictos.',
    },
    {
      termino: 'Empatía',
      significado:
        'Capacidad de ponerse en el lugar del otro para comprender sus emociones y puntos de vista sin juzgar.',
    },
    {
      termino: 'Equilibrio emocional',
      significado:
        'Estado de armonía en la gestión de emociones que permite actuar de forma racional y constructiva ante situaciones desafiantes.',
    },
    {
      termino: 'Escucha activa',
      significado:
        'Habilidad para prestar atención plena al interlocutor, demostrando interés y comprensión mediante gestos, preguntas y retroalimentación.',
    },
    {
      termino: 'Ética organizacional',
      significado:
        'Conjunto de principios y valores que guían la conducta de una empresa y sus miembros en la toma de decisiones responsables.',
    },
    {
      termino: 'Feedback',
      significado:
        'Retroalimentación que se proporciona a una persona sobre su desempeño con el fin de reforzar o corregir comportamientos.',
    },
    {
      termino: 'Gestión del cambio',
      significado:
        'Conjunto de acciones y estrategias destinadas a facilitar la adaptación de las personas a transformaciones organizacionales.',
    },
    {
      termino: 'Inteligencia emocional',
      significado:
        'Capacidad para reconocer, comprender y manejar las propias emociones y las de los demás de manera efectiva.',
    },
    {
      termino: 'Liderazgo transformacional',
      significado:
        'Estilo de liderazgo que inspira y motiva a los equipos a desarrollar su potencial y generar cambios positivos.',
    },
    {
      termino: 'Mediación',
      significado:
        'Intervención de un tercero neutral para facilitar la resolución de un conflicto entre dos o más partes.',
    },
    {
      termino: 'Motivación',
      significado:
        'Impulso interno que dirige, mantiene y orienta el comportamiento hacia el logro de objetivos personales o laborales.',
    },
    {
      termino: 'Resiliencia',
      significado:
        'Habilidad para recuperarse frente a la adversidad, adaptarse a los cambios y seguir adelante con actitud positiva.',
    },
    {
      termino: 'Responsabilidad social',
      significado:
        'Compromiso de una organización con el bienestar de la sociedad y el medio ambiente más allá del lucro económico.',
    },
    {
      termino: 'Sostenibilidad',
      significado:
        'Capacidad de una organización para desarrollar sus actividades generando valor económico, social y ambiental a largo plazo.',
    },
  ],
}

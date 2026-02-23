export default {
  global: {
    Name:
      'Frutas y verduras: características, conservación y manejo poscosecha',
    Description:
      'El componente formativo aborda la clasificación y composición de frutas y verduras, sus características nutricionales y sensoriales, y la relevancia de la fibra en la alimentación. Explica el origen y los métodos de conservación de los alimentos, las causas de su deterioro y su clasificación según durabilidad. Además, desarrolla las principales técnicas poscosecha, el control de la maduración y la respiración para prolongar la vida útil.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Generalidades de las frutas y las verduras',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Frutas',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Verduras',
            hash: 't_1_2',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Origen de la conservación',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Métodos de conservación utilizados en la antigüedad',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: '¿Por qué se deterioran los alimentos?',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Factores que provocan alteraciones en los alimentos',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Clasificación de los alimentos según su durabilidad',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo: '¿Qué es la conservación de los alimentos?',
            hash: 't_2_5',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Técnicas poscosecha',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Determinación del índice de cosecha',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Eliminación del calor de campo',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Preenfriamiento',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Control de la maduración',
            hash: 't_3_4',
          },
          {
            numero: '3.5',
            titulo: 'Control de la respiración de los alimentos frescos',
            hash: 't_3_5',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Técnicas poscosecha',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2022). Manejo de poscosecha. [Archivo de video] Youtube.',
      tipo: 'Video ',
      link: 'https://www.youtube.com/watch?v=EVrRQkGnjqs ',
    },
  ],
  glosario: [
    {
      termino: 'Calor de campo',
      significado:
        'aumento de temperatura que presenta el alimento al momento de la cosecha.',
    },
    {
      termino: 'Conservación',
      significado:
        'aplicación de métodos para prolongar la vida útil de los alimentos y mantener su calidad.',
    },
    {
      termino: 'Etileno',
      significado:
        'gas de origen vegetal que regula y acelera la maduración de frutas.',
    },
    {
      termino: 'Fibra dietética',
      significado:
        'componente vegetal que favorece el tránsito intestinal y la regulación metabólica.',
    },
    {
      termino: 'Maduración',
      significado:
        'proceso fisiológico que provoca cambios en color, sabor, textura y aroma del fruto.',
    },
    {
      termino: 'Pardeamiento enzimático',
      significado:
        'oscurecimiento del alimento causado por reacciones químicas activadas por enzimas.',
    },
    {
      termino: 'Perecibilidad:',
      significado:
        'grado de facilidad con el que un alimento se deteriora con el tiempo.',
    },
    {
      termino: 'Poscosecha',
      significado:
        'conjunto de prácticas aplicadas a los alimentos después de su recolección para conservar su calidad.',
    },
    {
      termino: 'Preenfriamiento',
      significado:
        'técnica para reducir rápidamente la temperatura del alimento recién cosechado.',
    },
    {
      termino: 'Respiración',
      significado:
        'proceso metabólico mediante el cual los alimentos consumen oxígeno y liberan dióxido de carbono.',
    },
  ],
  referencias: [
    {
      referencia:
        'Charley, H. (2006). Tecnología de los alimentos. Noriega Editores.',
      link: '',
    },
    {
      referencia:
        'Gallo, F. (1997). Manual de fisiología, patología post-cosecha y control de calidad de frutas y hortalizas. Convenio SENA-Reino Unido.',
      link: '',
    },
    {
      referencia:
        'Ibáñez, Z. (2011). Manual de conservación de frutas y hortalizas. Instituto Nacional de Tecnología Agropecuaria (INTA).',
      link: '',
    },
    {
      referencia:
        'Thompson, K. (1998). Tecnología post-cosecha de frutas y hortalizas. Convenio SENA-Reino Unido.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo: 'Responsable del ecosistema',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Olga Constanza Bermúdez Jaimes',
          cargo: 'Responsable de línea de producción',
          centro: 'Dirección General',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Ángela Viviana Páez Perilla',
          cargo: 'Experta temática',
          centro: 'Centro Agroindustrial - Regional Quindío',
        },
        {
          nombre: 'Paola Alexandra Moya Peralta',
          cargo: 'Evaluadora instruccional',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Jorge David Barbosa Losada',
          cargo: 'Diseñador de contenidos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Robinson Javier Ordoñez Barreiro',
          cargo: 'Desarrollador <i>full stack</i>',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Alejandro Delgado Acosta',
          cargo: 'Intérprete lenguaje de señas',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Cristhian Giovanni Gordillo Segura',
          cargo: 'Intérprete lenguaje de señas',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Juan Pablo Rojas Polania',
          cargo: 'Animador y productor audiovisual',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Maria Carolina Tamayo Lopez',
          cargo: 'Locución',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Aixa Natalia Sendoya Fernández',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Ricardo Oliveros Zambrano',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Anyerson Wilfredo Pizo Ossa',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}

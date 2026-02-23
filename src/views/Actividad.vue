<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema: 'Conservación y manejo poscosecha de frutas y verduras',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> identificar los conceptos clave sobre la clasificación, composición, conservación y técnicas poscosecha aplicadas a frutas y verduras.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO.',
      preguntas: [
        {
          id: 1,
          texto: '¿Cuál es el porcentaje aproximado de agua en las frutas?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: '80%.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Entre 80% y 95%.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: '50%.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Entre 60% y 70%.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            '¿Qué compuesto es responsable del aroma característico en las frutas?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Celulosa.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Ácido cítrico.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Ésteres y aldehídos.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Clorofila.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            '¿Qué parte de la planta corresponde a las verduras clasificadas como "raíces y rizomas"?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Frutas y semillas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Zanahoria y remolacha.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Cebolla y ajo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Espinaca y acelga.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            '¿Cuál es el contenido de carbohidratos en las verduras del grupo I?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Más del 10%.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Menor al 5%.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Entre 5% y 15%.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Aproximadamente 20%.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            '¿Qué vitamina predomina en frutas cítricas como la naranja y el limón?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Vitamina A.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Vitamina E.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Vitamina C.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Vitamina K.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto:
            '¿Qué técnica poscosecha consiste en reducir rápidamente la temperatura del alimento?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Curado.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Ahumado.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Preenfriamiento.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Secado al sol.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto:
            '¿Cuál es el principal objetivo del control de la respiración en alimentos frescos?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Incrementar el aroma.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Prolongar la vida útil.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Cambiar el sabor.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Disminuir el peso.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto: '¿Qué tipo de respiración ocurre en ausencia de oxígeno?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Aeróbica.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Clorofílica.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Anaeróbica.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Glicolítica.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto:
            '¿Qué fruta presenta una de las tasas más altas de respiración?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Tomate de árbol.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Curuba.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Naranja.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Limón Tahití.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            '¿Cuál es un método de conservación que busca disminuir el pH?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Control de oxígeno.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Encurtido fermentado.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Refrigeración.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Secado al sol.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto:
            'Las frutas contienen mayor cantidad de proteínas que las verduras.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto:
            'El etileno es un gas que acelera la maduración de las frutas.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto:
            'El salado fue un método de conservación ampliamente utilizado por los romanos.',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 14,
          texto:
            'La celulosa es responsable del color verde en frutas y verduras.',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 15,
          texto:
            'La atmósfera modificada es una técnica utilizada para controlar el oxígeno en la conservación.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>

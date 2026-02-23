<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Origen de la conservación

    .row.align-items-center.mb-5
      .col-xl
        p.mb-3 Hace aproximadamente #[b diez mil años], el ser humano pasó de ser #[b nómada a sedentario] durante el período denominado #[b Neolítico]. Este cambio marcó el inicio de la #[b agricultura] y la #[b domesticación de animales], lo que generó una nueva necesidad: #[b conservar las materias primas] obtenidas de la caza, la pesca y la recolección para #[b asegurar la supervivencia de los pueblos].
        .row.align-items-center.style___box_5.m-0(data-aos="fade-right")
          .col-xl-auto
            figure.d-none.d-xl-block
              img(src='@/assets/curso/temas/img29.jpg', alt='').m-auto
          .col-xl
            p.mb-0 El ser humano comprendió que debía #[b almacenar alimentos] para las épocas de escasez, como el #[b invierno], cuando no era posible recolectar o cazar con facilidad. Un ejemplo claro de ello fue el #[b secado de frutos], técnica que permitía reducir su contenido de agua y prolongar su vida útil.
      .col-xl-auto(data-aos="fade-left")
        figure.d-none.d-xl-block
          img(src='@/assets/curso/temas/img30.png', alt='').m-auto

    <!------------------------------------------ SUBTEMA 1 ------------------------------------------>
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.1 Métodos de conservación utilizados en la antigüedad

    p.mb-5 Desde tiempos remotos, se desarrollaron diversos métodos de conservación basados en el #[b aprovechamiento de las condiciones naturales] del entorno. A continuación, se presentan los más utilizados:

    <!-- SLYDER IMAGENES -->
    .fondo___slider.mb-5
      .px-5
        .ajuste-slider(data-aos="zoom-in")
          SlyderA(tipo="b")
            .row.h-100.justify-content-center.align-items-center
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img31.png', alt='' style="max-width: 500px").m-auto
              .col-xl-6.mb-4
                h4 Frío
                p.mb-0 Aprovechamiento de las bajas temperaturas del invierno para retardar el deterioro de los alimentos.
            
            .row.h-100.justify-content-center.align-items-center
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img32.png', alt='' style="max-width: 500px").m-auto
              .col-xl-6.mb-4
                h4 Secado al sol
                p.mb-0 Técnica sencilla y ampliamente utilizada por los antepasados. Consistía en disponer frutas y plantas al aire libre para que recibieran viento y radiación solar, favoreciendo la pérdida de agua y una mayor duración del alimento.

            .row.h-100.justify-content-center.align-items-center
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img33.png', alt='' style="max-width: 500px").m-auto
              .col-xl-6.mb-4
                h4 Ahumado
                p.mb-0 Consiste en colocar el alimento bajo el humo de una hoguera. Este proceso aporta sabor y genera una deshidratación parcial, lo que contribuye a su conservación.
              
            .row.h-100.justify-content-center.align-items-center
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img34.png', alt='' style="max-width: 500px").m-auto
              .col-xl-6.mb-4
                h4 Curado
                p.mb-0 Aplicación de una mezcla de #[b azúcar, sal y nitrato o nitrito] para prolongar la conservación.
            
            .row.h-100.justify-content-center.align-items-center
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img35.png', alt='' style="max-width: 500px").m-auto
              .col-xl-6.mb-4
                h4 Salado
                p.mb-0 Fue ampliamente empleado por #[b romanos, egipcios y pueblos egeos]. Consiste en someter los alimentos a distintas etapas de aplicación de sal. En la actualidad, este método sigue utilizándose en productos como #[b jamón serrano, anchoas y tocino].
    
    .style___box_1.fit___style_1(data-aos="zoom-in")
      .row.align-items-center
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src='@/assets/curso/temas/img28.svg', alt='').m-auto
        .col-xl
          p.mb-0 Otra técnica antigua de conservación consistía en #[b sumergir los productos en soluciones de aceite y vinagre], lo que permitía conservarlos durante #[b largos períodos de tiempo].
    
    .color___box_4
      .px-5

        <!------------------------------------------ SUBTEMA 2 ------------------------------------------>
        Separador
        #t_2_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 2.2 ¿Por qué se deterioran los alimentos?

        p.mb-5 Un alimento se #[b deteriora] cuando pierde sus características propias, como #[b color, olor y sabor], o cuando presenta cambios significativos en la #[b textura] o la #[b temperatura interna]. Estos cambios pueden conducir a la #[b putrefacción], un proceso provocado principalmente por #[b microorganismos] presentes en el medio ambiente, como el agua y el aire. Los principales agentes patógenos responsables de este proceso son:

        <!-- TARJETAS CON AVATAR -->
        .row.justify-content-center.mb-5
          .col-xl-10
            .row.justify-content-center
              .col-xl-4.col-md-9(data-aos="zoom-in")
                .style___box_4.h-100
                  .row.justify-content-center.mb-3
                    .col-7
                      figure.mb-4(data-aos="fade-right")
                        img(src='@/assets/curso/temas/img37.svg', alt="" style="max-width: 100px").m-auto
                    h4.text-center Bacterias
              .col-xl-4.col-md-9(data-aos="zoom-in").espacio___movil_3
                .style___box_4.h-100
                  .row.justify-content-center.mb-3
                    .col-7
                      figure.mb-4(data-aos="zoom-in")
                        img(src='@/assets/curso/temas/img38.svg', alt="" style="max-width: 100px").m-auto
                    h4.text-center Hongos
              .col-xl-4.col-md-9(data-aos="zoom-in").espacio___movil_3
                .style___box_4.h-100
                  .row.justify-content-center.mb-3
                    .col-7
                      figure.mb-4(data-aos="fade-left")
                        img(src='@/assets/curso/temas/img39.svg', alt="" style="max-width: 100px").m-auto
                    h4.text-center Levaduras
        
        .row.align-items-center
          .col-xl
            p.mb-3 Otra forma de deterioro es la causada por #[b enzimas], las cuales pueden iniciar reacciones químicas que afectan negativamente la calidad del alimento. Un ejemplo común es el #[b pardeamiento enzimático], que ocurre cuando se cortan manzanas y se dejan expuestas al aire, provocando que se oscurezcan.
            .style___box_1(data-aos="zoom-in")
              p.mb-0 Las #[b condiciones externas] de frutas y verduras, como la #[b temperatura superficial] y la #[b humedad relativa], influyen directamente en el desarrollo de microorganismos y aceleran el deterioro. Finalmente, las #[b plagas] (como insectos y roedores) representan un factor importante en el deterioro de los alimentos, ya que causan daños significativos y pueden ser #[b transmisoras de enfermedades]. La transmisión de enfermedades de animales a humanos se conoce como zoonosis.
          .col-xl-auto(data-aos="fade-left")
            figure.d-none.d-xl-block
              img(src='@/assets/curso/temas/img40.png', alt='').m-auto

    <!------------------------------------------ SUBTEMA 3 ------------------------------------------>
    Separador
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.3 Factores que provocan alteraciones en los alimentos

    p.mb-5 Las alteraciones de los alimentos se producen por la acción conjunta de distintos #[b factores], los cuales pueden clasificarse según su naturaleza:

    <!-- TARJETAS CON IMAGEN SIN BORDES -->
    .row.justify-content-center.mb-5
      .col-xl-4.col-md-9(data-aos="fade-right")
        .style___box_6.h-100
          .row.justify-content-center.mb-3
            .col-12
              figure.mb-4
                img(src='@/assets/curso/temas/img41.jpg', alt="" ).m-auto
            h4.text-center Factores biológicos
            p.mb-0 Bacterias, hongos y levaduras.
      .col-xl-4.col-md-9(data-aos="zoom-in").espacio___movil_3
        .style___box_6.h-100
          .row.justify-content-center.mb-3
            .col-12
              figure.mb-4
                img(src='@/assets/curso/temas/img42.jpg', alt="" ).m-auto
            h4.text-center Factores físicos
            p.mb-0 Luz y calor.
      .col-xl-4.col-md-9(data-aos="fade-left").espacio___movil_3
        .style___box_6.h-100
          .row.justify-content-center.mb-3
            .col-12
              figure.mb-4
                img(src='@/assets/curso/temas/img43.jpg', alt="" ).m-auto
            h4.text-center Factores químicos
            p.mb-0 Agua y oxígeno.
    
    p.mb-0 Estos factores favorecen reacciones físicas, químicas y biológicas que afectan la #[b calidad, seguridad y vida útil] de los alimentos.

    <!------------------------------------------ SUBTEMA 4 ------------------------------------------>
    Separador
    #t_2_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.4 Clasificación de los alimentos según su durabilidad
    
    .color___box_5
      .px-5

        p.mb-5 De acuerdo con su #[b tiempo de duración] y facilidad de deterioro, los alimentos se clasifican en:

        <!-- Pestañas horizontales - sencillas -->
        TabsC.color-acento-contenido.mb-0(data-aos="zoom-in")
          .py-3.py-md-4(titulo="Alimentos perecederos")
            .row.justify-content-center.align-items-center
              .col-xl-5.order-2.order-lg-1
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img45.png', alt="" ).m-auto
              .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
                h4.txt--purpura.mb-4 Alimentos perecederos
                p.mb-3 Se descomponen con facilidad debido a su alto contenido de agua.
                p.mb-0 #[b Ejemplos]: carnes, lácteos y huevos.

          .py-3.py-md-4(titulo="Alimentos semiperecederos")
            .row.justify-content-center.align-items-center
              .col-xl-5.order-2.order-lg-1
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img46.png', alt="" ).m-auto
              .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
                h4.txt--purpura.mb-4 Alimentos semiperecederos
                p.mb-3 Requieren manipulación cuidadosa para evitar su deterioro.
                p.mb-0 #[b Ejemplos]: frutas y verduras.

          .py-3.py-md-4(titulo="Alimentos no perecederos")
            .row.justify-content-center.align-items-center
              .col-xl-5.order-2.order-lg-1
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img47.png', alt="" ).m-auto
              .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
                h4.txt--purpura.mb-4 Alimentos no perecederos
                p.mb-3 Presentan un período de durabilidad prolongado.
                p.mb-0 #[b Ejemplos]: granos, harinas y azúcar.

        <!------------------------------------------ SUBTEMA 5 ------------------------------------------>
        Separador
        #t_2_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 2.5 ¿Qué es la conservación de los alimentos?

    .style___box_7.mb-5(data-aos="zoom-in")
      p.mb-0 La conservación de los alimentos consiste en protegerlos de la acción de agentes físicos, biológicos y químicos mediante diversos procesos, con el objetivo de preservar al máximo sus propiedades nutritivas y sus cualidades organolépticas (color, olor, sabor y textura). Esto permite su almacenamiento y consumo durante períodos prolongados, garantizando que el alimento mantenga un buen aspecto y su valor nutritivo.

    <!-- TITULOS TERCER NIVEL -->
    .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img4.svg" style="max-width: 78px").m-auto
      .col
        h3 Principales métodos de conservación de los alimentos
        
    p.mb-5 Para comprender mejor el concepto de conservación, es fundamental conocer los métodos más utilizados:

    <!-- SLYDER IMAGENES -->
    .fondo___slider.mb-5
      .px-5
        .ajuste-slider(data-aos="zoom-in")
          SlyderA(tipo="b")
            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Conservación por frío
                p.mb-0 Consiste en disminuir la temperatura del alimento entre 2 y 10 °C, reduciendo la actividad microbiana y enzimática. Se realiza mediante refrigeración o congelación, permitiendo conservar las propiedades organolépticas.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img48.png', alt='' style="max-width: 500px").m-auto
            
            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Conservación por calor
                p.mb-0 Implica someter el alimento a altas temperaturas durante un tiempo determinado, con el fin de eliminar o reducir microorganismos y enzimas responsables del deterioro.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img49.png', alt='' style="max-width: 500px").m-auto

            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Conservación por control de agua
                p.mb-0 Se basa en reducir el contenido de agua del alimento, dificultando el desarrollo microbiano. Incluye técnicas como desecación, deshidratación, liofilización, ahumado y salazón.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img50.png', alt='' style="max-width: 500px").m-auto
            
            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Conservación por control de oxígeno
                p.mb-0 El oxígeno favorece el deterioro; por ello, esta técnica busca reducir su presencia mediante atmósferas modificadas, atmósferas controladas y empaque al vacío.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img51.png', alt='' style="max-width: 500px").m-auto

            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Conservación por control del pH
                p.mb-0 Consiste en disminuir el pH por debajo de 4.0, cuidando no alterar las características organolépticas. Se logra mediante encurtido fermentado.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img52.png', alt='' style="max-width: 500px").m-auto

    p.mb-0 En conjunto, estos métodos permiten #[b prolongar la vida útil de los alimentos], mantener su calidad y asegurar su #[b inocuidad para el consumo humano].

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>

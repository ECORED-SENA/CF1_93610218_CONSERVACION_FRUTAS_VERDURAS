<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Técnicas poscosecha

    .row.align-items-center.m-0.mb-5.style___box_2(data-aos="zoom-in")
      .col-xl-auto
        figure.d-none.d-xl-block
          img(src='@/assets/curso/temas/img53.png', alt='').m-auto
      .col-xl
        p.mb-0 Es importante comprender que uno de los puntos de partida fundamentales en la conservación de alimentos es la #[b poscosecha]. Este concepto hace referencia al conjunto de conocimientos y prácticas que se aplican al producto #[b después de ser recolectado], así como a las técnicas de manejo necesarias para preservar su calidad, ya sea en estado #[b natural] o #[b fresco].
    
    .row.align-items-center
      .col-xl
        p.mb-3 La correcta aplicación de las técnicas poscosecha permite prolongar la vida útil de los alimentos, reducir pérdidas y mantener sus características sensoriales, físicas y nutricionales. Las principales técnicas poscosecha comprenden los siguientes aspectos clave:
        .row.align-items-center
          .col-xl-auto(data-aos="fade-right")
            figure.d-none.d-xl-block
              img(src='@/assets/curso/temas/img12.svg', alt='').m-auto
          .col-xl
            ul.fa-ul.estilo___ul.mb-0
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Determinación del índice de cosecha.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Eliminación del calor de campo.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Control de la maduración.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Control de la respiración de los alimentos frescos.
      .col-xl-auto(data-aos="fade-left")
        figure.d-none.d-xl-block
          img(src='@/assets/curso/temas/img54.png', alt='').m-auto

    <!------------------------------------------ SUBTEMA 1 ------------------------------------------>
    Separador
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.1 Determinación del índice de cosecha

    .row.align-items-center.mb-5
      .col-xl
        .style___box_1.fit___style_2.mb-3(data-aos="zoom-in")
          p.mb-0 El #[b índice de cosecha] es un elemento indispensable en la conservación de alimentos frescos, especialmente frutas y verduras. Este índice determina el #[b momento óptimo en el que el fruto debe separarse de la planta]. Cuando la cosecha se realiza en el estado adecuado de desarrollo y madurez, se incrementan significativamente las probabilidades de lograr una conservación eficiente y de mayor duración.
        p.mb-0 La definición del momento ideal de cosecha no depende de un solo factor, sino de la #[b combinación de diferentes índices], los cuales permiten evaluar de manera integral el estado del alimento.
      .col-xl-auto(data-aos="fade-left")
        figure.d-none.d-xl-block
          img(src='@/assets/curso/temas/img55.png', alt='').m-auto
    
    <!-- TITULOS TERCER NIVEL -->
    .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img4.svg" style="max-width: 78px").m-auto
      .col
        h3 Clasificación de los índices de cosecha
        
    p.mb-5 A continuación, se presentan los principales tipos de índices de cosecha: 

    <!-- SLYDER IMAGENES -->
    .fondo___slider.mb-0
      .px-5
        .ajuste-slider(data-aos="zoom-in")
          SlyderA(tipo="b")
            .row.h-100.justify-content-center.align-items-center
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img56.png', alt='' style="max-width: 500px").m-auto
              .col-xl-6.mb-4
                h4 Sensoriales
                h5 Características:
                ul.fa-ul.estilo___ul.mb-0
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Color de la cáscara (transición de verde a amarillo, rojo u otros colores según la especie o variedad).
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Color de la pulpa (aparición de pigmentos secundarios).
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Textura de la cáscara (rigidez o secamiento, según el alimento).
              
            .row.h-100.justify-content-center.align-items-center
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img57.png', alt='' style="max-width: 500px").m-auto
              .col-xl-6.mb-4
                h4 Físicos
                h5 Características:
                ul.fa-ul.estilo___ul.mb-0
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Fácil separación (adelgazamiento del punto de unión del fruto con la planta).
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Forma (característica propia del alimento).
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Consistencia (ablandamiento del alimento) pH.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Peso del alimento (incremento progresivo según la especie).
              
            .row.h-100.justify-content-center.align-items-center
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img58.png', alt='' style="max-width: 500px").m-auto
              .col-xl-6.mb-4
                h4 Químicos
                h5 Características:
                ul.fa-ul.estilo___ul.mb-0
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Acidez (presencia del ácido predominante en el alimento).
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Contenido de azúcares, almidones, colorantes, vitaminas y ácidos grasos, según la especie o variedad.
              
            .row.h-100.justify-content-center.align-items-center
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img59.png', alt='' style="max-width: 500px").m-auto
              .col-xl-6.mb-4
                h4 Fisiológicos
                h5 Características:
                ul.fa-ul.estilo___ul.mb-0
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Rendimiento de la pulpa, jugo o semilla (expresado en porcentaje).
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Tasa de respiración (producción de CO₂, consumo de O₂ y liberación de energía).
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Producción de etileno.
              
            .row.h-100.justify-content-center.align-items-center
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img60.png', alt='' style="max-width: 500px").m-auto
              .col-xl-6.mb-4
                h4 Cuantitativos
                h5 Características:
                ul.fa-ul.estilo___ul.mb-0
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Número de días desde el cuajamiento (dependiente de la especie y variedad).
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Ciclo vegetativo (tiempo transcurrido desde la germinación o la siembra).
              
    <!------------------------------------------ SUBTEMA 2 ------------------------------------------>
    Separador
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.2 Eliminación del calor de campo

    p.mb-5 A continuación, se presenta un video que analiza la importancia de la eliminación del calor de campo en productos hortofrutícolas, destacando sus fundamentos fisiológicos, las variables que afectan el proceso y las técnicas más eficaces para preservar la calidad poscosecha.

    .color___box_5
      .px-5 

        <!-- VIDEOS -->
        figure(data-aos="zoom-in").mb-0
          .video.mb-1
            iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
          figcaption(data-aos="zoom-in") #[b Video]: eliminación del calor de campo en productos hortofrutícolas.

        <!------------------------------------------ SUBTEMA 3 ------------------------------------------>
        Separador
        #t_3_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 3.3 Preenfriamiento

        p.mb-5 El método utilizado para eliminar el calor de campo es el #[b preenfriamiento], el cual consiste en introducir el alimento en un medio de #[b baja temperatura] durante un tiempo determinado. Este proceso genera importantes ventajas en la conservación, entre las que se destacan:
        
    .fondo___img_1
      .px-5
        .row.justify-content-center.mb-5
          .col-xl-8
            <!-- TARJETAS CON IMAGEN SIN BORDES -->
            .row.justify-content-center
              .col-xl-6.col-md-9(data-aos="fade-right")
                .style___box_6.h-100
                  .row.justify-content-center.mb-3
                    .col-12
                      figure.mb-4
                        img(src='@/assets/curso/temas/img61.jpg', alt="" ).m-auto
                    h4.text-center Producción de etileno
                    p.mb-0 Disminución de la producción de etileno, hormona vegetal que se produce en presencia de oxígeno y acelera la maduración. En ambientes fríos, la disponibilidad de oxígeno y su demanda metabólica se reducen.
              .col-xl-6.col-md-9(data-aos="fade-left").espacio___movil_3
                .style___box_6.h-100
                  .row.justify-content-center.mb-3
                    .col-12
                      figure.mb-4
                        img(src='@/assets/curso/temas/img62.jpg', alt="" ).m-auto
                    h4.text-center Crecimiento microbiano
                    p.mb-0 Reducción del crecimiento de microorganismos, responsables del deterioro de los alimentos y de la aparición de enfermedades en los consumidores.
    
        <!-- TITULOS TERCER NIVEL -->
        .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
          .col-lg-auto
            figure
              img(src="@/assets/curso/temas/img4.svg" style="max-width: 78px").m-auto
          .col
            h3 Tipos de preenfriamiento

    p.mb-5 A continuación, se describen los principales tipos de preenfriamiento empleados en la poscosecha:

    <!-- ACORDION A -->
    .bg--img_03.mb-0
      .row.h-100.align-items-center
        .col-xl-auto
          figure(data-aos="fade-right").d-none.d-xl-block
            img(src="@/assets/curso/temas/img20.png", alt="" ).m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta acordeonA")(data-aos="fade-left")
            .row(titulo="Preenfriamiento con cuartos fríos").ajuste-cajaAcordion
              .col-xl
                p.mb-3 Se realiza en cámaras destinadas al almacenamiento final, aumentando el flujo de aire dentro del cuarto para facilitar la remoción del calor del producto.
              .col-xl-auto
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img65.png', alt='' style="max-width: 150px").m-auto 
            .row(titulo="Preenfriamiento con aire forzado").ajuste-cajaAcordion
              .col-xl
                p.mb-3 Consiste en generar movimiento forzado de aire frío a través de los orificios de las canastillas que contienen el producto, extrayendo el calor hacia un sistema extractor y evitando el retorno del aire caliente mediante superficies de sellado.
              .col-xl-auto
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img66.png', alt='' style="max-width: 150px").m-auto 
            .row(titulo="Hidroenfriamiento").ajuste-cajaAcordion
              .col-xl
                p.mb-3 Emplea agua fría a temperaturas entre #[b 1 y 5 °C], en la cual el producto se sumerge durante #[b 1 a 5 minutos], dependiendo de la textura y resistencia del fruto.
              .col-xl-auto
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img67.png', alt='' style="max-width: 150px").m-auto 
            .row(titulo="Preenfriamiento con vacío").ajuste-cajaAcordion
              .col-xl
                p.mb-3 Sistema que provoca la evaporación del agua aplicada a la superficie del producto mediante la reducción de la presión (#[i vacuum]), logrando que el agua se evapore a #[b 0 °C] y reduzca rápidamente la temperatura del alimento.
              .col-xl-auto
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img68.png', alt='' style="max-width: 150px").m-auto 
        
    <!------------------------------------------ SUBTEMA 4 ------------------------------------------>
    Separador
    #t_3_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.4 Control de la maduración

    p.mb-5 A continuación, se presenta un pódcast que explica el papel del etileno en el proceso de maduración de los frutos, destacando su origen, función hormonal y relevancia en la conservación de alimentos frescos.

    .row.align-items-center.m-0.mb-5
      .col-xl
        .row.align-items-center.style___box_8(data-aos="zoom-in")
          .col-auto
            figure.d-none.d-xl-block(data-aos="fade-right")
              img(src="@/assets/curso/temas/img69.svg" style="max-width: 220px").m-auto
          .col
            h4.mb-4 Pódcast
            TarjetaAudio.color-acento-contenido.mb-3(
              texto="Control de la maduración"
              :audio="require('@/assets/componentes/audios/CF1_93610218_CONSERVACION_FRUTAS_VERDURAS.mp3')"
              @audio-hover="mostrarIndicadorTarjetaAudio = false"
            )
      .col-xl-auto
        figure(data-aos="fade-left").d-none.d-xl-block
          img(src="@/assets/curso/temas/img70.png" style="max-width: 450px").m-auto
    
    <!-- TITULOS TERCER NIVEL -->
    .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img4.svg" style="max-width: 78px").m-auto
      .col
        h3 Dosificación de etileno en alimentos frescos

    p.mb-5 A continuación, se relacionan condiciones habituales de temperatura, concentración y tiempo de exposición:

    .color___box_3
      .px-5

        .row.justify-content-center.mb-5
          .col-xl-8
            .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
              h5 Tabla 1.
              span Parámetros de maduración de alimentos según temperatura y etileno
            .tabla-a(data-aos="zoom-in")
              table
                thead
                  tr
                    th.ajuste-border-tabla.texto-left Alimento
                    th.ajuste-border-tabla.texto-left Temperatura
                    th.ajuste-border-tabla.texto-left Concentración de etileno
                    th.texto-left Tiempo
                tbody
                  tr
                    td.ajuste-border-tabla.texto-left Aguacate
                    td.ajuste-border-tabla.texto-left 18 °C.
                    td.ajuste-border-tabla.texto-left 10 ppm.
                    td.texto-left 24 a 36 horas.
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left Banano
                    td.ajuste-border-tabla.texto-left 21 °C.
                    td.ajuste-border-tabla.texto-left 10 ppm.
                    td.texto-left 24 horas.
                  tr
                    td.ajuste-border-tabla.texto-left Mango
                    td.ajuste-border-tabla.texto-left 29 °C.
                    td.ajuste-border-tabla.texto-left 10 ppm.
                    td.texto-left 24 horas.
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left Papaya
                    td.ajuste-border-tabla.texto-left 26 °C.
                    td.ajuste-border-tabla.texto-left 0 ppm.
                    td.texto-left 48 horas.
                  tr
                    td.ajuste-border-tabla.texto-left Tomate
                    td.ajuste-border-tabla.texto-left 13 °C.
                    td.ajuste-border-tabla.texto-left 10 ppm.
                    td.texto-left 96 horas.
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left Banano
                    td.ajuste-border-tabla.texto-left 19 °C.
                    td.ajuste-border-tabla.texto-left 1 ppm.
                    td.texto-left 24 horas.

        <!-- TITULOS TERCER NIVEL -->
        .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
          .col-lg-auto
            figure
              img(src="@/assets/curso/temas/img4.svg" style="max-width: 78px").m-auto
          .col
            h3 Fuentes de adquisición de etileno para el control de la maduración
            
        p.mb-5 El etileno puede obtenerse en diferentes presentaciones, según el método de aplicación requerido:

        <!-- SLYDER IMAGENES -->
        .fondo___slider.mb-5
          .px-5
            .ajuste-slider(data-aos="zoom-in")
              SlyderA(tipo="b")
                .row.h-100.justify-content-center.align-items-center
                  .col-xl-6.mb-4
                    h4 Líquido
                    p.mb-0 Ácido 2-cloroetil fosfónico, conocido como ethrel o #[i ethephon]. Puede mezclarse con hidróxido de sodio para liberar etileno, obteniendo aproximadamente 93 g de etileno por litro, equivalentes a 74,4 litros de gas etileno por litro de #[i ethrel].
                  .col-xl-6
                    figure.d-none.d-xl-block
                      img(src='@/assets/curso/temas/img71.png', alt='' style="max-width: 500px").m-auto
                
                .row.h-100.justify-content-center.align-items-center
                  .col-xl-6.mb-4
                    h4 Gas
                    p.mb-0 Disponible en cilindros grandes con capacidad aproximada de 12,9 m³ y cilindros pequeños de 2,6 m³. El método de aplicación consiste en conducir el gas, mediante tuberías, hacia la bodega de maduración que contiene la fruta.
                  .col-xl-6
                    figure.d-none.d-xl-block
                      img(src='@/assets/curso/temas/img72.png', alt='' style="max-width: 500px").m-auto

    p.mb-0 Este control permite regular el avance de la maduración y mantener la calidad del alimento durante su almacenamiento y distribución.

    <!------------------------------------------ SUBTEMA 5 ------------------------------------------>
    Separador
    #t_3_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.5 Control de la respiración de los alimentos frescos

    p.mb-5 La respiración en los alimentos frescos es un proceso metabólico en el que #[b los azúcares, el almidón y los ácidos orgánicos] se descomponen por vía oxidativa. Como resultado, se generan compuestos simples, principalmente dióxido de carbono y agua, que las células emplean en otros procesos asociados a la liberación de energía. Este proceso respiratorio se presenta de dos formas, según la disponibilidad de oxígeno:

    <!-- Pestañas horizontales - sencillas -->
    TabsC.color-acento-contenido.mb-5(data-aos="zoom-in")
      .py-3.py-md-4(titulo="Respiración aeróbica")
        .row.justify-content-center.align-items-center
          .col-xl-5.order-2.order-lg-1
            .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
              h5 Figura 1.
              span Respiración aeróbica
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/temas/img73.svg', alt='La imagen presenta el proceso de respiración aeróbica que incluye la glucosa como molécula inicial, la glucólisis que genera dos piruvatos, la mitocondria donde se produce energía en forma de 36 ATP, y el intercambio de oxígeno por dióxido de carbono y agua.').m-auto
          .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
            h4.txt--purpura.mb-4 Respiración aeróbica
            p.mb-0 Se desarrolla en presencia de oxígeno y corresponde a la forma normal de respiración de los tejidos vegetales.

      .py-3.py-md-4(titulo="Respiración anaeróbica")
        .row.justify-content-center.align-items-center
          .col-xl-5.order-2.order-lg-1
            .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
              h5 Figura 2.
              span Respiración anaeróbica
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/temas/img74.svg', alt='La imagen presenta la respiración anaeróbica que muestra la conversión de glucosa en piruvato y su transformación en alcohol (etanol) o ácido láctico en ausencia de oxígeno, con ejemplos como pan, queso y manzana fermentada.').m-auto
          .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
            h4.txt--purpura.mb-4 Respiración anaeróbica
            p.mb-0 Se presenta en ausencia de oxígeno y puede generar compuestos indeseables que afectan la calidad del alimento.

    .row.align-items-center.mb-5
      .col-xl-auto(data-aos="fade-right")
        figure.d-none.d-xl-block
          img(src='@/assets/curso/temas/img75.png', alt='').m-auto
      .col-xl
        .row.align-items-center.mb-4
          .col-xl-auto(data-aos="zoom-in")
            figure.d-none.d-xl-block
              img(src='@/assets/curso/temas/img12.svg', alt='').m-auto
          .col-xl
            p.mb-0 Una estrategia clave para la conservación de alimentos frescos consiste en reducir su tasa de respiración, ya que de esta manera se controla el crecimiento y la división celular, así como el avance de la maduración. Este aspecto debe tenerse en cuenta en el manejo poscosecha.
        .style___box_5.fit___style_5(data-aos="fade-left")
          p.mb-0 El área del alimento que permanece en contacto con el oxígeno guarda una relación inversa con la intensidad respiratoria. Esto significa que, a mayor tamaño del alimento, menor será su tasa de respiración.

    

    <!-- TITULOS TERCER NIVEL -->
    .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img4.svg" style="max-width: 78px").m-auto
      .col
        h3 Tasa de respiración de frutas tropicales

    p.mb-5 La tasa de respiración suele expresarse como la cantidad de dióxido de carbono producido por kilogramo de alimento:

    .color___box_3
      .px-5

        .row.justify-content-center.mb-5
          .col-xl-5
            .row.align-items-center
              .col-xl-12
                .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                  h5 Tabla 2.
                  span Tasa de respiración de diferentes frutas
                .tabla-a.ajuste___tabla(data-aos="zoom-in")
                  table
                    thead
                      tr
                        th.ajuste-border-tabla.texto-left Fruta
                        th.texto-left Tasa de respiración (mg CO₂/kg)
                    tbody
                      tr.ajuste-color-tabla
                        td.ajuste-border-tabla.texto-left Curuba
                        td.texto-left 490 a 600.
                      tr
                        td.ajuste-border-tabla.texto-left Fresa
                        td.texto-left 30 a 200.
                      tr.ajuste-color-tabla
                        td.ajuste-border-tabla.texto-left Granadilla
                        td.texto-left 60 a 120.
                      tr
                        td.ajuste-border-tabla.texto-left Limón Tahití
                        td.texto-left 40 a 60.
                      tr.ajuste-color-tabla
                        td.ajuste-border-tabla.texto-left Mango
                        td.texto-left 60 a 95.
                      tr
                        td.ajuste-border-tabla.texto-left Mora
                        td.texto-left 110 a 160.
                      tr.ajuste-color-tabla
                        td.ajuste-border-tabla.texto-left Naranja
                        td.texto-left 15 a 40.
                      tr
                        td.ajuste-border-tabla.texto-left Piña
                        td.texto-left 20 a 80.
                      tr.ajuste-color-tabla
                        td.ajuste-border-tabla.texto-left Pitaya
                        td.texto-left 20 a 80.
                      tr
                        td.ajuste-border-tabla.texto-left Tomate de árbol
                        td.texto-left 10 a 60.
                      tr.ajuste-color-tabla
                        td.ajuste-border-tabla.texto-left Uchuva
                        td.texto-left 470 a 520.

    .style___box_1.fit___style_1(data-aos="zoom-in")
      p.mb-0 El método más utilizado para disminuir la respiración de los alimentos frescos consiste en aplicar bajas temperaturas en combinación con una humedad relativamente alta. De manera general, se emplean temperaturas entre 1 y 5 °C y humedades relativas entre 80 y 95 % en sistemas de almacenamiento como cuartos fríos. También puede utilizarse dióxido de carbono para este propósito; sin embargo, su aplicación requiere control estricto debido al riesgo de toxicidad para el consumidor.

</template>

<script>
export default {
  name: 'Tema3',
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

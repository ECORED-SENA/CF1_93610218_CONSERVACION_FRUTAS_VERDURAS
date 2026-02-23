<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Generalidades de las frutas y las verduras

    .row.align-items-center.m-0.mb-5.style___box_2(data-aos="zoom-in")
      .col-xl-auto
        figure.d-none.d-xl-block
          img(src='@/assets/curso/temas/img1.png', alt='').m-auto
      .col-xl
        p.mb-0 Los alimentos de origen vegetal se clasifican según su apariencia, morfología, grupo botánico y características organolépticas y nutricionales. Dentro de esta clasificación se distinguen #[b frutas y verduras], las cuales, aunque comparten un origen común, presentan diferencias en su estructura, composición y aprovechamiento alimentario.

    <!------------------------------------------ SUBTEMA 1 ------------------------------------------>
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.1 Frutas

    p.mb-5 Las frutas corresponden al fruto de los árboles y se caracterizan por un material pulposo que rodea las semillas y permanece unido a la planta. Su composición incluye agua, carbohidratos, vitaminas, minerales, fibra y antioxidantes. 

    .row.align-items-center.mb-5
      .col-xl(data-aos="fade-right")
        .style___box_3
          p.mb-0 También contienen alcoholes, ésteres y aldehídos, responsables del olor característico que las distingue.
      .col-xl-auto(data-aos="zoom-in")
        figure.d-none.d-xl-block
          img(src='@/assets/curso/temas/img2.jpg', alt='').m-auto
      .col-xl.espacio___movil_3
        figure.d-none.d-xl-block.mb-3(data-aos="fade-left")
          img(src='@/assets/curso/temas/img3.svg', alt='' style="width: 77px")
        p.mb-0 Las frutas pueden consumirse frescas o sometidas a procesos como congelación, deshidratación o transformación industrial.

    <!-- TITULOS TERCER NIVEL -->
    .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img4.svg" style="max-width: 78px").m-auto
      .col
        h3 Principales compuestos de las frutas
        
    p.mb-5 Los componentes químicos de las frutas determinan su valor nutricional, textura, sabor y estabilidad durante la maduración y el almacenamiento.

    <!-- SLYDER IMAGENES -->
    .fondo___slider.mb-5
      .px-5
        .ajuste-slider(data-aos="zoom-in")
          SlyderA(tipo="b")
            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Agua
                p.mb-0 Representa entre el 80 % y el 95 % del peso total de la fruta. Su proporción puede variar debido a los procesos de respiración y transpiración. El agua ligada se localiza dentro de las células, mientras que el agua no ligada se encuentra entre ellas.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img6.png', alt='' style="max-width: 500px").m-auto
            
            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Carbohidratos
                p.mb-0 Incluyen almidones, azúcares, celulosa, hemicelulosa y sustancias péptidas. En frutas verdes predomina el almidón, el cual se transforma en azúcares durante la maduración. En el mango, por ejemplo, la refrigeración prolongada en estado verde retrasa la hidrólisis del almidón y altera la maduración normal.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img7.png', alt='' style="max-width: 500px").m-auto

            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Fibra (celulosa y pectina)
                p.mb-0 La celulosa aporta soporte y resistencia a los tejidos vegetales y contribuye a la textura del alimento. La pectina varía según la especie y el grado de maduración; en frutas maduras aumenta la protopectina insoluble, lo que favorece el ablandamiento del tejido por acción de enzimas como la pectinasa y la poligalacturonasa.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img8.png', alt='' style="max-width: 500px").m-auto
            
            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Proteínas, vitaminas y minerales
                p.mb-0 Las frutas contienen cantidades reducidas de proteínas, en promedio 1 g, insuficientes como aporte proteico para el ser humano. Las grasas aparecen en baja proporción, con excepción del aguacate y las aceitunas. La vitamina A se encuentra principalmente en frutas amarillas como el melón y el durazno, mientras que la vitamina C predomina en los cítricos como la naranja, la mandarina y el limón.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img9.png', alt='' style="max-width: 500px").m-auto

            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Pigmentos
                p.mb-0 La clorofila confiere el color verde y participa en la fotosíntesis. Su presencia es limitada en frutas, a diferencia de las verduras de hoja verde como la espinaca y la acelga. Los carotenoides y otros pigmentos determinan la diversidad de colores de los frutos.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img10.png', alt='' style="max-width: 500px").m-auto

    .color___box_2
      .px-5

        <!-- TITULOS TERCER NIVEL -->
        .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
          .col-lg-auto
            figure
              img(src="@/assets/curso/temas/img4.svg" style="max-width: 78px").m-auto
          .col
            h3 Aroma
        
        .row.align-items-center
          .col-xl
            .row.align-items-center.mb-3
              .col-xl-auto(data-aos="zoom-in")
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img12.svg', alt='').m-auto
              .col-xl
                p.mb-0 El aroma constituye una característica sensorial clave en la aceptación de las frutas. El olor característico de las frutas se origina por la presencia de sustancias volátiles como ésteres, aldehídos, alcoholes, cetonas y terpenos. Estos compuestos influyen directamente en la preferencia del consumidor. 
            p.mb-0 En la actualidad, técnicas analíticas como la cromatografía de gases permiten identificar y caracterizar las sustancias responsables de aromas específicos en l as frutas.
          .col-xl-auto(data-aos="fade-left")
            figure.d-none.d-xl-block
              img(src='@/assets/curso/temas/img13.png', alt='').m-auto
      
        <!------------------------------------------ SUBTEMA 2 ------------------------------------------>
        Separador
        #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 1.2 Verduras

    .style___box_1.fit___style_1.mb-5(data-aos="zoom-in")
      p.mb-0 Las verduras están constituidas por diferentes partes de las plantas, entre las que se incluyen raíces, bulbos, tallos, hojas, hierbas, flores, frutos y semillas. Su diversidad estructural determina su clasificación y su aporte nutricional dentro de la alimentación humana.

    .color___box_3
      .px-5

        <!-- TITULOS TERCER NIVEL -->
        .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
          .col-lg-auto
            figure
              img(src="@/assets/curso/temas/img4.svg" style="max-width: 78px").m-auto
          .col
            h3 Clasificación de las verduras según la parte comestible

        p.mb-5 A continuación, se expone la clasificación de las verduras en función de la parte de la planta que se consume habitualmente.

        <!-- CARRUSEL DE TARJETAS SOLO -->
        SlyderF(columnas="col-lg-6 col-xl-4")(data-aos="zoom-in").mb-5
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/img15.svg' style="max-width: 70px").m-auto
            h4.mb-3.estilo-text Raíces y rizomas
            p.mb-0 Nabo, zanahoria, remolacha.
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/img16.svg' style="max-width: 90px").m-auto
            h4.mb-3.estilo-text Bulbos y tubérculos
            p.mb-0 Cebolla, ajo, puerro.
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/img17.svg' style="max-width: 90px").m-auto
            h4.mb-3.estilo-text Tallos, hojas y hierbas
            p.mb-0 Acelga, lechuga, espinaca, espárrago.
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/img18.svg' style="max-width: 90px").m-auto
            h4.mb-3.estilo-text Flores e inflorescencias
            p.mb-0 Alcachofa, coliflor.
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/img19.svg' style="max-width: 90px").m-auto
            h4.mb-3.estilo-text Frutos y semillas
            p.mb-0 Tomate, pepino, berenjena, calabaza, pimiento.

        <!-- TITULOS TERCER NIVEL -->
        .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
          .col-lg-auto
            figure
              img(src="@/assets/curso/temas/img4.svg" style="max-width: 78px").m-auto
          .col
            h3 Componentes de las verduras

        p.mb-5 A continuación, se describen los principales componentes químicos de las verduras, los cuales determinan su valor nutricional y su relevancia dentro de una alimentación equilibrada.

    <!-- ACORDION A -->
    .bg--img_03.mb-5
      .row.h-100.align-items-center
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta acordeonA")(data-aos="fade-right")
            .row(titulo="Agua").ajuste-cajaAcordion
              .col-xl
                p.mb-3 Representa aproximadamente el 80% de la composición total de las verduras, lo que contribuye a su baja densidad energética y a su papel hidratante en la alimentación.
              .col-xl-auto
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img21.png', alt='' style="max-width: 150px").m-auto 
            .row(titulo="Carbohidratos").ajuste-cajaAcordion
              .col-xl
                p.mb-3 Su contenido varía según el tipo de verdura, lo que permite clasificarlas en diferentes grupos.
              .col-xl-auto
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img22.png', alt='' style="max-width: 150px").m-auto 
            .row(titulo="Vitaminas y minerales").ajuste-cajaAcordion
              .col-xl
                p.mb-3 Aportan ácido fólico, provitamina A, β-caroteno, vitamina C, ácido ascórbico y vitamina E, los cuales actúan como antioxidantes y ayudan a prevenir la peroxidación lipídica en tejidos con alta presencia de oxígeno. Los minerales más representativos son el potasio y el hierro.
              .col-xl-auto
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img23.png', alt='' style="max-width: 150px").m-auto 
            .row(titulo="Fibra dietética").ajuste-cajaAcordion
              .col-xl
                p.mb-3 Se presenta en forma soluble e insoluble. La fibra soluble se encuentra principalmente en frutas y verduras, mientras que la insoluble predomina en cereales integrales y leguminosas. El contenido de fibra en las verduras oscila entre el 2% y el 10%.
              .col-xl-auto
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img24.png', alt='' style="max-width: 150px").m-auto 
        .col-xl-auto
          figure(data-aos="fade-left").d-none.d-xl-block
            img(src="@/assets/curso/temas/img20.png", alt="" ).m-auto

    <!-- TITULOS TERCER NIVEL -->
    .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img4.svg" style="max-width: 78px").m-auto
      .col
        h3 Clasificación de las verduras según el contenido de carbohidratos

    p.mb-5 El contenido de carbohidratos permite agrupar las verduras en categorías con implicaciones nutricionales específicas.

    <!-- TARJETAS CON AVATAR -->
    .row.justify-content-center.mb-5
      .col-xl-4.col-md-9(data-aos="zoom-in")
        .style___box_4.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure.mb-4(data-aos="fade-right")
                img(src='@/assets/curso/temas/img25.svg', alt="" style="max-width: 120px").m-auto
            h4.text-center Grupo I
            p.mb-3 Acelga, berenjena, coliflor, apio, espinaca, tomate, rábano, lechuga.
            p.mb-0 #[b Contenido de carbohidratos]: menor al 5%.
      .col-xl-4.col-md-9(data-aos="zoom-in").espacio___movil_3
        .style___box_4.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure.mb-4(data-aos="zoom-in")
                img(src='@/assets/curso/temas/img26.svg', alt="" style="max-width: 120px").m-auto
            h4.text-center Grupo II
            p.mb-3 Remolacha, chícharo, puerro, cebolla, zanahoria, alcachofa.
            p.mb-0 #[b Contenido de carbohidratos]: entre 5% y 10%.
      .col-xl-4.col-md-9(data-aos="zoom-in").espacio___movil_3
        .style___box_4.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure.mb-4(data-aos="fade-left")
                img(src='@/assets/curso/temas/img27.svg', alt="" style="max-width: 120px").m-auto
            h4.text-center Grupo III
            p.mb-3 Papa, batata.
            p.mb-0 #[b Contenido de carbohidratos]: aproximadamente 10%.

    <!-- TITULOS TERCER NIVEL -->
    .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img4.svg" style="max-width: 78px").m-auto
      .col
        h3 Fibra dietética y consumo recomendado

    .style___box_1.fit___style_1(data-aos="zoom-in")
      .row.align-items-center
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src='@/assets/curso/temas/img28.svg', alt='').m-auto
        .col-xl
          p.mb-0 La fibra dietética cumple funciones esenciales en el tránsito intestinal y en la regulación metabólica. El consumo recomendado de fibra se sitúa entre 30 y 35 g diarios. Para alcanzar esta cantidad en la dieta, se requiere la ingesta aproximada de cinco porciones diarias de frutas y verduras, lo que resalta la importancia de estos alimentos dentro de una alimentación balanceada.

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
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

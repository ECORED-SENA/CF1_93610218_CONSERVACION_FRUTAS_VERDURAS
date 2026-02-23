<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .color___box_1
      .px-5

        .row.align-items-center.mb-5
          .col-xl-auto(data-aos="fade-right")
            figure.d-none.d-xl-block
              img(src='@/assets/curso/intro/img2.jpg', alt='').m-auto
          .col-xl
            p.mb-3 Las frutas y las verduras constituyen un grupo fundamental dentro de la alimentación humana debido a su aporte de agua, fibra, vitaminas, minerales y compuestos bioactivos. Su diversidad morfológica y botánica permite establecer clasificaciones que facilitan su estudio, manejo y aprovechamiento, diferenciando claramente entre frutas y verduras a partir de su estructura, composición y uso alimentario.
            p.mb-0.style___box_1(data-aos="fade-left") La conservación de estos alimentos ha acompañado a la humanidad desde el inicio de la agricultura, cuando surgió la necesidad de prolongar su disponibilidad en períodos de escasez. A lo largo del tiempo se desarrollaron métodos basados en el frío, el calor, la reducción de agua y el control del oxígeno, los cuales buscan preservar las propiedades nutricionales y sensoriales, así como reducir el deterioro causado por microorganismos, enzimas y factores ambientales.

        p.mb-0 En este contexto, las técnicas poscosecha adquieren un papel central, ya que permiten mantener la calidad de frutas y verduras después de su recolección. Aspectos como la determinación del índice de cosecha, la eliminación del calor de campo, el control de la maduración y la respiración resultan determinantes para prolongar la vida útil de los alimentos y asegurar su inocuidad durante el almacenamiento, transporte y consumo.

</template>

<script>
export default {
  name: 'Introduccion',
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

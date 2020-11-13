<template>
  <div id="greywrap">
    <div class="row">
      <div v-for="(speciality, index) in data" :key="speciality.title" class="callout animated wow zoomIn" :class="`col-lg-${12 / data.length}`" :data-wow-delay="index ? '.4s' : ''">
        <span class="icon ion-shuffle" />
        <h2>{{ speciality.title }}</h2>
        <p>{{ speciality.description }}</p>
      </div>
    </div>
  </div><!-- greywrap -->
</template>

<script>
export default {
  props: {
    data: {
      type: Array,
      default () {
        return [{
          title: '',
          description: ''
        }]
      }
    }
  }
}
</script>

<template>
  <div id="headerwrap" itemscope itemtype="http://schema.org/Person">
    <header id="home" class="clearfix">
      <h1>
        <span itemprop="honorificPrefix">{{ site.title }} </span>
        <span itemprop="givenName">{{ site.name }} </span>
        <span itemprop="familyName">{{ site.surname }}, </span>
        <span itemprop="award">{{ site.qualification }}</span>
      </h1>
      <h2 class="animated wow zoomIn" itemprop="jobTitle">
        {{ site.jobtitle }}
      </h2>
      <p style="font-size:30px;margin:0">
        <span class="ion-ios-home-outline" />
      </p>
      <p>
        <a :href="site.map" itemprop="workLocation" v-html="site.address" /><br>
      </p>
      <p>
        <strong>To make an appointment please contact:</strong><br>
        <span>Dr. Nur's PA, Ms Martha Alleje</span><br>
        <a :href="`mailto: ${site.email}`" itemprop="email">{{ site.email }}</a><br>
        <span itemprop="telephone">{{ site.tel }}</span>
      </p>
    </header>
  </div>
</template>

<script>
export default {
  props: {
    site: {
      type: Object,
      default () {
        return {
          title: '',
          name: '',
          surname: '',
          qualification: '',
          jobtitle: '',
          address: '',
          map: '',
          email: ''
        }
      }
    }
  }
}
</script>

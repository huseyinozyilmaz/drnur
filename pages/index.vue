<template>
  <div class="page-content">
    <div class="wrapper">
      <site-header :site="site" />
      <speciality :data="site.speciality" />

      <div id="about" class="container">
        <div class="row white">
          <h1 class="centered">
            {{ about.title }}
          </h1>
          <hr><br>
          <nuxt-content :document="about" />
        </div><!-- row -->
      </div><!-- ABOUT container -->

      <!-- ==== SECTION DIVIDER1 -->
      <section id="experience" class="section-divider textdivider textdivider-light divider1">
        <div class="container">
          <div class="experience animated wow flipInX">
            <h1>{{ experince }}</h1>
            <p>years<br>in medicine</p>
          </div>
          <hr>
          <nuxt-content :document="experience" />
        </div><!-- container -->
      </section><!-- section -->

      <!-- ==== Nutrition ==== -->
      <div id="nutrition" class="container">
        <div class="row white">
          <h1 class="centered">
            {{ nutrition.title }}
          </h1>
          <hr><br>
          <div class="col-lg-offset-2 col-lg-8">
            <nuxt-content :document="nutrition" />
          </div>
        </div>
      </div><!-- Nutrition container -->

      <!-- ==== SECTION DIVIDER2 -->
      <section class="section-divider textdivider divider2">
        <div class="container diet">
          <h1>{{ nutrition.slogan }}</h1>
          <hr>
        </div>
      </section>

      <!-- ==== Forms ==== -->
      <div id="forms" class="container">
        <forms />
      </div>
      <!-- Forms container -->

      <!-- ==== SECTION DIVIDER6 ==== -->
      <section class="section-divider textdivider divider6">
        <div class="container animated wow zoomInUp">
          <h1>{{ site.practice }}</h1>
          <hr>
          <p v-html="site.address" />
          <p>{{ site.tel }}</p>
          <p><a class="icon ion-ios-email" :href="`mailto:${site.email}`" /> | <a class="icon ion-social-facebook" :href="site.facebook" /></p>
        </div>
      </section><!-- section -->
    </div>

    <div id="contact" class="container">
      <div class="row" style="background-color:#f5f5f5;">
        <h1 class="centered">
          {{ site.thanks }}
        </h1>
        <hr>
        <div class="col-lg-offset-2 col-lg-4 contact-info">
          <h3>Contact Information</h3>
          <br>
          <p><span class="contact-icon ion-ios-home" /><a :href="site.map" v-html="site.address" /></p>
          <p><span class="contact-icon ion-ios-telephone" /> {{ site.tel }} </p>
          <p><span class="contact-icon ion-ios-email" /> <a :href="`mailto:${site.email}`"> {{ site.email }}</a></p>
        </div><!-- col -->
        <contact-form :action="site.contactaction" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData ({ $content }) {
    const site = await $content('site').fetch()
    const about = await $content('about').fetch()
    const experience = await $content('experience').fetch()
    const nutrition = await $content('nutrition').fetch()
    return {
      site, about, experience, nutrition
    }
  },
  computed: {
    experince () {
      return new Date().getFullYear() - 1995
    }
  },
  head () {
    return {
      title: this.site.fulltitle,
      meta: [
        { hid: 'author', name: 'author', content: this.site.fulltitle },
        { hid: 'description', name: 'description', content: this.site.description },
        // Open Graph
        { hid: 'og:url', property: 'og:url', content: this.site.url },
        { hid: 'og:site_name', property: 'og:site_name', content: this.site.title + this.site.name },
        { hid: 'og:type', property: 'og:type', content: 'article' },
        { hid: 'og:article:author', property: 'og:article:author', content: this.site.fulltitle },
        { hid: 'og:article:published_time', property: 'og:article:published_time', content: this.site.updatedAt },
        { hid: 'og:image', property: 'og:image', content: `${this.site.url}/assets/img/nur.jpg` },
        { hid: 'og:title', property: 'og:title', content: `${this.site.fulltitle}, ${this.site.jobtitle}` },
        { hid: 'og:description', property: 'og:description', content: this.site.description },
        // Twitter Card
        { hid: 'twitter:card', name: 'twitter:card', content: 'summary' },
        { hid: 'twitter:url', name: 'twitter:url', content: this.site.url },
        { hid: 'twitter:image', name: 'twitter:image', content: `${this.site.url}/assets/img/nur.jpg` },
        { hid: 'twitter:title', name: 'twitter:title', content: `${this.site.fulltitle}, ${this.site.jobtitle}` },
        { hid: 'twitter:description', name: 'twitter:description', content: this.site.description }
      ]
    }
  }
}
</script>

<template>
  <div class="page-content">
    <div class="wrapper">
      <site-header :site="site" />
    </div>
  </div>
</template>

<script>
export default {
  async asyncData ({ $content }) {
    const site = await $content('site').fetch()
    return {
      site
    }
  },
  head () {
    return {
      title: this.site.title,
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

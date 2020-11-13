<template>
  <div data-spy="scroll" data-offset="0" data-target="#navbar-main">
    <!-- {% include header.html %} -->
    <site-nav fulltitle="site.fulltitle" />
    <Nuxt />
    <!-- {% include footer.html %}
    {% include scripts.html %} -->
  </div>
</template>

<script>
export default {
  async asyncData ({ $content }) {
    const site = await $content('site').fetch()
    return {
      site
    }
  }
}
</script>

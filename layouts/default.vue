<template>
  <div data-spy="scroll" data-offset="0" data-target="#navbar-main">
    <site-nav fulltitle="site.fulltitle" />
    <Nuxt />
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

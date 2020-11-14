<template>
  <div id="footerwrap">
    <div class="container">
      <h5>designed and developed by <a href="https://huseyin.org">HMO</a> - &copy;{{ year }}</h5>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    year () {
      return new Date().getFullYear()
    }
  }
}
</script>

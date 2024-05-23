<template>
  <img 
    :src="props.src" 
    class=" w-40 rounded-full m-auto my-2 md:my-6" 
    :alt="props.alt"
    width="160" 
    height="160"
  >
</template>

<script setup>
const props = defineProps(['src', 'alt'])
</script>

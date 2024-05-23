<template>
  <div>
    <address class="not-italic" itemprop="address" itemscope itemtype="https://schema.org/PostalAddress">
      <a :href="props.address.map" class="flex gap-2 justify-center">
        <span itemprop="streetAddress">{{ props.address.street }},</span>
        <span itemprop="addressLocality">{{ props.address.city }} </span>
        <span itemprop="postalCode">{{ props.address.postcode }}</span>
      </a>
      <a :href="tel" class="block mt-3" itemprop="telephone">{{ props.address.phone }}</a>
    </address>
  </div>
</template>

<script setup>
const props = defineProps(['address'])

const tel = computed(() => {
  return `tel:${props.address.phone.replace(/ /g,'')}`
})
</script>
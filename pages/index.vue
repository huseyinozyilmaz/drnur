<template>
  <div>
    <header class="text-center" itemscope itemtype="http://schema.org/Person">
      <ProfilePhoto :src="app.profile.photo.src" :alt="app.profile.photo.alt" itemprop="image" />
      <h1 class="text-3xl my-2 uppercase" itemprop="name">{{ app.profile.fullName }}, {{ app.profile.qualification }}</h1>
      <SocialLinks :links="app.profile.social" />
      <PostalAddress :address="app.profile.address" />
    </header>

    <section class="my-8" id="about">
      <p v-for="p in app.profile.about" class="py-2 text-base lg:text-justify">{{ p }}</p>
    </section>

    <section class="my-8" id="appointments">
      <h2 class="font-bold py-5 uppercase text-2xl">Appointments</h2>
      <Packages />
    </section>

  </div>
</template>

<script setup>
const app = useAppConfig()
useSeoMeta({
  title: app.title,
  description: app.description,
})
</script>
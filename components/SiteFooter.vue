<template>
  <footer class="mt-6 lg:mt-24 mb-12">
    <div class="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8 border-t-[1px] border-b-[1px]">
      <div class="flex justify-center">
        <NuxtLink to="/" class="flex flex-col gap-2 justify-center">
          <img :src="app.logo.src" :alt="app.logo.alt" :title="app.profile.shortName" width="58" height="58" class="m-auto">
          <span class="h-[32px] leading-7 md:block font-mono">{{ app.profile.shortName }}</span>
        </NuxtLink>
      </div>
  
      <div id="contact" class="mx-auto mt-6 max-w-md text-center leading-relaxed">
        <PostalAddress :address="app.profile.address"/>
        <a :href="`mailto:${app.profile.address.email}`" class="my-3 block">{{app.profile.address.email}}</a>
      </div>
  
      <ul class="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12 font-mono">
        <li><a class="text-gray-700 transition hover:text-gray-700/75" href="/#about"> About </a></li>
        <li><a class="text-gray-700 transition hover:text-gray-700/75" href="/#appointments"> Appointments </a></li>
        <li><a class="text-gray-700 transition hover:text-gray-700/75" href="/#contact"> Contact </a></li>
        <li><a class="text-gray-700 transition hover:text-gray-700/75" href="https://numaoxygen.com"> NUMA </a></li>
      </ul>
  
      <ul class="mt-2 flex justify-center gap-6 md:gap-8">
        <li><SocialLinks :links="app.profile.social" /></li>
      </ul>
    </div>
    <div class="text-center text-xs bg-white pt-3">
      &#169; {{ new Date().getFullYear() }}
    </div>
  </footer>
</template>

<script setup>
const app = useAppConfig()
</script>
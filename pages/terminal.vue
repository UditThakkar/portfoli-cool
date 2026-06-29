<script setup lang="ts">
useSeoMeta({
  title: 'Interactive CLI Terminal - Udit Thakkar',
  ogTitle: 'Interactive CLI Terminal - Udit Thakkar',
  description: 'An interactive command-line interface terminal showcasing Udit Thakkar\'s skills, projects, and contact info in a retro developer shell.',
  ogDescription: 'Query Udit Thakkar\'s skills and projects in an interactive retro shell.',
  ogType: 'website',
  twitterCard: 'summary_large_image',
})
</script>

<template>
  <div class="relative px-4 sm:px-8 lg:px-12 mt-8">
    <div class="max-w-2xl mx-auto lg:max-w-5xl">
      <header class="max-w-2xl mb-8">
        <h1 class="text-4xl font-bold tracking-tight text-zinc-100 sm:text-5xl">
          Interactive CLI Terminal
        </h1>
        <p class="mt-6 text-base text-zinc-400">
          Query my profile, skills, projects, or neofetch directly from this virtual shell. Type <span class="text-green-400 font-semibold font-mono">help</span> to begin.
        </p>
      </header>
      
      <!-- Render the terminal component -->
      <HomeTerminal />
    </div>
  </div>
</template>

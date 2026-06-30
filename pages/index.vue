<script setup lang="ts">
import GithubGraph from '~/components/Home/GithubGraph.vue';
import { calculateExperience } from '~/config'

useSeoMeta({
  title: 'Udit Thakkar - Full-Stack Developer (Backend-Heavy)',
  ogTitle: 'Udit Thakkar - Full-Stack Developer (Backend-Heavy)',
  description: `Portfolio of Udit Thakkar, a backend-heavy Full-Stack Developer with ${calculateExperience()} years of experience building robust backend systems, APIs, and optimizing databases using Java Spring Boot and modern frontend technologies.`,
  ogDescription: `Portfolio of Udit Thakkar, a backend-heavy Full-Stack Developer with ${calculateExperience()} years of experience building robust backend systems, APIs, and optimizing databases using Java Spring Boot.`,
  ogType: 'website',
  twitterCard: 'summary_large_image',
})
</script>

<template>
  <div>
    <HomeHero />
    <!-- <HomeImages /> -->
    <GithubGraph />
  </div>
</template>

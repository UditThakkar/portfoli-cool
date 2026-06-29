<script lang="ts" setup>
import { menu } from '~/config'
</script>

<template>
  <div class="fixed top-0 left-0 right-0 z-50 flex justify-center py-4 bg-black/80 backdrop-blur-md border-b border-zinc-900/50">
    <nav>
      <ul class="flex px-3 text-sm font-medium border rounded-full shadow-lg bg-zinc-800/90 text-zinc-200 border-zinc-700/50">
        <li v-for="link in menu" :key="link.name">
          <NuxtLink 
            :to="link.path" 
            class="relative block px-3 py-2 transition hover:text-yellow-400"
            active-class="text-yellow-400 font-bold"
          >
            {{ link.name }}
          </NuxtLink>
        </li>
      </ul>
    </nav>
  </div>
</template>

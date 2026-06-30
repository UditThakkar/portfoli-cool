<script lang="ts" setup>
import { menu } from '~/config'
</script>

<template>
  <div class="py-4 mt-8 border-t border-zinc-700/40">
    <div class="relative px-4 sm:px-8 lg:px-12">
      <div class="max-w-2xl mx-auto lg:max-w-5xl">
        <div class="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div class="flex gap-6 text-sm font-medium text-zinc-200">
            <a v-for="link in menu" :key="link.name" class="transition hover:text-yellow-400" :href="link.path">
              {{ link.name }}
            </a>
          </div>
          <p class="text-sm text-zinc-500 font-mono">
            &copy; {{ new Date().getFullYear() }} Udit Thakkar. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

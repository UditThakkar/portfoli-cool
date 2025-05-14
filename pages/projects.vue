<script setup>
import { projects } from '~/config'
</script>

<template>
  <div class="mx-auto max-w-7xl lg:px-8">
    <div class="relative px-4 sm:px-8 lg:px-12">
      <div class="max-w-2xl mx-auto lg:max-w-5xl">
        <header class="max-w-2xl">
          <h1 class="text-4xl font-bold tracking-tight text-zinc-100 sm:text-5xl">
            Just a bunch of cool stuff I built to keep myself busy.
          </h1>
          <p class="mt-6 text-base text-zinc-400">
            Over the years, I've worked on tons of small and big projects, but these are the ones I'm most proud of.  
            All of them are available on my <a href="https://github.com/UditThakkar?tab=repositories" class="text-primary-500 hover:underline">GitHub</a>.  
            Feel free to check them out and see what I've been up to! 🚀💻
          </p>
        </header>
        <div class="mt-16 sm:mt-20">

          <div v-if="projects.length === 0" class="text-center py-10">
            <p class="text-xl text-zinc-400 animate-pulse">
              🚀 Cool things coming soon! Stay tuned.
            </p>
          </div>

          <ul v-else role="list" class="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
            <li v-for="project in projects" :key="project.name" class="relative flex flex-col items-start group">
              <div
                class="relative z-10 flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                <img alt="" :src="project.img" class="w-8 h-8 rounded-full">
              </div>
              <h2 class="mt-6 text-base font-semibold text-zinc-100">
                <div
                  class="absolute z-0 transition scale-95 opacity-0 -inset-y-6 -inset-x-4 bg-zinc-50 group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl">
                </div>
                <a :href="`${project.url}`">
                  <span class="absolute z-20 -inset-y-6 -inset-x-4 sm:-inset-x-6 sm:rounded-2xl">
                  </span>
                  <span class="relative z-10">{{ project.name }}</span>
                </a>
              </h2>
              <p class="relative z-10 mt-2 text-sm text-zinc-400">
                {{ project.description }}
              </p>
              <p
                class="relative z-10 flex mt-6 text-sm font-medium transition text-zinc-400 group-hover:text-primary-500 dark:text-zinc-200">
                <svg viewBox="0 0 24 24" aria-hidden="true" class="flex-none w-6 h-6">
                  <path
                    d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
                    fill="currentColor">
                  </path>
                </svg>
                <span class="ml-2">{{ project.url }}</span>
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<template>
  <div class="flex flex-col min-h-screen bg-black text-zinc-100">
    <Navbar />
    <main class="flex-grow flex justify-center overflow-x-hidden px-0 sm:px-8 pt-20">
      <div class="flex justify-center w-full max-w-7xl lg:px-8">
        <div class="flex justify-center w-full">
          <div
            class="flex flex-col justify-between w-full min-h-[calc(100vh-8rem)] pt-12 pb-6 px-4 sm:px-8 mx-0 sm:mx-4 my-0 sm:my-10 ring-0 sm:ring-2 bg-zinc-900 ring-zinc-300/20 rounded-none sm:rounded-xl">
            <NuxtPage />
            <Footer />
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<style>
html {
  @apply bg-black scroll-smooth;
}
</style>

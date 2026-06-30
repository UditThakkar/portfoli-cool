<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'

// Define the shape of our Spotify API response
interface SpotifyTrack {
  isPlaying: boolean
  title?: string
  artist?: string
  album?: string
  albumImageUrl?: string
  songUrl?: string
  error?: string
}

// Type-cast the useFetch hook
const { data: track, refresh } = useFetch<SpotifyTrack>('/api/spotify')

let pollInterval: any = null

onMounted(() => {
  // Poll the proxy endpoint every 10 seconds to update live playback state
  pollInterval = setInterval(() => {
    refresh()
  }, 10000)
})

onUnmounted(() => {
  if (pollInterval) {
    clearInterval(pollInterval)
  }
})
</script>

<template>
  <div 
    class="flex items-center gap-4 p-4 rounded-xl bg-zinc-800/40 border border-zinc-700/50 backdrop-blur-sm transition-all duration-300 hover:border-green-500/30 w-full"
  >
    <!-- Album Art / Vinyl Effect -->
    <div class="relative group flex-shrink-0 w-16 h-16">
      <a v-if="track?.songUrl" :href="track?.songUrl" target="_blank" class="block w-full h-full">
        <img 
          v-if="track?.albumImageUrl" 
          :src="track?.albumImageUrl" 
          alt="Album Art" 
          :class="[
            'w-full h-full object-cover rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-105',
            track?.isPlaying ? 'animate-[spin_10s_linear_infinite] rounded-full' : ''
          ]"
        />
        <div 
          v-else 
          class="w-full h-full rounded-lg bg-zinc-800 border border-zinc-700 flex items-center justify-center text-zinc-500"
        >
          🎵
        </div>
        
        <!-- Floating Spotify Icon (Hover Effect) -->
        <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full flex items-center justify-center">
          <svg class="w-6 h-6 text-[#1DB954]" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm4.586 14.424c-.18.295-.565.387-.86.207-2.377-1.454-5.37-1.783-8.894-.98-.336.075-.668-.135-.745-.47-.077-.337.135-.668.47-.746 3.847-.88 7.14-.51 9.822 1.13.295.18.387.563.207.86zm1.226-2.722c-.226.367-.707.487-1.074.26-2.72-1.672-6.87-2.157-10.078-1.182-.413.125-.847-.107-.972-.52-.125-.413.107-.847.52-.972 3.668-1.114 8.248-.57 11.344 1.333.367.227.487.708.26 1.075v.006zm.106-2.833C14.384 8.78 8.44 8.583 5.01 9.625c-.53.16-1.09-.14-1.25-.67-.16-.53.14-1.09.67-1.25 3.945-1.2 10.513-.976 14.61 1.455.48.285.64.9.355 1.38-.285.48-.9.64-1.38.355v.006z"/>
          </svg>
        </div>
      </a>
    </div>

    <!-- Track Info -->
    <div class="flex-grow min-w-0 text-left">
      <div class="flex items-center gap-2 mb-1">
        <span 
          :class="[
            'text-[10px] font-semibold px-2 py-0.5 rounded-full w-fit',
            track?.isPlaying 
              ? 'bg-green-500/10 text-green-400 border border-green-500/20 animate-pulse' 
              : 'bg-zinc-700/30 text-zinc-400 border border-zinc-700/50'
          ]"
        >
          {{ track?.isPlaying ? 'Currently Playing' : 'Recently Played' }}
        </span>

        <!-- Small CSS Audio Equalizer Waveform -->
        <div v-if="track?.isPlaying" class="flex gap-[2px] items-end h-3 pb-0.5">
          <span class="w-[2px] bg-green-400 animate-[bounce_0.8s_infinite_0.1s] h-1.5"></span>
          <span class="w-[2px] bg-green-400 animate-[bounce_0.8s_infinite_0.3s] h-3"></span>
          <span class="w-[2px] bg-green-400 animate-[bounce_0.8s_infinite_0.5s] h-2"></span>
        </div>
      </div>

      <h3 class="text-sm font-bold text-zinc-100 truncate">
        <a 
          v-if="track?.songUrl" 
          :href="track?.songUrl" 
          target="_blank" 
          class="hover:text-green-400 hover:underline transition-colors duration-200"
        >
          {{ track?.title || 'Not Listening' }}
        </a>
        <span v-else>Offline</span>
      </h3>
      <p class="text-xs text-zinc-400 truncate">
        {{ track?.artist || 'Spotify is currently silent.' }}
      </p>
    </div>
  </div>
</template>

<style scoped>
@keyframes bounce {
  0%, 100% { height: 4px; }
  50% { height: 12px; }
}
</style>
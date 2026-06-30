<script setup lang="ts">
import { ref, onMounted, nextTick } from 'vue'
import { projects, experiences, calculateExperience } from '~/config'

// Define history line structure
interface HistoryItem {
  command: string
  output: string
  isRawHtml?: boolean
}

const inputCmd = ref('')
const terminalBody = ref<HTMLElement | null>(null)
const history = ref<HistoryItem[]>([
  {
    command: '',
    output: 'Welcome to the Backend Wizard Console v1.0.0. Type <span class="text-green-400 font-bold">help</span> to begin.',
    isRawHtml: true
  }
])

// Auto scroll to bottom
const scrollToBottom = async () => {
  await nextTick()
  if (terminalBody.value) {
    terminalBody.value.scrollTop = terminalBody.value.scrollHeight
  }
}

// Commands executor
const executeCommand = () => {
  const rawInput = inputCmd.value.trim()
  inputCmd.value = ''
  
  if (!rawInput) return

  const parts = rawInput.split(' ')
  const command = parts[0].toLowerCase()

  let output = ''
  let isRawHtml = false

  switch (command) {
    case 'help':
      output = `
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-1 font-mono text-zinc-400 mt-1">
          <div><span class="text-green-400">help</span> - Show this help menu</div>
          <div><span class="text-green-400">about</span> - Read Udit's bio</div>
          <div><span class="text-green-400">skills</span> - List tech stack & wizard levels</div>
          <div><span class="text-green-400">experience</span> - View professional experience</div>
          <div><span class="text-green-400">projects</span> - View featured projects</div>
          <div><span class="text-green-400">contact</span> - Get social & email links</div>
          <div><span class="text-green-400">neofetch</span> - System specs & avatar</div>
          <div><span class="text-green-400">clear</span> - Clear console screen</div>
        </div>
      `
      isRawHtml = true
      break

    case 'about':
      output = `
        Udit Thakkar — Backend Wizard (Full-Stack Developer) based in India.
        Specializes in building robust, high-performance APIs and microservices.
        He has ${calculateExperience()} years of experience, plays competitive Valorant/CS2, and runs on caffeine.
      `
      break

    case 'skills':
      output = `
        <div class="space-y-1 font-mono text-zinc-300 mt-1">
          <p><span class="text-yellow-400 font-bold">[Arch-Mage]</span> Java, Spring Boot, Spring Security, REST APIs</p>
          <p><span class="text-cyan-400 font-bold">[Sorcerer]</span> SQL, PostgreSQL, Redis, RabbitMQ, Git</p>
          <p><span class="text-indigo-400 font-bold">[Alchemist]</span> Vue.js, Nuxt 3, JavaScript, TypeScript, Next.js</p>
          <p><span class="text-zinc-500 font-bold">[Novice]</span> CSS, Docker, Microservices Architecture</p>
        </div>
      `
      isRawHtml = true
      break

    case 'experience':
    case 'resume':
      output = `
        <div class="space-y-3 font-mono text-zinc-300 mt-1">
          ${experiences.map(exp => `
            <div>
              <p class="text-yellow-400 font-bold">${exp.position} at ${exp.company}</p>
              <p class="text-zinc-500 text-xs">${exp.date}</p>
              <p class="text-zinc-400 text-sm mt-0.5">${exp.description}</p>
            </div>
          `).join('')}
        </div>
      `
      isRawHtml = true
      break

    case 'projects':
      const projectList = projects.map(p => 
        `• <a href="${p.url}" target="_blank" class="text-cyan-400 hover:underline font-bold">${p.name}</a> - ${p.description}`
      ).join('<br>')
      output = `<div class="space-y-1 font-mono mt-1">${projectList}</div>`
      isRawHtml = true
      break

    case 'contact':
      output = `
        <div class="space-y-1 font-mono mt-1">
          <p>📧 Email: <a href="mailto:uditthacker29@gmail.com" class="text-cyan-400 hover:underline">uditthacker29@gmail.com</a></p>
          <p>💻 GitHub: <a href="https://github.com/UditThakkar" target="_blank" class="text-cyan-400 hover:underline">github.com/UditThakkar</a></p>
          <p>🔗 LinkedIn: <a href="https://www.linkedin.com/in/udit-thacker/" target="_blank" class="text-cyan-400 hover:underline">linkedin.com/in/udit-thacker/</a></p>
          <p>📸 Instagram: <a href="https://instagram.com/udit_29" target="_blank" class="text-cyan-400 hover:underline">instagram.com/udit_29</a></p>
        </div>
      `
      isRawHtml = true
      break

    case 'neofetch':
      output = `
        <div class="flex flex-col md:flex-row gap-6 font-mono text-zinc-300 mt-2">
          <pre class="text-yellow-500 font-bold text-[10px] leading-tight">
    /\\
   /  \\
  /    \\
 /______\\
(________)
  🧙‍♂️💻
          </pre>
          <div class="space-y-1">
            <p class="text-green-400 font-bold">udit@backend-wizard</p>
            <p>------------------</p>
            <p><span class="text-yellow-400">OS</span>: Windows Server / Nuxt 3 Engine</p>
            <p><span class="text-yellow-400">Exp</span>: ${calculateExperience()} Years (Backend-Heavy)</p>
            <p><span class="text-yellow-400">Focus</span>: APIs, DB Optimization, Event Driven Systems</p>
            <p><span class="text-yellow-400">Caffeine</span>: Active (Spring Boot Powered)</p>
          </div>
        </div>
      `
      isRawHtml = true
      break

    case 'clear':
      history.value = []
      scrollToBottom()
      return

    default:
      output = `command not found: ${command}. Type 'help' for options.`
      break
  }

  history.value.push({
    command: rawInput,
    output,
    isRawHtml
  })

  scrollToBottom()
}

// Keep terminal input focused on click
const focusInput = () => {
  const inputEl = document.getElementById('terminal-input')
  if (inputEl) inputEl.focus()
}
</script>

<template>
  <div class="relative px-4 sm:px-8 lg:px-12 mt-12 mb-4">
    <div class="max-w-2xl mx-auto lg:max-w-5xl">
      <div 
        class="flex flex-col h-[450px] rounded-xl bg-zinc-950 border border-zinc-800 font-mono text-sm overflow-hidden shadow-2xl transition-all duration-300 focus-within:ring-1 focus-within:ring-green-500/50"
        @click="focusInput"
      >
        <!-- Header Bar -->
        <div class="flex items-center justify-between px-4 py-2 bg-zinc-900 border-b border-zinc-850">
          <div class="flex gap-2">
            <span class="w-3 h-3 rounded-full bg-red-500/80"></span>
            <span class="w-3 h-3 rounded-full bg-yellow-500/80"></span>
            <span class="w-3 h-3 rounded-full bg-green-500/80"></span>
          </div>
          <span class="text-xs text-zinc-500 font-semibold select-none">backend-wizard-shell</span>
          <div class="w-12"></div> <!-- Spacer -->
        </div>

        <!-- Terminal Logs Area -->
        <div 
          ref="terminalBody"
          class="flex-grow p-4 overflow-y-auto space-y-3 customScrollbarVisible"
        >
          <div v-for="(item, index) in history" :key="index" class="space-y-1">
            <!-- Command typed -->
            <div v-if="item.command" class="flex items-center text-green-400">
              <span class="text-zinc-500 mr-2">wizard:~$</span>
              <span>{{ item.command }}</span>
            </div>
            
            <!-- Output response -->
            <div class="text-zinc-300 leading-relaxed whitespace-pre-line pl-4 border-l border-zinc-800">
              <div v-if="item.isRawHtml" v-html="item.output"></div>
              <div v-else>{{ item.output }}</div>
            </div>
          </div>
        </div>

        <!-- Input Prompt -->
        <div class="flex items-center px-4 py-3 bg-zinc-900/50 border-t border-zinc-850">
          <span class="text-green-500 font-bold mr-2 select-none">wizard:~$</span>
          <input 
            id="terminal-input"
            v-model="inputCmd"
            type="text"
            class="flex-grow bg-transparent text-zinc-200 border-none outline-none focus:ring-0 p-0 font-mono caret-green-500"
            autocomplete="off"
            placeholder="type 'help'..."
            @keyup.enter="executeCommand"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Scrollbar settings inherit app-wide or look retro */
::-webkit-scrollbar {
  width: 6px;
}
::-webkit-scrollbar-track {
  background: #09090b;
}
::-webkit-scrollbar-thumb {
  background: #27272a;
  border-radius: 4px;
}
::-webkit-scrollbar-thumb:hover {
  background: #3f3f46;
}
</style>
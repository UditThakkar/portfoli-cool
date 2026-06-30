export const menu = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Projects', path: '/projects' },
  { name: 'Resume', path: '/resume' },
  { name: 'Terminal', path: '/terminal' },
]

export const projects = [
  {
    name: 'Sentinel Auth: Spring Boot Starter',
    description: 'A professional Spring Boot starter library designed to handle JWT authentication, user management, and security auditing. Features automated token validation, account lockout protection, password recovery, and asynchronous security event logging with IP tracking.',
    img: '',
    url: 'https://github.com/UditThakkar/Sentinel-Auth-Spring'
  },
  {
    name: 'Jeera: A project management tool',
    description: 'A basic project management tool that allows users to create and manage projects, tasks, and team members. Built with Java, Spring Boot, and Vue.js. This is a work in progress.',
    img: '/jeera.png',
    url: 'https://github.com/UditThakkar/jeera'
  },
  {
    name: 'Sincify',
    description: 'Transfer your music from Spotify to YouTube. Easy and fast.',
    img: '',
    url: ''
  }
]

export const experiences = [
  {
    // --- NEW BITWISE ENTRY (Current Role) ---
    company: 'Bitwise',
    date: 'July 2025 - Now', 
    description: 'Working as a Full-Stack Developer. Developing robust backend solutions using Java Spring Boot and building modern frontend interfaces with Next.js.',
    position: 'Programmer Analyst',
    url: ''
  },
  {
    // --- UPDATED GAMMASTACK ENTRY ---
    company: 'Gammastack',
    date: '2023 - July 2025', 
    description: 'Worked on building and optimizing backend systems using Java Spring Boot, focusing on system performance, security, and fraud detection. Implemented event-driven architecture using RabbitMQ and resolved critical issues like Facebook social login, significantly improving user experience.',
    position: 'Software Development Engineer',
    url: 'https://www.gammastack.com/'
  }
]

export function calculateExperience() {
  const gammastackStart = new Date(2023, 1) // Feb 2023 (0-indexed: 1 = Feb)
  const gammastackEnd = new Date(2025, 6)   // July 2025 (0-indexed: 6 = July)
  
  const bitwiseStart = new Date(2025, 6)    // July 2025 (0-indexed: 6 = July)
  const bitwiseEnd = new Date()             // Current date
  
  const gammaMonths = (gammastackEnd.getFullYear() - gammastackStart.getFullYear()) * 12 + 
                      (gammastackEnd.getMonth() - gammastackStart.getMonth())
                      
  const bitwiseMonths = (bitwiseEnd.getFullYear() - bitwiseStart.getFullYear()) * 12 + 
                        (bitwiseEnd.getMonth() - bitwiseStart.getMonth())
                        
  const totalMonths = gammaMonths + bitwiseMonths
  const totalYears = totalMonths / 12
  
  return totalYears.toFixed(1)
}

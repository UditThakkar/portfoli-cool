<template>
  <div class="relative px-4 sm:px-8 lg:px-12">
    <div class="max-w-2xl mx-auto lg:max-w-5xl">
      <div class="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div class="lg:pl-20">
          <div class="max-w-xs px-2.5 lg:max-w-none">
            <img alt="" src="~/assets/profile-pic.jpg" class="object-cover aspect-square rotate-3 rounded-2xl bg-zinc-800">
          </div>
        </div>
        <div class="lg:order-first lg:row-span-2">
          <h1 class="text-4xl font-bold tracking-tight text-zinc-100 sm:text-5xl">
            I'm Udit Thakkar,
            I am a backend wizard! 🧙‍♂️💻
          </h1>
          <div class="mt-6 text-base space-y-7 text-zinc-400">
            <p>
              Hey there! I'm Udit Thakkar — a backend developer who loves building powerful and scalable web applications. I turn caffeine into clean code and make sure everything runs smoothly behind the scenes. ☕💻
            </p>
            <p>
              I’ve got 2 years of experience working with Java Spring Boot, creating robust APIs, optimizing databases, and making the web a better place (at least the backend part of it 😉).
            </p>
            <p>
              When I'm not busy fixing bugs or deploying new features, you’ll probably find me gaming (Valorant or CS2), binge-watching anime, or experimenting with some new tech stack. 🎮📺🔧
            </p>
            <p>
              I believe that with a bit of code, a dash of creativity, and a lot of caffeine — you can build anything. ☕💻🚀
            </p>
            <p>
              So, whether you want to build an awesome project, play a game of Valorant, or just chat about cool tech stuff — hit me up! 🚀
            </p>

            <p>
              Boi Boi
            </p>
          </div>
        </div>
        <div class="lg:pl-20">
          <ul role="list">
            <li class="flex mt-4">
              <a class="flex text-sm font-medium transition group text-zinc-800 hover:text-primary-500 dark:text-zinc-200 dark:hover:text-primary-500"
                href="https://instagram.com/udit_29">
                <svg viewBox="0 0 24 24" aria-hidden="true"
                  class="flex-none w-6 h-6 transition fill-zinc-500 group-hover:fill-primary-500">
                  <path
                    d="M12 3c-2.444 0-2.75.01-3.71.054-.959.044-1.613.196-2.185.418A4.412 4.412 0 0 0 4.51 4.511c-.5.5-.809 1.002-1.039 1.594-.222.572-.374 1.226-.418 2.184C3.01 9.25 3 9.556 3 12s.01 2.75.054 3.71c.044.959.196 1.613.418 2.185.23.592.538 1.094 1.039 1.595.5.5 1.002.808 1.594 1.038.572.222 1.226.374 2.184.418C9.25 20.99 9.556 21 12 21s2.75-.01 3.71-.054c.959-.044 1.613-.196 2.185-.419a4.412 4.412 0 0 0 1.595-1.038c.5-.5.808-1.002 1.038-1.594.222-.572.374-1.226.418-2.184.044-.96.054-1.267.054-3.711s-.01-2.75-.054-3.71c-.044-.959-.196-1.613-.419-2.185A4.412 4.412 0 0 0 19.49 4.51c-.5-.5-1.002-.809-1.594-1.039-.572-.222-1.226-.374-2.184-.418C14.75 3.01 14.444 3 12 3Zm0 1.622c2.403 0 2.688.009 3.637.052.877.04 1.354.187 1.67.31.421.163.72.358 1.036.673.315.315.51.615.673 1.035.123.317.27.794.31 1.671.043.95.052 1.234.052 3.637s-.009 2.688-.052 3.637c-.04.877-.187 1.354-.31 1.67-.163.421-.358.72-.673 1.036a2.79 2.79 0 0 1-1.035.673c-.317.123-.794.27-1.671.31-.95.043-1.234.052-3.637.052s-2.688-.009-3.637-.052c-.877-.04-1.354-.187-1.67-.31a2.789 2.789 0 0 1-1.036-.673 2.79 2.79 0 0 1-.673-1.035c-.123-.317-.27-.794-.31-1.671-.043-.95-.052-1.234-.052-3.637s.009-2.688.052-3.637c.04-.877.187-1.354.31-1.67.163-.421.358-.72.673-1.036.315-.315.615-.51 1.035-.673.317-.123.794-.27 1.671-.31.95-.043 1.234-.052 3.637-.052Z">
                  </path>
                  <path
                    d="M12 15a3 3 0 1 1 0-6 3 3 0 0 1 0 6Zm0-7.622a4.622 4.622 0 1 0 0 9.244 4.622 4.622 0 0 0 0-9.244Zm5.884-.182a1.08 1.08 0 1 1-2.16 0 1.08 1.08 0 0 1 2.16 0Z">
                  </path>
                </svg>
                <span class="ml-4">Follow on Instagram</span>
              </a>
            </li>
            <li class="flex mt-4">
              <a class="flex text-sm font-medium transition group text-zinc-800 hover:text-primary-500 dark:text-zinc-200 dark:hover:text-primary-500"
                href="https://github.com/UditThakkar">
                <svg viewBox="0 0 24 24" aria-hidden="true"
                  class="flex-none w-6 h-6 transition fill-zinc-500 group-hover:fill-primary-500">
                  <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M12 2C6.475 2 2 6.588 2 12.253c0 4.537 2.862 8.369 6.838 9.727.5.09.687-.218.687-.487 0-.243-.013-1.05-.013-1.91C7 20.059 6.35 18.957 6.15 18.38c-.113-.295-.6-1.205-1.025-1.448-.35-.192-.85-.667-.013-.68.788-.012 1.35.744 1.538 1.051.9 1.551 2.338 1.116 2.912.846.088-.666.35-1.115.638-1.371-2.225-.256-4.55-1.14-4.55-5.062 0-1.115.387-2.038 1.025-2.756-.1-.256-.45-1.307.1-2.717 0 0 .837-.269 2.75 1.051.8-.23 1.65-.346 2.5-.346.85 0 1.7.115 2.5.346 1.912-1.333 2.75-1.05 2.75-1.05.55 1.409.2 2.46.1 2.716.637.718 1.025 1.628 1.025 2.756 0 3.934-2.337 4.806-4.562 5.062.362.32.675.936.675 1.897 0 1.371-.013 2.473-.013 2.82 0 .268.188.589.688.486a10.039 10.039 0 0 0 4.932-3.74A10.447 10.447 0 0 0 22 12.253C22 6.588 17.525 2 12 2Z">
                  </path>
                </svg>
                <span class="ml-4">Follow on GitHub</span>
              </a>
            </li>
            <li class="flex mt-4">
              <a class="flex text-sm font-medium transition group text-zinc-800 hover:text-primary-500 dark:text-zinc-200 dark:hover:text-primary-500"
                href="https://www.linkedin.com/in/udit-thacker/">
                <svg viewBox="0 0 24 24" aria-hidden="true"
                  class="flex-none w-6 h-6 transition fill-zinc-500 group-hover:fill-primary-500">
                  <path
                    d="M18.335 18.339H15.67v-4.177c0-.996-.02-2.278-1.39-2.278-1.389 0-1.601 1.084-1.601 2.205v4.25h-2.666V9.75h2.56v1.17h.035c.358-.674 1.228-1.387 2.528-1.387 2.7 0 3.2 1.778 3.2 4.091v4.715zM7.003 8.575a1.546 1.546 0 01-1.548-1.549 1.548 1.548 0 111.547 1.549zm1.336 9.764H5.666V9.75H8.34v8.589zM19.67 3H4.329C3.593 3 3 3.58 3 4.297v15.406C3 20.42 3.594 21 4.328 21h15.338C20.4 21 21 20.42 21 19.703V4.297C21 3.58 20.4 3 19.666 3h.003z">
                  </path>
                </svg>
                <span class="ml-4">Follow on LinkedIn</span>
              </a>
            </li>
            <li class="flex pt-8 mt-8 border-t border-zinc-100 dark:border-zinc-700/40">
              <a class="flex text-sm font-medium transition group text-zinc-800 hover:text-primary-500 dark:text-zinc-200 dark:hover:text-primary-500"
                href="uditthacker29@gmail.com">
                <svg viewBox="0 0 24 24" aria-hidden="true"
                  class="flex-none w-6 h-6 transition fill-zinc-500 group-hover:fill-primary-500">
                  <path fill-rule="evenodd"
                    d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z">
                  </path>
                </svg>
                <span class="ml-4">uditthacker29@gmail.com</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

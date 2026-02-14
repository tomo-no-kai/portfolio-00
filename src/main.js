// main.js
import './style.css'

document.querySelector('#app').innerHTML = `
  <section class="fixed top-0 left-0 w-full md:w-[420px] md:left-1/2 md:-translate-x-1/2 h-screen bg-main z-0">
    <div class="h-full flex flex-col items-center justify-center text-white px-6 text-center">

      <h1 class="text-4xl font-bold tracking-wide">
        LOGO
      </h1>

      <p class="mt-4 text-sm opacity-80 leading-relaxed">
        Creative Web & Graphic Design Portfolio
      </p>

      <div class="absolute bottom-20">
        ${scrollIndicator()}
      </div>

    </div>
  </section>

  <main class="relative z-10 mt-[100vh] bg-white min-h-screen">
    <div class="absolute -top-16 left-0 w-full overflow-hidden leading-none">
      ${wave()}
    </div>

    <section class="relative p-6">
      <h2 class="text-2xl font-semibold text-main">WORKS</h2>
      <div id="works" class="mt-6 space-y-4"></div>
    </section>
  </main>
`

// なみなみコンポーネント
function wave() {
  return `
    <img src="/wave.svg" class="w-full h-40 object-cover" />
  `
}

// スクロール誘導コンポーネント
function scrollIndicator() {
  return `
    <div class="w-12 h-12 rounded-full border border-white flex items-center justify-center animate-bounce">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="w-4 h-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
      >
        <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
      </svg>
    </div>
  `
}
// main.js
import './style.css'

document.querySelector('#app').innerHTML = `
  <section class="fixed top-0 left-0 w-full md:w-[420px] md:left-1/2 md:-translate-x-1/2 h-screen bg-main z-0">
    <div class="h-full flex flex-col items-center justify-center text-white px-6 text-center relative z-10">
      <h1 class="text-4xl font-bold tracking-wide text-white">
        ${logo()}
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

    <section id="works" class="relative px-8 pt-10 pb-10">
      <h2 class="text-5xl text-sub mb-10 font-extralight">WORKS</h2>
      <div class="space-y-6">
        <div class="relative group cursor-pointer shadow-sm">
          <div class="aspect-[16/8] bg-[#d9d9d9] flex items-center justify-center border-2 border-sub text-white text-3xl tracking-[0.2em] font-light rounded-sm hover:bg-white/40 duration-500"></div>
        </div>
          <div class="text-center pt-2 border-2 border-sub text-[14px] px-6 py-2 uppercase rounded-sm
            text-white bg-sub hover:text-sub hover:bg-white transition-colors duration-500">view all</div>
      </div>
    </section>

    <section id="about" class="px-8 py-12 bg-neutral-50/50">
      <h2 class="text-5xl text-sub mb-10 tracking-tighter font-extralight">ABOUT</h2>
      <div class="space-y-1">
        <p class="text-[10px] font-bold text-gray-800 tracking-[0.2em] uppercase font-extralight">Kanno Tomoka</p>
        <h3 class="text-3xl font-bold mb-8 font-extralight">菅野 友香</h3>
        
        <div class="pt-6 text-[11px] leading-[2.2] text-gray-700 space-y-6 max-w-sm">
          <p>
            2002年生まれ、大阪府在住。<br>
            美術系の高校でデザインに出会い、その後専門学校でグラフィックデザインを専攻。造形の基礎を学んだのち、現在はUI/UXを学ぶためにWebデザインの専門学校に在学中です。<br>
            2027年卒業予定で、現在就職活動中です。
          </p>
          <p>
            ディーター・ラムスの「Less, but better（より少なく、しかしより良く）」という思想に影響を受け、見る人に親切な「やさしいデザイン」を信念に活動しています。
          </p>
          <p>
            趣味では、ミニマルな機能美の中に、「かわいいスパイス」を添えたデザインを好み、よく楽しんでいます。
          </p>
        </div>
      </div>

      <div class="mt-20">
        <h4 class="text-2xl font-light mb-8 text-gray-400 tracking-widest uppercase">Skill</h4>

        <div class="grid grid-cols-5 gap-3 mb-10 w-full max-w-full">
          ${Array(5).fill(0).map(() => `
            <div class="aspect-square bg-[#e5e5e5] flex items-center justify-center text-[9px] text-gray-500 text-center p-1 leading-tight font-medium rounded-sm">
              SKILL<br>ICON
            </div>
          `).join('')}
        </div>

        <div class="text-[11px] leading-[1.8] text-gray-600 space-y-3">
          <p class="flex items-start gap-2">
            <span class="text-[10px] text-gray-400 w-20 tracking-tighter">2022.01</span>
            <span class="flex-1">文部科学省後援 色彩検定3級 合格</span>
          </p>
          <p class="flex items-start gap-2">
            <span class="text-[10px] text-gray-400 w-20 tracking-tighter">2024.11</span>
            <span class="flex-1">文部科学省後援 色彩検定UC級 合格</span>
          </p>
        </div>
      </div>
    </section>

    <section id="contact" class="px-8 py-12 pb-20 relative z-10">
      <h2 class="text-5xl text-sub mb-10 font-extralight">CONTACT</h2>
      <div class="space-y-2 text-sm">
        <p class="flex items-center gap-4">
          <span class="text-[10px] text-gray-400 w-20 uppercase tracking-tighter">Mail</span>
          <a href="mailto:kanno.tomoka@gmail.com" class="font-light hover:text-sub text-gray-700 underline decoration-gray-200 underline-offset-4 transition-colors">
            kanno.tomoka@gmail.com
          </a>
        </p>
        <p class="flex items-center gap-4">
          <span class="text-[10px] text-gray-400 w-20 uppercase tracking-tighter">GitHub</span>
          <a href="https://github.com/tomo-no-kai" target="_blank" rel="noopener noreferrer" class="font-light text-gray-700 hover:text-sub underline decoration-gray-200 underline-offset-4 transition-colors">
            @tomo-no-kai
          </a>
        </p>
        <p class="flex items-center gap-4">
          <span class="text-[10px] text-gray-400 w-20 uppercase tracking-tighter">illustration</span>
          <a href="https://exlolita.tumblr.com/" target="_blank" rel="noopener noreferrer" class="font-light text-gray-700 hover:text-sub underline decoration-gray-200 underline-offset-4 transition-colors">
            @exlolita
          </a>
        </p>
      </div>
    </section>

    <footer class="relative bg-main pt-24 pb-12 text-center text-white text-[10px] tracking-[0.3em]">
      <div class="absolute -top-[100px] left-0 w-full rotate-180 overflow-hidden leading-none pointer-events-none">
        ${wave()}
      </div>
      <p class="font-medium opacity-80 uppercase tracking-widest font-light">© Kanno Tomoka 2026</p>
    </footer>
  </main>
`

// なみなみコンポーネント
function wave() {
  return `
    <img src="/wave.svg" class="w-full h-40 object-cover" />
  `
}

// ロゴ
function logo() {
  return `
    <img src="/kanno-logo.svg" class="w-auto h-16" />
  `
}

// 背景GIFコンポーネント
function BackgroundGif({ src, classes = "" }) {
  return `
    <div
      class="w-full h-full bg-cover bg-center ${classes}"
      style="background-image: url('${src}');"
    ></div>
  `;
}

// スクロール誘導コンポーネント
function scrollIndicator() {
  return `
    <div class="w-12 h-12 rounded-full border border-white flex items-center justify-center animate-bounce cursor-pointer">
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
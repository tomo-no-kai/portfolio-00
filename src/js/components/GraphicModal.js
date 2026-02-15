// GraphicModal.js
export class GraphicModal {
  constructor() {
    this.modal = document.createElement('div')
    this.modal.className = 'fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 hidden p-4'
    this.modal.innerHTML = `
    <div class="w-full max-w-4xl mx-auto flex flex-col items-center">
  
      <!-- 画像 + ナビの共通ラッパー -->
      <div class="flex flex-col items-center">
  
        <img 
          id="gm-image" 
          class="max-w-full max-h-[75vh] object-contain rounded"
        />
  
        <!-- 画像幅に合わせる -->
        <div class="w-full flex justify-between items-center mt-6">
          
          <!-- 左端 -->
          <div class="flex gap-6">
            <button id="gm-prev" class="text-white">Prev</button>
            <button id="gm-next" class="text-white">Next</button>
          </div>
  
          <!-- 右端 -->
          <button id="gm-close">
            <svg 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="white" 
              stroke-width="1.8" 
              stroke-linecap="round" 
              stroke-linejoin="round"
              class="opacity-80 hover:opacity-100 transition"
            >
              <line x1="6" y1="6" x2="18" y2="18" />
              <line x1="18" y1="6" x2="6" y2="18" />
            </svg>
          </button>
  
        </div>
  
      </div>
  
    </div>
  `
    document.body.appendChild(this.modal)

    this.imageEl = this.modal.querySelector('#gm-image')
    this.closeBtn = this.modal.querySelector('#gm-close')
    this.prevBtn = this.modal.querySelector('#gm-prev')
    this.nextBtn = this.modal.querySelector('#gm-next')

    this.images = []
    this.current = 0

    // イベント
    this.closeBtn.addEventListener('click', () => this.close())
    this.prevBtn.addEventListener('click', () => this.prev())
    this.nextBtn.addEventListener('click', () => this.next())
    this.modal.addEventListener('click', e => {
      if (e.target === this.modal) this.close()
    })
  }

  open(images) {
    this.images = images
    this.current = 0
    this.showImage()
    this.modal.classList.remove('hidden')
  }

  close() {
    this.modal.classList.add('hidden')
  }

  showImage() {
    this.imageEl.src = this.images[this.current]
    // Prev ボタン制御
    if (this.current === 0) {
      this.prevBtn.classList.add('hidden')
    } else {
      this.prevBtn.classList.remove('hidden')
    }
  
    // Next ボタン制御
    if (this.current === this.images.length - 1) {
      this.nextBtn.classList.add('hidden')
    } else {
      this.nextBtn.classList.remove('hidden')
    }
  }

  prev() {
    this.current = (this.current - 1 + this.images.length) % this.images.length
    this.showImage()
  }

  next() {
    this.current = (this.current + 1) % this.images.length
    this.showImage()
  }
}
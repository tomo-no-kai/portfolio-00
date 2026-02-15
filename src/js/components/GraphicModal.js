// GraphicModal.js
export class GraphicModal {
  constructor() {
    this.modal = document.createElement('div')
    // 背景
    this.modal.className = 'fixed inset-0 bg-black/20 backdrop-blur-md flex items-center justify-center z-[100] hidden opacity-0 transition-opacity duration-300 p-4'
    
    this.modal.innerHTML = `
    <div id="gm-content" class="w-full max-w-4xl mx-auto flex flex-col items-center transform scale-95 opacity-0 transition-all duration-500">
      
      <div class="inline-block relative">
        
        <img 
          id="gm-image" 
          class="block max-w-full max-h-[75vh] object-contain rounded shadow-2xl transition-opacity duration-400"
          style="opacity: 0;"
        />
  
        <div class="w-full flex justify-between items-center mt-6 px-1">
          
          <button id="gm-prev" class="flex items-center gap-2 text-white hover:opacity-60 transition-all duration-300">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
            <span class="text-[10px] tracking-[0.2em] font-medium">PREV</span>
          </button>

          <div class="flex items-center gap-8">
            <button id="gm-next" class="flex items-center gap-2 text-white hover:opacity-60 transition-all duration-300">
              <span class="text-[10px] tracking-[0.2em] font-medium">NEXT</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>

            <button id="gm-close" class="text-white hover:opacity-60 transition-opacity ml-2">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

        </div>
      </div>
    </div>
    `
    document.body.appendChild(this.modal)

    this.content = this.modal.querySelector('#gm-content')
    this.imageEl = this.modal.querySelector('#gm-image')
    this.closeBtn = this.modal.querySelector('#gm-close')
    this.prevBtn = this.modal.querySelector('#gm-prev')
    this.nextBtn = this.modal.querySelector('#gm-next')

    this.images = []
    this.current = 0

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
    this.modal.classList.remove('hidden')
    
    requestAnimationFrame(() => {
      this.modal.classList.replace('opacity-0', 'opacity-100')
      this.content.classList.remove('scale-95', 'opacity-0')
      this.content.classList.add('scale-100', 'opacity-100')
      this.showImage()
    })
  }

  close() {
    this.modal.classList.replace('opacity-100', 'opacity-0')
    this.content.classList.replace('scale-100', 'opacity-100', 'scale-95', 'opacity-0')
    setTimeout(() => {
      this.modal.classList.add('hidden')
    }, 400)
  }

  showImage() {
    this.imageEl.style.opacity = '0'

    setTimeout(() => {
      this.imageEl.src = this.images[this.current]
      
      this.imageEl.onload = () => {
        this.imageEl.style.opacity = '1'
      }

      // 表示制御（場所を確保したまま透明にする）
      const setVisibility = (btn, isVisible) => {
        btn.style.opacity = isVisible ? '1' : '0'
        btn.style.pointerEvents = isVisible ? 'auto' : 'none'
      }

      setVisibility(this.prevBtn, this.current !== 0)
      setVisibility(this.nextBtn, this.current !== this.images.length - 1)
    }, 150)
  }

  prev() {
    if (this.current > 0) {
      this.current--
      this.showImage()
    }
  }

  next() {
    if (this.current < this.images.length - 1) {
      this.current++
      this.showImage()
    }
  }
}
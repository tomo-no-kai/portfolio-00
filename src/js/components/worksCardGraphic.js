// WorkCardGraphic.js

export function WorkCardGraphic({ title, category, thumbnails, images }) {
  const imageList = images || thumbnails
  const categoryText = Array.isArray(category)
    ? category.join(', ')
    : category

  return `
    <div 
      class="group cursor-pointer w-full mb-6"
      data-images='${JSON.stringify(imageList)}'
    >
      
      <!-- サムネラッパー -->
      <div class="relative aspect-square bg-[#d9d9d9] rounded-sm overflow-hidden">

        <img 
          src="${thumbnails[0]}" 
          class="w-full h-full object-cover rounded-sm
                transition-transform duration-500
                group-hover:scale-[1.05]"
        />

        <!-- hover overlay -->
        <div class="absolute inset-0 bg-black/20 backdrop-blur-sm
                    opacity-0 flex items-center justify-center
                    transition-opacity duration-300
                    group-hover:opacity-100">
          <span class="text-white tracking-[0.2em] text-xs";>
            VIEW
          </span>
        </div>

      </div>

      <!-- テキスト -->
      <div class="mt-2 text-center">
        <h3 class="text-lg text-gray-800 font-light">${title}</h3>
        <p class="text-[9px] text-gray-400 tracking-wider uppercase">
          ${categoryText}
        </p>
      </div>

    </div>
  `
}
// worksCard.js

export function WorkCard({ id, title, category, thumbnail, page }) {
  return `
    <div class="group">

      <!-- サムネ -->
      <div class="relative aspect-[16/8] bg-[#d9d9d9] rounded-sm overflow-hidden">

        <a href="${page}" target="_blank" class="block w-full h-full">
          <img 
            src="${thumbnail}" 
            alt="${title}"
            class="w-full h-full object-cover rounded-sm transition-transform duration-500 group-hover:scale-[1.05]" 
          />

          <!-- hover overlay -->
          <div class="absolute inset-0 bg-black/20 opacity-0 backdrop-blur-sm
                      flex items-center justify-center
                      transition-opacity duration-300
                      group-hover:opacity-100">
            <span class="text-white tracking-[0.2em] text-sm">
              VIEW SITE
            </span>
          </div>
        </a>
      </div>

      <!-- テキスト -->
      <div class="mt-4 space-y-2">
        <h3 class="text-2xl text-gray-800 font-light">${title}</h3>
        <p class="text-[10px] text-gray-400 tracking-wider uppercase">
          ${
            Array.isArray(category)
              ? category.join(' / ')
              : category
          }
        </p>

        <!-- 詳細ボタン -->
        <a 
          href="/detail.html?id=${id}"
          class="inline-block text-sub mt-2 text-[12px] border border-sub px-6 py-1 
                transition-colors duration-300
                hover:bg-sub hover:text-white">
          DETAIL
        </a>
      </div>

    </div>
  `;
}
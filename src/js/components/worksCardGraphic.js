// WorkCardGraphic.js

export function WorkCardGraphic({ title, category, thumbnails, page }) {
  return `
    <div class="group cursor-pointer w-full mb-6">
      <a href="${page || '#'}" target="_blank">
        <div class="aspect-square bg-[#d9d9d9] rounded-sm overflow-hidden transition-transform duration-500 group-hover:scale-[1.02]">
          <img src="${thumbnails[0]}" class="w-full h-full object-cover rounded-sm" />
        </div>
        <div class="mt-2 text-center">
          <h3 class="text-lg text-gray-800 font-light">${title}</h3>
          <p class="text-[9px] text-gray-400 tracking-wider uppercase">${category.join(', ')}</p>
        </div>
      </a>
    </div>
  `;
}
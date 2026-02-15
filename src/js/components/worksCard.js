// worksCard.js

export function WorkCard({ title, category, thumbnail, page }) {
  return `
    <div class="group cursor-pointer">
      <a href="${page}" target="_blank">
        <div class="aspect-[16/8] bg-[#d9d9d9] rounded-sm overflow-hidden transition-transform duration-500 group-hover:scale-[1.02]">
          <img src="${thumbnail}" class="w-full h-full object-cover rounded-sm" />
        </div>
        <div class="mt-4 space-y-1">
          <h3 class="text-2xl text-gray-800 font-light">${title}</h3>
          <p class="text-[10px] text-gray-400 tracking-wider uppercase">${category}</p>
        </div>
      </a>
    </div>
  `;
}
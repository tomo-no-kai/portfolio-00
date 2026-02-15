// detail.js
import works from '../data/works.json' assert { type: 'json' }

const params = new URLSearchParams(window.location.search)
const id = params.get('id')

const work = works.find(w => w.id === id)

if (!work) {
  document.body.innerHTML = '<p class="p-10">Work not found.</p>'
} else {
  document.title = `${work.title} | Portfolio`
  document.getElementById('title').textContent = work.title
  document.getElementById('catchphrase').textContent = work.catchphrase
  document.getElementById('description').innerHTML = work.description
  document.getElementById('category').textContent =
    Array.isArray(work.category) ? work.category.join(' / ') : work.category

  // サムネイルをリンク化
  const thumb = document.getElementById('thumbnail')
  const link = document.createElement('a')
  link.href = work.page
  link.target = '_blank'
  link.className = 'block w-full h-full relative group'
  thumb.replaceWith(link)
  link.appendChild(thumb)

  thumb.src = work.thumbnail
  thumb.alt = work.title
  thumb.className =
    'w-full h-full object-cover rounded-sm transition-transform duration-500'

  // hover overlay
  const overlay = document.createElement('div')
  overlay.className =
    'absolute inset-0 bg-black/20 opacity-0 backdrop-blur-sm flex items-center justify-center transition-opacity duration-300 group-hover:opacity-100'
  overlay.innerHTML = '<span class="text-white tracking-[0.2em] text-sm">VIEW SITE</span>'
  link.appendChild(overlay)

  // Visual
  const grid = document.getElementById('detail-visual-grid')
  grid.innerHTML = ''
  work.images?.forEach(src => {
    const img = document.createElement('img')
    img.src = src
    img.className = 'w-full h-auto rounded-sm'
    grid.appendChild(img)
  })
}
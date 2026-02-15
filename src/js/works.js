// works.js

import { WorkCard } from './components/worksCard.js'
import { WorkCardGraphic } from './components/worksCardGraphic.js'
import webWorks from '../data/works.json' assert { type: 'json' }
import graphicWorks from '../data/graphicWorks.json' assert { type: 'json' }

const container = document.getElementById('works-list')
const tabWeb = document.getElementById('tab-web')
const tabGraphic = document.getElementById('tab-graphic')

// 初期表示は Web
renderWorks('web')

// タブ切り替え
tabWeb.addEventListener('click', () => renderWorks('web'))
tabGraphic.addEventListener('click', () => renderWorks('graphic'))

function renderWorks(type) {
  let works

  container.className = ''

  tabWeb.classList.remove('bg-sub', 'text-white')
  tabWeb.classList.add('bg-white', 'text-sub')
  tabGraphic.classList.remove('bg-sub', 'text-white')
  tabGraphic.classList.add('bg-white', 'text-sub')

  if (type === 'web') {
    works = webWorks
    container.classList.add('flex','flex-col','space-y-8')
    container.innerHTML = works.map(work => WorkCard(work)).join('')
    tabWeb.classList.add('bg-sub', 'text-white')
    tabWeb.classList.remove('bg-white', 'text-sub')
  } else {
    works = graphicWorks
    container.classList.add('grid', 'grid-cols-2', 'gap-4', 'md:grid-cols-2')
    container.innerHTML = works.map(work => WorkCardGraphic({
      ...work,
      thumbnails: work.thumbnails || [work.thumbnail]
    })).join('')
    tabGraphic.classList.add('bg-sub', 'text-white')
    tabGraphic.classList.remove('bg-white', 'text-sub')
  }
}
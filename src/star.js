// star.js

// 星コンテナ
const starContainer = document.createElement('div')
starContainer.style.position = 'fixed'
starContainer.style.top = '0'
starContainer.style.left = '0'
starContainer.style.width = '100%'
starContainer.style.height = '100%'
starContainer.style.pointerEvents = 'none'
starContainer.style.overflow = 'hidden'
document.body.appendChild(starContainer)

// ランダム色を作る関数
function randomColor() {
  const colors = ['#ff5f5f','#ffbf00','#00d2ff','#7fff00','#ff00ff','#ff7fff']
  return colors[Math.floor(Math.random() * colors.length)]
}

// 星を作る
const stars = []
const starCount = 100
for (let i = 0; i < starCount; i++) {
  const star = document.createElement('div')
  star.style.position = 'absolute'
  star.style.width = `${2 + Math.random() * 4}px`
  star.style.height = star.style.width
  star.style.borderRadius = '50%'
  star.style.background = randomColor()
  star.style.top = `${Math.random() * window.innerHeight}px`
  star.style.left = `${Math.random() * window.innerWidth}px`
  star.style.opacity = `${0.3 + Math.random() * 0.7}`
  starContainer.appendChild(star)
  stars.push({
    el: star,
    speed: 0.2 + Math.random() * 0.5
  })
}

// アニメーション
function animateStars() {
  stars.forEach(starObj => {
    const star = starObj.el
    let top = parseFloat(star.style.top)
    const speedMultiplier = 0.5  // 半分の速さに
    top += starObj.speed * speedMultiplier
    if (top > window.innerHeight) {
      top = -10
      star.style.left = `${Math.random() * window.innerWidth}px`
      star.style.background = randomColor()
    }
    star.style.top = `${top}px`
  })
  requestAnimationFrame(animateStars)
}

animateStars()
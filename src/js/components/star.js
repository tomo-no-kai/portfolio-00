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
starContainer.style.opacity = '1.0'
document.body.appendChild(starContainer)

// ランダム色
function randomColor() {
  const colors = ['#ff5f5f','#ffbf00','#00d2ff','#7fff00','#ff00ff','#ff7fff']
  return colors[Math.floor(Math.random() * colors.length)]
}

// 星を作る関数 (SVG)
function createStar() {
  const svgNS = "http://www.w3.org/2000/svg"
  const star = document.createElementNS(svgNS, "svg")
  const size = 2 + Math.random() * 2   // さらに小さめ
  star.setAttribute("width", size)
  star.setAttribute("height", size)
  star.setAttribute("viewBox", "0 0 6 6")
  star.innerHTML = `<polygon points="3,0 4,2 6,2 4.5,3.5 5.5,6 3,4.5 0.5,6 1.5,3.5 0,2 2,2" fill="${randomColor()}"/>`
  star.style.position = 'absolute'
  star.style.top = `${Math.random() * window.innerHeight}px`
  star.style.left = `${Math.random() * window.innerWidth}px`
  star.style.transformOrigin = '50% 50%'
  return star
}

// 画面幅で星の数を変更
const isMobile = window.innerWidth < 768
const starCount = isMobile ? 50 : 100  // モバイルは少なめ、PCは多め

// 星を生成
const stars = []
for (let i = 0; i < starCount; i++) {
  const starEl = createStar()
  starContainer.appendChild(starEl)
  stars.push({
    el: starEl,
    speed: 0.1 + Math.random() * 0.3,       // ゆっくり
    rotation: Math.random() * 360,          // ランダム回転初期値
    rotationSpeed: (Math.random() - 0.5) * 0.5
  })
}

// アニメーション
function animateStars() {
  stars.forEach(starObj => {
    const star = starObj.el
    let top = parseFloat(star.style.top)
    top += starObj.speed
    if (top > window.innerHeight) {
      top = -10
      star.style.left = `${Math.random() * window.innerWidth}px`
      star.querySelector('polygon').setAttribute('fill', randomColor())
    }
    starObj.rotation += starObj.rotationSpeed
    star.style.top = `${top}px`
    star.style.transform = `rotate(${starObj.rotation}deg)`
  })
  requestAnimationFrame(animateStars)
}

animateStars()
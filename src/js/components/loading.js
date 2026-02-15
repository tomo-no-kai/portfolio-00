// loading.js
const style = document.createElement('style');
style.textContent = `
  #loader {
    position: fixed;
    inset: 0;
    z-index: 9999;
    background-color: #ffd4f1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }

  /* 液体本体 */
  .full-milk {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: #ffff;
    transform: translateY(100%);
    animation: fill-screen 3s cubic-bezier(0.65, 0, 0.35, 1) forwards;
  }

  /* 波の共通 */
  .milk-wave {
    position: absolute;
    top: -140px;
    left: -25%;
    width: 150%;
    height: 220px;
    background: #ffd4f1;
    border-radius: 45%;
  }

  /* 奥のやわらかい波 */
  .wave-back {
    opacity: 0.35;
    animation: wave-soft 6s ease-in-out infinite alternate;
  }

  /* 手前の波 */
  .wave-front {
    opacity: 0.8;
    animation: wave-soft 4s ease-in-out infinite alternate;
  }

  /* 少し“どぷん”と上がる */
  @keyframes fill-screen {
    0%   { transform: translateY(100%); }
    80%  { transform: translateY(2%); }
    100% { transform: translateY(0%); }
  }

  /* 回転ではなく横うねり */
  @keyframes wave-soft {
    0% {
      transform: translateX(-6%) translateY(0px) scaleX(1) scaleY(1);
    }
    50% {
      transform: translateX(6%) translateY(12px) scaleX(1.04) scaleY(0.96);
    }
    100% {
      transform: translateX(-6%) translateY(0px) scaleX(1) scaleY(1);
    }
  }

  .loading-text {
    position: relative;
    z-index: 10000;
    color: #ffd4f1;
    font-size: 14px;
    letter-spacing: 0.5em;
    font-weight: 600;
    transition: color 0.6s ease;
  }

  .text-white-active {
    color: #fff !important;
  }
`;
document.head.appendChild(style);

const loadingHTML = `
  <div id="loader">
    <div class="full-milk">
      <div class="milk-wave wave-back"></div>
      <div class="milk-wave wave-front"></div>
    </div>
    <p id="loader-text" class="loading-text">LOADING...</p>
  </div>
`;

document.body.insertAdjacentHTML('afterbegin', loadingHTML);

window.addEventListener('load', () => {
  const loader = document.getElementById('loader');
  const text = document.getElementById('loader-text');

  setTimeout(() => {
    text.classList.add('text-white-active');
  }, 1700);

  setTimeout(() => {
    loader.style.transition = 'opacity 1.2s ease';
    loader.style.opacity = '0';
    setTimeout(() => loader.remove(), 1200);
  }, 3400);
});
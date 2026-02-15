document.addEventListener('DOMContentLoaded', () => {

  let isMenuOpen = false;

  window.toggleMenu = () => {
    isMenuOpen = !isMenuOpen;
    const menuElement = document.getElementById('mobile-menu');
    const ribbonIcon = document.getElementById('ribbon-icon');

    if (isMenuOpen) {
      menuElement.classList.remove('translate-x-full');
      menuElement.classList.add('translate-x-0');

      // リボンを少し右に押し込む
      ribbonIcon.classList.add('translate-x-2');
      setTimeout(() => ribbonIcon.classList.remove('translate-x-2'), 200); // すぐ戻る
    } else {
      menuElement.classList.remove('translate-x-0');
      menuElement.classList.add('translate-x-full');

      // 閉じる時も押し込むアニメーション
      ribbonIcon.classList.add('translate-x-2');
      setTimeout(() => ribbonIcon.classList.remove('translate-x-2'), 200);
    }
  };

  function ribbon() {
    return `
      <div 
        class="w-14 h-12 bg-current" 
        style="mask-image: url('/menu-tab.svg'); mask-repeat: no-repeat; mask-size: contain; -webkit-mask-image: url('/menu-tab.svg'); -webkit-mask-repeat: no-repeat; -webkit-mask-size: contain;"
      ></div>
    `;
  }

  const container = document.getElementById('mobile-menu-container');
  container.innerHTML = `
    <!-- リボンアイコン -->
    <div 
      id="ribbon-icon"
      onclick="toggleMenu()"
      class="fixed top-8 right-0 z-50 text-sub pb-4 pt-2 cursor-pointer transition-transform duration-200"
    >
      ${ribbon()}
    </div>
  
    <!-- モバイルメニュー -->
    <nav 
      id="mobile-menu"
      class="fixed top-24 right-0 z-40 w-36 bg-white/80 backdrop-blur-md p-6 transform translate-x-full transition-transform duration-500 ease-in-out rounded-sm"
    >
      <div class="flex flex-col space-y-6 text-right pt-2">
        <a href="#works" onclick="toggleMenu()" class="text-sub text-xl font-extralight hover:opacity-50 transition-opacity uppercase">Works</a>
        <a href="#about" onclick="toggleMenu()" class="text-sub text-xl font-extralight hover:opacity-50 transition-opacity uppercase">About</a>
        <a href="#contact" onclick="toggleMenu()" class="text-sub text-xl  font-extralight hover:opacity-50 transition-opacity uppercase">Contact</a>
      </div>
    </nav>
  `;
});
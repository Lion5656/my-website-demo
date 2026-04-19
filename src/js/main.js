import '../css/main.scss';

// 引入 Bootstrap JS
import * as bootstrap from 'bootstrap'
import Typed from 'typed.js';

var typed = new Typed('.typed-target', {
  stringsElement: '#typed-strings',
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true
});

const removeLoader = () => {
  const loader = document.getElementById('preloader');
  if (loader) {
    loader.style.transition = 'opacity 0.3s ease-in-out';
    loader.style.opacity = '0';
    setTimeout(() => {
      loader.remove();
    }, 300);
  }
};

// 確保在已經載入完成的情況下（例如 Vite 更新時）也能移除
if (document.readyState === 'complete') {
  setTimeout(removeLoader, 1000);
} else {
  window.addEventListener('load', () => setTimeout(removeLoader, 1000));
}
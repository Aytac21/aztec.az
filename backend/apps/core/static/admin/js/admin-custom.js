document.addEventListener('DOMContentLoaded', function () {
  function replaceDashboard(root) {
    (root || document).querySelectorAll('h1, .nav-link, p.nav-header, li > a').forEach(function (el) {
      if (el.childNodes.length === 1 && el.childNodes[0].nodeType === 3 && el.textContent.trim() === 'Dashboard') {
        el.textContent = 'İdarə bölməsi';
      } else if (el.tagName === 'H1' && el.textContent.trim() === 'Dashboard') {
        el.textContent = 'İdarə bölməsi';
      }
    });
  }
  replaceDashboard();
  var observer = new MutationObserver(function () { replaceDashboard(); });
  observer.observe(document.body, { childList: true, subtree: true });

  document.querySelectorAll('.main-footer *').forEach(function (el) {
    if (el.textContent.toLowerCase().includes('jazzmin') || el.textContent.toLowerCase().includes('adminlte')) {
      el.style.display = 'none';
    }
  });
});

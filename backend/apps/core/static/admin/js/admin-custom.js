/* Jazzmin does not ship Azerbaijani translations, so we swap hardcoded
   English strings on the client. Covers both static and dynamically
   added nodes (MutationObserver). */
(function () {
  var MAP = {
    'Dashboard': 'İdarə bölməsi',
    'Home': 'Ana səhifə',
    'View site': 'Sayta bax',
    'View Site': 'Sayta bax',
    'Change password': 'Şifrəni dəyiş',
    'Log out': 'Çıxış',
    'Welcome,': 'Xoş gəldiniz,',
    'Recent actions': 'Son əməliyyatlar',
    'My actions': 'Əməliyyatlarım',
    'None available': 'Heç bir qeyd yoxdur',
    'Unknown content': 'Məlum olmayan məzmun',
    'Add': 'Əlavə et',
    'Change': 'Düzəliş et',
    'View': 'Baxış',
    'Delete': 'Sil',
    'Save': 'Yadda saxla',
    'Save and continue editing': 'Yadda saxla və redaktəyə davam et',
    'Save and add another': 'Yadda saxla və yeni əlavə et',
    'Authentication and Authorization': 'Təsdiqləmə və Səlahiyyət',
    'Users': 'İstifadəçilər',
    'Groups': 'Qruplar',
    'Site administration': 'Sayt idarəetməsi',
    'Main pages': 'Əsas səhifələr',
    'Core': 'Əsas'
  };

  function swap(root) {
    if (!root) return;
    var walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, null, false);
    var node;
    while ((node = walker.nextNode())) {
      var txt = node.nodeValue;
      if (!txt) continue;
      var trimmed = txt.trim();
      if (trimmed && MAP[trimmed]) {
        node.nodeValue = txt.replace(trimmed, MAP[trimmed]);
      }
    }
  }

  function hideJazzminFooter() {
    // Jazzmin v2 used .main-footer; v3 uses .app-footer. Cover both.
    document.querySelectorAll('.main-footer *, .app-footer *').forEach(function (el) {
      var t = (el.textContent || '').toLowerCase();
      if (t.indexOf('jazzmin') !== -1 || t.indexOf('adminlte') !== -1) {
        el.style.setProperty('display', 'none', 'important');
        // hide the nearest wrapping float div too
        var wrap = el.closest('.float-end, .float-right, .d-sm-inline, [class*="d-sm"]');
        if (wrap) wrap.style.setProperty('display', 'none', 'important');
      }
    });
  }

  function run() {
    swap(document.body);
    hideJazzminFooter();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', run);
  } else {
    run();
  }

  // Keep watching for dynamically injected nodes (modals, tabs, etc.)
  var observer = new MutationObserver(function (mutations) {
    mutations.forEach(function (m) {
      m.addedNodes && m.addedNodes.forEach(function (n) {
        if (n.nodeType === 1) swap(n);
      });
    });
  });
  if (document.body) {
    observer.observe(document.body, { childList: true, subtree: true });
  } else {
    document.addEventListener('DOMContentLoaded', function () {
      observer.observe(document.body, { childList: true, subtree: true });
    });
  }
})();

(function () {
  var KEY = 'oliva_cookie_consent';

  window.dataLayer = window.dataLayer || [];
  function gtag() { window.dataLayer.push(arguments); }

  function setDefaultConsent(granted) {
    gtag('consent', 'default', {
      'analytics_storage': granted ? 'granted' : 'denied',
      'ad_storage': 'denied',
      'ad_user_data': 'denied',
      'ad_personalization': 'denied'
    });
  }

  function loadTracking() {
    (function (w, d, s, l, i) {
      w[l] = w[l] || [];
      w[l].push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
      var f = d.getElementsByTagName(s)[0],
        j = d.createElement(s),
        dl = l !== 'dataLayer' ? '&l=' + l : '';
      j.async = true;
      j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
      f.parentNode.insertBefore(j, f);
    })(window, document, 'script', 'dataLayer', 'GTM-TQMBKC68');
  }

  function showBanner() {
    var style = document.createElement('style');
    style.textContent =
      '#oliva-cookie{position:fixed;bottom:0;left:0;right:0;background:#14261C;color:rgba(255,255,255,.9);padding:1rem 5vw;z-index:9999;box-shadow:0 -4px 24px rgba(0,0,0,.3);}' +
      '.oliva-cookie-inner{max-width:1000px;margin:0 auto;display:flex;align-items:center;gap:2rem;flex-wrap:wrap;justify-content:space-between;}' +
      '.oliva-cookie-inner p{margin:0;font-family:Lato,sans-serif;font-size:.875rem;color:rgba(255,255,255,.85);line-height:1.5;}' +
      '.oliva-cookie-inner a{color:#8fcb5a;text-decoration:underline;}' +
      '.oliva-cookie-btns{display:flex;gap:.75rem;flex-shrink:0;}' +
      '.oliva-btn-accept{background:#06752E;color:#fff;border:none;padding:.5rem 1.25rem;border-radius:6px;font-family:Lato,sans-serif;font-size:.875rem;font-weight:700;cursor:pointer;white-space:nowrap;}' +
      '.oliva-btn-accept:hover{background:#5d951a;}' +
      '.oliva-btn-decline{background:transparent;color:rgba(255,255,255,.7);border:1.5px solid rgba(255,255,255,.3);padding:.5rem 1.25rem;border-radius:6px;font-family:Lato,sans-serif;font-size:.875rem;font-weight:600;cursor:pointer;white-space:nowrap;}' +
      '.oliva-btn-decline:hover{color:#fff;border-color:rgba(255,255,255,.6);}';
    document.head.appendChild(style);

    var banner = document.createElement('div');
    banner.id = 'oliva-cookie';
    banner.innerHTML =
      '<div class="oliva-cookie-inner">' +
      '<p>Met analytische cookies zien we welke informatie installateurs en eindgebruikers het meest helpt, ' +
      'zodat we de site daarop kunnen verbeteren. Uw gegevens worden geanonimiseerd verwerkt. ' +
      'Lees ons <a href="privacy.html">privacybeleid</a> voor meer informatie.</p>' +
      '<div class="oliva-cookie-btns">' +
      '<button class="oliva-btn-accept">Accepteer cookies</button>' +
      '<button class="oliva-btn-decline">Alleen noodzakelijk</button>' +
      '</div></div>';
    document.body.appendChild(banner);

    banner.querySelector('.oliva-btn-accept').addEventListener('click', function () {
      localStorage.setItem(KEY, 'accepted');
      banner.remove();
      gtag('consent', 'update', { 'analytics_storage': 'granted' });
    });
    banner.querySelector('.oliva-btn-decline').addEventListener('click', function () {
      localStorage.setItem(KEY, 'declined');
      banner.remove();
    });
  }

  var consent = localStorage.getItem(KEY);
  setDefaultConsent(consent === 'accepted');
  loadTracking();

  if (!consent) {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', showBanner);
    } else {
      showBanner();
    }
  }
})();

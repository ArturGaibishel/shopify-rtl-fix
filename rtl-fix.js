/*!
 * RTL Fix + Hebrew Font + Payment Icons
 * תחליף חינמי ל-Sense RTL
 * Luna Soul Store
 */
(function (window, document) {
  'use strict';

  // ============================================================
  // CSS — RTL + פונט עברי
  // ============================================================
  var STYLES = [

    /* Hebrew font — Rubik from Google Fonts */
    '@import url("https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;600;700;800&display=swap");',

    /* RTL base — direction only, לא נגע ב-text-align */
    'html { direction: rtl !important; }',
    'body { direction: rtl !important; font-family: "Rubik", Arial, sans-serif !important; }',

    /* Font only — לא text-align */
    'p, h1, h2, h3, h4, h5, h6, li, td, th, label, input, textarea, select, button {',
      'font-family: "Rubik", Arial, sans-serif !important;',
    '}',

    /* Inputs */
    'input, textarea, select {',
      'direction: rtl !important;',
      'font-family: "Rubik", Arial, sans-serif !important;',
    '}',

    /* סליידרים — תמיד LTR כדי שלא יתהפכו */
    '.slideshow, .slider, [class*="slider"], [class*="slideshow"],',
    '.swiper, .swiper-wrapper, .flickity-viewport,',
    '.product-media-container, .product__media-list {',
      'direction: ltr !important;',
    '}',

    /* Fix Shopify breadcrumbs */
    '.breadcrumb, .breadcrumbs { direction: rtl; }',

    /* Fix Shopify cart */
    '.cart__item, .cart-item { direction: rtl; }',

    /* Pagination */
    '.pagination { direction: rtl; }',

    /* Product page — fix spacing between image and text */
    '.product__info-wrapper { padding-right: 2rem !important; padding-left: 1rem !important; }',
    '.product__media-wrapper { padding-left: 2rem !important; padding-right: 1rem !important; }',
    '.product .grid--gapless { gap: 2rem !important; }',

    /* Buttons — center text */
    '.product-form__submit,',
    'button[name="add"],',
    '.shopify-payment-button__button,',
    '.shopify-payment-button button,',
    '[class*="payment-button"],',
    '[class*="checkout-button"],',
    'button.product-form__submit {',
      'text-align: center !important;',
      'justify-content: center !important;',
    '}',

    /* Brand information footer section — fix overflow */
    '.footer__brand, [class*="brand-information"], [class*="brand_information"],',
    '.footer [class*="brand"], .shopify-section [class*="brand"] {',
      'overflow: visible !important;',
      'text-align: right !important;',
      'word-break: break-word !important;',
      'width: 100% !important;',
      'max-width: 100% !important;',
    '}',

    /* Footer columns — fix width */
    '.footer__blocks, .footer__inner, .footer-block__details {',
      'overflow: visible !important;',
      'word-break: break-word !important;',
    '}',



    /* ── Payment icons container ──────────────────────────── */
    '#luna-payment-icons {',
      'display: flex;',
      'align-items: center;',
      'justify-content: center;',
      'flex-wrap: wrap;',
      'gap: 8px;',
      'padding: 16px 0 8px;',
      'direction: ltr;',
    '}',

    '.luna-pay-icon {',
      'display: inline-flex;',
      'align-items: center;',
      'justify-content: center;',
      'border-radius: 6px;',
      'width: 52px;',
      'height: 32px;',
      'overflow: hidden;',
      'box-shadow: 0 1px 4px rgba(0,0,0,0.15);',
    '}',

    '.luna-pay-icon svg { width: 100%; height: 100%; }',

  ].join('');

  // ============================================================
  // PAYMENT ICONS SVG
  // ============================================================
  var PAYMENT_ICONS = [

    /* Visa */
    '<span class="luna-pay-icon" title="Visa">',
      '<svg viewBox="0 0 52 32" xmlns="http://www.w3.org/2000/svg">',
        '<rect width="52" height="32" rx="4" fill="#1A1F71"/>',
        '<text x="26" y="22" font-family="Arial,sans-serif" font-size="13" font-weight="bold" fill="white" text-anchor="middle" letter-spacing="1">VISA</text>',
      '</svg>',
    '</span>',

    /* Mastercard */
    '<span class="luna-pay-icon" title="Mastercard">',
      '<svg viewBox="0 0 52 32" xmlns="http://www.w3.org/2000/svg">',
        '<rect width="52" height="32" rx="4" fill="#252525"/>',
        '<circle cx="20" cy="16" r="9" fill="#EB001B"/>',
        '<circle cx="32" cy="16" r="9" fill="#F79E1B"/>',
        '<path d="M26 8.8a9 9 0 0 1 0 14.4A9 9 0 0 1 26 8.8z" fill="#FF5F00"/>',
      '</svg>',
    '</span>',

    /* Apple Pay */
    '<span class="luna-pay-icon" title="Apple Pay">',
      '<svg viewBox="0 0 52 32" xmlns="http://www.w3.org/2000/svg">',
        '<rect width="52" height="32" rx="4" fill="#000"/>',
        '<path d="M19.5 9.5c.6-.7 1-1.6.9-2.5-.9.1-2 .6-2.6 1.3-.6.6-1.1 1.6-1 2.5 1 0 2-.5 2.7-1.3z" fill="white"/>',
        '<path d="M20.4 11c-1.5-.1-2.7.8-3.4.8-.7 0-1.8-.8-3-.8-1.5 0-2.9.9-3.7 2.2-1.6 2.7-.4 6.8 1.1 9 .8 1.1 1.7 2.3 2.9 2.3 1.1 0 1.6-.7 3-.7 1.4 0 1.8.7 3 .7 1.2 0 2-1.1 2.8-2.2.9-1.3 1.2-2.5 1.2-2.6-.1 0-2.4-.9-2.4-3.6 0-2.3 1.8-3.3 1.9-3.4-.9-1.4-2.4-1.7-2.4-1.7z" fill="white"/>',
        '<text x="36" y="20" font-family="Arial,sans-serif" font-size="8" font-weight="600" fill="white" text-anchor="middle">Pay</text>',
      '</svg>',
    '</span>',

    /* Google Pay */
    '<span class="luna-pay-icon" title="Google Pay">',
      '<svg viewBox="0 0 52 32" xmlns="http://www.w3.org/2000/svg">',
        '<rect width="52" height="32" rx="4" fill="white" stroke="#e0e0e0" stroke-width="1"/>',
        '<text x="10" y="21" font-family="Arial,sans-serif" font-size="11" font-weight="bold" fill="#4285F4">G</text>',
        '<text x="18" y="21" font-family="Arial,sans-serif" font-size="9" font-weight="500" fill="#5F6368">Pay</text>',
      '</svg>',
    '</span>',

    /* Bit */
    '<span class="luna-pay-icon" title="Bit">',
      '<svg viewBox="0 0 52 32" xmlns="http://www.w3.org/2000/svg">',
        '<rect width="52" height="32" rx="4" fill="#0E4C96"/>',
        '<text x="26" y="21" font-family="Arial,sans-serif" font-size="13" font-weight="bold" fill="white" text-anchor="middle">bit</text>',
      '</svg>',
    '</span>',

  ].join('');

  // ============================================================
  // INJECT PAYMENT ICONS INTO FOOTER
  // ============================================================
  function injectPaymentIcons() {
    var selectors = [
      '.footer__content',
      '.footer',
      'footer',
      '.site-footer',
      '#shopify-section-footer',
      '.footer-block',
    ];

    var footer = null;
    for (var i = 0; i < selectors.length; i++) {
      footer = document.querySelector(selectors[i]);
      if (footer) break;
    }

    if (!footer) return;

    var container = document.createElement('div');
    container.id = 'luna-payment-icons';
    container.setAttribute('aria-label', 'אמצעי תשלום מקובלים');
    container.innerHTML = PAYMENT_ICONS;
    footer.appendChild(container);
  }

  // ============================================================
  // INIT
  // ============================================================
  function fixButtons() {
    var sels = [
      '.product-form__submit',
      'button[name="add"]',
      '.shopify-payment-button__button',
      '[class*="payment-button"] button',
      '[class*="checkout-button"]',
    ];
    sels.forEach(function(sel) {
      document.querySelectorAll(sel).forEach(function(el) {
        el.style.setProperty('text-align', 'center', 'important');
        el.style.setProperty('justify-content', 'center', 'important');
      });
    });

    /* נסה גם בתוך iframes של שופיפיי */
    document.querySelectorAll('iframe').forEach(function(iframe) {
      try {
        var doc = iframe.contentDocument || iframe.contentWindow.document;
        var s = doc.createElement('style');
        s.textContent = 'button,a{text-align:center!important;justify-content:center!important;}';
        doc.head.appendChild(s);
      } catch(e) {}
    });
  }

  function init() {
    var style = document.createElement('style');
    style.id = 'luna-rtl-css';
    style.textContent = STYLES;
    document.head.appendChild(style);

    injectPaymentIcons();
    fixButtons();

    /* הפעל שוב אחרי שהדף נטען לגמרי */
    window.addEventListener('load', fixButtons);

    /* עקוב אחרי אלמנטים חדשים (כמו כפתורי תשלום דינמיים) */
    var observer = new MutationObserver(function() { fixButtons(); });
    observer.observe(document.body, { childList: true, subtree: true });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

}(window, document));

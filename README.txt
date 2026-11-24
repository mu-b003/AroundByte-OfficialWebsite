AROUNDBYTE MAIN WEBSITE — REDESIGNED PACKAGE
============================================
Static site (no build step, no dependencies). Extract directly into the document root of aroundbyte.com.

Pages: index, products, services (new), about, contact, privacy-policy, cookie-policy, terms, disclaimer
Assets: assets/style.css, assets/site.js (theme, language, menu, contact form), assets/i18n.js (Arabic strings),
        assets/logo-*.webp (original logos, trimmed and optimized), favicon.png/.svg, apple-touch-icon.png, og-image.png

Local test:   python3 -m http.server 8080   then open http://localhost:8080/
Defaults:     dark theme, English. Choices are saved in the browser (localStorage keys ab-theme, ab-lang).
Editing text: English text is in each HTML file; Arabic text is in assets/i18n.js (keys match data-i18n attributes).
AdSense:      the existing Google AdSense script (client ca-pub-2368362978436357) is preserved in every page <head>.
              The empty "Advertisement" placeholder boxes were removed. No new ad code was added.

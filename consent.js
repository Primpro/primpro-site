/* Cookie consent: no analytics or ad pixels load until the visitor clicks Accept. */
(function(){
  var KEY='primproConsent', GA='G-6Q06BHFDRK', META='148152286646464276', TT='CNYAQ22C77U9K1B5K6V0';
  function get(){try{return localStorage.getItem(KEY)}catch(e){return null}}
  function set(v){try{localStorage.setItem(KEY,v)}catch(e){}}
  function add(src){var s=document.createElement('script');s.async=true;s.src=src;document.head.appendChild(s);}
  function loadTracking(){
    if(window.__primproTracking)return; window.__primproTracking=true;
    window.dataLayer=window.dataLayer||[]; window.gtag=function(){dataLayer.push(arguments);};
    gtag('js',new Date()); gtag('config',GA); add('https://www.googletagmanager.com/gtag/js?id='+GA);
    !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');
    fbq('init',META); fbq('track','PageView');
    !function(w,d,t){w.TiktokAnalyticsObject=t;var tt=w[t]=w[t]||[];tt.methods=["page","track","identify","instances","debug","on","off","once","ready","alias","group","enableCookie"];tt.setAndDefer=function(t,e){t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}};for(var i=0;i<tt.methods.length;i++)tt.setAndDefer(tt,tt.methods[i]);tt.instance=function(t){for(var e=tt._i[t]||[],n=0;n<tt.methods.length;n++)tt.setAndDefer(e,tt.methods[n]);return e};tt.load=function(e,n){var i="https://analytics.tiktok.com/i18n/pixel/events.js";tt._i=tt._i||{},tt._i[e]=[],tt._i[e]._u=i,tt._t=Date.now(),tt._o=n||{};var o=d.createElement("script");o.type="text/javascript",o.async=!0,o.src=i+"?sdkid="+e+"&lib="+t;var a=d.getElementsByTagName("script")[0];a.parentNode.insertBefore(o,a)};tt.load(TT);tt.page();}(window,document,'ttq');
  }
  function banner(){
    if(document.getElementById('pp-consent'))return;
    var b=document.createElement('div'); b.id='pp-consent'; b.setAttribute('role','dialog'); b.setAttribute('aria-label','Cookie choices');
    b.style.cssText='position:fixed;left:12px;right:12px;bottom:12px;z-index:9999;max-width:640px;margin:0 auto;background:#141414;color:#EDE8DF;border:1px solid #33312D;border-radius:12px;padding:16px 18px;font:14px/1.5 system-ui,-apple-system,Segoe UI,sans-serif;box-shadow:0 8px 30px rgba(0,0,0,.35)';
    b.innerHTML='<p style="margin:0 0 12px">We use cookies for analytics and to measure our adverts on Google, Meta and TikTok. They only load if you accept. You can change your mind any time from the Cookie settings link at the bottom of the page.</p>'+
      '<div style="display:flex;gap:10px;flex-wrap:wrap"><button type="button" id="pp-accept" style="background:#EDE8DF;color:#141414;border:0;border-radius:999px;padding:9px 18px;font:inherit;font-weight:600;cursor:pointer">Accept</button>'+
      '<button type="button" id="pp-decline" style="background:transparent;color:#EDE8DF;border:1px solid #EDE8DF;border-radius:999px;padding:9px 18px;font:inherit;font-weight:600;cursor:pointer">Decline</button></div>';
    document.body.appendChild(b);
    document.getElementById('pp-accept').onclick=function(){set('accepted');b.remove();loadTracking();};
    document.getElementById('pp-decline').onclick=function(){set('declined');b.remove();};
  }
  window.primproCookieSettings=function(){
    var was=get(); try{localStorage.removeItem(KEY)}catch(e){}
    if(was==='accepted'&&window.__primproTracking){location.reload();return;}
    banner();
  };
  var c=get();
  if(c==='accepted'||c==='true'){ if(c==='true')set('accepted'); loadTracking(); }
  else if(c!=='declined'){ if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',banner); else banner(); }
})();

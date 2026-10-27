(function(){
  try{ if(localStorage.getItem('rr_cookie_ok')) return; }catch(e){}
  var b=document.createElement('div');
  b.setAttribute('role','dialog');b.setAttribute('aria-label','Cookie notice');
  b.style.cssText='position:fixed;left:12px;right:12px;bottom:12px;max-width:620px;margin:auto;z-index:9999;background:#0d0d0d;border:1px solid rgba(255,255,255,.15);border-left:3px solid #e10613;color:#b8b8b8;padding:16px 18px;border-radius:4px;font:500 .95rem/1.5 Rajdhani,Arial,sans-serif;display:flex;gap:14px;align-items:center;flex-wrap:wrap;box-shadow:0 10px 40px rgba(0,0,0,.6)';
  b.innerHTML='<span style="flex:1;min-width:220px">We use cookies to run this site and show Google ads. See our <a href="/privacy-policy.html" style="color:#ff1724">Privacy Policy</a>.</span><button type="button" style="background:#e10613;color:#fff;border:0;padding:10px 18px;border-radius:3px;font:800 .65rem Orbitron,sans-serif;letter-spacing:.1em;cursor:pointer">GOT IT</button>';
  b.querySelector('button').onclick=function(){try{localStorage.setItem('rr_cookie_ok','1');}catch(e){} b.remove();};
  document.addEventListener('DOMContentLoaded',function(){document.body.appendChild(b);});
  if(document.readyState!=='loading')document.body.appendChild(b);
})();

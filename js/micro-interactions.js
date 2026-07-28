// micro-interactions.js — Premium micro-interactions for DUCK
(function() {
  // Magnetic buttons
  document.querySelectorAll('.btn-p, .studio-btn').forEach(function(button) {
    button.addEventListener('mousemove', function(e) {
      var rect = button.getBoundingClientRect();
      var x = e.clientX - rect.left - rect.width / 2;
      var y = e.clientY - rect.top - rect.height / 2;
      button.style.transform = 'translate(' + (x * 0.15) + 'px, ' + (y * 0.15) + 'px)';
    });
    button.addEventListener('mouseleave', function() {
      button.style.transform = '';
    });
  });

  // Tilt cards
  document.querySelectorAll('.svc, .tool-card, .station-card').forEach(function(card) {
    card.addEventListener('mousemove', function(e) {
      var rect = card.getBoundingClientRect();
      var x = (e.clientX - rect.left) / rect.width - 0.5;
      var y = (e.clientY - rect.top) / rect.height - 0.5;
      card.style.transform = 'perspective(800px) rotateY(' + (x * 8) + 'deg) rotateX(' + (-y * 8) + 'deg) translateY(-5px)';
    });
    card.addEventListener('mouseleave', function() {
      card.style.transform = '';
    });
  });

  // Gallery lightbox effect
  document.querySelectorAll('.gallery-item').forEach(function(item) {
    item.addEventListener('click', function() {
      var img = item.querySelector('img');
      if (!img) return;
      var overlay = document.createElement('div');
      overlay.style.cssText = 'position:fixed;inset:0;z-index:9999;background:rgba(0,0,0,.9);display:flex;align-items:center;justify-content:center;cursor:pointer;animation:fadeIn .3s;';
      var bigImg = document.createElement('img');
      bigImg.src = img.src;
      bigImg.style.cssText = 'max-width:90%;max-height:90%;object-fit:contain;';
      overlay.appendChild(bigImg);
      overlay.addEventListener('click', function() { overlay.remove(); });
      document.body.appendChild(overlay);
    });
  });

  // Scroll-triggered text reveal
  document.querySelectorAll('.sec-h').forEach(function(el) {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity .8s ease, transform .8s ease';
  });

  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.sec-h').forEach(function(el) { observer.observe(el); });

  // Mobile fallback
  if (window.innerWidth < 768) {
    document.querySelectorAll('.btn-p, .studio-btn').forEach(function(el) {
      el.style.transform = '';
    });
  }
})();

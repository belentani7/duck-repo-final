// hover-effects.js — Premium hover interactions for DUCK
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

  // Tilt cards on hover
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

  // Image hover zoom
  document.querySelectorAll('.single-item, .port-item, .gallery-item').forEach(function(item) {
    item.addEventListener('mouseenter', function() {
      var overlay = item.querySelector('.single-over, .port-over, .gallery-caption');
      if (overlay) overlay.style.opacity = '1';
    });
    item.addEventListener('mouseleave', function() {
      var overlay = item.querySelector('.single-over, .port-over, .gallery-caption');
      if (overlay) overlay.style.opacity = '';
    });
  });

  // Nav link underline animation
  document.querySelectorAll('.nav-links a').forEach(function(link) {
    link.addEventListener('mouseenter', function() {
      link.style.color = 'var(--a)';
    });
    link.addEventListener('mouseleave', function() {
      if (!link.classList.contains('active')) {
        link.style.color = '';
      }
    });
  });

  // Mobile fallback - disable transforms
  if (window.innerWidth < 768) {
    document.querySelectorAll('.btn-p, .studio-btn, .svc, .tool-card, .station-card').forEach(function(el) {
      el.style.transform = '';
    });
  }
})();

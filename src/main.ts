import './index.css';

document.addEventListener('DOMContentLoaded', () => {
  // Navbar scroll effect
  const navbar = document.querySelector('header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      navbar.classList.add('bg-white/80', 'backdrop-blur-xl', 'shadow-sm', 'border-b', 'border-slate-200/50', 'py-3');
      navbar.classList.remove('bg-transparent', 'py-5');
    } else {
      navbar.classList.add('bg-transparent', 'py-5');
      navbar.classList.remove('bg-white/80', 'backdrop-blur-xl', 'shadow-sm', 'border-b', 'border-slate-200/50', 'py-3');
    }
  });

  // Simple Intersection Observer for scroll animations
  const animatedElements = document.querySelectorAll('[style*="opacity:0"]');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Remove the inline styles that hide the element
        entry.target.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0) translateX(0) scale(1)';
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  animatedElements.forEach(el => {
    observer.observe(el);
  });

  // Mobile menu toggle (if we add it back)
  const mobileBtn = document.querySelector('button.md\\:hidden');
  if (mobileBtn) {
    mobileBtn.addEventListener('click', () => {
      // Toggle menu logic here
      // For now, we can just alert or implement a simple dropdown
      alert('Mobile menu clicked');
    });
  }
});

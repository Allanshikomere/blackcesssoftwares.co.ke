/**
* Template Name: ComingSoon
* Template URL: https://bootstrapmade.com/comingsoon-free-html-bootstrap-template/
* Updated: Aug 07 2024 with Bootstrap v5.3.3
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/

(function() {
  "use strict";

  /**
   * Apply .scrolled class to the body as the page is scrolled down
   */
  function toggleScrolled() {
    const selectBody = document.querySelector('body');
    const selectHeader = document.querySelector('#header');
    if (!selectHeader.classList.contains('scroll-up-sticky') && !selectHeader.classList.contains('sticky-top') && !selectHeader.classList.contains('fixed-top')) return;
    window.scrollY > 100 ? selectBody.classList.add('scrolled') : selectBody.classList.remove('scrolled');
  }

  document.addEventListener('scroll', toggleScrolled);
  window.addEventListener('load', toggleScrolled);

  /**
   * Mobile nav toggle
   */
  const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');

  function mobileNavToogle() {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    mobileNavToggleBtn.classList.toggle('bi-list');
    mobileNavToggleBtn.classList.toggle('bi-x');
  }
  mobileNavToggleBtn.addEventListener('click', mobileNavToogle);

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll('#navmenu a').forEach(navmenu => {
    navmenu.addEventListener('click', () => {
      if (document.querySelector('.mobile-nav-active')) {
        mobileNavToogle();
      }
    });

  });

  /**
   * Toggle mobile nav dropdowns
   */
  document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
    navmenu.addEventListener('click', function(e) {
      e.preventDefault();
      this.parentNode.classList.toggle('active');
      this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
      e.stopImmediatePropagation();
    });
  });

  /**
   * Preloader
   */
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove();
    });
  }

  /**
   * Scroll top button
   */
  let scrollTop = document.querySelector('.scroll-top');

  function toggleScrollTop() {
    if (scrollTop) {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
  }
  scrollTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  window.addEventListener('load', toggleScrollTop);
  document.addEventListener('scroll', toggleScrollTop);

  /**
   * Animation on scroll function and init
   */
  function aosInit() {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', aosInit);

  /**
   * Countdown timer (configured for 30 days)
   */
  function updateCountDown(countDownItem) {
    let targetTime;
    const countAttr = countDownItem.getAttribute('data-count');
    
    if (countAttr === '30days') {
      let saved = localStorage.getItem('blackcess_launch_target');
      if (!saved) {
        saved = Date.now() + (30 * 24 * 60 * 60 * 1000);
        localStorage.setItem('blackcess_launch_target', saved);
      }
      targetTime = parseInt(saved, 10);
    } else if (countAttr) {
      targetTime = new Date(countAttr).getTime();
    } else {
      targetTime = Date.now() + (30 * 24 * 60 * 60 * 1000);
    }

    const timeleft = Math.max(0, targetTime - Date.now());

    const days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

    const daysEl = countDownItem.querySelector('.count-days');
    const hoursEl = countDownItem.querySelector('.count-hours');
    const minsEl = countDownItem.querySelector('.count-minutes');
    const secsEl = countDownItem.querySelector('.count-seconds');

    if (daysEl) daysEl.innerHTML = String(days).padStart(2, '0');
    if (hoursEl) hoursEl.innerHTML = String(hours).padStart(2, '0');
    if (minsEl) minsEl.innerHTML = String(minutes).padStart(2, '0');
    if (secsEl) secsEl.innerHTML = String(seconds).padStart(2, '0');
  }

  document.querySelectorAll('.countdown').forEach(function(countDownItem) {
    updateCountDown(countDownItem);
    setInterval(function() {
      updateCountDown(countDownItem);
    }, 1000);
  });

  /**
   * Client-side Newsletter / Notify Form
   */
  document.querySelectorAll('.php-email-form').forEach(form => {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      const emailInput = form.querySelector('input[type="email"]');
      const loading = form.querySelector('.loading');
      const sentMsg = form.querySelector('.sent-message');
      const errorMsg = form.querySelector('.error-message');

      if (!emailInput || !emailInput.value.trim()) {
        if (errorMsg) {
          errorMsg.innerHTML = 'Please enter a valid email address.';
          errorMsg.classList.add('d-block');
        }
        return;
      }

      if (loading) loading.classList.add('d-block');
      if (errorMsg) errorMsg.classList.remove('d-block');
      if (sentMsg) sentMsg.classList.remove('d-block');

      setTimeout(() => {
        if (loading) loading.classList.remove('d-block');
        if (sentMsg) {
          sentMsg.innerHTML = '✓ You are on the VIP early-access list! We will notify you when we go live.';
          sentMsg.classList.add('d-block');
        }
        try {
          const subscribers = JSON.parse(localStorage.getItem('blackcess_subscribers') || '[]');
          subscribers.push({ email: emailInput.value.trim(), date: new Date().toISOString() });
          localStorage.setItem('blackcess_subscribers', JSON.stringify(subscribers));
        } catch (err) {}
        form.reset();
      }, 700);
    });
  });

})();
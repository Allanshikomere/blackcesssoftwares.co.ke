(function () {
  "use strict";

  // Target Launch Date: 30 days from project kickoff (Oct 15, 2026 23:59:59 EAT)
  const TARGET_DATE = new Date("2026-10-15T23:59:59+03:00").getTime();

  function updateTimer() {
    const now = Date.now();
    const diff = Math.max(0, TARGET_DATE - now);

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    const dEl = document.getElementById("count-days");
    const hEl = document.getElementById("count-hours");
    const mEl = document.getElementById("count-minutes");
    const sEl = document.getElementById("count-seconds");

    if (dEl) dEl.textContent = String(days).padStart(2, "0");
    if (hEl) hEl.textContent = String(hours).padStart(2, "0");
    if (mEl) mEl.textContent = String(minutes).padStart(2, "0");
    if (sEl) sEl.textContent = String(seconds).padStart(2, "0");
  }

  // Run immediately and every second
  updateTimer();
  setInterval(updateTimer, 1000);

  // Client-side Newsletter Form
  document.querySelectorAll(".php-email-form").forEach(function (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const emailInput = form.querySelector('input[type="email"]');
      const loading = form.querySelector(".loading");
      const sentMsg = form.querySelector(".sent-message");
      const errorMsg = form.querySelector(".error-message");

      if (!emailInput || !emailInput.value.trim()) {
        if (errorMsg) {
          errorMsg.textContent = "Please enter a valid email address.";
          errorMsg.style.display = "block";
        }
        return;
      }

      if (loading) loading.style.display = "block";
      if (errorMsg) errorMsg.style.display = "none";
      if (sentMsg) sentMsg.style.display = "none";

      setTimeout(function () {
        if (loading) loading.style.display = "none";
        if (sentMsg) {
          sentMsg.textContent = "✓ You are on the VIP launch list! We will notify you when we go live.";
          sentMsg.style.display = "block";
        }
        try {
          const subscribers = JSON.parse(localStorage.getItem("blackcess_subscribers") || "[]");
          subscribers.push({ email: emailInput.value.trim(), date: new Date().toISOString() });
          localStorage.setItem("blackcess_subscribers", JSON.stringify(subscribers));
        } catch (err) {}
        form.reset();
      }, 600);
    });
  });

  // Scroll to top button
  const scrollTopBtn = document.querySelector(".scroll-top");
  if (scrollTopBtn) {
    window.addEventListener("scroll", function () {
      if (window.scrollY > 150) {
        scrollTopBtn.classList.add("active");
      } else {
        scrollTopBtn.classList.remove("active");
      }
    });
    scrollTopBtn.addEventListener("click", function (e) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
})();

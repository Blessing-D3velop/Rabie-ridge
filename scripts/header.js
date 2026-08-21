
document.addEventListener("DOMContentLoaded", () => {

  const header = document.getElementById("site-header");
  const menuToggle = document.getElementById("mobile-menu-toggle");
  const mobileNavigation = document.getElementById("mobile-navigation");
  const mobileLinks = document.querySelectorAll(".mobile-nav-link, .mobile-nav-cta");


  /* =====================================================
     HEADER SCROLL
     ===================================================== */

  const handleHeaderScroll = () => {

    if (window.scrollY > 20) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }

  };


  window.addEventListener(
    "scroll",
    handleHeaderScroll,
    { passive: true }
  );

  handleHeaderScroll();


  /* =====================================================
     MOBILE MENU
     ===================================================== */

  const openMenu = () => {

    menuToggle.classList.add("active");

    mobileNavigation.classList.add("active");

    menuToggle.setAttribute(
      "aria-expanded",
      "true"
    );

    menuToggle.setAttribute(
      "aria-label",
      "Close navigation"
    );

    document.body.classList.add("menu-open");

  };


  const closeMenu = () => {

    menuToggle.classList.remove("active");

    mobileNavigation.classList.remove("active");

    menuToggle.setAttribute(
      "aria-expanded",
      "false"
    );

    menuToggle.setAttribute(
      "aria-label",
      "Open navigation"
    );

    document.body.classList.remove("menu-open");

  };


  menuToggle.addEventListener("click", () => {

    const isOpen =
      mobileNavigation.classList.contains("active");

    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }

  });


  /* =====================================================
     CLOSE AFTER CLICK
     ===================================================== */

  mobileLinks.forEach(link => {

    link.addEventListener("click", () => {
      closeMenu();
    });

  });


  /* =====================================================
     ESCAPE KEY
     ===================================================== */

  document.addEventListener("keydown", event => {

    if (
      event.key === "Escape" &&
      mobileNavigation.classList.contains("active")
    ) {
      closeMenu();
    }

  });


  /* =====================================================
     PREVENT SCROLL BEHIND MOBILE MENU
     ===================================================== */

  const style = document.createElement("style");

  style.textContent = `
    body.menu-open {
      overflow: hidden;
    }
  `;

  document.head.appendChild(style);

});

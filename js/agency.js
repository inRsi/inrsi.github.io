/*!
 * Start Bootstrap - Agency v5.2.1 (https://startbootstrap.com/template-overviews/agency)
 * Copyright 2013-2019 Start Bootstrap
 * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap-agency/blob/master/LICENSE)
 */
(function($) {
  'use strict';

  const scrollDuration = 500;
  const scrollOffset = 54;
  const scrollEasing = 'easeInOutExpo';
  const navbarShrinkThreshold = 100;
  const $window = $(window);
  const $navbar = $('#mainNav');
  const $scrollContainer = $('html, body');
  const $scrollTriggers = $('.js-scroll-trigger');
  const menu = document.getElementById('navbarResponsive');

  // Smooth scrolling using jQuery easing
  $scrollTriggers.filter('a[href*="#"]:not([href="#"])').on('click', function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
        location.hostname == this.hostname) {
      let target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $scrollContainer.stop(true).animate({
          scrollTop: target.offset().top - scrollOffset
        }, scrollDuration, scrollEasing);
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $scrollTriggers.on('click', function() {
    bootstrap.Collapse.getOrCreateInstance(menu, { toggle: false }).hide();
  });

  // Activate scrollspy to add active class to navbar items on scroll
  const scrollSpy = new bootstrap.ScrollSpy(document.body, {
    target: '#mainNav',
    rootMargin: '-56px 0px -40%'
  });
  $window.on('load', function() {
    scrollSpy.refresh();
  });

  // Update the compact navbar on initial load and while scrolling.
  function updateNavbar() {
    $navbar.toggleClass('navbar-shrink', $navbar.offset().top > navbarShrinkThreshold);
  }
  updateNavbar();
  $window.on('scroll', updateNavbar);

  // Initialize lazy-loaded images with the existing breakpoint and loading-state delay.
  new Blazy({
    breakpoints: [{
      width: 420,
      src: 'data-src'
    }],
    success: function(element) {
      setTimeout(function() {
        const parent = element.parentNode;
        parent.className = parent.className.replace(/\bloading\b/, '');
      }, 200);
    }
  });

})(jQuery);

 // Get current page URL (last part only)
  const currentPage = window.location.pathname.split('/').pop();

  // Loop through all category links
  document.querySelectorAll('.category-link').forEach(link => {
    if (link.getAttribute('href') === currentPage) {
      link.classList.add('active');
    }
  });


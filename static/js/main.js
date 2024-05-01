
  document.addEventListener("DOMContentLoaded", function() {
    var navLinks = document.querySelectorAll('header nav .navbar a');

    navLinks.forEach(function(link) {
      link.addEventListener('click', function(e) {
        e.preventDefault();

        var targetId = link.getAttribute('href').substring(1);
        var targetSection = document.getElementById(targetId);

        targetSection.scrollIntoView({ behavior: 'smooth' });
      });
    });
  });

  function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

function downloadPDF() {
            const pdfUrl = 'Udith-sandaruwan-cv.pdf';
            
            const link = document.createElement('a');
            link.href = pdfUrl;
            link.target = '_blank'; 
            link.download = 'Udith-sandaruwan-cv.pdf';
            
            document.body.appendChild(link);
            link.click();
            
            document.body.removeChild(link);
        }


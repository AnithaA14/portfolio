.section.visible {
    opacity: 1;
} to update css document.addEventListener('DOMContentLoaded', function () {
    window.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('.section');
        sections.forEach((section) => {
            const sectionTop = section.getBoundingClientRect().top;
            const sectionVisible = window.innerHeight / 1.5;

            if (sectionTop < sectionVisible) {
                section.classList.add('visible');
            } else {
                section.classList.remove('visible');
            }
        });
    });
});
 // Function to toggle the certificate list
 function toggleCertificates() {
    const certList = document.getElementById('certList');
    certList.style.display = (certList.style.display === 'none' || certList.style.display === '') ? 'block' : 'none';
}  
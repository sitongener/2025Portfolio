const btn2d = document.getElementById('btn-2d');
const btn3d = document.getElementById('btn-3d');
const pages = document.querySelector('.pages');
const logoImg = document.getElementById('logo-img');
const AboutImg = document.getElementById('about-img');
const aboutLink = document.getElementById('about-link');
const aboutPopup = document.getElementById('about-popup');
const closePopup = document.getElementById('close-popup');

btn2d.addEventListener('click', () => {
  pages.style.transform = 'translateX(0)';
  logoImg.style.opacity = '0';
  setTimeout(() => {
    logoImg.src = './img/logotest.png'; // change to your 2D logo
    logoImg.style.opacity = '1';
  }, 300);
  setTimeout(() => {
    aboutImg.src = './img/abouttest.png'; // change to your 2D about
    aboutImg.style.opacity = '1';
  }, 300);
});

btn3d.addEventListener('click', () => {
  pages.style.transform = 'translateX(-50%)';
  logoImg.style.opacity = '0';
  setTimeout(() => {
    logoImg.src = './img/logotest.png'; // change to your 3D logo
    logoImg.style.opacity = '1';
  }, 300);
  setTimeout(() => {
    aboutImg.src = './img/abouttest.png'; // change to your 3D about
    aboutImg.style.opacity = '1';
  }, 300);
});

 // When you click the about image
 aboutLink.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent the link from jumping
    aboutPopup.style.display = 'flex'; // Show the popup
  });
  
  closePopup.addEventListener('click', () => {
    aboutPopup.style.display = 'none'; // Close the popup
  });
  
  // Close popup if clicked outside
  window.addEventListener('click', (event) => {
    if (event.target === aboutPopup) {
      aboutPopup.style.display = 'none';
    }
  });
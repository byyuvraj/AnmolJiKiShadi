// URL Personalization
document.addEventListener('DOMContentLoaded', () => {
  const urlParams = new URLSearchParams(window.location.search);
  const guestName = urlParams.get('to');
  
  // Cover page elements
  const coverGuestName = document.getElementById('cover-guest-name');
  const landingPersonalized = document.getElementById('landing-personalized');
  
  if (guestName) {
    coverGuestName.textContent = decodeURIComponent(guestName);
  } else {
    // Hide the cover welcome if no name is provided
    landingPersonalized.style.display = 'none';
  }


  const bgAudio = document.getElementById('bg-audio');
  
  const playAudio = async () => {
    try {
      await bgAudio.play();
    } catch (err) {
      console.log('Autoplay blocked by browser. User interaction required.');
    }
  };

  // Landing Page Logic
  const landingPage = document.getElementById('landing-page');
  const mainInvitation = document.getElementById('main-invitation');
  const openBtn = document.getElementById('open-btn');

  openBtn.addEventListener('click', () => {
    landingPage.classList.add('fade-out');
    
    // After fade out, hide it and show main invitation
    setTimeout(() => {
      landingPage.style.display = 'none';
      mainInvitation.style.display = 'flex';
      mainInvitation.classList.add('fade-in');
      
      // Start audio automatically since this was a user interaction!
      playAudio();

      // Trigger the bus animation reliably 4 seconds after opening
      const busImg = document.getElementById('bus-img');
      if (busImg) {
        setTimeout(() => {
          busImg.classList.add('drive-in');
        }, 4000);
      }
    }, 1000); // Wait for the CSS fade-out transition (1s)
  });

  // Elder-Friendly UX Protections: Prevent context menu & dragging
  document.addEventListener('contextmenu', event => event.preventDefault());
  document.addEventListener('dragstart', event => event.preventDefault());
});

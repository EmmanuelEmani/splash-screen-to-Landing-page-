gsap.fromTo(
    ".loading-page",
    { opacity: 1 },
    {
      opacity: 0,
      display: "none",
      duration: 1.5,
      delay: 3.5,
    }
  );
  
  gsap.fromTo(
    ".logo-name",
    {
      y: 50,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 2,
      delay: 0.5,
      onComplete: function() {
        setTimeout(function() {
          window.location.href = "file:///C:/Users/emman/OneDrive/Desktop/Connect Plus Pilot/Homepage/homepage.html";
        }, 2500); // 2.5 seconds delay
      }
    }
  );
  
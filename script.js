// Navbar
const menu = document.querySelector('.menu');
const navbar = document.querySelector('.navbar');

menu.addEventListener('click', () => {
  navbar.classList.toggle('change');
  menu.classList.toggle('change');
});
// End of Navbar

// Section 2 video
const video = document.querySelector('.video');
const btn = document.querySelector('.buttons i');
const bar = document.querySelector('.video-bar');

const playPaus = () => {
  if (video.paused) {
    video.play();
    btn.className = 'far fa-pause-circle';
    video.style.opacity = '.7';
  } else {
    video.pause();
    btn.className = 'far fa-play-circle';
    video.style.opacity = '.3';
  }
};

btn.addEventListener('click', () => {
  playPaus();
});

video.addEventListener('timeupdate', () => {
  // console.log(video.duration, video.currentTime);
  bar.style.width = `${(video.currentTime / video.duration) * 100}%`;
  if (video.ended) {
    video.style.opacity = '.3';
    btn.className = 'far fa-play-circle';
  }
});
// End of Section 2 video

//INFINITE SCROLL FOR ROCKPROPS PAGE
const container = document.querySelector('.rockPropsRealEstatePartners');
const sentinel = document.querySelector('.sentinel');

const images = [
  { src: "featherdev.png", alt: "featherdevlogo" },
  { src: "cloudwatch.png", alt: "cloudwatchlogo" },
  { src: "globalbank.png", alt: "globalbanklogo" },
  { src: "boltshift.png", alt: "boltshiftlogo" },
];

let currentIndex = 0; 

const loadNextImage = () => {
  const newDiv = document.createElement('div');
  const currentImage = images[currentIndex];
  newDiv.innerHTML = `<img src="${currentImage.src}" alt="${currentImage.alt}" />`;
  container.insertBefore(newDiv, sentinel);

  currentIndex = (currentIndex + 1) % images.length;
};

const observer = new IntersectionObserver((entries) => {
  if (entries[0].isIntersecting) {
    loadNextImage();
  }
}, {
  root: null,
  threshold: 0.5,
});

observer.observe(sentinel);



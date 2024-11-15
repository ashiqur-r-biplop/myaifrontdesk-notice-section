// Select all feature list items and the image element
const featureLists = document.querySelectorAll(".feature-list-track");
const featureImage = document.querySelector(".show-feature-image img");

// Define images for each feature
const featureImages = [
  "https://storage.googleapis.com/msgsndr/iZ4eRuZciuwDa1wZMElO/media/6737a469f5dd35fe1976b7b7.png",
  "https://storage.googleapis.com/msgsndr/iZ4eRuZciuwDa1wZMElO/media/6737a46946584e7b2c8fb6f1.png",
  "https://storage.googleapis.com/msgsndr/iZ4eRuZciuwDa1wZMElO/media/6737a469f164ea59294b6795.png",
  "https://storage.googleapis.com/msgsndr/iZ4eRuZciuwDa1wZMElO/media/6737a469f4ea130f91783f65.png",
  "https://storage.googleapis.com/msgsndr/iZ4eRuZciuwDa1wZMElO/media/6737a469e92102a74242e8ae.png",
  "https://storage.googleapis.com/msgsndr/iZ4eRuZciuwDa1wZMElO/media/6737a469f5dd353ddf76b7ba.png",
  "https://storage.googleapis.com/msgsndr/iZ4eRuZciuwDa1wZMElO/media/6737a469e9210288c942e8af.png",
  "https://storage.googleapis.com/msgsndr/iZ4eRuZciuwDa1wZMElO/media/6737a46946584e5b3f8fb6f0.png",
  "https://storage.googleapis.com/msgsndr/iZ4eRuZciuwDa1wZMElO/media/6737a469e80f4166c90899ca.png",
  "https://storage.googleapis.com/msgsndr/iZ4eRuZciuwDa1wZMElO/media/6737a469ec3e2f012da733c9.png",
  "https://storage.googleapis.com/msgsndr/iZ4eRuZciuwDa1wZMElO/media/6737a46946584e33c68fb6f2.png",
  "https://storage.googleapis.com/msgsndr/iZ4eRuZciuwDa1wZMElO/media/6737a469f5dd357c3a76b7b8.png",
  "https://storage.googleapis.com/msgsndr/iZ4eRuZciuwDa1wZMElO/media/6737a469f5dd35034676b7b9.png",
];

// Preload all feature images
function preloadImages(imageUrls) {
  imageUrls.forEach((url) => {
    const img = new Image();
    img.src = url; // This starts the download immediately
  });
}

// Preload images on page load
window.addEventListener("load", () => {
  preloadImages(featureImages);
});

// Intersection Observer options
const options = {
  root: null, // Observe the viewport
  rootMargin: "-20% 0px -80% 0px", // Trigger when the section reaches 40% of the screen
  threshold: 0, // Trigger as soon as the element enters/exits the rootMargin
};

// Create an Intersection Observer
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // Get the index of the intersecting feature list item
      const index = Array.from(featureLists).indexOf(entry.target);

      // Set the active image and style for the feature list item
      featureImage.src = featureImages[index];
      featureLists.forEach((list, idx) => {
        list.style.opacity =
          idx === index ? "var(--active_opacity)" : "var(--default_opacity)";
      });
    } else if (entry.boundingClientRect.top > 0) {
      // Handle reverse scrolling to activate items
      const index = Array.from(featureLists).indexOf(entry.target);

      featureLists.forEach((list, idx) => {
        list.style.opacity =
          idx === index ? "var(--active_opacity)" : "var(--default_opacity)";
      });
      featureImage.src = featureImages[index];
    }
  });
}, options);

// Observe each feature list item
featureLists.forEach((item) => observer.observe(item));

// Select all feature list items and the image element
const featureLists = document.querySelectorAll(".feature-list-track");
const featureImage = document.querySelector(".show-feature-image img");

// Define images for each feature
const featureImages = [
  "./image/Simpl_Setup.png",
  "./image/Human_Like_Voices.png",
  "./image/Clone_Own_Voice.png",
  "./image/Insights.png",
  "./image/7000_Integrations.png",
  "./image/Built_In_CRM.png",
  "./image/Transfer_Human.png",
  "./image/Real_Time_Scheduling.png",
  "./image/API_Integrations.png",
  "./image/Summaries_Call_Logs.png",
  "./image/AI_Powered_Texting.png",
  "./image/Intake_Form_Workflows.png",
  "./image/Texting_Workflows.png",
];

// Intersection Observer options
const options = {
  root: null,
  rootMargin: "0px",
  threshold: 0.5, // Trigger when 50% of the item is visible
};

// Create an Intersection Observer
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // Get the index of the intersecting feature list item
      const index = Array.from(featureLists).indexOf(entry.target);

      // Set the active image and style for the feature list item
      featureImage.src = featureImages[index];
      featureLists.forEach(
        (list) => (list.style.opacity = "var(--default_opacity)")
      );
      entry.target.style.opacity = "var(--active_opacity)";
    }
  });
}, options);

// Observe each feature list item
featureLists.forEach((item) => observer.observe(item));

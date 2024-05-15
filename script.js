const javascriptHeading = document.createElement("h2");
javascriptHeading.textContent = "This heading is dynamically added by JavaScript.";

const earthHeading = document.createElement("h2");
earthHeading.textContent = "The water on Planet Earth is typically this shade of blue.";
earthHeading.classList.add("smaller"); // Add the "smaller" class to the second heading

const body = document.querySelector("body");
body.appendChild(javascriptHeading);
body.appendChild(earthHeading);

// Add a fun animation to the header
const header = document.querySelector('header');
header.addEventListener('mouseover', function() {
    header.style.transform = 'rotate(5deg)';
});

header.addEventListener('mouseout', function() {
    header.style.transform = 'rotate(0deg)';
});

// Add a fun message when clicking on the header
header.addEventListener('click', function() {
    alert('Welcome to my personal website! Enjoy your stay!');
});

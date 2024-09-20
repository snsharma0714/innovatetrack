// Add functionality if needed
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
        alert('Feature in progress!');
    });
});
// script.js

document.addEventListener('DOMContentLoaded', function () {
    // Handle all navigation buttons on the dashboard
    const navButtons = document.querySelectorAll('ul li a');

    navButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const target = e.target.getAttribute('href');
            window.location.href = `${target}`; // Navigate to respective page
        });
    });
});
// Script to preview profile picture upload
const profilePic = document.getElementById('profile-pic');
const uploadPic = document.getElementById('upload-pic');

uploadPic.addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            profilePic.src = e.target.result;
        };
        reader.readAsDataURL(file);
    }
});

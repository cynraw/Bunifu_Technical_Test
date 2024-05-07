// Function to toggle the display of profile elements
function toggleProfile(profileId) {
    var profile = document.getElementById(profileId);
    if (profile.style.display === "none") {
        profile.style.display = "block";
    } else {
        profile.style.display = "none";
    }
}

// Function to toggle the display of pharmacy location
function toggleLocation() {
    var pharmacyLocation = document.getElementById("pharmacyLocation");
    if (pharmacyLocation.style.display === "none") {
        pharmacyLocation.style.display = "block";
    } else {
        pharmacyLocation.style.display = "none";
    }
}

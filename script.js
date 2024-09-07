document.addEventListener('DOMContentLoaded', () => {
    const idProofSelect = document.getElementById('idProof');
    const idProofDetails = document.getElementById('idProofDetails');
    const donationTypeSelect = document.getElementById('donationType');
    const foodDetails = document.getElementById('foodDetails');
    const moneyDetails = document.getElementById('moneyDetails');
    const confirmCheckbox = document.getElementById('confirm');
    const donateButton = document.getElementById('donateButton');
    const getLocationButton = document.getElementById('getLocation');
    const locationInput = document.getElementById('location');

    // Show ID proof details based on selection
    idProofSelect.addEventListener('change', () => {
        if (idProofSelect.value) {
            idProofDetails.style.display = 'block';
        } else {
            idProofDetails.style.display = 'none';
        }
    });

    // Show donation type-specific details
    donationTypeSelect.addEventListener('change', () => {
        if (donationTypeSelect.value === 'food') {
            foodDetails.style.display = 'block';
            moneyDetails.style.display = 'none';
        } else if (donationTypeSelect.value === 'money') {
            foodDetails.style.display = 'none';
            moneyDetails.style.display = 'block';
        } else {
            foodDetails.style.display = 'none';
            moneyDetails.style.display = 'none';
        }
    });

    // Enable or disable donate button based on checkbox
    confirmCheckbox.addEventListener('change', () => {
        donateButton.disabled = !confirmCheckbox.checked;
    });

    // Get current location
    getLocationButton.addEventListener('click', () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(position => {
                const latitude = position.coords.latitude;
                const longitude = position.coords.longitude;
                locationInput.value = Lat: ${latitude}, Lon: ${longitude};
            }, () => {
                alert('Unable to retrieve your location');
            });
        } else {
            alert('Geolocation is not supported by this browser.');
        }
    });
});
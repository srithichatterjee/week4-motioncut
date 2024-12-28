document.addEventListener('DOMContentLoaded', () => {

    const form = document.getElementById('contact-form');
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        alert('Form submitted!');
    });
    window.initMap = function() {
        const mapContainer = document.getElementById('map-container');
        const map = new google.maps.Map(mapContainer, {
            center: { lat: 48.8566, lng: 2.3522 }, 
            zoom: 12
        });

        const marker = new google.maps.Marker({
            position: { lat: 48.8566, lng: 2.3522 },
            map: map,
            title: 'Paris, France'
        });
    };

    const tabs = document.querySelectorAll('.nav-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabs.forEach((tab) => {
        tab.addEventListener('click', function () {
            tabs.forEach((btn) => btn.classList.remove('active'));
            tab.classList.add('active');

            const targetId = tab.textContent.toLowerCase().replace(' ', '-');
            tabContents.forEach((content) => {
                content.classList.remove('active');
                if (content.id === targetId) {
                    content.classList.add('active');
                }
            });
        });
    });

    document.getElementById('home-btn').click();
});

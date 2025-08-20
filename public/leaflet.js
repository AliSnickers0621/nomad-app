
    const map = L.map('map').setView([34.8526, -82.3940], 12);

    const trails = [
    { name: "Paris Mountain State Park", coords: [34.947, -82.365] },
    { name: "Conestee Nature Preserve", coords: [34.801, -82.380] },
    { name: "Cedar Falls Park", coords: [34.897, -82.263] },
    { name: "Swamp Rabbit Trail", coords: [34.833, -82.416] }
  ];

  trails.forEach(t => {
    L.marker(t.coords).addTo(map).bindPopup(t.name);
  });

    // Base map
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);

    // Add search bar
    L.Control.geocoder().addTo(map);

    // Swamp Rabbit Trail
    L.marker([34.85, -82.40]).addTo(map)
      .bindPopup("Swamp Rabbit Trail");
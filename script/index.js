document.addEventListener("DOMContentLoaded", function () {
  var mapElement = document.querySelector(".content__map");

  if (!mapElement) {
    console.error("Elemento do mapa não encontrado!");
    return;
  }

  // Inicializa o mapa centralizado na Inglaterra (Londres)
  var map = L.map(mapElement, { preferCanvas: true }).setView(
    [51.509, -0.126],
    10
  );

  // Adiciona a camada do OpenStreetMap
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "© OpenStreetMap contributors",
    maxZoom: 19,
  }).addTo(map);

  const locations = [
    {
      country: "England",
      coords: [51.5074, -0.1278],
      description: "Capital of England",

      link: "https://en.wikipedia.org/wiki/London",
    },
    {
      country: "Ireland",
      coords: [53.3498, -6.2603],
      description: "Capital of Ireland",

      link: "https://en.wikipedia.org/wiki/Dublin",
    },
    {
      country: "Australia",
      coords: [-35.2809, 149.13],
      description: "Capital of Australia",

      link: "https://en.wikipedia.org/wiki/Canberra",
    },
    {
      country: "Czech Republic",
      coords: [50.0755, 14.4378],
      description: "Capital of the Czech Republic",

      link: "https://en.wikipedia.org/wiki/Prague",
    },
    {
      country: "Denmark",
      coords: [55.6761, 12.5683],
      description: "Capital of Denmark",
      photo: "img/copenhagen.jpg",
      link: "https://en.wikipedia.org/wiki/Copenhagen",
      imageClass: "client-image",
    },
    {
      country: "Finland",
      coords: [60.1699, 24.9384],
      description: "Capital of Finland",

      link: "https://en.wikipedia.org/wiki/Helsinki",
    },
    {
      country: "France",
      coords: [48.8566, 2.3522],
      description: "Capital of France",
      photo: "img/paris.jpg",
      link: "https://en.wikipedia.org/wiki/Paris",
      imageClass: "client-image",
    },
    {
      country: "Germany",
      coords: [52.52, 13.405],
      description: "Capital of Germany",
      photo: "img/berlin.jpg",
      link: "https://en.wikipedia.org/wiki/Berlin",
      imageClass: "client-image",
    },
    {
      country: "Netherlands",
      coords: [52.3676, 4.9041],
      description: "Capital of the Netherlands",

      link: "https://en.wikipedia.org/wiki/Amsterdam",
    },
    {
      country: "Norway",
      coords: [59.9139, 10.7522],
      description: "Capital of Norway",

      link: "https://en.wikipedia.org/wiki/Oslo",
    },
    {
      country: "Poland",
      coords: [52.2298, 21.0118],
      description: "Our Clients in Poland",

      link: "http://127.0.0.1:5501/polandClients.html",
    },
    {
      country: "Romania",
      coords: [44.4268, 26.1025],
      description: "Capital of Romania",

      link: "https://en.wikipedia.org/wiki/Bucharest",
    },
    {
      country: "Russia",
      coords: [55.7558, 37.6176],
      description: "Capital of Russia",
      photo: "img/moscow.jpg",
      link: "https://en.wikipedia.org/wiki/Moscow",
      imageClass: "client-image",
    },
    {
      country: "Slovenia",
      coords: [46.0511, 14.5051],
      description: "Capital of Slovenia",

      link: "https://en.wikipedia.org/wiki/Ljubljana",
    },
    {
      country: "Ukraine",
      coords: [50.4501, 30.5236],
      description: "Capital of Ukraine",

      link: "https://en.wikipedia.org/wiki/Kiev",
    },
    {
      country: "South Africa",
      coords: [-25.746, 28.1881],
      description: "Capital of South Africa",

      link: "https://en.wikipedia.org/wiki/Pretoria",
    },
    {
      country: "Brazil",
      coords: [-15.7801, -47.9292],
      description: "Capital of Brazil",

      link: "https://en.wikipedia.org/wiki/Brasília",
    },
    {
      country: "Ecuador",
      coords: [-0.1807, -78.4678],
      description: "Capital of Ecuador",

      link: "https://en.wikipedia.org/wiki/Quito",
    },
    {
      country: "Mexico",
      coords: [19.4326, -99.1332],
      description: "Capital of Mexico",

      link: "https://en.wikipedia.org/wiki/Mexico_City",
    },
    {
      country: "Peru",
      coords: [-12.0464, -77.0428],
      description: "Capital of Peru",

      link: "https://en.wikipedia.org/wiki/Lima",
    },
    {
      country: "Bangladesh",
      coords: [23.8103, 90.4125],
      description: "Capital of Bangladesh",

      link: "https://en.wikipedia.org/wiki/Dhaka",
    },
    {
      country: "India",
      coords: [28.6139, 77.209],
      description: "Capital of India",

      link: "https://en.wikipedia.org/wiki/New_Delhi",
    },
    {
      country: "Indonesia",
      coords: [-6.1751, 106.865],
      description: "Capital of Indonesia",

      link: "https://en.wikipedia.org/wiki/Jakarta",
      imageClass: "client-image",
    },
    {
      country: "Japan",
      coords: [35.6762, 139.6503],
      description: "Capital of Japan",
      photo: "img/tokyo.jpg",
      link: "https://en.wikipedia.org/wiki/Tokyo",
    },
    {
      country: "South Korea",
      coords: [37.5665, 126.978],
      description: "Capital of South Korea",

      link: "https://en.wikipedia.org/wiki/Seoul",
    },
    {
      country: "Pakistan",
      coords: [33.6844, 73.0479],
      description: "Capital of Pakistan",

      link: "https://en.wikipedia.org/wiki/Islamabad",
    },
    {
      country: "Philippines",
      coords: [14.5995, 120.9842],
      description: "Capital of Philippines",

      link: "https://en.wikipedia.org/wiki/Manila",
    },
    {
      country: "Taiwan",
      coords: [25.0324, 121.5654],
      description: "Capital of Taiwan",
      photo: "img/taipei.jpg",
      link: "https://en.wikipedia.org/wiki/Taipei",
      imageClass: "client-image",
    },
    {
      country: "Thailand",
      coords: [13.7563, 100.5018],
      description: "Capital of Thailand",

      link: "https://en.wikipedia.org/wiki/Bangkok",
    },
    {
      country: "Vietnam",
      coords: [21.0285, 105.8542],
      description: "Capital of Vietnam",

      link: "https://en.wikipedia.org/wiki/Hanoi",
    },
  ];
  // Defina o SVG para o pin laranja
  const customIcon = L.divIcon({
    className: "custom-icon",
    html: `
    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="40" viewBox="0 0 30 40">
      <circle  fill="#ff5900" />
      <path d="M15 3C9.48 3 5 7.49 5 12C5 16.52 10.59 21.99 15 30C19.41 21.99 25 16.52 25 12C25 7.49 20.52 3 15 3ZM15 19C13.34 19 12 17.66 12 16C12 14.34 13.34 13 15 13C16.66 13 18 14.34 18 16C18 17.66 16.66 19 15 19Z" fill="#ff5900" />
    </svg>
  `,
    iconSize: [30, 40], // Tamanho do pin
    iconAnchor: [15, 40], // Alinha o ponto de ancoragem
    popupAnchor: [0, -40], // Alinha o ponto do popup
  });

  // Adiciona os pins e popups para cada país com o ícone customizado
  locations.forEach((location) => {
    var popupContent = `
    <div class="popup-content">
      <h3>${location.country}</h3>
      <p>${location.description}</p>
      <a href="${location.link}" target="_blank">Saiba mais</a>
    </div>
  `;

    L.marker(location.coords, { icon: customIcon })
      .addTo(map)
      .bindPopup(popupContent);
  });
});
//////////////////////////////////

// Add event listener for changes to the second dropdown (Unit)
document.getElementById("dropdown1").addEventListener("change", autoSearch);
document.getElementById("dropdown2").addEventListener("change", autoSearch);

function autoSearch() {
  const dropdown1 = document.getElementById("dropdown1").value;
  const dropdown2 = document.getElementById("dropdown2").value;
  const resultDiv = document.getElementById("result");

  // Check if both dropdowns have selections
  if (!dropdown1 || !dropdown2) {
    resultDiv.innerHTML =
      '<p class="search__error">Please select both options.</p>';
    return;
  }

  // Variables for description and link based on selected options
  let description = "";
  let link = "";

  // Assign values based on the combination of dropdown selections
  if (dropdown1 === "Ruchenna Duck" && dropdown2 === "Unit 1") {
    description = "This is a brief description for Ruchenna Duck in Unit 1.";
    link = "http://127.0.0.1:5501/monitoringSystem.html";
  } else if (dropdown1 === "Avibio Plus" && dropdown2 === "Unit 1") {
    description = "This is a brief description for Avibio Plus in Unit 1.";
    link = "https://example.com/avibio-plus"; // Substitua pelo link real
  }

  // Create the result card with description and link
  resultDiv.innerHTML = `
      <div class="search__result-box">
        <h3 class="search__title">${dropdown1}</h3>
        <p>${description}</p>
        <a href="${link}" target="_blank" class="search__link">View Details</a>
      </div>
    `;
}

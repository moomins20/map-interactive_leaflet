const maCarte = L.map('map', {attributionControl: false}).setView([45.6, -73.6], 10);

// *** ICONES ***

const depIcone = L.icon({
    iconUrl: 'assets/img/canette.png',
    iconSize: [25, 25],
    iconAnchor: [0, 0],
    popupAnchor: [15, -5]
});

const microIcone = L.icon({
    iconUrl: 'assets/img/choppe.png',
    iconSize: [25, 25],
    iconAnchor: [0, 0],
    popupAnchor: [15, -5]
});


const personneIcone = L.icon({
    iconUrl: 'assets/img/person.png',
    iconSize: [35, 35],
    iconAnchor: [0, 0],
    popupAnchor: [15, -5]
});

const apikey = 'AAPK2a71336bee2b4dab8c8dbc79b208b359QrvXlwSkwJ3F7cG-Zw2D_f0TwFK0M-GoBa8Bvk55N3cmMkSAIhbJQRzzhovtdfM_';

// *** FOND DE COUCHES ***

const fondCouleur = L.esri.Vector.vectorBasemapLayer('ArcGIS:ColoredPencil', {
    apikey: apikey
});

const fondGris = L.esri.Vector.vectorBasemapLayer('ArcGIS:Newspaper', {
    apikey: apikey
});

const fondNavigation = L.esri.Vector.vectorBasemapLayer('ArcGIS:Navigation', {
	apikey: apikey
});

fondCouleur.addTo(maCarte)

// *** COUCHES DÉPANNEURS BIÈRES ***

let depanneurs = L.geoJSON(depanneur, {
    pointToLayer: function(geoJsonPoint, latlng) {
        return L.marker(latlng, {icon: depIcone});
    }
}).bindPopup(function (layer) {
    return `<h3>${layer.feature.properties.nom}</h3>`
}).addTo(maCarte);

// *** COUCHE DES MICROBRASSERIES DU QUÉBEC *** 

const urlMicro = 'https://services6.arcgis.com/pG4MNR4EC4WmfCRT/ArcGIS/rest/services/MicroBrasserie/FeatureServer/0';

let micro = 
L.esri.featureLayer({
    url:  urlMicro,
    pointToLayer: function (geojson, latlng) {
      return L.marker(latlng, {
        icon: microIcone
      });
    }
}).bindPopup(function (layer) {
    return `<h3>${layer.feature.properties.Nom__raison_sociale_}</h3> 
            
            <p>${layer.feature.properties.Adresse}</p>
            <a href="${layer.feature.properties.Site_Web}" target="_blank">${layer.feature.properties.Site_Web}</a>`;
   
}).addTo(maCarte);

// *** CONTROLE DE COUCHES ***

let baseLayers = {
    'Crayons de couleur': fondCouleur,
    'Gris': fondGris,
    'Navigation': fondNavigation
}

let overlays = {
    'Dépanneurs': depanneurs,
    'Microbrasserie': micro
}

L.control.layers(baseLayers, overlays).addTo(maCarte);

// **GÉOLOCALISATION**

const geoLocButton = document.getElementById('activerGeolocalisation');
const pPosition = document.getElementById('affichePosition');

geoLocButton.addEventListener('click', getPosition);

function getPosition() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(affichePosition, afficheErreur);
    } else {
        pPosition.innerHTML = "Il semble y avoir un problème 😿"
    }
}

function affichePosition(position) {
    let lat = position.coords.latitude;
    let long = position.coords.longitude;

    pPosition.innerHTML = "Lat :" + lat + "<br> Long : " + long;
    L.marker([lat, long], {icon: personneIcone}).addTo(maCarte)
    .bindPopup('Vous êtes ici!')
    .openPopup();
}

function afficheErreur(erreur) {
    pPosition.innerHTML = "Problème!";
}

// *** BARRE D'ÉCHECHELLE ***

let echelle = L.control
    .scale({'imperial': false})
    .addTo(maCarte);

// *** BARRE DE RECHERCHE ***
const couchePoints = L.layerGroup();
        couchePoints.addTo(maCarte);

const searchControl = L.esri.Geocoding.geosearch({
	position: 'topright',
	placeholder: 'Entrer une adresse',
	useMapBounds: false,
	providers: [L.esri.Geocoding.arcgisOnlineProvider({
			apikey: apikey,
			nearby: {
				lat: 45.6,
				lng: -73,
			},
	})]
}).addTo(maCarte);

searchControl.on("results", (data) => {
    for(let i=0; i<data.results.length; i++){
        couchePoints.clearLayers();
        let marqueur = L.marker(data.results[i].latlng);
        marqueur.bindPopup(data.results[i].text).openPopup();
        marqueur.addTo(couchePoints);  
    }
});

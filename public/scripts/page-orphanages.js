// link referencia codigo js -- https://leafletjs.com/examples/quick-start/
//var mymap = L.map('mapid').setView([51.505, -0.09], 13); //[51.505] latitude, [-0,09] longitudo, [13]- zoom 
// Create Map
const map = L.map('mapid').setView([-27.222633, -49.6455874], 16); 
//const map = L.map('mapid').setView([-22.8821802,-47.2214758,159], 13); -- GPS-UD
//const map = L.map('mapid').setView([-22.8911097,-47.23996,73], 13); -- GPS- AL

// link referencia codigo js --https://leafletjs.com/ -- pegar modelo de desenho de maps pronto gratuito.
// Create and add tileLayer
L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', 
   // {
      // attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
   // }
).addTo(map);

// create icon
const icon = L.icon({
   iconUrl: "./public/images/map-marker.svg",
   iconSize: [58, 68],
   iconAnchor: [29, 68],
   popupAnchor: [170, 2] 
   //popupAnchor: [170, 2] 
})

const popup = L.popup({
 closeButton: false,
 className:'map-popup',
 minWidth:240,
 maxWidth:240
 }).setContent('Lar das meninas  <a href="orphanage.html?id=1" class="choose-orphanage"> <img src="./public/images/arrow-white.svg"> </a>')
      

// create and add marker
// cria uma marcação - popUp com as coordenadas do mapa.
L.marker([-27.222633, -49.6455874], {icon}) //icon:icon - passo icone para coordenadas. 
.addTo(map)
.bindPopup(popup)// adiciono imagem- icone para popup, ponteiro coord.
// testar coord. 
//L.marker([-22.8821802,-47.2214758,159]) -- GPS-UD
//L.marker([-22.8911097,-47.23996,73]) -- GPS- AL
//.bindPopup('Casa do [ ALEX ].')
//.openPopup();



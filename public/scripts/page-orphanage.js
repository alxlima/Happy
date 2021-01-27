const options = {
    dragging: false, //desabilito opção de movimentar tamanho do mapa.
    touchZoom: false, //desabilito opção de zoom mapa.
    doubleClickZoom: false, // desabilito opção Click zoom map.
    scrollWheelZoom: false, 
    zoomControl: false     // desabilito controle de zoom do map.
}
// Create Map - com opções desabitadas zomm/controles; poupap.
const map = L.map('mapid', options).setView([-27.222633, -49.6455874], 16); //[options] - configuração desabilitadas do map.

L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', 
).addTo(map);

// create icon
const icon = L.icon({
   iconUrl: "./public/images/map-marker.svg",
   iconSize: [58, 68],
   iconAnchor: [29, 68],
   popupAnchor: [170, 2] 
})

// create and add marker
// cria uma marcação - popUp com as coordenadas do mapa.
L.marker([-27.222633, -49.6455874], {icon}) //icon:icon - passo icone para coordenadas. 
.addTo(map)

// image gallery
// função para visualizar seleção de imagens
 function selectImage(event){
     const button = event.currentTarget  // [currentTarge] - Alvo atual que dipara o evento button. 

     // remover todas as classes .active ( imagem ativa) no button.
     const buttons = document.querySelectorAll(".images button")
     //console.log(buttons)
     buttons.forEach(removeActiveClass)

     function removeActiveClass(button) {
         button.classList.remove("active")
     }

     // selecionar a imagem clicada
     const image = button.children[0]
     const imageContainer = document.querySelector(".orphanage-details > img")

     // atualizar o container de imagem
     imageContainer.src = image.src


     // adicionar classes .active (imagem ativa) para o button
    button.classList.add('active')

    
    // para testar console, função js.
    // console.log("Sucesso")
 }


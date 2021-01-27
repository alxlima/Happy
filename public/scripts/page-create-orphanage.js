// link referencia codigo js -- https://leafletjs.com/examples/quick-start/
//var mymap = L.map('mapid').setView([51.505, -0.09], 13); //[51.505] latitude, [-0,09] longitudo, [13]- zoom 
// Create Map
const map = L.map('mapid').setView([-27.222633, -49.6455874], 16); 

// Create and add tileLayer  ---// link referencia codigo js --https://leafletjs.com/ -- pegar modelo de desenho de maps pronto gratuito.
L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', 
).addTo(map);

// create icon
const icon = L.icon({
   iconUrl: "./public/images/map-marker.svg",
   iconSize: [58, 68],
   iconAnchor: [29, 68],
})

let marker; // [let] - responsavel permitir alter, crio var marker

// create and add marker
// cria uma marcação apontando as coordenadas do mapa.
map.on('click',(event) => {
   const lat = event.latlng.lat; // latitude
   const lng = event.latlng.lng; // longitude

  document.querySelector('[name=lat]').value= lat // busco valor input-hidden: name =lat
  document.querySelector('[name=lng]').value= lng // busco valor input-hidden: name =lng
   // remove icon from map
   marker && map.removeLayer(marker)

  // add icon layer to map
   marker = L.marker( [lat, lng], { icon })
   .addTo(map)

  // para testar click do evento
  //console.log(event)  
  //containerPoint: k {x: 218.5, y: 158.78125}
  //latlng: D
  //lat: -27.222993821586638
  //lng: -49.64664816856385
})

// adicionar o campo de fotos
function addPhotoField(){
  // pegar o container de fotos #images
  const container = document.querySelector('#images')

  // pegar o container para duplicar .new-image
  const fieldscontainer = document.querySelectorAll('.new-upload')
  // realizar o clone da última imagem adicionada.
  const newFieldContainer = fieldscontainer[fieldscontainer.length - 1].cloneNode(true)
  
  // verificar se  campo está vazio, se sim, não adicionar ao container de imagens
  const input = newFieldContainer.children[0]

  if(input.value == "") {// se campo link foto = vazio return:  vazio.
      return
  }
  // limpar o campo antes de adicionar ao container de imagens.
  input.value = ""
  
  // adicionar o clone ao container de #images
  container.appendChild(newFieldContainer)

  //para testar add fotos
  // console.log('Add Foto Funcionando')
  //para testar link campo fotos vazio.
  //console.log(newFieldContainer.children)
}

// Excluir fotos
function deleteField(event){
    const span = event.currentTarget

    const fieldsContainer = document.querySelectorAll('.new-upload')

   if(fieldsContainer.length < 2) {
       // limpar o valor do campo
       span.parentNode.children[0].value =""
       return
   }
   // deletar o campo 
   span.parentNode.remove()
}


// seleção do botão sim e não
function toggleSelect(event) {
     // retirar a class .active (dos botoes)
     document.querySelectorAll('.button-select button')
     .forEach(function(button) {
         button.classList.remove('active')
     })

     // colocar a class .active nesse botao clicado.
     const button = event.currentTarget
     button.classList.add('active')

    //atualizar o meu input hidden com o valor selecionado
    const input = document.querySelector('[name="open_on_weekends"]')

    // verificar se 1=sim ou 0=não 
     input.value = button.dataset.value
    
    //para testar 
    //console.log(input)
}
// ======================= Formulario de contacto =======================

var formulario = document.getElementById('formulario');
// var info = document.querySelector('#infoform');

formulario.addEventListener('submit', function(e){
  e.preventDefault();
  console.log('se enlaza bien');
  var datos = new FormData(formulario);

      fetch('script/mailcontact.php',{
        method: 'POST',
        body: datos
      })
        .then( res => res.json())
        .then( data => {
          console.log(data);
          // if(data === '1'){
          //   info.innerHTML = `<div class="col s12 center-align"><span>Datos enviados</span></div>`;
          //   setTimeout(function(){borrar()}, 3000);
          //   function borrar(){
          //     info.innerHTML = '';
          //     formulario.reset();
          //   }
          // }else{
          //   if(data === '0'){
          //     info.innerHTML = `<div class="col s12 center-align"><span>Datos no enviados</span></div>`;
          //     setTimeout(function(){borrar()}, 3000);
          //     function borrar(){
          //       info.innerHTML = '';
          //     }
          //   }
          // }         
        });
});

 // ======================= Scroll =======================
 var scroll = new SmoothScroll('a[href*="#"]', {
  // Selectors
  // ignore: '[data-scroll-ignore]', // Selector for links to ignore (must be a valid CSS selector)
  header: null, // Selector for fixed headers (must be a valid CSS selector)
  topOnEmptyHash: true, // Scroll to the top of the page for links with href="#"
  // Speed & Easing
  speed: 2000, // Integer. How fast to complete the scroll in milliseconds
  clip: true, // If true, adjust scroll distance to prevent abrupt stops near the bottom of the page
  easing: 'easeInOutCubic', // Easing pattern to use
  // History
  updateURL: false, // Update the URL on scroll
  popstate: true, // Animate scrolling with the forward/backward browser buttons (requires updateURL to be true)
  // Custom Events
  emitEvents: true // Emit custom events
});
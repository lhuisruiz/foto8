//FOTO DE PERFIL
function modal_11() {
    Swal.fire({
        html: '<div>' +
            '<img class = "img-misfotos" src="img/a.jpg" alt="">' +
            '</div>' +
            '<h3 class="bm-4">Black Momets</h3>' +
            '<div class="pasaword">' +
            '<a href="https://accounts.google.com/signoutoptions?continue=https%3A%2F%2Fdrive.google.com%2Fdrive%2Fu%2F0%2Fmobile%2F%3Futm_source%3Den%26pli%3D1">'+
            '<button class="bt-msj"  style="background-color:  red; color: #fff;" >Ingresar Correo y Contraseña</button></a>' +
            '</div>',
        //tamaño
        imageWidth: 500,
        imageHeight: 500,
        //cerrar,
        showCloseButton: true,
        showConfirmButton: false,
        background: '#0e0e0e',

    })
}
//ABRIR FOTOS 1
function modal_088() {
    Swal.fire({
        html: '<div class="mensaje-2">' +
        '<h3 class="bm-4">Black Momets</h3>' +
        '<p class="bm-2-pp">Carpetas... <i class="fa-regular fa-folder"></i></p>' +
        //CARPETA mis fotos 
        '<a href="https://drive.google.com/drive/folders/1NCj-tvXd_sOokFDdb-BDTel-7lJbw_Sk?usp=share_link">' +
        '<button class="bt-msj" >Ver Fotos <i class="fa-solid fa-image blu"></i></button></a>' +
          //CARPETA lhuis
        '<a href="https://drive.google.com/drive/folders/1JnHhs6NElfP0Vrx0B2rOAjhAU_EBPWct?usp=share_link" >' + 
        '<button class="bt-msj" >Fotos con lhuis<i class="fa-solid fa-image blu"></i></button></a>',
           /* 
        //CARPETA video
        '<a href="https://drive.google.com/drive/folders/1190kgr-TePxfo_klEKpKZhvM7JOIg20x?usp=share_link" >' + 
        '<button class="bt-msj" >Ver Videos<i class="fa-solid fa-video blu"></i></button></a>'+
        //CARPETA 1 
        '<a href="lapp7">' +
        '<button class="bt-msj" >Ver Fotos <i class="fa-solid fa-image blu"></i></button></a>' +
        //CARPETA 2
        '<a href="lapp8">' +
        '<button class="bt-msj" >Ver Fotos <i class="fa-solid fa-image blu"></i></button></a>' +
        //CARPETA 3
        '<a href="lapp9">' +
        '<button class="bt-msj" >Ver Fotos <i class="fa-solid fa-image blu"></i></button></a>' +
        //CARPETA 4
        '<a href="lapp10">' +
        '<button class="bt-msj" >Ver Fotos <i class="fa-solid fa-image blu"></i></button></a>',
        */

        imageWidth: 400,
        imageHeight: 500,
        //cerrar
        padding: '1rem',
        showCloseButton: true,
        showConfirmButton: false,
        background: '#0e0e0e',
        //ajustes
        showCloseButton: true,
        timerProgressBar: true,
        timerProgressBar: true,
    })
}
//DESCARGAR TODO
function modal_08() {
    Swal.fire({
        html: '<div class="mensaje-2">' +
            '<h3 class="bm-4">Black Momets</h3>' +
            '<p class="bm-2-pp">Tamaño de Descarga, <b>5GB De Fotos (JPG Y RAW)</b>, atravez de  mediafire... Archivo rar </p>' +
          
            // jpg
            '<a href="https://drive.google.com/drive/folders/1FXMklHpIcl1wpwN4C7ggdOWTfDtNxQuM?usp=share_link" target="_blank">'+
            '<button onclick="modal_008();" class="bt-msj" style="background-color: rgb(0, 38, 255); color: #fff;" >Descargar jpg<i class="fa-solid fa-download blu"></i></button></a>' +
             /*
            // jpg 1
            '<a href="lapp11" target="_blank">'+
            '<button onclick="modal_008();" class="bt-msj" style="background-color: rgb(0, 38, 255); color: #fff;" >Descargar jpg<i class="fa-solid fa-download blu"></i></button></a>' +
            // jpg 2
            '<a href="lapp12" target="_blank">'+
            '<button onclick="modal_008();" class="bt-msj" style="background-color: rgb(0, 38, 255); color: #fff;" >Descargar jpg<i class="fa-solid fa-download blu"></i></button></a>' +
            // jpg 3
            '<a href="lapp13" target="_blank">'+
            '<button onclick="modal_008();" class="bt-msj" style="background-color: rgb(0, 38, 255); color: #fff;" >Descargar jpg<i class="fa-solid fa-download blu"></i></button></a>' +
            // jpg 4
            '<a href="lapp14" target="_blank">'+
            '<button onclick="modal_008();" class="bt-msj" style="background-color: rgb(0, 38, 255); color: #fff;" >Descargar jpg<i class="fa-solid fa-download blu"></i></button></a>' +
            // jpg 5
            '<a href="lapp15" target="_blank">'+
            '<button onclick="modal_008();" class="bt-msj" style="background-color: rgb(0, 38, 255); color: #fff;" >Descargar jpg<i class="fa-solid fa-download blu"></i></button></a>' +
            */
            
            // Raw
            '<a href="https://drive.google.com/drive/folders/1kT2C1hl58_SGCXdg_Q-1hV5G3f5RJ0q_?usp=share_link" target="_blank">'+
            '<button class="bt-msj" style="background-color: rgb(225, 0, 255); color: #fff;" > Descargar cr2<i class="fa-solid fa-download blu"></i></button></a>',   
            /*
             // Raw 1
            '<a href="lapp16" target="_blank">'+
            '<button class="bt-msj" style="background-color: rgb(225, 0, 255); color: #fff;" > Descargar cr2<i class="fa-solid fa-download blu"></i></button></a>',           
             // Raw 2
            '<a href="lapp17" target="_blank">'+
            '<button class="bt-msj" style="background-color: rgb(225, 0, 255); color: #fff;" > Descargar cr2<i class="fa-solid fa-download blu"></i></button></a>',           
             // Raw 3
            '<a href="lapp18" target="_blank">'+
            '<button class="bt-msj" style="background-color: rgb(225, 0, 255); color: #fff;" > Descargar cr2<i class="fa-solid fa-download blu"></i></button></a>',           
             // Raw 4
            '<a href="lapp19" target="_blank">'+
            '<button class="bt-msj" style="background-color: rgb(225, 0, 255); color: #fff;" > Descargar cr2<i class="fa-solid fa-download blu"></i></button></a>',           
             // Raw 5
            '<a href="lapp20" target="_blank">'+
            '<button class="bt-msj" style="background-color: rgb(225, 0, 255); color: #fff;" > Descargar cr2<i class="fa-solid fa-download blu"></i></button></a>',           
            */
        imageWidth: 400,
        imageHeight: 500,
        //cerrars
        padding: '1rem',
        showCloseButton: true,
        showConfirmButton: false,
        background: '#0e0e0e',
        //ajustes
        showCloseButton: true,
        timerProgressBar: true,
        timerProgressBar: true,
    })
}
//MSJ DE INGRESO Y FOTO LISTA
Swal.fire({
   
    html: '<div class="mensaje">' +
        '<h3 class="bm-4">Black Momets</h3>' +
        '<p class="bm-2-pp">Disfruta de tus fotos, Saludos.. 😊🔥</p>' +
        '</div>'+
        '</div>',
    //cerrar
    padding: '1rem',
    showCloseButton: true,
    showConfirmButton: false,
    background: '#0a0a0a',
    //ajustes
    showCloseButton: true,
    timer: '4000',
    timerProgressBar: true,
    customClass: {
        actions: 'content',
    }
})
//COMPARTIR POR WSPP
const evento = document.getElementById('send')
const enviarFormulario = () => {

    let numero = document.getElementById('numero').value;


    var win = window.open(`https://wa.me/54${numero}?text=Mis Fotos App Web:%20https://bit.ly/3CSEKFO%0APara que el enlace se active me tienes que ajenar`, '_blank');

}
//SIN AJENDAR 
evento.addEventListener('click', enviarFormulario)
let botonWspp = document.querySelector('#botonWspp');
botonWspp.addEventListener('click', function () {
    location.href = "https://wa.me/?text=https://bit.ly/3CSEKFO"
});

//COMPARTIR SHEAR
const shareBtn = document.getElementById('shareBtn')
shareBtn.addEventListener('click', event => {
    if (navigator.share) {
        //drive
        navigator.share({
            text: 'Instala la App web "Mis fotos": ',
            url: 'https://bit.ly/3CSEKFO'
        }).then(() => {
            console.log('Gracias por compartir mis fotos!');
        })
            .catch((err) => console.error(err));
    } else {

        alert("El navegador actual no admite la función de compartir. Por favor, comparte manualmente el enlace")
    }
});
//NUMERO DE PAGINA "FOTO ?"
function modal_09() {
    Swal.fire({
        html: '<h3 class="bm">agustin modica 8</h3>',
        //tamaño
        imageWidth: 300,
        imageHeight: 300,
        //cerrar
        padding: '1rem',
        showCloseButton: true,
        showConfirmButton: false,
        background: 'linear-gradient(#000,#000)',
        //ajustes
        showCloseButton: true,
        timer: '5000',
        timerProgressBar: true,
        customClass: {
            actions: 'content',
        }
    })
}
// Foto lhuis ruiz
function modal_05() {
    Swal.fire({
        html: '<h3 class="bm-4" onclick="modal_09();">Black Momets</h3>' +
            '<p class = "bm-2-pp">Fotos al mejor precio. 🔥📷 </p>',
        imageUrl: 'https://res.cloudinary.com/lhuis/image/upload/v1666754485/iconos/fkppmxoe9qs9xhggmzcc.png',
        //tamaño
        imageWidth: 300,
        imageHeight: 300,
        //cerrar
        padding: '1rem', 
        showCloseButton: true,
        showConfirmButton: false,
        background: 'linear-gradient(#000,#000)',

    })
}
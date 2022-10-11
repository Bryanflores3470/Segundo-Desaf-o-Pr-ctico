var peliculas = {
    "Peliculas": [
        //imagen de primera pelicula
    {"imagen" :"img/Mi-Dulce-Monstruo.JPG",
    "Titulo": "Mi Dulce Moustro",
    "Clasificacion" : "A",
    "Duracion" : "100 minutos",
    "Formato" : "2D",
    "Butacas" : "Tradicionales",
    "Horarios" : "9:00 AM, 11:00 AM, 1:00 PM"},
    //imagen segunda pelicula
    {"imagen" : "img/Avatar.JPG",
    "Titulo": "Avatar",
    "Clasificacion" : "B",
    "Duracion" : "165 minutos",
    "Formato" : "Real D 3D",
    "Butacas" : "Tradicionales",
    "Horarios" : "9:00 AM, 1:00 PM, 3:00 PM"},
    //imagen de tercera pelicula
    {"imagen" : "img/ironman3-.JPG",
    "Titulo": "Ironman 3",
    "Clasificacion" : "C",
    "Duracion" : "2h 10minutos",
    "Formato" : "3D",
    "Butacas" : "Tradicionales",
    "Horarios" : "9:00 AM,  1:00 PM, 5:00 PM"},
     //imagen de cuarta pelicula
     {"imagen" : "img/smile.JPG",
     "Titulo": "Sonrie",
     "Clasificacion" : "C",
     "Duracion" : "1h 55minutos",
     "Formato" : "2D",
     "Butacas" : "Tradicionales",
     "Horarios" : "9:00 AM,  1:00 PM, 5:00 PM"}
    ]
};


var div = document.getElementById("datos");
div.innerHTML = crearPeliculas(peliculas.Peliculas);
function crearPeliculas(datos) {
    var total = datos.length;
    data = "<div class='row'>"; 
    for (var i=0; i<total; i++) {
        data += "<div class='card col-2' >";
        data += "<img src=" + datos[i].imagen + " alt='Card image cap' >";
        data += '</div>'
        data += "<div id='card' class='card-body'>";
        data += '<h4 class="card-title"> ' + datos[i].Titulo + '<br>' + '</h4>' ;
        data += "Clasficacion: " + datos[i].Clasificacion + ". " + 'Duracion: ' + datos[i].Duracion + ". ";
        data += "<div class='card col-5' >";
        data += 'Formato: ' + datos[i].Formato + " | ";
        data += "Butacas: " + datos[i].Butacas + '<hr>';
        data += 'Horarios: ' + datos[i].Horarios + '</p>' + '<br>' + '<br>';
        data += '</div>'
        data += '</div>'  
    }
    data += '</div>'
    return data;
}
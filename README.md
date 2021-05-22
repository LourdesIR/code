# Challenge MD Digital Solutions Mayo 22 2021

## Consigna R2

### "Crear una web R2.html, y maquetar la tabla de datos de ejemplo, responsive mobile, tablet y web, y debe cumplicar, con las siguientes caracteristicas de diseño web, en este ejemplo solo utilizar html y css."

https://github.com/LourdesIR/code/blob/main/R2/r2.html

**Construccion de tabla**

Se utilizo `<Table>` como base de diseño cargando los datos manualmente `(ya que en la consigna 4 se haria mediante api)` y luego se procedio a hacer el responsive.

Se utilizaron 2 formatos:

- Para valores de width menores que 768px se opto por un formato individual de las filas `(row)` de las tablas.

En dicho caso se utilizo `data-columns` para presentar los datos de la columnas.

Se Utilizo `display` flex para posicionar los elementos correctamente.

- Para valores de width mayores que 768px y orientation landscapese se opto por un formato tradicional.

Se utilizo display `Table-row` y se elimino `data-columns`

## Consigna R3

### "Crear una web R3.html, y maquetar el diseño suministrado. Al dar click en el play reproducir un video en un modal. Las fotografias y video, a consideracion del candidato. Se evaluara Metatagas, Favicon, Codificacion (html, css yjavascript), y responsive."

**Construccion del Maqueteado**

Se construyo una grilla para generar la version movil y descktop.

Para las imagenes se construyo una funcion Random que llamaba a una url generadoras de imagenes según tamaño tambien Random. Se utilizo:

```
function getRandomInt(min, max) {
        return Math.round(Math.random() * (max - min)) + min;
      }

      const image = document.querySelectorAll('.picture');
      image.forEach((el) => {
        let num1 = getRandomInt(1000,1300);
        let num2 = getRandomInt(700,1000);
        const urlEl = `https://source.unsplash.com/user/erondu/${num1}x${num2}`;
        el.style.backgroundImage = `url("${urlEl}")`;
    });

```

Para el modal se utilizo

- Un contenedor div `.modalNone`.
- Los iconos para llamar el video para el video `.play`
- Un Iframe

```
const play = document.querySelectorAll('.play');
const modal = document.querySelector('.modalNone');
const videoFram = document.querySelector('iframe');

```

Se construyo un objeto dentro del script con url estaticas y verificadas.

Quedando el siguiente codigo

```
 const video = {
        play0 : "https://www.youtube.com/embed/V1RPi2MYptM",
        play1 : "https://www.youtube.com/embed/BBjjTeAl9bs",
        play2 : "https://www.youtube.com/embed/LepMmRUdlxo",
        play3 : "https://www.youtube.com/embed/OuHETYCIrPU  ",
        play4 : "https://www.youtube.com/embed/MTiRmTi41TU",
        play5 : "https://www.youtube.com/embed/VqQv5g1WslA",
     };
```

Y se procedio a mapear los iconos de play, conociendo asi tambien su indice. Y de esta manera se logro "escuchar" individualmente los botones con `addEventListener`. Se modifico entonces el atributo src del elemento seleccionado. y se hizo visible el modal.

```
    play.forEach((element,index) => {
        element.addEventListener('click', function(){

            try {
            //see modal
            let videoName = video[`play${index}`];
            videoFram.setAttribute('src',`${videoName}`);
            modal.className = "modalVisible";

            } catch (e) {
                // mensagge error
                console.warn('Problems in the modal script', e);
            }

        })
    });

´´´

Se procedio a realizar el boton cerrar que solo es visible dentro del modal.

```
     const btnCerrar = document.getElementById('close')

     btnCerrar.addEventListener('click', function(){
         modal.className = "modalNone";//class change
         videoFram.setAttribute('src',' '); //empty video
     })

´´´

## Consigna R4

### "Crear una pagina R4.html, y consumir un servicio gratuito de datos (Rest Api - GET), para listar informacion, en unatabla con diseño similiar a la solicitada en R2.Referencia REST API: https://weatherstack.com/productReferencia REST API: https://mediastack.com/product"

__Construccion de la Tabla mediante Api__

Se  utlizo fetch llamando al json dado de referencia
http://api.mediastack.com/v1/news?access_key=b64d513d53cf37a292b62275ff101fcc

Se utilizo la misma tabla que en la solucion R2

Para ello los datos obtenidos fueron incluidos en la tabla mediante Append creando anteriormente un elemento tr o fila para su posterior insercion de datos en ella.


```
fetch('http://api.mediastack.com/v1/news?access_key=b64d513d53cf37a292b62275ff101fcc')
.then(res=> res.json())
.then(json =>
{
const films = json.data;

     //  return peliculas;
     films.map(el => {

       const title = el.title;
       const category = el.category;
       const url = el.url;
       const publish = el.published_at;

       const data = document.getElementById('data');
       let tr = document.createElement("tr")
       data.append(tr)
       tr.innerHTML = `<td class="tdPrimary">${title} <span  class="icon"><i class="fas fa-chevron-circle-down"></i></span></td><td data-column="Category">${category}</td><td data-column="Url">${url}</td><td data-column="Date">${publish} </td>`;

})
})
´´´

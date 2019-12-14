var temporal='-'; //valor temporal para ir cambiando los que sean iguales
var aleatorio = 0;
var ruta0 = '-';  //ruta del scr para cambiar en el dropp
var ruta1 = '-';  //ruta del scr para cambiar en el dropp
var ruta2 = '-';  //ruta del scr para cambiar en el dropp
var ruta3 = '-';  //ruta del scr para cambiar en el dropp
var ruta4 = '-';  //ruta del scr para cambiar en el dropp
var ruta5 = '-';  //ruta del scr para cambiar en el dropp
var movimiento = 0;
var celdasIguales=new Array(); //un arreglo de 49 posiciones
var k=0;
var flasheo = 0; // animación prende y apaga celdas iguales
setInterval(timer1, 1000); // intervalo de 1 segundo para flashear el título del juego
var segundos = 0;
var minutos = 2;
var correrTimer = false; // cuando inicio cambia a true y empieza a disminuir el tiempo

setInterval(titulo, 250); // intervalo de 1 segundo para flashear el título del juego
setInterval(animacionCeldasIguales, 200); // intervalo de 1 segundo para flashear el título del juego
var bloquearPorAnimacion = false;  // variable para bloquear mientras sale de animación
var detenerflasheo = false; // detiene el flasheo para cambiar los dulces
var revisionfilas = 0; // variable revision de filas rutina de reemplazoCeldasIguales
var movimiento = 0; //registra el número de movimientos
var puntos = 0; //puntuación 10 por cada celda igual




$(document).ready(function(){
  llenado(); //llena de forma aleatoria  el tablero de dulces
  revisionLLenado(); // revisa que no haya ninguna ningún trio armado si lo reasigna los dulces


 if (bloquearPorAnimacion==false){
  $('.dulce10').hover(function()
  { ruta = $('.col-1').children()[0].src.substr(-11,11); activarDroppables('dulce10',ruta) });
  $('.dulce11').hover(function()
  { ruta = $('.col-1').children()[1].src.substr(-11,11); activarDroppables('dulce11',ruta)});
  $('.dulce12').hover(function()
  { ruta = $('.col-1').children()[2].src.substr(-11,11); activarDroppables('dulce12',ruta)});
  $('.dulce13').hover(function()
  { ruta = $('.col-1').children()[3].src.substr(-11,11); activarDroppables('dulce13',ruta)});
  $('.dulce14').hover(function()
  { ruta = $('.col-1').children()[4].src.substr(-11,11); activarDroppables('dulce14',ruta)});
  $('.dulce15').hover(function()
  { ruta = $('.col-1').children()[5].src.substr(-11,11); activarDroppables('dulce15',ruta)});
  $('.dulce16').hover(function()
  { ruta = $('.col-1').children()[6].src.substr(-11,11); activarDroppables('dulce16',ruta)});

  $('.dulce20').hover(function()
  { ruta = $('.col-2').children()[0].src.substr(-11,11); activarDroppables('dulce20',ruta) });
  $('.dulce21').hover(function()
  { ruta = $('.col-2').children()[1].src.substr(-11,11); activarDroppables('dulce21',ruta)});
  $('.dulce22').hover(function()
  { ruta = $('.col-2').children()[2].src.substr(-11,11); activarDroppables('dulce22',ruta)});
  $('.dulce23').hover(function()
  { ruta = $('.col-2').children()[3].src.substr(-11,11); activarDroppables('dulce23',ruta)});
  $('.dulce24').hover(function()
  { ruta = $('.col-2').children()[4].src.substr(-11,11); activarDroppables('dulce24',ruta)});
  $('.dulce25').hover(function()
  { ruta = $('.col-2').children()[5].src.substr(-11,11); activarDroppables('dulce25',ruta)});
  $('.dulce26').hover(function()
  { ruta = $('.col-2').children()[6].src.substr(-11,11); activarDroppables('dulce26',ruta)});

  $('.dulce30').hover(function()
  { ruta = $('.col-3').children()[0].src.substr(-11,11); activarDroppables('dulce30',ruta) });
  $('.dulce31').hover(function()
  { ruta = $('.col-3').children()[1].src.substr(-11,11); activarDroppables('dulce31',ruta)});
  $('.dulce32').hover(function()
  { ruta = $('.col-3').children()[2].src.substr(-11,11); activarDroppables('dulce32',ruta)});
  $('.dulce33').hover(function()
  { ruta = $('.col-3').children()[3].src.substr(-11,11); activarDroppables('dulce33',ruta)});
  $('.dulce34').hover(function()
  { ruta = $('.col-3').children()[4].src.substr(-11,11); activarDroppables('dulce34',ruta)});
  $('.dulce35').hover(function()
  { ruta = $('.col-3').children()[5].src.substr(-11,11); activarDroppables('dulce35',ruta)});
  $('.dulce36').hover(function()
  { ruta = $('.col-3').children()[6].src.substr(-11,11); activarDroppables('dulce36',ruta)});

  $('.dulce40').hover(function()
  { ruta = $('.col-4').children()[0].src.substr(-11,11); activarDroppables('dulce40',ruta) });
  $('.dulce41').hover(function()
  { ruta = $('.col-4').children()[1].src.substr(-11,11); activarDroppables('dulce41',ruta)});
  $('.dulce42').hover(function()
  { ruta = $('.col-4').children()[2].src.substr(-11,11); activarDroppables('dulce42',ruta)});
  $('.dulce43').hover(function()
  { ruta = $('.col-4').children()[3].src.substr(-11,11); activarDroppables('dulce43',ruta)});
  $('.dulce44').hover(function()
  { ruta = $('.col-4').children()[4].src.substr(-11,11); activarDroppables('dulce44',ruta)});
  $('.dulce45').hover(function()
  { ruta = $('.col-4').children()[5].src.substr(-11,11); activarDroppables('dulce45',ruta)});
  $('.dulce46').hover(function()
  { ruta = $('.col-4').children()[6].src.substr(-11,11); activarDroppables('dulce46',ruta)});

  $('.dulce50').hover(function()
  { ruta = $('.col-5').children()[0].src.substr(-11,11); activarDroppables('dulce50',ruta) });
  $('.dulce51').hover(function()
  { ruta = $('.col-5').children()[1].src.substr(-11,11); activarDroppables('dulce51',ruta)});
  $('.dulce52').hover(function()
  { ruta = $('.col-5').children()[2].src.substr(-11,11); activarDroppables('dulce52',ruta)});
  $('.dulce53').hover(function()
  { ruta = $('.col-5').children()[3].src.substr(-11,11); activarDroppables('dulce53',ruta)});
  $('.dulce54').hover(function()
  { ruta = $('.col-5').children()[4].src.substr(-11,11); activarDroppables('dulce54',ruta)});
  $('.dulce55').hover(function()
  { ruta = $('.col-5').children()[5].src.substr(-11,11); activarDroppables('dulce55',ruta)});
  $('.dulce56').hover(function()
  { ruta = $('.col-5').children()[6].src.substr(-11,11); activarDroppables('dulce56',ruta)});

  $('.dulce60').hover(function()
  { ruta = $('.col-6').children()[0].src.substr(-11,11); activarDroppables('dulce60',ruta) });
  $('.dulce61').hover(function()
  { ruta = $('.col-6').children()[1].src.substr(-11,11); activarDroppables('dulce61',ruta)});
  $('.dulce62').hover(function()
  { ruta = $('.col-6').children()[2].src.substr(-11,11); activarDroppables('dulce62',ruta)});
  $('.dulce63').hover(function()
  { ruta = $('.col-6').children()[3].src.substr(-11,11); activarDroppables('dulce63',ruta)});
  $('.dulce64').hover(function()
  { ruta = $('.col-6').children()[4].src.substr(-11,11); activarDroppables('dulce64',ruta)});
  $('.dulce65').hover(function()
  { ruta = $('.col-6').children()[5].src.substr(-11,11); activarDroppables('dulce65',ruta)});
  $('.dulce66').hover(function()
  { ruta = $('.col-6').children()[6].src.substr(-11,11); activarDroppables('dulce66',ruta)});

  $('.dulce70').hover(function()
  { ruta = $('.col-7').children()[0].src.substr(-11,11); activarDroppables('dulce70',ruta) });
  $('.dulce71').hover(function()
  { ruta = $('.col-7').children()[1].src.substr(-11,11); activarDroppables('dulce71',ruta)});
  $('.dulce72').hover(function()
  { ruta = $('.col-7').children()[2].src.substr(-11,11); activarDroppables('dulce72',ruta)});
  $('.dulce73').hover(function()
  { ruta = $('.col-7').children()[3].src.substr(-11,11); activarDroppables('dulce73',ruta)});
  $('.dulce74').hover(function()
  { ruta = $('.col-7').children()[4].src.substr(-11,11); activarDroppables('dulce74',ruta)});
  $('.dulce75').hover(function()
  { ruta = $('.col-7').children()[5].src.substr(-11,11); activarDroppables('dulce75',ruta)});
  $('.dulce76').hover(function()
  { ruta = $('.col-7').children()[6].src.substr(-11,11); activarDroppables('dulce76',ruta)});
}
})//FIN READY


$('.btn-reinicio').click(function(){
  var textoBoton = $('.btn-reinicio').html(); //leer el texto del boton para ver si esta en inicio o reinicio

  if (textoBoton=='Iniciar'){
      $('.btn-reinicio').html('reiniciar');
      activarArrastre(); // función que activará todos los dulces para poderlos arrastrar
      correrTimer = true;
    }
    else
    {
      location.reload();
    }

});


function reemplazoCeldasIguales(){
//console.log('el flahseo antes de reemplazoCeldasIguales es: '+flasheo);
if (flasheo == 7){
  detenerflasheo=true; // para detener el flasheo en la animacionCeldasIguales

  if (revisionfilas==0)
  {
    for (i=10; i<=70; i+=10 )
    {
    if (celdasIguales[i]==1)
    {
        ruta0 = $('.col-'+parseInt(i/10)).children()[0].src.substr(-11,11);
        aleatorio = parseInt(getRandomArbitrary(1, 5));
        $('.col-'+parseInt(i/10)).children()[0].src= "image/"+aleatorio+".png";

        $($(".col-"+parseInt(i/10)).children()[0]).animate({top: '-=95px'},1) //se devuelve en 1ms

        $($(".col-"+parseInt(i/10)).children()[0]).animate({top: '+=95px'},200) //se devuelve en 1ms
        celdasIguales[i]=0; // reseteamos esa celda
        puntos = puntos + 10;
        $('#score-text').html(puntos);

      //console.log('i= '+i);
      console.log('Cambio imagen Fila 0'+aleatorio);
    }
    }
    }

    if (revisionfilas==1)
    {
      for (i=11; i<=71; i+=10 )
      {
        if (celdasIguales[i]==1)
        {
          ruta1 = $('.col-'+parseInt(i/10)).children()[1].src.substr(-11,11);
          ruta0 = $('.col-'+parseInt(i/10)).children()[0].src.substr(-11,11);
          aleatorio = parseInt(getRandomArbitrary(1, 5));
          $('.col-'+parseInt(i/10)).children()[0].src= "image/"+aleatorio+".png";
          $('.col-'+parseInt(i/10)).children()[1].src=ruta0;// lo que estaba una fila arriba lo colocamos abajo

          $($(".col-"+parseInt(i/10)).children()[0]).animate({top: '-=95px'},1) //se devuelve en 1ms
          $($(".col-"+parseInt(i/10)).children()[1]).animate({top: '-=95px'},1) // se devuelve en 1 ms

          $($(".col-"+parseInt(i/10)).children()[0]).animate({top: '+=95px'},200) //se devuelve en 1ms
          $($(".col-"+parseInt(i/10)).children()[1]).animate({top: '+=95px'},200) // se devuelve en 1 ms
          celdasIguales[i]=0; // reseteamos esa celda
          puntos = puntos + 10;
          $('#score-text').html(puntos);


        //  //console.log('revisadaFila 1');

        }
      }
      }

      if (revisionfilas==2)
      {
        for (i=12; i<=72; i+=10 )
        {
          if (celdasIguales[i]==1)
          {
            ruta2 = $('.col-'+parseInt(i/10)).children()[2].src.substr(-11,11);
            ruta1 = $('.col-'+parseInt(i/10)).children()[1].src.substr(-11,11);
            ruta0 = $('.col-'+parseInt(i/10)).children()[0].src.substr(-11,11);
            aleatorio = parseInt(getRandomArbitrary(1, 5));
            $('.col-'+parseInt(i/10)).children()[0].src= "image/"+aleatorio+".png";
            $('.col-'+parseInt(i/10)).children()[1].src=ruta0;// lo que estaba una fila arriba lo colocamos abajo
            $('.col-'+parseInt(i/10)).children()[2].src=ruta1;// lo que estaba una fila arriba lo colocamos abajo

            $($(".col-"+parseInt(i/10)).children()[0]).animate({top: '-=95px'},1) //se devuelve en 1ms
            $($(".col-"+parseInt(i/10)).children()[1]).animate({top: '-=95px'},1) // se devuelve en 1 ms
            $($(".col-"+parseInt(i/10)).children()[2]).animate({top: '-=95px'},1) // se devuelve en 1 ms

            $($(".col-"+parseInt(i/10)).children()[0]).animate({top: '+=95px'},200) //se devuelve en 1ms
            $($(".col-"+parseInt(i/10)).children()[1]).animate({top: '+=95px'},200) // se devuelve en 1 ms
            $($(".col-"+parseInt(i/10)).children()[2]).animate({top: '+=95px'},200) // se devuelve en 1 ms


            celdasIguales[i]=0; // reseteamos esa celda
            puntos = puntos + 10;
            $('#score-text').html(puntos);

        //  //console.log('revisadaFila 2');

          }
        }
        }

        if (revisionfilas==3)
        {
          for (i=13; i<=73; i+=10 )
          {
            if (celdasIguales[i]==1)
            {

              ruta3 = $('.col-'+parseInt(i/10)).children()[3].src.substr(-11,11);
              ruta2 = $('.col-'+parseInt(i/10)).children()[2].src.substr(-11,11);
              ruta1 = $('.col-'+parseInt(i/10)).children()[1].src.substr(-11,11);
              ruta0 = $('.col-'+parseInt(i/10)).children()[0].src.substr(-11,11);
              aleatorio = parseInt(getRandomArbitrary(1, 5));
              $('.col-'+parseInt(i/10)).children()[0].src= "image/"+aleatorio+".png";
              $('.col-'+parseInt(i/10)).children()[1].src=ruta0;// lo que estaba una fila arriba lo colocamos abajo
              $('.col-'+parseInt(i/10)).children()[2].src=ruta1;// lo que estaba una fila arriba lo colocamos abajo
              $('.col-'+parseInt(i/10)).children()[3].src=ruta2;// lo que estaba una fila arriba lo colocamos abajo

              $($(".col-"+parseInt(i/10)).children()[0]).animate({top: '-=95px'},1) //se devuelve en 1ms
              $($(".col-"+parseInt(i/10)).children()[1]).animate({top: '-=95px'},1) // se devuelve en 1 ms
              $($(".col-"+parseInt(i/10)).children()[2]).animate({top: '-=95px'},1) // se devuelve en 1 ms
              $($(".col-"+parseInt(i/10)).children()[3]).animate({top: '-=95px'},1) //se devuelve en 1ms

              $($(".col-"+parseInt(i/10)).children()[0]).animate({top: '+=95px'},200) //se devuelve en 1ms
              $($(".col-"+parseInt(i/10)).children()[1]).animate({top: '+=95px'},200) // se devuelve en 1 ms
              $($(".col-"+parseInt(i/10)).children()[2]).animate({top: '+=95px'},200) // se devuelve en 1 ms
              $($(".col-"+parseInt(i/10)).children()[3]).animate({top: '+=95px'},200) //se devuelve en 1ms
                  celdasIguales[i]=0; // reseteamos esa celda
                  puntos = puntos + 10;
                  $('#score-text').html=puntos;

            //console.log('revisadaFila 3');

            }
          }
          }


          if (revisionfilas==4)
          {
            for (i=14; i<=74; i+=10 )
            {
              if (celdasIguales[i]==1)
              {
                ruta4 = $('.col-'+parseInt(i/10)).children()[4].src.substr(-11,11);
                ruta3 = $('.col-'+parseInt(i/10)).children()[3].src.substr(-11,11);
                ruta2 = $('.col-'+parseInt(i/10)).children()[2].src.substr(-11,11);
                ruta1 = $('.col-'+parseInt(i/10)).children()[1].src.substr(-11,11);
                ruta0 = $('.col-'+parseInt(i/10)).children()[0].src.substr(-11,11);
                aleatorio = parseInt(getRandomArbitrary(1, 5));
                $('.col-'+parseInt(i/10)).children()[0].src= "image/"+aleatorio+".png";
                $('.col-'+parseInt(i/10)).children()[1].src=ruta0;// lo que estaba una fila arriba lo colocamos abajo
                $('.col-'+parseInt(i/10)).children()[2].src=ruta1;// lo que estaba una fila arriba lo colocamos abajo
                $('.col-'+parseInt(i/10)).children()[3].src=ruta2;// lo que estaba una fila arriba lo colocamos abajo
                $('.col-'+parseInt(i/10)).children()[4].src=ruta3;// lo que estaba una fila arriba lo colocamos abajo

                $($(".col-"+parseInt(i/10)).children()[0]).animate({top: '-=95px'},1) //se devuelve en 1ms
                $($(".col-"+parseInt(i/10)).children()[1]).animate({top: '-=95px'},1) // se devuelve en 1 ms
                $($(".col-"+parseInt(i/10)).children()[2]).animate({top: '-=95px'},1) // se devuelve en 1 ms
                $($(".col-"+parseInt(i/10)).children()[3]).animate({top: '-=95px'},1) //se devuelve en 1ms
                $($(".col-"+parseInt(i/10)).children()[4]).animate({top: '-=95px'},1) // se devuelve en 1 ms

                $($(".col-"+parseInt(i/10)).children()[0]).animate({top: '+=95px'},200) //se devuelve en 1ms
                $($(".col-"+parseInt(i/10)).children()[1]).animate({top: '+=95px'},200) // se devuelve en 1 ms
                $($(".col-"+parseInt(i/10)).children()[2]).animate({top: '+=95px'},200) // se devuelve en 1 ms
                $($(".col-"+parseInt(i/10)).children()[3]).animate({top: '+=95px'},200) //se devuelve en 1ms
                $($(".col-"+parseInt(i/10)).children()[4]).animate({top: '+=95px'},200) // se devuelve en 1 ms
                celdasIguales[i]=0; // reseteamos esa celda
                puntos = puntos + 10;
                $('#score-text').html(puntos);

              ////console.log('revisadaFila 4');

              }
            }
            }


            if (revisionfilas==5)
            {
              for (i=15; i<=75; i+=10 )
              {
                if (celdasIguales[i]==1)
                {

                  ruta5 = $('.col-'+parseInt(i/10)).children()[5].src.substr(-11,11);
                  ruta4 = $('.col-'+parseInt(i/10)).children()[4].src.substr(-11,11);
                  ruta3 = $('.col-'+parseInt(i/10)).children()[3].src.substr(-11,11);
                  ruta2 = $('.col-'+parseInt(i/10)).children()[2].src.substr(-11,11);
                  ruta1 = $('.col-'+parseInt(i/10)).children()[1].src.substr(-11,11);
                  ruta0 = $('.col-'+parseInt(i/10)).children()[0].src.substr(-11,11);
                  aleatorio = parseInt(getRandomArbitrary(1, 5));
                  $('.col-'+parseInt(i/10)).children()[0].src= "image/"+aleatorio+".png";
                  $('.col-'+parseInt(i/10)).children()[1].src=ruta0;// lo que estaba una fila arriba lo colocamos abajo
                  $('.col-'+parseInt(i/10)).children()[2].src=ruta1;// lo que estaba una fila arriba lo colocamos abajo
                  $('.col-'+parseInt(i/10)).children()[3].src=ruta2;// lo que estaba una fila arriba lo colocamos abajo
                  $('.col-'+parseInt(i/10)).children()[4].src=ruta3;// lo que estaba una fila arriba lo colocamos abajo
                  $('.col-'+parseInt(i/10)).children()[5].src=ruta4;// lo que estaba una fila arriba lo colocamos abajo

                  $($(".col-"+parseInt(i/10)).children()[0]).animate({top: '-=95px'},1) //se devuelve en 1ms
                  $($(".col-"+parseInt(i/10)).children()[1]).animate({top: '-=95px'},1) // se devuelve en 1 ms
                  $($(".col-"+parseInt(i/10)).children()[2]).animate({top: '-=95px'},1) // se devuelve en 1 ms
                  $($(".col-"+parseInt(i/10)).children()[3]).animate({top: '-=95px'},1) //se devuelve en 1ms
                  $($(".col-"+parseInt(i/10)).children()[4]).animate({top: '-=95px'},1) // se devuelve en 1 ms
                  $($(".col-"+parseInt(i/10)).children()[5]).animate({top: '-=95px'},1) // se devuelve en 1 ms

                  $($(".col-"+parseInt(i/10)).children()[0]).animate({top: '+=95px'},200) //se devuelve en 1ms
                  $($(".col-"+parseInt(i/10)).children()[1]).animate({top: '+=95px'},200) // se devuelve en 1 ms
                  $($(".col-"+parseInt(i/10)).children()[2]).animate({top: '+=95px'},200) // se devuelve en 1 ms
                  $($(".col-"+parseInt(i/10)).children()[3]).animate({top: '+=95px'},200) //se devuelve en 1ms
                  $($(".col-"+parseInt(i/10)).children()[4]).animate({top: '+=95px'},200) // se devuelve en 1 ms
                  $($(".col-"+parseInt(i/10)).children()[5]).animate({top: '+=95px'},200) // se devuelve en 1 ms
                  celdasIguales[i]=0; // reseteamos esa celda
                  puntos = puntos + 10;
                  $('#score-text').html(puntos);


              //  //console.log('revisadaFila 5');
                }

              }
              }

              if (revisionfilas==6)
              {
                for (i=16; i<=76; i+=10 )
                {
                  if (celdasIguales[i]==1)
                  {
                    ruta6 = $('.col-'+parseInt(i/10)).children()[6].src.substr(-11,11);
                    ruta5 = $('.col-'+parseInt(i/10)).children()[5].src.substr(-11,11);
                    ruta4 = $('.col-'+parseInt(i/10)).children()[4].src.substr(-11,11);
                    ruta3 = $('.col-'+parseInt(i/10)).children()[3].src.substr(-11,11);
                    ruta2 = $('.col-'+parseInt(i/10)).children()[2].src.substr(-11,11);
                    ruta1 = $('.col-'+parseInt(i/10)).children()[1].src.substr(-11,11);
                    ruta0 = $('.col-'+parseInt(i/10)).children()[0].src.substr(-11,11);
                    aleatorio = parseInt(getRandomArbitrary(1, 5));
                    $('.col-'+parseInt(i/10)).children()[0].src= "image/"+aleatorio+".png";
                    $('.col-'+parseInt(i/10)).children()[1].src=ruta0;// lo que estaba una fila arriba lo colocamos abajo
                    $('.col-'+parseInt(i/10)).children()[2].src=ruta1;// lo que estaba una fila arriba lo colocamos abajo
                    $('.col-'+parseInt(i/10)).children()[3].src=ruta2;// lo que estaba una fila arriba lo colocamos abajo
                    $('.col-'+parseInt(i/10)).children()[4].src=ruta3;// lo que estaba una fila arriba lo colocamos abajo
                    $('.col-'+parseInt(i/10)).children()[5].src=ruta4;// lo que estaba una fila arriba lo colocamos abajo
                    $('.col-'+parseInt(i/10)).children()[6].src=ruta5;// lo que estaba una fila arriba lo colocamos abajo



                    $($(".col-"+parseInt(i/10)).children()[0]).animate({top: '-=95px'},1) //se devuelve en 1ms
                    $($(".col-"+parseInt(i/10)).children()[1]).animate({top: '-=95px'},1) // se devuelve en 1 ms
                    $($(".col-"+parseInt(i/10)).children()[2]).animate({top: '-=95px'},1) // se devuelve en 1 ms
                    $($(".col-"+parseInt(i/10)).children()[3]).animate({top: '-=95px'},1) //se devuelve en 1ms
                    $($(".col-"+parseInt(i/10)).children()[4]).animate({top: '-=95px'},1) // se devuelve en 1 ms
                    $($(".col-"+parseInt(i/10)).children()[5]).animate({top: '-=95px'},1) // se devuelve en 1 ms
                    $($(".col-"+parseInt(i/10)).children()[6]).animate({top: '-=95px'},1) //se devuelve en 1ms

                    $($(".col-"+parseInt(i/10)).children()[0]).animate({top: '+=95px'},200) //se devuelve en 1ms
                    $($(".col-"+parseInt(i/10)).children()[1]).animate({top: '+=95px'},200) // se devuelve en 1 ms
                    $($(".col-"+parseInt(i/10)).children()[2]).animate({top: '+=95px'},200) // se devuelve en 1 ms
                    $($(".col-"+parseInt(i/10)).children()[3]).animate({top: '+=95px'},200) //se devuelve en 1ms
                    $($(".col-"+parseInt(i/10)).children()[4]).animate({top: '+=95px'},200) // se devuelve en 1 ms
                    $($(".col-"+parseInt(i/10)).children()[5]).animate({top: '+=95px'},200) // se devuelve en 1 ms
                    $($(".col-"+parseInt(i/10)).children()[6]).animate({top: '+=95px'},200) //se devuelve en 1ms



                  celdasIguales[i]=0; // reseteamos esa celda
                  puntos = puntos + 10;
                  $('#score-text').html(puntos);

                  ////console.log('revisadaFila 6');

                  }

                }
                revisionfilas=-1; //resetea esta variable si ya ha revisado todas las filas
                revisarTablero();  //revisa nuevamente tablero para ver si depués de cambiar los dulces aparecen más combinaciones
              }                   //lo deja en -1 porque en la siguiente linea suma 1, empezando en cero
            revisionfilas++; //después de revisar todos los if, aumenta en uno
            var acomulado=0;  //revisa cuantas celdas iguales quedan para reemplazar
            for(i=0; i<=76; i++)
            {
            acomulado = acomulado+celdasIguales[i];
            }
            //console.log('el acomulado es: '+ acomulado);
            if (acomulado==0)
              {
                detenerflasheo=false; //para que pueda habilitar la animacion Celdas Iguales
                //como no encuentra ningun 1 habilita el flasheo
                flasheo = 0; // reseteamos flasheo
                }
                else {
                  detenerflasheo=true; //para que pueda habilitar la animacion Celdas Iguales
                  }


          }//fin if flasheo == 7

} // fin funcion de reemplazoCeldasIguales

function animacionCeldasIguales()
{
    if (detenerflasheo== false)
    {
      if (flasheo==0)
      {
        for (p=0; p<=76;p++)
        { if (celdasIguales[p]==1)
          {$('.dulce'+p).css('opacity', '1');}
        }
      }

      if (flasheo==1)
      { for (i=0; i<=76;i++)
        { if (celdasIguales[i]==1)
          $('.dulce'+i).css('opacity', '0');
        }
      }

      if (flasheo==2)
      {
        for (i=0; i<=76;i++)
        { if (celdasIguales[i]==1)
          $('.dulce'+i).css('opacity', '1');
        }
      }

      if (flasheo==3)
      {
        for (i=0; i<=76;i++)
        { if (celdasIguales[i]==1)
          $('.dulce'+i).css('opacity', '0');
        }
      }

      if (flasheo==4)
      {
        for (i=0; i<=76;i++)
        { if (celdasIguales[i]==1)
          $('.dulce'+i).css('opacity', '1');
        }
      }

      if (flasheo==5)
      {
        for (i=0; i<=76;i++)
        { if (celdasIguales[i]==1)
          $('.dulce'+i).css('opacity', '0');
        }
      }

      if (flasheo==6)
      {
        for (i=0; i<=76;i++)
        { if (celdasIguales[i]==1)
          $('.dulce'+i).css('opacity', '1');
        }

      }

      flasheo = flasheo + 1;
      //console.log('flasheo es: ' + flasheo);
      }// if detener flasheo
      reemplazoCeldasIguales(); //después del ultimo flasheo se va a reemplazar las celdas Iguales
    }




//function revisarTablero()
function revisarTablero(x1,x2,y1,y2)
  { console.log('entro a revisar tablero: '+x1+x2+y1+y2);
    var temporal='-'; //valor temporal para ir cambiando los que sean iguales
    var aleatorio = 0;

      for (j=0; j<=80; j++)
      {
      celdasIguales[j]=0; // inicializa todo en cero
    }


    for (i=1; i<=7; i++) //se revisa y cambia primero las columnas y luego las filas
    {
      for (j=1; j<=5; j++)
      {
        if ($('.col-'+i).children()[j].src==$('.col-'+i).children()[j-1].src  &&
        $('.col-'+i).children()[j].src==$('.col-'+i).children()[j+1].src)
        {

            //  //console.log($('.col-'+i).children()[j].src.substr(-11,11)); //sustrae los últimos 11 caracteres para compararlos con temporal y hacer la validación
             if ( $('.col-'+i).children()[j].src.substr(-11,11) ==
                  $('.col-'+i).children()[j-1].src.substr(-11,11) ||
                  $('.col-'+i).children()[j].src.substr(-11,11) ==
                  $('.col-'+i).children()[j+1].src.substr(-11,11) )
               {
                  celdasIguales[parseInt(String(i)+ String(j))]=1; // si hay tres iguales marca un 1 en las tres celdas iguales
                  celdasIguales[parseInt(String(i) + String(j-1))]=1;// uno en la fila anterior
                  celdasIguales[parseInt(String(i)+ String(j+1))]=1;// uno en la fila siguiente

                   // la posicion actual  para la anterior hacia arriba y anterior hacia la izquierda
                 }





        }
      }  //for J
    }

    //for i // se terminan de revisar y cambiar las columnas, se procede con las filas
   // se proceden a cambiar las filas
    for (j=0; j<=6; j++) //se revisa y cambia primero las columnas y luego las filas
    {
      for (i=2; i<=6; i++)
      {
        if ($('.col-'+i).children()[j].src==$('.col-'+(i+1)).children()[j].src  &&
        $('.col-'+i).children()[j].src==$('.col-'+(i-1)).children()[j].src)
        {

             if ($('.col-'+i).children()[j].src.substr(-11,11) ==
                 $('.col-'+(i-1)).children()[j].src.substr(-11,11) &&
                 $('.col-'+(i)).children()[j].src.substr(-11,11) ==
                 $('.col-'+(i+1)).children()[j].src.substr(-11,11) )
                 {
                   celdasIguales[parseInt(String(i)+ String(j))]=1; // si hay tres iguales marca un 1 en las tres celdas iguales
                   celdasIguales[parseInt(String(i-1) + String(j))]=1;// uno en la fila anterior
                   celdasIguales[parseInt(String(i+1)+ String(j))]=1;// uno en la fila siguiente

                 }



        }
      }  //for J
    }  //for i se termina de revisar las filas

var celdasTotales=0; //mira cuantas celdas son iguales para empezar animación y bloquear hover sobre celdas
for (i=0; i<=76; i++)
{
  ////console.log('la celda : '+i+'es igual a: '+ celdasIguales[i]);
  celdasTotales=celdasTotales + celdasIguales[i];
}
//animacionCeldasIguales(); //animación de las celdas que son iguales
console.log(celdasTotales);
if (celdasTotales>0)
  {bloquearPorAnimacion=true;}
else {

  bloquearPorAnimacion=false;

  ruta = $('.col-'+x1).children()[x2].src.substr(-11,11);// almacenamos en ruta la imagen de
  y = $('.col-'+y1).children()[y2].src.substr(-11,11);
  $('.col-'+x1).children()[x2].src= y;
  $('.col-'+y1).children()[y2].src= ruta;


  }

} //fin función revision tablero




function activarDroppables(x,y)
{
   if (bloquearPorAnimacion==false){
   switch (x){

    case  'dulce10':
      $('.dulce20').droppable({accept: '.dulce10',
      drop: function(event, ui){$(ui.draggable).css({ width: "100%",  position: "relative",left: "auto", top: "auto" })
      ruta = $('.col-2').children()[0].src.substr(-11,11);// almacenamos en ruta la imagen de
      $('.col-2').children()[0].src= y;
      $('.col-1').children()[0].src= ruta;
      movimiento=movimiento+1; //incrementar un movimiento
      revisarTablero(2,0,1,0); }}); //revisar si hay otro trio, ademas guarda columna e hijo para devolver la jugada en caso de movimiento invalido

      $('.dulce11').droppable({accept: '.dulce10',
      drop: function(event, ui){$(ui.draggable).css({ width: "100%",  position: "relative",left: "auto", top: "auto" })
      ruta = $('.col-1').children()[1].src.substr(-11,11);// almacenamos en ruta la imagen de
      $('.col-1').children()[1].src= y;
      $('.col-1').children()[0].src= ruta;
      movimiento=movimiento+1; //incrementar un movimiento
      revisarTablero(1,1,1,0); }}); //revisar si hay otro trio, ademas guarda columna e hijo para devolver la jugada en caso de movimiento invalido

     break;


     case  'dulce11':
       $('.dulce10').droppable({accept: '.dulce11',
       drop: function(event, ui){$(ui.draggable).css({ width: "100%",  position: "relative",left: "auto", top: "auto" })
       ruta = $('.col-1').children()[0].src.substr(-11,11);// almacenamos en ruta la imagen de
       $('.col-1').children()[0].src= y;
       $('.col-1').children()[1].src= ruta;
       movimiento=movimiento+1; //incrementar un movimiento
       revisarTablero(1,0,1,1); }}); //revisar si hay otro trio, ademas guarda columna e hijo para devolver la jugada en caso de movimiento invalido

       $('.dulce12').droppable({accept: '.dulce11',
       drop: function(event, ui){$(ui.draggable).css({ width: "100%",  position: "relative",left: "auto", top: "auto" })
       ruta = $('.col-1').children()[2].src.substr(-11,11);// almacenamos en ruta la imagen de
       $('.col-1').children()[2].src= y;
       $('.col-1').children()[1].src= ruta;
       movimiento=movimiento+1; //incrementar un movimiento
       revisarTablero(1,2,1,1); }}); //revisar si hay otro trio, ademas guarda columna e hijo para devolver la jugada en caso de movimiento invalido

       $('.dulce21').droppable({accept: '.dulce11',
       drop: function(event, ui){$(ui.draggable).css({ width: "100%",  position: "relative",left: "auto", top: "auto" })
       ruta = $('.col-2').children()[1].src.substr(-11,11);// almacenamos en ruta la imagen de
       $('.col-2').children()[1].src= y;
       $('.col-1').children()[1].src= ruta;
       movimiento=movimiento+1; //incrementar un movimiento
       revisarTablero(2,1,1,1); }}); //revisar si hay otro trio, ademas guarda columna e hijo para devolver la jugada en caso de movimiento invalido

      break;


      case  'dulce12':
        $('.dulce11').droppable({accept: '.dulce12',
        drop: function(event, ui){$(ui.draggable).css({ width: "100%",  position: "relative",left: "auto", top: "auto" })
        ruta = $('.col-1').children()[1].src.substr(-11,11);// almacenamos en ruta la imagen de
        $('.col-1').children()[1].src= y;
        $('.col-1').children()[2].src= ruta;
        movimiento=movimiento+1; //incrementar un movimiento
        revisarTablero(1,1,1,2); }}); //revisar si hay otro trio, ademas guarda columna e hijo para devolver la jugada en caso de movimiento invalido

        $('.dulce13').droppable({accept: '.dulce12',
        drop: function(event, ui){$(ui.draggable).css({ width: "100%",  position: "relative",left: "auto", top: "auto" })
        ruta = $('.col-1').children()[3].src.substr(-11,11);// almacenamos en ruta la imagen de
        $('.col-1').children()[3].src= y;
        $('.col-1').children()[2].src= ruta;
        movimiento=movimiento+1; //incrementar un movimiento
        revisarTablero(1,3,1,2); }}); //revisar si hay otro trio, ademas guarda columna e hijo para devolver la jugada en caso de movimiento invalido

        $('.dulce22').droppable({accept: '.dulce12',
        drop: function(event, ui){$(ui.draggable).css({ width: "100%",  position: "relative",left: "auto", top: "auto" })
        ruta = $('.col-2').children()[2].src.substr(-11,11);// almacenamos en ruta la imagen de
        $('.col-2').children()[2].src= y;
        $('.col-1').children()[2].src= ruta;
        movimiento=movimiento+1; //incrementar un movimiento
        revisarTablero(2,2,1,2); }}); //revisar si hay otro trio, ademas guarda columna e hijo para devolver la jugada en caso de movimiento invalido


       break;


       case  'dulce13':
         $('.dulce12').droppable({accept: '.dulce13',
         drop: function(event, ui){$(ui.draggable).css({ width: "100%",  position: "relative",left: "auto", top: "auto" })
         ruta = $('.col-1').children()[2].src.substr(-11,11);// almacenamos en ruta la imagen de
         $('.col-1').children()[2].src= y;
         $('.col-1').children()[3].src= ruta;
         movimiento=movimiento+1; //incrementar un movimiento
         revisarTablero(1,2,1,3); }}); //revisar si hay otro trio, ademas guarda columna e hijo para devolver la jugada en caso de movimiento invalido

         $('.dulce14').droppable({accept: '.dulce13',
         drop: function(event, ui){$(ui.draggable).css({ width: "100%",  position: "relative",left: "auto", top: "auto" })
         ruta = $('.col-1').children()[4].src.substr(-11,11);// almacenamos en ruta la imagen de
         $('.col-1').children()[4].src= y;
         $('.col-1').children()[3].src= ruta;
         movimiento=movimiento+1; //incrementar un movimiento
         revisarTablero(1,4,1,3); }}); //revisar si hay otro trio, ademas guarda columna e hijo para devolver la jugada en caso de movimiento invalido

         $('.dulce23').droppable({accept: '.dulce13',
         drop: function(event, ui){$(ui.draggable).css({ width: "100%",  position: "relative",left: "auto", top: "auto" })
         ruta = $('.col-2').children()[3].src.substr(-11,11);// almacenamos en ruta la imagen de
         $('.col-2').children()[3].src= y;
         $('.col-1').children()[3].src= ruta;
         movimiento=movimiento+1; //incrementar un movimiento
         revisarTablero(2,3,1,3); }}); //revisar si hay otro trio, ademas guarda columna e hijo para devolver la jugada en caso de movimiento invalido

       break;


        case  'dulce14':
          $('.dulce13').droppable({accept: '.dulce14',
          drop: function(event, ui){$(ui.draggable).css({ width: "100%",  position: "relative",left: "auto", top: "auto" })
          ruta = $('.col-1').children()[3].src.substr(-11,11);// almacenamos en ruta la imagen de
          $('.col-1').children()[3].src= y;
          $('.col-1').children()[4].src= ruta;
          movimiento=movimiento+1; //incrementar un movimiento
          revisarTablero(1,3,1,4); }}); //revisar si hay otro trio, ademas guarda columna e hijo para devolver la jugada en caso de movimiento invalido

          $('.dulce15').droppable({accept: '.dulce14',
          drop: function(event, ui){$(ui.draggable).css({ width: "100%",  position: "relative",left: "auto", top: "auto" })
          ruta = $('.col-1').children()[5].src.substr(-11,11);// almacenamos en ruta la imagen de
          $('.col-1').children()[5].src= y;
          $('.col-1').children()[4].src= ruta;
          movimiento=movimiento+1; //incrementar un movimiento
          revisarTablero(1,5,1,4); }}); //revisar si hay otro trio, ademas guarda columna e hijo para devolver la jugada en caso de movimiento invalido

          $('.dulce24').droppable({accept: '.dulce14',
          drop: function(event, ui){$(ui.draggable).css({ width: "100%",  position: "relative",left: "auto", top: "auto" })
          ruta = $('.col-2').children()[4].src.substr(-11,11);// almacenamos en ruta la imagen de
          $('.col-2').children()[4].src= y;
          $('.col-1').children()[4].src= ruta;
          movimiento=movimiento+1; //incrementar un movimiento
          revisarTablero(2,4,1,4); }}); //revisar si hay otro trio, ademas guarda columna e hijo para devolver la jugada en caso de movimiento invalido

         break;


         case  'dulce15':
           $('.dulce14').droppable({accept: '.dulce15',
           drop: function(event, ui){$(ui.draggable).css({ width: "100%",  position: "relative",left: "auto", top: "auto" })
           ruta = $('.col-1').children()[4].src.substr(-11,11);// almacenamos en ruta la imagen de
           $('.col-1').children()[4].src= y;
           $('.col-1').children()[5].src= ruta;
           movimiento=movimiento+1; //incrementar un movimiento
           revisarTablero(1,4,1,5); }}); //revisar si hay otro trio, ademas guarda columna e hijo para devolver la jugada en caso de movimiento invalido

           $('.dulce16').droppable({accept: '.dulce15',
           drop: function(event, ui){$(ui.draggable).css({ width: "100%",  position: "relative",left: "auto", top: "auto" })
           ruta = $('.col-1').children()[6].src.substr(-11,11);// almacenamos en ruta la imagen de
           $('.col-1').children()[6].src= y;
           $('.col-1').children()[5].src= ruta;
           movimiento=movimiento+1; //incrementar un movimiento
           revisarTablero(1,6,1,5); }}); //revisar si hay otro trio, ademas guarda columna e hijo para devolver la jugada en caso de movimiento invalido

           $('.dulce25').droppable({accept: '.dulce15',
           drop: function(event, ui){$(ui.draggable).css({ width: "100%",  position: "relative",left: "auto", top: "auto" })
           ruta = $('.col-2').children()[5].src.substr(-11,11);// almacenamos en ruta la imagen de
           $('.col-2').children()[5].src= y;
           $('.col-1').children()[5].src= ruta;
           movimiento=movimiento+1; //incrementar un movimiento
           revisarTablero(2,5,1,5); }}); //revisar si hay otro trio, ademas guarda columna e hijo para devolver la jugada en caso de movimiento invalido

          break;

          case  'dulce16':
            $('.dulce15').droppable({accept: '.dulce16',
            drop: function(event, ui){$(ui.draggable).css({ width: "100%",  position: "relative",left: "auto", top: "auto" })
            ruta = $('.col-1').children()[5].src.substr(-11,11);// almacenamos en ruta la imagen de
            $('.col-1').children()[5].src= y;
            $('.col-1').children()[6].src= ruta;
            movimiento=movimiento+1; //incrementar un movimiento
            revisarTablero(1,5,1,6); }}); //revisar si hay otro trio, ademas guarda columna e hijo para devolver la jugada en caso de movimiento invalido


            $('.dulce26').droppable({accept: '.dulce16',
            drop: function(event, ui){$(ui.draggable).css({ width: "100%",  position: "relative",left: "auto", top: "auto" })
            ruta = $('.col-2').children()[6].src.substr(-11,11);// almacenamos en ruta la imagen de
            $('.col-2').children()[6].src= y;
            $('.col-1').children()[6].src= ruta;
            movimiento=movimiento+1; //incrementar un movimiento
            revisarTablero(2,6,1,6); }}); //revisar si hay otro trio, ademas guarda columna e hijo para devolver la jugada en caso de movimiento invalido

           break;





           case  'dulce20':
             $('.dulce30').droppable({accept: '.dulce20',
             drop: function(event, ui){$(ui.draggable).css({ width: "100%",  position: "relative",left: "auto", top: "auto" })
             ruta = $('.col-3').children()[0].src.substr(-11,11);// almacenamos en ruta la imagen de
             $('.col-3').children()[0].src= y;
             $('.col-2').children()[0].src= ruta;
             movimiento=movimiento+1; //incrementar un movimiento
             revisarTablero(3,0,2,0); }}); //revisar si hay otro trio, ademas guarda columna e hijo para devolver la jugada en caso de movimiento invalido

             $('.dulce21').droppable({accept: '.dulce20',
             drop: function(event, ui){$(ui.draggable).css({ width: "100%",  position: "relative",left: "auto", top: "auto" })
             ruta = $('.col-2').children()[1].src.substr(-11,11);// almacenamos en ruta la imagen de
             $('.col-2').children()[1].src= y;
             $('.col-2').children()[0].src= ruta;
             movimiento=movimiento+1; //incrementar un movimiento
             revisarTablero(2,1,2,0); }}); //revisar si hay otro trio, ademas guarda columna e hijo para devolver la jugada en caso de movimiento invalido

             $('.dulce10').droppable({accept: '.dulce20',
             drop: function(event, ui){$(ui.draggable).css({ width: "100%",  position: "relative",left: "auto", top: "auto" })
             ruta = $('.col-1').children()[0].src.substr(-11,11);// almacenamos en ruta la imagen de
             $('.col-1').children()[0].src= y;
             $('.col-2').children()[0].src= ruta;
             movimiento=movimiento+1; //incrementar un movimiento
             revisarTablero(1,0,2,0); }}); //revisar si hay otro trio, ademas guarda columna e hijo para devolver la jugada en caso de movimiento invalido

            break;


            case  'dulce21':
              $('.dulce20').droppable({accept: '.dulce21',
              drop: function(event, ui){$(ui.draggable).css({ width: "100%",  position: "relative",left: "auto", top: "auto" })
              ruta = $('.col-2').children()[0].src.substr(-11,11);// almacenamos en ruta la imagen de
              $('.col-2').children()[0].src= y;
              $('.col-2').children()[1].src= ruta;
              movimiento=movimiento+1; //incrementar un movimiento
              revisarTablero(2,0,2,1); }}); //revisar si hay otro trio, ademas guarda columna e hijo para devolver la jugada en caso de movimiento invalido

              $('.dulce22').droppable({accept: '.dulce21',
              drop: function(event, ui){$(ui.draggable).css({ width: "100%",  position: "relative",left: "auto", top: "auto" })
              ruta = $('.col-2').children()[2].src.substr(-11,11);// almacenamos en ruta la imagen de
              $('.col-2').children()[2].src= y;
              $('.col-2').children()[1].src= ruta;
              movimiento=movimiento+1; //incrementar un movimiento
              revisarTablero(2,2,2,1); }}); //revisar si hay otro trio, ademas guarda columna e hijo para devolver la jugada en caso de movimiento invalido

              $('.dulce31').droppable({accept: '.dulce21',
              drop: function(event, ui){$(ui.draggable).css({ width: "100%",  position: "relative",left: "auto", top: "auto" })
              ruta = $('.col-3').children()[1].src.substr(-11,11);// almacenamos en ruta la imagen de
              $('.col-3').children()[1].src= y;
              $('.col-2').children()[1].src= ruta;
              movimiento=movimiento+1; //incrementar un movimiento
              revisarTablero(3,1,2,1); }}); //revisar si hay otro trio, ademas guarda columna e hijo para devolver la jugada en caso de movimiento invalido

              $('.dulce11').droppable({accept: '.dulce21',
              drop: function(event, ui){$(ui.draggable).css({ width: "100%",  position: "relative",left: "auto", top: "auto" })
              ruta = $('.col-1').children()[1].src.substr(-11,11);// almacenamos en ruta la imagen de
              $('.col-1').children()[1].src= y;
              $('.col-2').children()[1].src= ruta;
              movimiento=movimiento+1; //incrementar un movimiento
              revisarTablero(1,1,2,1); }}); //revisar si hay otro trio, ademas guarda columna e hijo para devolver la jugada en caso de movimiento invalido

             break;


             case  'dulce22':
               $('.dulce21').droppable({accept: '.dulce22',
               drop: function(event, ui){$(ui.draggable).css({ width: "100%",  position: "relative",left: "auto", top: "auto" })
               ruta = $('.col-2').children()[1].src.substr(-11,11);// almacenamos en ruta la imagen de
               $('.col-2').children()[1].src= y;
               $('.col-2').children()[2].src= ruta;
               movimiento=movimiento+1; //incrementar un movimiento
               revisarTablero(2,1,2,2); }}); //revisar si hay otro trio, ademas guarda columna e hijo para devolver la jugada en caso de movimiento invalido

               $('.dulce23').droppable({accept: '.dulce22',
               drop: function(event, ui){$(ui.draggable).css({ width: "100%",  position: "relative",left: "auto", top: "auto" })
               ruta = $('.col-2').children()[3].src.substr(-11,11);// almacenamos en ruta la imagen de
               $('.col-2').children()[3].src= y;
               $('.col-2').children()[2].src= ruta;
               movimiento=movimiento+1; //incrementar un movimiento
               revisarTablero(2,3,2,2); }}); //revisar si hay otro trio, ademas guarda columna e hijo para devolver la jugada en caso de movimiento invalido

               $('.dulce32').droppable({accept: '.dulce22',
               drop: function(event, ui){$(ui.draggable).css({ width: "100%",  position: "relative",left: "auto", top: "auto" })
               ruta = $('.col-3').children()[2].src.substr(-11,11);// almacenamos en ruta la imagen de
               $('.col-3').children()[2].src= y;
               $('.col-2').children()[2].src= ruta;
               movimiento=movimiento+1; //incrementar un movimiento
               revisarTablero(3,2,2,2); }}); //revisar si hay otro trio, ademas guarda columna e hijo para devolver la jugada en caso de movimiento invalido

               $('.dulce12').droppable({accept: '.dulce22',
               drop: function(event, ui){$(ui.draggable).css({ width: "100%",  position: "relative",left: "auto", top: "auto" })
               ruta = $('.col-1').children()[2].src.substr(-11,11);// almacenamos en ruta la imagen de
               $('.col-1').children()[2].src= y;
               $('.col-2').children()[2].src= ruta;
               movimiento=movimiento+1; //incrementar un movimiento
               revisarTablero(1,2,2,2); }}); //revisar si hay otro trio, ademas guarda columna e hijo para devolver la jugada en caso de movimiento invalido

              break;


              case  'dulce23':
                $('.dulce22').droppable({accept: '.dulce23',
                drop: function(event, ui){$(ui.draggable).css({ width: "100%",  position: "relative",left: "auto", top: "auto" })
                ruta = $('.col-2').children()[2].src.substr(-11,11);// almacenamos en ruta la imagen de
                $('.col-2').children()[2].src= y;
                $('.col-2').children()[3].src= ruta;
                movimiento=movimiento+1; //incrementar un movimiento
                revisarTablero(2,2,2,3); }}); //revisar si hay otro trio, ademas guarda columna e hijo para devolver la jugada en caso de movimiento invalido

                $('.dulce24').droppable({accept: '.dulce23',
                drop: function(event, ui){$(ui.draggable).css({ width: "100%",  position: "relative",left: "auto", top: "auto" })
                ruta = $('.col-2').children()[4].src.substr(-11,11);// almacenamos en ruta la imagen de
                $('.col-2').children()[4].src= y;
                $('.col-2').children()[3].src= ruta;
                movimiento=movimiento+1; //incrementar un movimiento
                revisarTablero(2,4,2,3); }}); //revisar si hay otro trio, ademas guarda columna e hijo para devolver la jugada en caso de movimiento invalido

                $('.dulce33').droppable({accept: '.dulce23',
                drop: function(event, ui){$(ui.draggable).css({ width: "100%",  position: "relative",left: "auto", top: "auto" })
                ruta = $('.col-3').children()[3].src.substr(-11,11);// almacenamos en ruta la imagen de
                $('.col-3').children()[3].src= y;
                $('.col-3').children()[3].src= ruta;
                movimiento=movimiento+1; //incrementar un movimiento
                revisarTablero(3,3,2,3); }}); //revisar si hay otro trio, ademas guarda columna e hijo para devolver la jugada en caso de movimiento invalido

                $('.dulce13').droppable({accept: '.dulce23',
                drop: function(event, ui){$(ui.draggable).css({ width: "100%",  position: "relative",left: "auto", top: "auto" })
                ruta = $('.col-1').children()[3].src.substr(-11,11);// almacenamos en ruta la imagen de
                $('.col-1').children()[3].src= y;
                $('.col-2').children()[3].src= ruta;
                movimiento=movimiento+1; //incrementar un movimiento
                revisarTablero(1,3,2,3); }}); //revisar si hay otro trio, ademas guarda columna e hijo para devolver la jugada en caso de movimiento invalido

                break;


               case  'dulce24':
                 $('.dulce23').droppable({accept: '.dulce24',
                 drop: function(event, ui){$(ui.draggable).css({ width: "100%",  position: "relative",left: "auto", top: "auto" })
                 ruta = $('.col-2').children()[3].src.substr(-11,11);// almacenamos en ruta la imagen de
                 $('.col-2').children()[3].src= y;
                 $('.col-2').children()[4].src= ruta;
                 movimiento=movimiento+1; //incrementar un movimiento
                 revisarTablero(2,3,2,4); }}); //revisar si hay otro trio, ademas guarda columna e hijo para devolver la jugada en caso de movimiento invalido

                 $('.dulce25').droppable({accept: '.dulce24',
                 drop: function(event, ui){$(ui.draggable).css({ width: "100%",  position: "relative",left: "auto", top: "auto" })
                 ruta = $('.col-2').children()[5].src.substr(-11,11);// almacenamos en ruta la imagen de
                 $('.col-2').children()[5].src= y;
                 $('.col-2').children()[4].src= ruta;
                 movimiento=movimiento+1; //incrementar un movimiento
                 revisarTablero(2,5,2,4); }}); //revisar si hay otro trio, ademas guarda columna e hijo para devolver la jugada en caso de movimiento invalido

                 $('.dulce34').droppable({accept: '.dulce24',
                 drop: function(event, ui){$(ui.draggable).css({ width: "100%",  position: "relative",left: "auto", top: "auto" })
                 ruta = $('.col-3').children()[4].src.substr(-11,11);// almacenamos en ruta la imagen de
                 $('.col-3').children()[4].src= y;
                 $('.col-2').children()[4].src= ruta;
                 movimiento=movimiento+1; //incrementar un movimiento
                 revisarTablero(3,4,2,4); }}); //revisar si hay otro trio, ademas guarda columna e hijo para devolver la jugada en caso de movimiento invalido

                 $('.dulce14').droppable({accept: '.dulce24',
                 drop: function(event, ui){$(ui.draggable).css({ width: "100%",  position: "relative",left: "auto", top: "auto" })
                 ruta = $('.col-1').children()[4].src.substr(-11,11);// almacenamos en ruta la imagen de
                 $('.col-1').children()[4].src= y;
                 $('.col-2').children()[4].src= ruta;
                 movimiento=movimiento+1; //incrementar un movimiento
                 revisarTablero(1,4,2,4); }}); //revisar si hay otro trio, ademas guarda columna e hijo para devolver la jugada en caso de movimiento invalido

                 break;


                case  'dulce25':
                  $('.dulce24').droppable({accept: '.dulce25',
                  drop: function(event, ui){$(ui.draggable).css({ width: "100%",  position: "relative",left: "auto", top: "auto" })
                  ruta = $('.col-2').children()[4].src.substr(-11,11);// almacenamos en ruta la imagen de
                  $('.col-2').children()[4].src= y;
                  $('.col-2').children()[5].src= ruta;
                  movimiento=movimiento+1; //incrementar un movimiento
                  revisarTablero(2,4,2,5); }}); //revisar si hay otro trio, ademas guarda columna e hijo para devolver la jugada en caso de movimiento invalido

                  $('.dulce26').droppable({accept: '.dulce25',
                  drop: function(event, ui){$(ui.draggable).css({ width: "100%",  position: "relative",left: "auto", top: "auto" })
                  ruta = $('.col-2').children()[6].src.substr(-11,11);// almacenamos en ruta la imagen de
                  $('.col-2').children()[6].src= y;
                  $('.col-2').children()[5].src= ruta;
                  movimiento=movimiento+1; //incrementar un movimiento
                  revisarTablero(2,6,2,5); }}); //revisar si hay otro trio, ademas guarda columna e hijo para devolver la jugada en caso de movimiento invalido

                  $('.dulce35').droppable({accept: '.dulce25',
                  drop: function(event, ui){$(ui.draggable).css({ width: "100%",  position: "relative",left: "auto", top: "auto" })
                  ruta = $('.col-3').children()[5].src.substr(-11,11);// almacenamos en ruta la imagen de
                  $('.col-3').children()[5].src= y;
                  $('.col-2').children()[5].src= ruta;
                  movimiento=movimiento+1; //incrementar un movimiento
                  revisarTablero(3,5,2,5); }}); //revisar si hay otro trio, ademas guarda columna e hijo para devolver la jugada en caso de movimiento invalido

                  $('.dulce15').droppable({accept: '.dulce25',
                  drop: function(event, ui){$(ui.draggable).css({ width: "100%",  position: "relative",left: "auto", top: "auto" })
                  ruta = $('.col-1').children()[5].src.substr(-11,11);// almacenamos en ruta la imagen de
                  $('.col-1').children()[5].src= y;
                  $('.col-2').children()[5].src= ruta;
                  movimiento=movimiento+1; //incrementar un movimiento
                  revisarTablero(1,5,2,5); }}); //revisar si hay otro trio, ademas guarda columna e hijo para devolver la jugada en caso de movimiento invalido

                 break;

                 case  'dulce26':
                   $('.dulce25').droppable({accept: '.dulce26',
                   drop: function(event, ui){$(ui.draggable).css({ width: "100%",  position: "relative",left: "auto", top: "auto" })
                   ruta = $('.col-2').children()[5].src.substr(-11,11);// almacenamos en ruta la imagen de
                   $('.col-2').children()[5].src= y;
                   $('.col-2').children()[6].src= ruta;
                   movimiento=movimiento+1; //incrementar un movimiento
                   revisarTablero(2,5,2,6); }}); //revisar si hay otro trio, ademas guarda columna e hijo para devolver la jugada en caso de movimiento invalido


                   $('.dulce36').droppable({accept: '.dulce26',
                   drop: function(event, ui){$(ui.draggable).css({ width: "100%",  position: "relative",left: "auto", top: "auto" })
                   ruta = $('.col-3').children()[6].src.substr(-11,11);// almacenamos en ruta la imagen de
                   $('.col-3').children()[6].src= y;
                   $('.col-2').children()[6].src= ruta;
                   movimiento=movimiento+1; //incrementar un movimiento
                   revisarTablero(3,6,2,6); }}); //revisar si hay otro trio, ademas guarda columna e hijo para devolver la jugada en caso de movimiento invalido

                   $('.dulce16').droppable({accept: '.dulce26',
                   drop: function(event, ui){$(ui.draggable).css({ width: "100%",  position: "relative",left: "auto", top: "auto" })
                   ruta = $('.col-1').children()[6].src.substr(-11,11);// almacenamos en ruta la imagen de
                   $('.col-1').children()[6].src= y;
                   $('.col-2').children()[6].src= ruta;
                   movimiento=movimiento+1; //incrementar un movimiento
                   revisarTablero(1,6,2,6); }}); //revisar si hay otro trio, ademas guarda columna e hijo para devolver la jugada en caso de movimiento invalido

                  break;

                  case  'dulce30':
                    $('.dulce40').droppable({accept: '.dulce30',
                    drop: function(event, ui){$(ui.draggable).css({ width: "100%",  position: "relative",left: "auto", top: "auto" })
                    ruta = $('.col-4').children()[0].src.substr(-11,11);// almacenamos en ruta la imagen de
                    $('.col-4').children()[0].src= y;
                    $('.col-3').children()[0].src= ruta;
                    movimiento=movimiento+1; //incrementar un movimiento
                    revisarTablero(4,0,3,0); }}); //revisar si hay otro trio, ademas guarda columna e hijo para devolver la jugada en caso de movimiento invalido

                    $('.dulce31').droppable({accept: '.dulce30',
                    drop: function(event, ui){$(ui.draggable).css({ width: "100%",  position: "relative",left: "auto", top: "auto" })
                    ruta = $('.col-3').children()[1].src.substr(-11,11);// almacenamos en ruta la imagen de
                    $('.col-3').children()[1].src= y;
                    $('.col-3').children()[0].src= ruta;
                    movimiento=movimiento+1; //incrementar un movimiento
                    revisarTablero(3,1,3,0); }}); //revisar si hay otro trio, ademas guarda columna e hijo para devolver la jugada en caso de movimiento invalido

                    $('.dulce20').droppable({accept: '.dulce30',
                    drop: function(event, ui){$(ui.draggable).css({ width: "100%",  position: "relative",left: "auto", top: "auto" })
                    ruta = $('.col-2').children()[0].src.substr(-11,11);// almacenamos en ruta la imagen de
                    $('.col-2').children()[0].src= y;
                    $('.col-3').children()[0].src= ruta;
                    movimiento=movimiento+1; //incrementar un movimiento
                    revisarTablero(2,0,3,0); }}); //revisar si hay otro trio, ademas guarda columna e hijo para devolver la jugada en caso de movimiento invalido

                   break;


                   case  'dulce31':
                     $('.dulce30').droppable({accept: '.dulce31',
                     drop: function(event, ui){$(ui.draggable).css({ width: "100%",  position: "relative",left: "auto", top: "auto" })
                     ruta = $('.col-3').children()[0].src.substr(-11,11);// almacenamos en ruta la imagen de
                     $('.col-3').children()[0].src= y;
                     $('.col-3').children()[1].src= ruta;
                     movimiento=movimiento+1; //incrementar un movimiento
                     revisarTablero(3,0,3,1); }}); //revisar si hay otro trio, ademas guarda columna e hijo para devolver la jugada en caso de movimiento invalido

                     $('.dulce32').droppable({accept: '.dulce31',
                     drop: function(event, ui){$(ui.draggable).css({ width: "100%",  position: "relative",left: "auto", top: "auto" })
                     ruta = $('.col-3').children()[2].src.substr(-11,11);// almacenamos en ruta la imagen de
                     $('.col-3').children()[2].src= y;
                     $('.col-3').children()[1].src= ruta;
                     movimiento=movimiento+1; //incrementar un movimiento
                     revisarTablero(3,2,3,1); }}); //revisar si hay otro trio, ademas guarda columna e hijo para devolver la jugada en caso de movimiento invalido

                     $('.dulce41').droppable({accept: '.dulce31',
                     drop: function(event, ui){$(ui.draggable).css({ width: "100%",  position: "relative",left: "auto", top: "auto" })
                     ruta = $('.col-4').children()[1].src.substr(-11,11);// almacenamos en ruta la imagen de
                     $('.col-4').children()[1].src= y;
                     $('.col-3').children()[1].src= ruta;
                     movimiento=movimiento+1; //incrementar un movimiento
                     revisarTablero(4,1,3,1); }}); //revisar si hay otro trio, ademas guarda columna e hijo para devolver la jugada en caso de movimiento invalido

                     $('.dulce21').droppable({accept: '.dulce31',
                     drop: function(event, ui){$(ui.draggable).css({ width: "100%",  position: "relative",left: "auto", top: "auto" })
                     ruta = $('.col-2').children()[1].src.substr(-11,11);// almacenamos en ruta la imagen de
                     $('.col-2').children()[1].src= y;
                     $('.col-3').children()[1].src= ruta;
                     movimiento=movimiento+1; //incrementar un movimiento
                     revisarTablero(2,1,3,1); }}); //revisar si hay otro trio, ademas guarda columna e hijo para devolver la jugada en caso de movimiento invalido

                    break;


                    case  'dulce32':
                      $('.dulce31').droppable({accept: '.dulce32',
                      drop: function(event, ui){$(ui.draggable).css({ width: "100%",  position: "relative",left: "auto", top: "auto" })
                      ruta = $('.col-3').children()[1].src.substr(-11,11);// almacenamos en ruta la imagen de
                      $('.col-3').children()[1].src= y;
                      $('.col-3').children()[2].src= ruta;
                      movimiento=movimiento+1; //incrementar un movimiento
                      revisarTablero(3,1,3,2); }}); //revisar si hay otro trio, ademas guarda columna e hijo para devolver la jugada en caso de movimiento invalido

                      $('.dulce33').droppable({accept: '.dulce32',
                      drop: function(event, ui){$(ui.draggable).css({ width: "100%",  position: "relative",left: "auto", top: "auto" })
                      ruta = $('.col-3').children()[3].src.substr(-11,11);// almacenamos en ruta la imagen de
                      $('.col-3').children()[3].src= y;
                      $('.col-3').children()[2].src= ruta;
                      movimiento=movimiento+1; //incrementar un movimiento
                      revisarTablero(3,3,3,2); }}); //revisar si hay otro trio, ademas guarda columna e hijo para devolver la jugada en caso de movimiento invalido

                      $('.dulce22').droppable({accept: '.dulce32',
                      drop: function(event, ui){$(ui.draggable).css({ width: "100%",  position: "relative",left: "auto", top: "auto" })
                      ruta = $('.col-2').children()[2].src.substr(-11,11);// almacenamos en ruta la imagen de
                      $('.col-2').children()[2].src= y;
                      $('.col-3').children()[2].src= ruta;
                      movimiento=movimiento+1; //incrementar un movimiento
                      revisarTablero(2,2,3,2); }}); //revisar si hay otro trio, ademas guarda columna e hijo para devolver la jugada en caso de movimiento invalido

                      $('.dulce42').droppable({accept: '.dulce32',
                      drop: function(event, ui){$(ui.draggable).css({ width: "100%",  position: "relative",left: "auto", top: "auto" })
                      ruta = $('.col-4').children()[2].src.substr(-11,11);// almacenamos en ruta la imagen de
                      $('.col-4').children()[2].src= y;
                      $('.col-3').children()[2].src= ruta;
                      movimiento=movimiento+1; //incrementar un movimiento
                      revisarTablero(4,2,3,2); }}); //revisar si hay otro trio, ademas guarda columna e hijo para devolver la jugada en caso de movimiento invalido


                     break;


                     case  'dulce33':
                       $('.dulce32').droppable({accept: '.dulce33',
                       drop: function(event, ui){$(ui.draggable).css({ width: "100%",  position: "relative",left: "auto", top: "auto" })
                       ruta = $('.col-3').children()[2].src.substr(-11,11);// almacenamos en ruta la imagen de
                       $('.col-3').children()[2].src= y;
                       $('.col-3').children()[3].src= ruta;
                       movimiento=movimiento+1; //incrementar un movimiento
                       revisarTablero(3,2,3,3); }}); //revisar si hay otro trio, ademas guarda columna e hijo para devolver la jugada en caso de movimiento invalido

                       $('.dulce34').droppable({accept: '.dulce33',
                       drop: function(event, ui){$(ui.draggable).css({ width: "100%",  position: "relative",left: "auto", top: "auto" })
                       ruta = $('.col-3').children()[4].src.substr(-11,11);// almacenamos en ruta la imagen de
                       $('.col-3').children()[4].src= y;
                       $('.col-3').children()[3].src= ruta;
                       movimiento=movimiento+1; //incrementar un movimiento
                       revisarTablero(3,4,3,3); }}); //revisar si hay otro trio, ademas guarda columna e hijo para devolver la jugada en caso de movimiento invalido

                       $('.dulce43').droppable({accept: '.dulce33',
                       drop: function(event, ui){$(ui.draggable).css({ width: "100%",  position: "relative",left: "auto", top: "auto" })
                       ruta = $('.col-4').children()[3].src.substr(-11,11);// almacenamos en ruta la imagen de
                       $('.col-4').children()[3].src= y;
                       $('.col-3').children()[3].src= ruta;
                       movimiento=movimiento+1; //incrementar un movimiento
                       revisarTablero(4,3,3,3); }}); //revisar si hay otro trio, ademas guarda columna e hijo para devolver la jugada en caso de movimiento invalido

                       $('.dulce23').droppable({accept: '.dulce33',
                       drop: function(event, ui){$(ui.draggable).css({ width: "100%",  position: "relative",left: "auto", top: "auto" })
                       ruta = $('.col-2').children()[3].src.substr(-11,11);// almacenamos en ruta la imagen de
                       $('.col-2').children()[3].src= y;
                       $('.col-3').children()[3].src= ruta;
                       movimiento=movimiento+1; //incrementar un movimiento
                       revisarTablero(2,3,3,3); }}); //revisar si hay otro trio, ademas guarda columna e hijo para devolver la jugada en caso de movimiento invalido

                       break;


                      case  'dulce34':
                        $('.dulce33').droppable({accept: '.dulce34',
                        drop: function(event, ui){$(ui.draggable).css({ width: "100%",  position: "relative",left: "auto", top: "auto" })
                        ruta = $('.col-3').children()[3].src.substr(-11,11);// almacenamos en ruta la imagen de
                        $('.col-3').children()[3].src= y;
                        $('.col-3').children()[4].src= ruta;
                        movimiento=movimiento+1; //incrementar un movimiento
                        revisarTablero(3,3,3,4); }}); //revisar si hay otro trio, ademas guarda columna e hijo para devolver la jugada en caso de movimiento invalido

                        $('.dulce35').droppable({accept: '.dulce34',
                        drop: function(event, ui){$(ui.draggable).css({ width: "100%",  position: "relative",left: "auto", top: "auto" })
                        ruta = $('.col-3').children()[5].src.substr(-11,11);// almacenamos en ruta la imagen de
                        $('.col-3').children()[5].src= y;
                        $('.col-3').children()[4].src= ruta;
                        movimiento=movimiento+1; //incrementar un movimiento
                        revisarTablero(3,5,3,4); }}); //revisar si hay otro trio, ademas guarda columna e hijo para devolver la jugada en caso de movimiento invalido

                        $('.dulce44').droppable({accept: '.dulce34',
                        drop: function(event, ui){$(ui.draggable).css({ width: "100%",  position: "relative",left: "auto", top: "auto" })
                        ruta = $('.col-4').children()[4].src.substr(-11,11);// almacenamos en ruta la imagen de
                        $('.col-4').children()[4].src= y;
                        $('.col-3').children()[4].src= ruta;
                        movimiento=movimiento+1; //incrementar un movimiento
                        revisarTablero(4,4,3,4); }}); //revisar si hay otro trio, ademas guarda columna e hijo para devolver la jugada en caso de movimiento invalido

                        $('.dulce24').droppable({accept: '.dulce34',
                        drop: function(event, ui){$(ui.draggable).css({ width: "100%",  position: "relative",left: "auto", top: "auto" })
                        ruta = $('.col-2').children()[4].src.substr(-11,11);// almacenamos en ruta la imagen de
                        $('.col-2').children()[4].src= y;
                        $('.col-3').children()[4].src= ruta;
                        movimiento=movimiento+1; //incrementar un movimiento
                        revisarTablero(2,4,3,4); }}); //revisar si hay otro trio, ademas guarda columna e hijo para devolver la jugada en caso de movimiento invalido

                        break;


                       case  'dulce35':
                         $('.dulce34').droppable({accept: '.dulce35',
                         drop: function(event, ui){$(ui.draggable).css({ width: "100%",  position: "relative",left: "auto", top: "auto" })
                         ruta = $('.col-3').children()[4].src.substr(-11,11);// almacenamos en ruta la imagen de
                         $('.col-3').children()[4].src= y;
                         $('.col-3').children()[5].src= ruta;
                         movimiento=movimiento+1; //incrementar un movimiento
                         revisarTablero(3,4,3,5); }}); //revisar si hay otro trio, ademas guarda columna e hijo para devolver la jugada en caso de movimiento invalido

                         $('.dulce36').droppable({accept: '.dulce35',
                         drop: function(event, ui){$(ui.draggable).css({ width: "100%",  position: "relative",left: "auto", top: "auto" })
                         ruta = $('.col-3').children()[6].src.substr(-11,11);// almacenamos en ruta la imagen de
                         $('.col-3').children()[6].src= y;
                         $('.col-3').children()[5].src= ruta;
                         movimiento=movimiento+1; //incrementar un movimiento
                         revisarTablero(3,6,3,5); }}); //revisar si hay otro trio, ademas guarda columna e hijo para devolver la jugada en caso de movimiento invalido

                         $('.dulce45').droppable({accept: '.dulce35',
                         drop: function(event, ui){$(ui.draggable).css({ width: "100%",  position: "relative",left: "auto", top: "auto" })
                         ruta = $('.col-4').children()[5].src.substr(-11,11);// almacenamos en ruta la imagen de
                         $('.col-4').children()[5].src= y;
                         $('.col-3').children()[5].src= ruta;
                         movimiento=movimiento+1; //incrementar un movimiento
                         revisarTablero(4,5,3,5); }}); //revisar si hay otro trio, ademas guarda columna e hijo para devolver la jugada en caso de movimiento invalido

                         $('.dulce25').droppable({accept: '.dulce35',
                         drop: function(event, ui){$(ui.draggable).css({ width: "100%",  position: "relative",left: "auto", top: "auto" })
                         ruta = $('.col-25').children()[5].src.substr(-11,11);// almacenamos en ruta la imagen de
                         $('.col-25').children()[5].src= y;
                         $('.col-3').children()[5].src= ruta;
                         movimiento=movimiento+1; //incrementar un movimiento
                         revisarTablero(2,5,3,5); }}); //revisar si hay otro trio, ademas guarda columna e hijo para devolver la jugada en caso de movimiento invalido

                        break;

                        case  'dulce36':
                          $('.dulce35').droppable({accept: '.dulce36',
                          drop: function(event, ui){$(ui.draggable).css({ width: "100%",  position: "relative",left: "auto", top: "auto" })
                          ruta = $('.col-3').children()[5].src.substr(-11,11);// almacenamos en ruta la imagen de
                          $('.col-3').children()[5].src= y;
                          $('.col-3').children()[6].src= ruta;
                          movimiento=movimiento+1; //incrementar un movimiento
                          revisarTablero(3,5,3,6); }}); //revisar si hay otro trio, ademas guarda columna e hijo para devolver la jugada en caso de movimiento invalido


                          $('.dulce46').droppable({accept: '.dulce36',
                          drop: function(event, ui){$(ui.draggable).css({ width: "100%",  position: "relative",left: "auto", top: "auto" })
                          ruta = $('.col-4').children()[6].src.substr(-11,11);// almacenamos en ruta la imagen de
                          $('.col-4').children()[6].src= y;
                          $('.col-3').children()[6].src= ruta;
                          movimiento=movimiento+1; //incrementar un movimiento
                          revisarTablero(4,6,3,6); }}); //revisar si hay otro trio, ademas guarda columna e hijo para devolver la jugada en caso de movimiento invalido

                          $('.dulce26').droppable({accept: '.dulce36',
                          drop: function(event, ui){$(ui.draggable).css({ width: "100%",  position: "relative",left: "auto", top: "auto" })
                          ruta = $('.col-2').children()[6].src.substr(-11,11);// almacenamos en ruta la imagen de
                          $('.col-2').children()[6].src= y;
                          $('.col-3').children()[6].src= ruta;
                          movimiento=movimiento+1; //incrementar un movimiento
                          revisarTablero(2,6,3,6); }}); //revisar si hay otro trio, ademas guarda columna e hijo para devolver la jugada en caso de movimiento invalido

                          break;

                          case  'dulce40':
                            $('.dulce50').droppable({accept: '.dulce40',
                            drop: function(event, ui){$(ui.draggable).css({ width: "100%",  position: "relative",left: "auto", top: "auto" })
                            ruta = $('.col-5').children()[0].src.substr(-11,11);// almacenamos en ruta la imagen de
                            $('.col-5').children()[0].src= y;
                            $('.col-4').children()[0].src= ruta;
                            movimiento=movimiento+1; //incrementar un movimiento
                            revisarTablero(5,0,4,0); }}); //revisar si hay otro trio, ademas guarda columna e hijo para devolver la jugada en caso de movimiento invalido

                            $('.dulce41').droppable({accept: '.dulce40',
                            drop: function(event, ui){$(ui.draggable).css({ width: "100%",  position: "relative",left: "auto", top: "auto" })
                            ruta = $('.col-4').children()[1].src.substr(-11,11);// almacenamos en ruta la imagen de
                            $('.col-4').children()[1].src= y;
                            $('.col-4').children()[0].src= ruta;
                            movimiento=movimiento+1; //incrementar un movimiento
                            revisarTablero(4,1,4,0); }}); //revisar si hay otro trio, ademas guarda columna e hijo para devolver la jugada en caso de movimiento invalido

                            $('.dulce30').droppable({accept: '.dulce40',
                            drop: function(event, ui){$(ui.draggable).css({ width: "100%",  position: "relative",left: "auto", top: "auto" })
                            ruta = $('.col-3').children()[0].src.substr(-11,11);// almacenamos en ruta la imagen de
                            $('.col-3').children()[0].src= y;
                            $('.col-4').children()[0].src= ruta;
                            movimiento=movimiento+1; //incrementar un movimiento
                            revisarTablero(3,0,4,0); }}); //revisar si hay otro trio, ademas guarda columna e hijo para devolver la jugada en caso de movimiento invalido

                           break;


                           case  'dulce41':
                             $('.dulce40').droppable({accept: '.dulce41',
                             drop: function(event, ui){$(ui.draggable).css({ width: "100%",  position: "relative",left: "auto", top: "auto" })
                             ruta = $('.col-4').children()[0].src.substr(-11,11);// almacenamos en ruta la imagen de
                             $('.col-4').children()[0].src= y;
                             $('.col-4').children()[1].src= ruta;
                             movimiento=movimiento+1; //incrementar un movimiento
                             revisarTablero(4,0,4,1); }}); //revisar si hay otro trio, ademas guarda columna e hijo para devolver la jugada en caso de movimiento invalido

                             $('.dulce42').droppable({accept: '.dulce41',
                             drop: function(event, ui){$(ui.draggable).css({ width: "100%",  position: "relative",left: "auto", top: "auto" })
                             ruta = $('.col-4').children()[2].src.substr(-11,11);// almacenamos en ruta la imagen de
                             $('.col-4').children()[2].src= y;
                             $('.col-4').children()[1].src= ruta;
                             movimiento=movimiento+1; //incrementar un movimiento
                             revisarTablero(4,2,4,1); }}); //revisar si hay otro trio, ademas guarda columna e hijo para devolver la jugada en caso de movimiento invalido

                             $('.dulce51').droppable({accept: '.dulce41',
                             drop: function(event, ui){$(ui.draggable).css({ width: "100%",  position: "relative",left: "auto", top: "auto" })
                             ruta = $('.col-5').children()[1].src.substr(-11,11);// almacenamos en ruta la imagen de
                             $('.col-5').children()[1].src= y;
                             $('.col-4').children()[1].src= ruta;
                             movimiento=movimiento+1; //incrementar un movimiento
                             revisarTablero(5,1,4,1); }}); //revisar si hay otro trio, ademas guarda columna e hijo para devolver la jugada en caso de movimiento invalido

                             $('.dulce31').droppable({accept: '.dulce41',
                             drop: function(event, ui){$(ui.draggable).css({ width: "100%",  position: "relative",left: "auto", top: "auto" })
                             ruta = $('.col-3').children()[1].src.substr(-11,11);// almacenamos en ruta la imagen de
                             $('.col-3').children()[1].src= y;
                             $('.col-4').children()[1].src= ruta;
                             movimiento=movimiento+1; //incrementar un movimiento
                             revisarTablero(3,1,4,1); }}); //revisar si hay otro trio, ademas guarda columna e hijo para devolver la jugada en caso de movimiento invalido

                            break;


                            case  'dulce42':
                              $('.dulce41').droppable({accept: '.dulce42',
                              drop: function(event, ui){$(ui.draggable).css({ width: "100%",  position: "relative",left: "auto", top: "auto" })
                              ruta = $('.col-4').children()[1].src.substr(-11,11);// almacenamos en ruta la imagen de
                              $('.col-4').children()[1].src= y;
                              $('.col-4').children()[2].src= ruta;
                              movimiento=movimiento+1; //incrementar un movimiento
                              revisarTablero(4,1,4,2); }}); //revisar si hay otro trio, ademas guarda columna e hijo para devolver la jugada en caso de movimiento invalido

                              $('.dulce43').droppable({accept: '.dulce42',
                              drop: function(event, ui){$(ui.draggable).css({ width: "100%",  position: "relative",left: "auto", top: "auto" })
                              ruta = $('.col-4').children()[3].src.substr(-11,11);// almacenamos en ruta la imagen de
                              $('.col-4').children()[3].src= y;
                              $('.col-4').children()[2].src= ruta;
                              movimiento=movimiento+1; //incrementar un movimiento
                              revisarTablero(4,3,4,2); }}); //revisar si hay otro trio, ademas guarda columna e hijo para devolver la jugada en caso de movimiento invalido

                              $('.dulce52').droppable({accept: '.dulce42',
                              drop: function(event, ui){$(ui.draggable).css({ width: "100%",  position: "relative",left: "auto", top: "auto" })
                              ruta = $('.col-5').children()[2].src.substr(-11,11);// almacenamos en ruta la imagen de
                              $('.col-5').children()[2].src= y;
                              $('.col-4').children()[2].src= ruta;
                              movimiento=movimiento+1; //incrementar un movimiento
                              revisarTablero(5,2,4,2); }}); //revisar si hay otro trio, ademas guarda columna e hijo para devolver la jugada en caso de movimiento invalido

                              $('.dulce32').droppable({accept: '.dulce42',
                              drop: function(event, ui){$(ui.draggable).css({ width: "100%",  position: "relative",left: "auto", top: "auto" })
                              ruta = $('.col-3').children()[2].src.substr(-11,11);// almacenamos en ruta la imagen de
                              $('.col-3').children()[2].src= y;
                              $('.col-4').children()[2].src= ruta;
                              movimiento=movimiento+1; //incrementar un movimiento
                              revisarTablero(3,2,4,2); }}); //revisar si hay otro trio, ademas guarda columna e hijo para devolver la jugada en caso de movimiento invalido

                             break;


                             case  'dulce43':
                               $('.dulce42').droppable({accept: '.dulce43',
                               drop: function(event, ui){$(ui.draggable).css({ width: "100%",  position: "relative",left: "auto", top: "auto" })
                               ruta = $('.col-4').children()[2].src.substr(-11,11);// almacenamos en ruta la imagen de
                               $('.col-4').children()[2].src= y;
                               $('.col-4').children()[3].src= ruta;
                               movimiento=movimiento+1; //incrementar un movimiento
                               revisarTablero(4,2,4,3); }}); //revisar si hay otro trio, ademas guarda columna e hijo para devolver la jugada en caso de movimiento invalido

                               $('.dulce44').droppable({accept: '.dulce43',
                               drop: function(event, ui){$(ui.draggable).css({ width: "100%",  position: "relative",left: "auto", top: "auto" })
                               ruta = $('.col-4').children()[4].src.substr(-11,11);// almacenamos en ruta la imagen de
                               $('.col-4').children()[4].src= y;
                               $('.col-4').children()[3].src= ruta;
                               movimiento=movimiento+1; //incrementar un movimiento
                               revisarTablero(4,4,4,3); }}); //revisar si hay otro trio, ademas guarda columna e hijo para devolver la jugada en caso de movimiento invalido

                               $('.dulce53').droppable({accept: '.dulce43',
                               drop: function(event, ui){$(ui.draggable).css({ width: "100%",  position: "relative",left: "auto", top: "auto" })
                               ruta = $('.col-5').children()[3].src.substr(-11,11);// almacenamos en ruta la imagen de
                               $('.col-5').children()[3].src= y;
                               $('.col-4').children()[3].src= ruta;
                               movimiento=movimiento+1; //incrementar un movimiento
                               revisarTablero(5,3,4,3); }}); //revisar si hay otro trio, ademas guarda columna e hijo para devolver la jugada en caso de movimiento invalido

                               $('.dulce33').droppable({accept: '.dulce43',
                               drop: function(event, ui){$(ui.draggable).css({ width: "100%",  position: "relative",left: "auto", top: "auto" })
                               ruta = $('.col-3').children()[3].src.substr(-11,11);// almacenamos en ruta la imagen de
                               $('.col-3').children()[3].src= y;
                               $('.col-4').children()[3].src= ruta;
                               movimiento=movimiento+1; //incrementar un movimiento
                               revisarTablero(3,3,4,3); }}); //revisar si hay otro trio, ademas guarda columna e hijo para devolver la jugada en caso de movimiento invalido

                               break;


                              case  'dulce44':
                                $('.dulce43').droppable({accept: '.dulce44',
                                drop: function(event, ui){$(ui.draggable).css({ width: "100%",  position: "relative",left: "auto", top: "auto" })
                                ruta = $('.col-4').children()[3].src.substr(-11,11);// almacenamos en ruta la imagen de
                                $('.col-4').children()[3].src= y;
                                $('.col-4').children()[4].src= ruta;
                                movimiento=movimiento+1; //incrementar un movimiento
                                revisarTablero(4,3,4,4); }}); //revisar si hay otro trio, ademas guarda columna e hijo para devolver la jugada en caso de movimiento invalido

                                $('.dulce45').droppable({accept: '.dulce44',
                                drop: function(event, ui){$(ui.draggable).css({ width: "100%",  position: "relative",left: "auto", top: "auto" })
                                ruta = $('.col-4').children()[5].src.substr(-11,11);// almacenamos en ruta la imagen de
                                $('.col-4').children()[5].src= y;
                                $('.col-4').children()[4].src= ruta;
                                movimiento=movimiento+1; //incrementar un movimiento
                                revisarTablero(4,5,4,4); }}); //revisar si hay otro trio, ademas guarda columna e hijo para devolver la jugada en caso de movimiento invalido

                                $('.dulce54').droppable({accept: '.dulce44',
                                drop: function(event, ui){$(ui.draggable).css({ width: "100%",  position: "relative",left: "auto", top: "auto" })
                                ruta = $('.col-5').children()[4].src.substr(-11,11);// almacenamos en ruta la imagen de
                                $('.col-5').children()[4].src= y;
                                $('.col-4').children()[4].src= ruta;
                                movimiento=movimiento+1; //incrementar un movimiento
                                revisarTablero(5,4,4,4); }}); //revisar si hay otro trio, ademas guarda columna e hijo para devolver la jugada en caso de movimiento invalido

                                $('.dulce34').droppable({accept: '.dulce44',
                                drop: function(event, ui){$(ui.draggable).css({ width: "100%",  position: "relative",left: "auto", top: "auto" })
                                ruta = $('.col-3').children()[4].src.substr(-11,11);// almacenamos en ruta la imagen de
                                $('.col-3').children()[4].src= y;
                                $('.col-4').children()[4].src= ruta;
                                movimiento=movimiento+1; //incrementar un movimiento
                                revisarTablero(3,4,4,4); }}); //revisar si hay otro trio, ademas guarda columna e hijo para devolver la jugada en caso de movimiento invalido

                                break;


                               case  'dulce45':
                                 $('.dulce44').droppable({accept: '.dulce45',
                                 drop: function(event, ui){$(ui.draggable).css({ width: "100%",  position: "relative",left: "auto", top: "auto" })
                                 ruta = $('.col-4').children()[4].src.substr(-11,11);// almacenamos en ruta la imagen de
                                 $('.col-4').children()[4].src= y;
                                 $('.col-4').children()[5].src= ruta;
                                 movimiento=movimiento+1; //incrementar un movimiento
                                 revisarTablero(4,4,4,5); }}); //revisar si hay otro trio, ademas guarda columna e hijo para devolver la jugada en caso de movimiento invalido

                                 $('.dulce46').droppable({accept: '.dulce45',
                                 drop: function(event, ui){$(ui.draggable).css({ width: "100%",  position: "relative",left: "auto", top: "auto" })
                                 ruta = $('.col-4').children()[6].src.substr(-11,11);// almacenamos en ruta la imagen de
                                 $('.col-4').children()[6].src= y;
                                 $('.col-4').children()[5].src= ruta;
                                 movimiento=movimiento+1; //incrementar un movimiento
                                 revisarTablero(4,6,4,5); }}); //revisar si hay otro trio, ademas guarda columna e hijo para devolver la jugada en caso de movimiento invalido

                                 $('.dulce55').droppable({accept: '.dulce45',
                                 drop: function(event, ui){$(ui.draggable).css({ width: "100%",  position: "relative",left: "auto", top: "auto" })
                                 ruta = $('.col-5').children()[5].src.substr(-11,11);// almacenamos en ruta la imagen de
                                 $('.col-5').children()[5].src= y;
                                 $('.col-4').children()[5].src= ruta;
                                 movimiento=movimiento+1; //incrementar un movimiento
                                 revisarTablero(5,5,4,5); }}); //revisar si hay otro trio, ademas guarda columna e hijo para devolver la jugada en caso de movimiento invalido

                                 $('.dulce35').droppable({accept: '.dulce45',
                                 drop: function(event, ui){$(ui.draggable).css({ width: "100%",  position: "relative",left: "auto", top: "auto" })
                                 ruta = $('.col-3').children()[5].src.substr(-11,11);// almacenamos en ruta la imagen de
                                 $('.col-3').children()[5].src= y;
                                 $('.col-4').children()[5].src= ruta;
                                 movimiento=movimiento+1; //incrementar un movimiento
                                 revisarTablero(3,5,4,5); }}); //revisar si hay otro trio, ademas guarda columna e hijo para devolver la jugada en caso de movimiento invalido

                                break;

                                case  'dulce46':
                                  $('.dulce45').droppable({accept: '.dulce46',
                                  drop: function(event, ui){$(ui.draggable).css({ width: "100%",  position: "relative",left: "auto", top: "auto" })
                                  ruta = $('.col-4').children()[5].src.substr(-11,11);// almacenamos en ruta la imagen de
                                  $('.col-4').children()[5].src= y;
                                  $('.col-4').children()[6].src= ruta;
                                  movimiento=movimiento+1; //incrementar un movimiento
                                  revisarTablero(4,5,4,6); }}); //revisar si hay otro trio, ademas guarda columna e hijo para devolver la jugada en caso de movimiento invalido


                                  $('.dulce56').droppable({accept: '.dulce46',
                                  drop: function(event, ui){$(ui.draggable).css({ width: "100%",  position: "relative",left: "auto", top: "auto" })
                                  ruta = $('.col-5').children()[6].src.substr(-11,11);// almacenamos en ruta la imagen de
                                  $('.col-5').children()[6].src= y;
                                  $('.col-4').children()[6].src= ruta;
                                  movimiento=movimiento+1; //incrementar un movimiento
                                  revisarTablero(5,6,4,6); }}); //revisar si hay otro trio, ademas guarda columna e hijo para devolver la jugada en caso de movimiento invalido

                                  $('.dulce36').droppable({accept: '.dulce46',
                                  drop: function(event, ui){$(ui.draggable).css({ width: "100%",  position: "relative",left: "auto", top: "auto" })
                                  ruta = $('.col-3').children()[6].src.substr(-11,11);// almacenamos en ruta la imagen de
                                  $('.col-3').children()[6].src= y;
                                  $('.col-4').children()[6].src= ruta;
                                  movimiento=movimiento+1; //incrementar un movimiento
                                  revisarTablero(3,6,4,6); }}); //revisar si hay otro trio, ademas guarda columna e hijo para devolver la jugada en caso de movimiento invalido

                                  break;



                                  case  'dulce50':
                                    $('.dulce60').droppable({accept: '.dulce50',
                                    drop: function(event, ui){$(ui.draggable).css({ width: "100%",  position: "relative",left: "auto", top: "auto" })
                                    ruta = $('.col-6').children()[0].src.substr(-11,11);// almacenamos en ruta la imagen de
                                    $('.col-6').children()[0].src= y;
                                    $('.col-5').children()[0].src= ruta;
                                    movimiento=movimiento+1; //incrementar un movimiento
                                    revisarTablero(6,0,5,0); }}); //revisar si hay otro trio, ademas guarda columna e hijo para devolver la jugada en caso de movimiento invalido

                                    $('.dulce51').droppable({accept: '.dulce50',
                                    drop: function(event, ui){$(ui.draggable).css({ width: "100%",  position: "relative",left: "auto", top: "auto" })
                                    ruta = $('.col-5').children()[1].src.substr(-11,11);// almacenamos en ruta la imagen de
                                    $('.col-5').children()[1].src= y;
                                    $('.col-5').children()[0].src= ruta;
                                    movimiento=movimiento+1; //incrementar un movimiento
                                    revisarTablero(5,1,5,0); }}); //revisar si hay otro trio, ademas guarda columna e hijo para devolver la jugada en caso de movimiento invalido

                                    $('.dulce40').droppable({accept: '.dulce50',
                                    drop: function(event, ui){$(ui.draggable).css({ width: "100%",  position: "relative",left: "auto", top: "auto" })
                                    ruta = $('.col-4').children()[0].src.substr(-11,11);// almacenamos en ruta la imagen de
                                    $('.col-4').children()[2].src= y;
                                    $('.col-5').children()[0].src= ruta;
                                    movimiento=movimiento+1; //incrementar un movimiento
                                    revisarTablero(4,0,5,0); }}); //revisar si hay otro trio, ademas guarda columna e hijo para devolver la jugada en caso de movimiento invalido

                                   break;


                                   case  'dulce51':
                                     $('.dulce50').droppable({accept: '.dulce51',
                                     drop: function(event, ui){$(ui.draggable).css({ width: "100%",  position: "relative",left: "auto", top: "auto" })
                                     ruta = $('.col-5').children()[0].src.substr(-11,11);// almacenamos en ruta la imagen de
                                     $('.col-5').children()[0].src= y;
                                     $('.col-5').children()[1].src= ruta;
                                     movimiento=movimiento+1; //incrementar un movimiento
                                     revisarTablero(5,0,5,1); }}); //revisar si hay otro trio, ademas guarda columna e hijo para devolver la jugada en caso de movimiento invalido

                                     $('.dulce52').droppable({accept: '.dulce51',
                                     drop: function(event, ui){$(ui.draggable).css({ width: "100%",  position: "relative",left: "auto", top: "auto" })
                                     ruta = $('.col-5').children()[2].src.substr(-11,11);// almacenamos en ruta la imagen de
                                     $('.col-5').children()[2].src= y;
                                     $('.col-5').children()[1].src= ruta;
                                     movimiento=movimiento+1; //incrementar un movimiento
                                     revisarTablero(5,2,5,1); }}); //revisar si hay otro trio, ademas guarda columna e hijo para devolver la jugada en caso de movimiento invalido

                                     $('.dulce61').droppable({accept: '.dulce51',
                                     drop: function(event, ui){$(ui.draggable).css({ width: "100%",  position: "relative",left: "auto", top: "auto" })
                                     ruta = $('.col-6').children()[1].src.substr(-11,11);// almacenamos en ruta la imagen de
                                     $('.col-6').children()[1].src= y;
                                     $('.col-5').children()[1].src= ruta;
                                     movimiento=movimiento+1; //incrementar un movimiento
                                     revisarTablero(6,1,5,1); }}); //revisar si hay otro trio, ademas guarda columna e hijo para devolver la jugada en caso de movimiento invalido

                                     $('.dulce41').droppable({accept: '.dulce51',
                                     drop: function(event, ui){$(ui.draggable).css({ width: "100%",  position: "relative",left: "auto", top: "auto" })
                                     ruta = $('.col-4').children()[1].src.substr(-11,11);// almacenamos en ruta la imagen de
                                     $('.col-4').children()[1].src= y;
                                     $('.col-5').children()[1].src= ruta;
                                     movimiento=movimiento+1; //incrementar un movimiento
                                     revisarTablero(4,1,5,1); }}); //revisar si hay otro trio, ademas guarda columna e hijo para devolver la jugada en caso de movimiento invalido

                                    break;


                                    case  'dulce52':
                                      $('.dulce51').droppable({accept: '.dulce52',
                                      drop: function(event, ui){$(ui.draggable).css({ width: "100%",  position: "relative",left: "auto", top: "auto" })
                                      ruta = $('.col-5').children()[1].src.substr(-11,11);// almacenamos en ruta la imagen de
                                      $('.col-5').children()[1].src= y;
                                      $('.col-5').children()[2].src= ruta;
                                      movimiento=movimiento+1; //incrementar un movimiento
                                      revisarTablero(5,1,5,2); }}); //revisar si hay otro trio, ademas guarda columna e hijo para devolver la jugada en caso de movimiento invalido

                                      $('.dulce53').droppable({accept: '.dulce52',
                                      drop: function(event, ui){$(ui.draggable).css({ width: "100%",  position: "relative",left: "auto", top: "auto" })
                                      ruta = $('.col-5').children()[3].src.substr(-11,11);// almacenamos en ruta la imagen de
                                      $('.col-5').children()[3].src= y;
                                      $('.col-5').children()[2].src= ruta;
                                      movimiento=movimiento+1; //incrementar un movimiento
                                      revisarTablero(5,3,5,2); }}); //revisar si hay otro trio, ademas guarda columna e hijo para devolver la jugada en caso de movimiento invalido

                                      $('.dulce62').droppable({accept: '.dulce52',
                                      drop: function(event, ui){$(ui.draggable).css({ width: "100%",  position: "relative",left: "auto", top: "auto" })
                                      ruta = $('.col-6').children()[2].src.substr(-11,11);// almacenamos en ruta la imagen de
                                      $('.col-6').children()[2].src= y;
                                      $('.col-5').children()[2].src= ruta;
                                      movimiento=movimiento+1; //incrementar un movimiento
                                      revisarTablero(6,2,5,2); }}); //revisar si hay otro trio, ademas guarda columna e hijo para devolver la jugada en caso de movimiento invalido

                                      $('.dulce42').droppable({accept: '.dulce52',
                                      drop: function(event, ui){$(ui.draggable).css({ width: "100%",  position: "relative",left: "auto", top: "auto" })
                                      ruta = $('.col-4').children()[2].src.substr(-11,11);// almacenamos en ruta la imagen de
                                      $('.col-4').children()[2].src= y;
                                      $('.col-5').children()[2].src= ruta;
                                      movimiento=movimiento+1; //incrementar un movimiento
                                      revisarTablero(4,2,5,2); }}); //revisar si hay otro trio, ademas guarda columna e hijo para devolver la jugada en caso de movimiento invalido

                                     break;


                                     case  'dulce53':
                                       $('.dulce52').droppable({accept: '.dulce53',
                                       drop: function(event, ui){$(ui.draggable).css({ width: "100%",  position: "relative",left: "auto", top: "auto" })
                                       ruta = $('.col-5').children()[2].src.substr(-11,11);// almacenamos en ruta la imagen de
                                       $('.col-5').children()[2].src= y;
                                       $('.col-5').children()[3].src= ruta;
                                       movimiento=movimiento+1; //incrementar un movimiento
                                       revisarTablero(5,2,5,3); }}); //revisar si hay otro trio, ademas guarda columna e hijo para devolver la jugada en caso de movimiento invalido

                                       $('.dulce54').droppable({accept: '.dulce53',
                                       drop: function(event, ui){$(ui.draggable).css({ width: "100%",  position: "relative",left: "auto", top: "auto" })
                                       ruta = $('.col-5').children()[4].src.substr(-11,11);// almacenamos en ruta la imagen de
                                       $('.col-5').children()[4].src= y;
                                       $('.col-5').children()[3].src= ruta;
                                       movimiento=movimiento+1; //incrementar un movimiento
                                       revisarTablero(5,4,5,3); }}); //revisar si hay otro trio, ademas guarda columna e hijo para devolver la jugada en caso de movimiento invalido

                                       $('.dulce63').droppable({accept: '.dulce53',
                                       drop: function(event, ui){$(ui.draggable).css({ width: "100%",  position: "relative",left: "auto", top: "auto" })
                                       ruta = $('.col-6').children()[3].src.substr(-11,11);// almacenamos en ruta la imagen de
                                       $('.col-6').children()[3].src= y;
                                       $('.col-5').children()[3].src= ruta;
                                       movimiento=movimiento+1; //incrementar un movimiento
                                       revisarTablero(6,3,5,3); }}); //revisar si hay otro trio, ademas guarda columna e hijo para devolver la jugada en caso de movimiento invalido

                                       $('.dulce43').droppable({accept: '.dulce53',
                                       drop: function(event, ui){$(ui.draggable).css({ width: "100%",  position: "relative",left: "auto", top: "auto" })
                                       ruta = $('.col-4').children()[3].src.substr(-11,11);// almacenamos en ruta la imagen de
                                       $('.col-4').children()[3].src= y;
                                       $('.col-5').children()[3].src= ruta;
                                       movimiento=movimiento+1; //incrementar un movimiento
                                       revisarTablero(4,3,5,3); }}); //revisar si hay otro trio, ademas guarda columna e hijo para devolver la jugada en caso de movimiento invalido

                                       break;


                                      case  'dulce54':
                                        $('.dulce53').droppable({accept: '.dulce54',
                                        drop: function(event, ui){$(ui.draggable).css({ width: "100%",  position: "relative",left: "auto", top: "auto" })
                                        ruta = $('.col-5').children()[3].src.substr(-11,11);// almacenamos en ruta la imagen de
                                        $('.col-5').children()[3].src= y;
                                        $('.col-5').children()[4].src= ruta;
                                        movimiento=movimiento+1; //incrementar un movimiento
                                        revisarTablero(5,3,5,4); }}); //revisar si hay otro trio, ademas guarda columna e hijo para devolver la jugada en caso de movimiento invalido

                                        $('.dulce55').droppable({accept: '.dulce54',
                                        drop: function(event, ui){$(ui.draggable).css({ width: "100%",  position: "relative",left: "auto", top: "auto" })
                                        ruta = $('.col-5').children()[5].src.substr(-11,11);// almacenamos en ruta la imagen de
                                        $('.col-5').children()[5].src= y;
                                        $('.col-5').children()[4].src= ruta;
                                        movimiento=movimiento+1; //incrementar un movimiento
                                        revisarTablero(5,5,5,4); }}); //revisar si hay otro trio, ademas guarda columna e hijo para devolver la jugada en caso de movimiento invalido

                                        $('.dulce64').droppable({accept: '.dulce54',
                                        drop: function(event, ui){$(ui.draggable).css({ width: "100%",  position: "relative",left: "auto", top: "auto" })
                                        ruta = $('.col-6').children()[4].src.substr(-11,11);// almacenamos en ruta la imagen de
                                        $('.col-6').children()[4].src= y;
                                        $('.col-5').children()[4].src= ruta;
                                        movimiento=movimiento+1; //incrementar un movimiento
                                        revisarTablero(6,4,5,4); }}); //revisar si hay otro trio, ademas guarda columna e hijo para devolver la jugada en caso de movimiento invalido

                                        $('.dulce44').droppable({accept: '.dulce54',
                                        drop: function(event, ui){$(ui.draggable).css({ width: "100%",  position: "relative",left: "auto", top: "auto" })
                                        ruta = $('.col-4').children()[4].src.substr(-11,11);// almacenamos en ruta la imagen de
                                        $('.col-4').children()[4].src= y;
                                        $('.col-5').children()[4].src= ruta;
                                        movimiento=movimiento+1; //incrementar un movimiento
                                        revisarTablero(4,4,5,4); }}); //revisar si hay otro trio, ademas guarda columna e hijo para devolver la jugada en caso de movimiento invalido

                                        break;


                                       case  'dulce55':
                                         $('.dulce54').droppable({accept: '.dulce55',
                                         drop: function(event, ui){$(ui.draggable).css({ width: "100%",  position: "relative",left: "auto", top: "auto" })
                                         ruta = $('.col-5').children()[4].src.substr(-11,11);// almacenamos en ruta la imagen de
                                         $('.col-5').children()[4].src= y;
                                         $('.col-5').children()[5].src= ruta;
                                         movimiento=movimiento+1; //incrementar un movimiento
                                         revisarTablero(5,4,5,5); }}); //revisar si hay otro trio, ademas guarda columna e hijo para devolver la jugada en caso de movimiento invalido

                                         $('.dulce56').droppable({accept: '.dulce55',
                                         drop: function(event, ui){$(ui.draggable).css({ width: "100%",  position: "relative",left: "auto", top: "auto" })
                                         ruta = $('.col-5').children()[6].src.substr(-11,11);// almacenamos en ruta la imagen de
                                         $('.col-5').children()[6].src= y;
                                         $('.col-5').children()[5].src= ruta;
                                         movimiento=movimiento+1; //incrementar un movimiento
                                         revisarTablero(5,6,5,5); }}); //revisar si hay otro trio, ademas guarda columna e hijo para devolver la jugada en caso de movimiento invalido

                                         $('.dulce65').droppable({accept: '.dulce55',
                                         drop: function(event, ui){$(ui.draggable).css({ width: "100%",  position: "relative",left: "auto", top: "auto" })
                                         ruta = $('.col-6').children()[5].src.substr(-11,11);// almacenamos en ruta la imagen de
                                         $('.col-6').children()[5].src= y;
                                         $('.col-5').children()[5].src= ruta;
                                         movimiento=movimiento+1; //incrementar un movimiento
                                         revisarTablero(6,5,5,5); }}); //revisar si hay otro trio, ademas guarda columna e hijo para devolver la jugada en caso de movimiento invalido

                                         $('.dulce45').droppable({accept: '.dulce55',
                                         drop: function(event, ui){$(ui.draggable).css({ width: "100%",  position: "relative",left: "auto", top: "auto" })
                                         ruta = $('.col-4').children()[5].src.substr(-11,11);// almacenamos en ruta la imagen de
                                         $('.col-4').children()[5].src= y;
                                         $('.col-5').children()[5].src= ruta;
                                         movimiento=movimiento+1; //incrementar un movimiento
                                         revisarTablero(4,5,5,5); }}); //revisar si hay otro trio, ademas guarda columna e hijo para devolver la jugada en caso de movimiento invalido

                                        break;

                                        case  'dulce56':
                                          $('.dulce55').droppable({accept: '.dulce56',
                                          drop: function(event, ui){$(ui.draggable).css({ width: "100%",  position: "relative",left: "auto", top: "auto" })
                                          ruta = $('.col-5').children()[5].src.substr(-11,11);// almacenamos en ruta la imagen de
                                          $('.col-5').children()[5].src= y;
                                          $('.col-5').children()[6].src= ruta;
                                          movimiento=movimiento+1; //incrementar un movimiento
                                          revisarTablero(5,5,5,6); }}); //revisar si hay otro trio, ademas guarda columna e hijo para devolver la jugada en caso de movimiento invalido


                                          $('.dulce66').droppable({accept: '.dulce56',
                                          drop: function(event, ui){$(ui.draggable).css({ width: "100%",  position: "relative",left: "auto", top: "auto" })
                                          ruta = $('.col-6').children()[6].src.substr(-11,11);// almacenamos en ruta la imagen de
                                          $('.col-6').children()[6].src= y;
                                          $('.col-5').children()[6].src= ruta;
                                          movimiento=movimiento+1; //incrementar un movimiento
                                          revisarTablero(6,6,5,6); }}); //revisar si hay otro trio, ademas guarda columna e hijo para devolver la jugada en caso de movimiento invalido

                                          $('.dulce46').droppable({accept: '.dulce56',
                                          drop: function(event, ui){$(ui.draggable).css({ width: "100%",  position: "relative",left: "auto", top: "auto" })
                                          ruta = $('.col-4').children()[6].src.substr(-11,11);// almacenamos en ruta la imagen de
                                          $('.col-4').children()[6].src= y;
                                          $('.col-5').children()[6].src= ruta;
                                          movimiento=movimiento+1; //incrementar un movimiento
                                          revisarTablero(4,6,5,6); }}); //revisar si hay otro trio, ademas guarda columna e hijo para devolver la jugada en caso de movimiento invalido

                                          break;

                                          case  'dulce60':
                                            $('.dulce70').droppable({accept: '.dulce60',
                                            drop: function(event, ui){$(ui.draggable).css({ width: "100%",  position: "relative",left: "auto", top: "auto" })
                                            ruta = $('.col-7').children()[0].src.substr(-11,11);// almacenamos en ruta la imagen de
                                            $('.col-7').children()[0].src= y;
                                            $('.col-6').children()[0].src= ruta;
                                            movimiento=movimiento+1; //incrementar un movimiento
                                            revisarTablero(7,0,6,0); }}); //revisar si hay otro trio, ademas guarda columna e hijo para devolver la jugada en caso de movimiento invalido

                                            $('.dulce61').droppable({accept: '.dulce60',
                                            drop: function(event, ui){$(ui.draggable).css({ width: "100%",  position: "relative",left: "auto", top: "auto" })
                                            ruta = $('.col-6').children()[1].src.substr(-11,11);// almacenamos en ruta la imagen de
                                            $('.col-6').children()[1].src= y;
                                            $('.col-6').children()[0].src= ruta;
                                            movimiento=movimiento+1; //incrementar un movimiento
                                            revisarTablero(6,1,6,0); }}); //revisar si hay otro trio, ademas guarda columna e hijo para devolver la jugada en caso de movimiento invalido

                                            $('.dulce50').droppable({accept: '.dulce60',
                                            drop: function(event, ui){$(ui.draggable).css({ width: "100%",  position: "relative",left: "auto", top: "auto" })
                                            ruta = $('.col-5').children()[0].src.substr(-11,11);// almacenamos en ruta la imagen de
                                            $('.col-5').children()[0].src= y;
                                            $('.col-6').children()[0].src= ruta;
                                            movimiento=movimiento+1; //incrementar un movimiento
                                            revisarTablero(5,0,6,0); }}); //revisar si hay otro trio, ademas guarda columna e hijo para devolver la jugada en caso de movimiento invalido

                                           break;


                                           case  'dulce61':
                                             $('.dulce60').droppable({accept: '.dulce61',
                                             drop: function(event, ui){$(ui.draggable).css({ width: "100%",  position: "relative",left: "auto", top: "auto" })
                                             ruta = $('.col-6').children()[0].src.substr(-11,11);// almacenamos en ruta la imagen de
                                             $('.col-6').children()[0].src= y;
                                             $('.col-6').children()[1].src= ruta;
                                             movimiento=movimiento+1; //incrementar un movimiento
                                             revisarTablero(6,0,6,1); }}); //revisar si hay otro trio, ademas guarda columna e hijo para devolver la jugada en caso de movimiento invalido

                                             $('.dulce62').droppable({accept: '.dulce61',
                                             drop: function(event, ui){$(ui.draggable).css({ width: "100%",  position: "relative",left: "auto", top: "auto" })
                                             ruta = $('.col-6').children()[2].src.substr(-11,11);// almacenamos en ruta la imagen de
                                             $('.col-6').children()[2].src= y;
                                             $('.col-6').children()[1].src= ruta;
                                             movimiento=movimiento+1; //incrementar un movimiento
                                             revisarTablero(6,2,6,1); }}); //revisar si hay otro trio, ademas guarda columna e hijo para devolver la jugada en caso de movimiento invalido

                                             $('.dulce71').droppable({accept: '.dulce61',
                                             drop: function(event, ui){$(ui.draggable).css({ width: "100%",  position: "relative",left: "auto", top: "auto" })
                                             ruta = $('.col-7').children()[1].src.substr(-11,11);// almacenamos en ruta la imagen de
                                             $('.col-7').children()[1].src= y;
                                             $('.col-6').children()[1].src= ruta;
                                             movimiento=movimiento+1; //incrementar un movimiento
                                             revisarTablero(7,1,6,1); }}); //revisar si hay otro trio, ademas guarda columna e hijo para devolver la jugada en caso de movimiento invalido

                                             $('.dulce51').droppable({accept: '.dulce61',
                                             drop: function(event, ui){$(ui.draggable).css({ width: "100%",  position: "relative",left: "auto", top: "auto" })
                                             ruta = $('.col-5').children()[1].src.substr(-11,11);// almacenamos en ruta la imagen de
                                             $('.col-5').children()[1].src= y;
                                             $('.col-6').children()[1].src= ruta;
                                             movimiento=movimiento+1; //incrementar un movimiento
                                             revisarTablero(5,1,6,1); }}); //revisar si hay otro trio, ademas guarda columna e hijo para devolver la jugada en caso de movimiento invalido

                                            break;


                                            case  'dulce62':
                                              $('.dulce61').droppable({accept: '.dulce62',
                                              drop: function(event, ui){$(ui.draggable).css({ width: "100%",  position: "relative",left: "auto", top: "auto" })
                                              ruta = $('.col-6').children()[1].src.substr(-11,11);// almacenamos en ruta la imagen de
                                              $('.col-6').children()[1].src= y;
                                              $('.col-6').children()[2].src= ruta;
                                              movimiento=movimiento+1; //incrementar un movimiento
                                              revisarTablero(6,1,6,2); }}); //revisar si hay otro trio, ademas guarda columna e hijo para devolver la jugada en caso de movimiento invalido

                                              $('.dulce63').droppable({accept: '.dulce62',
                                              drop: function(event, ui){$(ui.draggable).css({ width: "100%",  position: "relative",left: "auto", top: "auto" })
                                              ruta = $('.col-6').children()[3].src.substr(-11,11);// almacenamos en ruta la imagen de
                                              $('.col-6').children()[3].src= y;
                                              $('.col-6').children()[2].src= ruta;
                                              movimiento=movimiento+1; //incrementar un movimiento
                                              revisarTablero(6,3,6,2); }}); //revisar si hay otro trio, ademas guarda columna e hijo para devolver la jugada en caso de movimiento invalido

                                              $('.dulce52').droppable({accept: '.dulce62',
                                              drop: function(event, ui){$(ui.draggable).css({ width: "100%",  position: "relative",left: "auto", top: "auto" })
                                              ruta = $('.col-5').children()[2].src.substr(-11,11);// almacenamos en ruta la imagen de
                                              $('.col-5').children()[2].src= y;
                                              $('.col-6').children()[2].src= ruta;
                                              movimiento=movimiento+1; //incrementar un movimiento
                                              revisarTablero(5,2,6,2); }}); //revisar si hay otro trio, ademas guarda columna e hijo para devolver la jugada en caso de movimiento invalido

                                              $('.dulce72').droppable({accept: '.dulce62',
                                              drop: function(event, ui){$(ui.draggable).css({ width: "100%",  position: "relative",left: "auto", top: "auto" })
                                              ruta = $('.col-7').children()[2].src.substr(-11,11);// almacenamos en ruta la imagen de
                                              $('.col-7').children()[2].src= y;
                                              $('.col-6').children()[2].src= ruta;
                                              movimiento=movimiento+1; //incrementar un movimiento
                                              revisarTablero(7,2,6,2); }}); //revisar si hay otro trio, ademas guarda columna e hijo para devolver la jugada en caso de movimiento invalido

                                             break;


                                             case  'dulce63':
                                               $('.dulce62').droppable({accept: '.dulce63',
                                               drop: function(event, ui){$(ui.draggable).css({ width: "100%",  position: "relative",left: "auto", top: "auto" })
                                               ruta = $('.col-6').children()[2].src.substr(-11,11);// almacenamos en ruta la imagen de
                                               $('.col-6').children()[2].src= y;
                                               $('.col-6').children()[3].src= ruta;
                                               movimiento=movimiento+1; //incrementar un movimiento
                                               revisarTablero(6,2,6,3); }}); //revisar si hay otro trio, ademas guarda columna e hijo para devolver la jugada en caso de movimiento invalido

                                               $('.dulce64').droppable({accept: '.dulce63',
                                               drop: function(event, ui){$(ui.draggable).css({ width: "100%",  position: "relative",left: "auto", top: "auto" })
                                               ruta = $('.col-6').children()[4].src.substr(-11,11);// almacenamos en ruta la imagen de
                                               $('.col-6').children()[4].src= y;
                                               $('.col-6').children()[3].src= ruta;
                                               movimiento=movimiento+1; //incrementar un movimiento
                                               revisarTablero(6,4,6,3); }}); //revisar si hay otro trio, ademas guarda columna e hijo para devolver la jugada en caso de movimiento invalido

                                               $('.dulce73').droppable({accept: '.dulce63',
                                               drop: function(event, ui){$(ui.draggable).css({ width: "100%",  position: "relative",left: "auto", top: "auto" })
                                               ruta = $('.col-7').children()[3].src.substr(-11,11);// almacenamos en ruta la imagen de
                                               $('.col-7').children()[3].src= y;
                                               $('.col-6').children()[3].src= ruta;
                                               movimiento=movimiento+1; //incrementar un movimiento
                                               revisarTablero(7,3,6,3); }}); //revisar si hay otro trio, ademas guarda columna e hijo para devolver la jugada en caso de movimiento invalido

                                               $('.dulce53').droppable({accept: '.dulce63',
                                               drop: function(event, ui){$(ui.draggable).css({ width: "100%",  position: "relative",left: "auto", top: "auto" })
                                               ruta = $('.col-5').children()[3].src.substr(-11,11);// almacenamos en ruta la imagen de
                                               $('.col-5').children()[3].src= y;
                                               $('.col-6').children()[3].src= ruta;
                                               movimiento=movimiento+1; //incrementar un movimiento
                                               revisarTablero(5,3,6,3); }}); //revisar si hay otro trio, ademas guarda columna e hijo para devolver la jugada en caso de movimiento invalido

                                               break;


                                              case  'dulce64':
                                                $('.dulce63').droppable({accept: '.dulce64',
                                                drop: function(event, ui){$(ui.draggable).css({ width: "100%",  position: "relative",left: "auto", top: "auto" })
                                                ruta = $('.col-6').children()[3].src.substr(-11,11);// almacenamos en ruta la imagen de
                                                $('.col-6').children()[3].src= y;
                                                $('.col-6').children()[4].src= ruta;
                                                movimiento=movimiento+1; //incrementar un movimiento
                                                revisarTablero(6,3,6,4); }}); //revisar si hay otro trio, ademas guarda columna e hijo para devolver la jugada en caso de movimiento invalido

                                                $('.dulce65').droppable({accept: '.dulce64',
                                                drop: function(event, ui){$(ui.draggable).css({ width: "100%",  position: "relative",left: "auto", top: "auto" })
                                                ruta = $('.col-6').children()[5].src.substr(-11,11);// almacenamos en ruta la imagen de
                                                $('.col-6').children()[5].src= y;
                                                $('.col-6').children()[4].src= ruta;
                                                movimiento=movimiento+1; //incrementar un movimiento
                                                revisarTablero(6,5,6,4); }}); //revisar si hay otro trio, ademas guarda columna e hijo para devolver la jugada en caso de movimiento invalido

                                                $('.dulce74').droppable({accept: '.dulce64',
                                                drop: function(event, ui){$(ui.draggable).css({ width: "100%",  position: "relative",left: "auto", top: "auto" })
                                                ruta = $('.col-7').children()[4].src.substr(-11,11);// almacenamos en ruta la imagen de
                                                $('.col-7').children()[4].src= y;
                                                $('.col-6').children()[4].src= ruta;
                                                movimiento=movimiento+1; //incrementar un movimiento
                                                revisarTablero(7,4,6,4); }}); //revisar si hay otro trio, ademas guarda columna e hijo para devolver la jugada en caso de movimiento invalido

                                                $('.dulce54').droppable({accept: '.dulce64',
                                                drop: function(event, ui){$(ui.draggable).css({ width: "100%",  position: "relative",left: "auto", top: "auto" })
                                                ruta = $('.col-5').children()[4].src.substr(-11,11);// almacenamos en ruta la imagen de
                                                $('.col-5').children()[4].src= y;
                                                $('.col-6').children()[4].src= ruta;
                                                movimiento=movimiento+1; //incrementar un movimiento
                                                revisarTablero(5,4,6,4); }}); //revisar si hay otro trio, ademas guarda columna e hijo para devolver la jugada en caso de movimiento invalido

                                                break;


                                               case  'dulce65':
                                                 $('.dulce64').droppable({accept: '.dulce65',
                                                 drop: function(event, ui){$(ui.draggable).css({ width: "100%",  position: "relative",left: "auto", top: "auto" })
                                                 ruta = $('.col-6').children()[4].src.substr(-11,11);// almacenamos en ruta la imagen de
                                                 $('.col-6').children()[4].src= y;
                                                 $('.col-6').children()[5].src= ruta;
                                                 movimiento=movimiento+1; //incrementar un movimiento
                                                 revisarTablero(6,4,6,5); }}); //revisar si hay otro trio, ademas guarda columna e hijo para devolver la jugada en caso de movimiento invalido

                                                 $('.dulce66').droppable({accept: '.dulce65',
                                                 drop: function(event, ui){$(ui.draggable).css({ width: "100%",  position: "relative",left: "auto", top: "auto" })
                                                 ruta = $('.col-6').children()[6].src.substr(-11,11);// almacenamos en ruta la imagen de
                                                 $('.col-6').children()[6].src= y;
                                                 $('.col-6').children()[5].src= ruta;
                                                 movimiento=movimiento+1; //incrementar un movimiento
                                                 revisarTablero(6,6,6,5); }}); //revisar si hay otro trio, ademas guarda columna e hijo para devolver la jugada en caso de movimiento invalido

                                                 $('.dulce75').droppable({accept: '.dulce65',
                                                 drop: function(event, ui){$(ui.draggable).css({ width: "100%",  position: "relative",left: "auto", top: "auto" })
                                                 ruta = $('.col-7').children()[5].src.substr(-11,11);// almacenamos en ruta la imagen de
                                                 $('.col-7').children()[5].src= y;
                                                 $('.col-6').children()[5].src= ruta;
                                                 movimiento=movimiento+1; //incrementar un movimiento
                                                 revisarTablero(7,5,6,5); }}); //revisar si hay otro trio, ademas guarda columna e hijo para devolver la jugada en caso de movimiento invalido

                                                 $('.dulce55').droppable({accept: '.dulce65',
                                                 drop: function(event, ui){$(ui.draggable).css({ width: "100%",  position: "relative",left: "auto", top: "auto" })
                                                 ruta = $('.col-5').children()[5].src.substr(-11,11);// almacenamos en ruta la imagen de
                                                 $('.col-5').children()[5].src= y;
                                                 $('.col-6').children()[5].src= ruta;
                                                 movimiento=movimiento+1; //incrementar un movimiento
                                                 revisarTablero(5,5,6,5); }}); //revisar si hay otro trio, ademas guarda columna e hijo para devolver la jugada en caso de movimiento invalido

                                                break;

                                                case  'dulce66':
                                                  $('.dulce65').droppable({accept: '.dulce66',
                                                  drop: function(event, ui){$(ui.draggable).css({ width: "100%",  position: "relative",left: "auto", top: "auto" })
                                                  ruta = $('.col-6').children()[5].src.substr(-11,11);// almacenamos en ruta la imagen de
                                                  $('.col-6').children()[5].src= y;
                                                  $('.col-6').children()[6].src= ruta;
                                                  movimiento=movimiento+1; //incrementar un movimiento
                                                  revisarTablero(6,5,6,6); }}); //revisar si hay otro trio, ademas guarda columna e hijo para devolver la jugada en caso de movimiento invalido


                                                  $('.dulce76').droppable({accept: '.dulce66',
                                                  drop: function(event, ui){$(ui.draggable).css({ width: "100%",  position: "relative",left: "auto", top: "auto" })
                                                  ruta = $('.col-7').children()[6].src.substr(-11,11);// almacenamos en ruta la imagen de
                                                  $('.col-7').children()[6].src= y;
                                                  $('.col-6').children()[6].src= ruta;
                                                  movimiento=movimiento+1; //incrementar un movimiento
                                                  revisarTablero(7,6,6,6); }}); //revisar si hay otro trio, ademas guarda columna e hijo para devolver la jugada en caso de movimiento invalido

                                                  $('.dulce56').droppable({accept: '.dulce66',
                                                  drop: function(event, ui){$(ui.draggable).css({ width: "100%",  position: "relative",left: "auto", top: "auto" })
                                                  ruta = $('.col-5').children()[6].src.substr(-11,11);// almacenamos en ruta la imagen de
                                                  $('.col-5').children()[6].src= y;
                                                  $('.col-6').children()[6].src= ruta;
                                                  movimiento=movimiento+1; //incrementar un movimiento
                                                  revisarTablero(5,6,6,6); }}); //revisar si hay otro trio, ademas guarda columna e hijo para devolver la jugada en caso de movimiento invalido

                                                  break;

                                                  case  'dulce70':

                                                    $('.dulce71').droppable({accept: '.dulce70',
                                                    drop: function(event, ui){$(ui.draggable).css({ width: "100%",  position: "relative",left: "auto", top: "auto" })
                                                    ruta = $('.col-7').children()[1].src.substr(-11,11);// almacenamos en ruta la imagen de
                                                    $('.col-7').children()[1].src= y;
                                                    $('.col-7').children()[0].src= ruta;
                                                    movimiento=movimiento+1; //incrementar un movimiento
                                                    revisarTablero(7,1,7,0); }}); //revisar si hay otro trio, ademas guarda columna e hijo para devolver la jugada en caso de movimiento invalido

                                                    $('.dulce60').droppable({accept: '.dulce70',
                                                    drop: function(event, ui){$(ui.draggable).css({ width: "100%",  position: "relative",left: "auto", top: "auto" })
                                                    ruta = $('.col-6').children()[0].src.substr(-11,11);// almacenamos en ruta la imagen de
                                                    $('.col-6').children()[0].src= y;
                                                    $('.col-7').children()[0].src= ruta;
                                                    movimiento=movimiento+1; //incrementar un movimiento
                                                    revisarTablero(6,0,7,0); }}); //revisar si hay otro trio, ademas guarda columna e hijo para devolver la jugada en caso de movimiento invalido

                                                   break;


                                                   case  'dulce71':
                                                     $('.dulce70').droppable({accept: '.dulce71',
                                                     drop: function(event, ui){$(ui.draggable).css({ width: "100%",  position: "relative",left: "auto", top: "auto" })
                                                     ruta = $('.col-7').children()[0].src.substr(-11,11);// almacenamos en ruta la imagen de
                                                     $('.col-7').children()[0].src= y;
                                                     $('.col-7').children()[1].src= ruta;
                                                     movimiento=movimiento+1; //incrementar un movimiento
                                                     revisarTablero(7,0,7,1); }}); //revisar si hay otro trio, ademas guarda columna e hijo para devolver la jugada en caso de movimiento invalido

                                                     $('.dulce72').droppable({accept: '.dulce71',
                                                     drop: function(event, ui){$(ui.draggable).css({ width: "100%",  position: "relative",left: "auto", top: "auto" })
                                                     ruta = $('.col-7').children()[2].src.substr(-11,11);// almacenamos en ruta la imagen de
                                                     $('.col-7').children()[2].src= y;
                                                     $('.col-7').children()[1].src= ruta;
                                                     movimiento=movimiento+1; //incrementar un movimiento
                                                     revisarTablero(7,2,7,1); }}); //revisar si hay otro trio, ademas guarda columna e hijo para devolver la jugada en caso de movimiento invalido


                                                     $('.dulce61').droppable({accept: '.dulce71',
                                                     drop: function(event, ui){$(ui.draggable).css({ width: "100%",  position: "relative",left: "auto", top: "auto" })
                                                     ruta = $('.col-6').children()[1].src.substr(-11,11);// almacenamos en ruta la imagen de
                                                     $('.col-6').children()[1].src= y;
                                                     $('.col-7').children()[1].src= ruta;
                                                     movimiento=movimiento+1; //incrementar un movimiento
                                                     revisarTablero(6,1,7,1); }}); //revisar si hay otro trio, ademas guarda columna e hijo para devolver la jugada en caso de movimiento invalido

                                                    break;


                                                    case  'dulce72':
                                                      $('.dulce71').droppable({accept: '.dulce72',
                                                      drop: function(event, ui){$(ui.draggable).css({ width: "100%",  position: "relative",left: "auto", top: "auto" })
                                                      ruta = $('.col-7').children()[1].src.substr(-11,11);// almacenamos en ruta la imagen de
                                                      $('.col-7').children()[1].src= y;
                                                      $('.col-7').children()[2].src= ruta;
                                                      movimiento=movimiento+1; //incrementar un movimiento
                                                      revisarTablero(7,1,7,2); }}); //revisar si hay otro trio, ademas guarda columna e hijo para devolver la jugada en caso de movimiento invalido

                                                      $('.dulce73').droppable({accept: '.dulce72',
                                                      drop: function(event, ui){$(ui.draggable).css({ width: "100%",  position: "relative",left: "auto", top: "auto" })
                                                      ruta = $('.col-7').children()[3].src.substr(-11,11);// almacenamos en ruta la imagen de
                                                      $('.col-7').children()[3].src= y;
                                                      $('.col-7').children()[2].src= ruta;
                                                      movimiento=movimiento+1; //incrementar un movimiento
                                                      revisarTablero(7,3,7,2); }}); //revisar si hay otro trio, ademas guarda columna e hijo para devolver la jugada en caso de movimiento invalido

                                                      $('.dulce62').droppable({accept: '.dulce72',
                                                      drop: function(event, ui){$(ui.draggable).css({ width: "100%",  position: "relative",left: "auto", top: "auto" })
                                                      ruta = $('.col-6').children()[2].src.substr(-11,11);// almacenamos en ruta la imagen de
                                                      $('.col-6').children()[2].src= y;
                                                      $('.col-7').children()[2].src= ruta;
                                                      movimiento=movimiento+1; //incrementar un movimiento
                                                      revisarTablero(6,2,7,2); }}); //revisar si hay otro trio, ademas guarda columna e hijo para devolver la jugada en caso de movimiento invalido


                                                     break;


                                                     case  'dulce73':
                                                       $('.dulce72').droppable({accept: '.dulce73',
                                                       drop: function(event, ui){$(ui.draggable).css({ width: "100%",  position: "relative",left: "auto", top: "auto" })
                                                       ruta = $('.col-7').children()[2].src.substr(-11,11);// almacenamos en ruta la imagen de
                                                       $('.col-7').children()[2].src= y;
                                                       $('.col-7').children()[3].src= ruta;
                                                       movimiento=movimiento+1; //incrementar un movimiento
                                                       revisarTablero(7,2,7,3); }}); //revisar si hay otro trio, ademas guarda columna e hijo para devolver la jugada en caso de movimiento invalido

                                                       $('.dulce74').droppable({accept: '.dulce73',
                                                       drop: function(event, ui){$(ui.draggable).css({ width: "100%",  position: "relative",left: "auto", top: "auto" })
                                                       ruta = $('.col-7').children()[4].src.substr(-11,11);// almacenamos en ruta la imagen de
                                                       $('.col-7').children()[4].src= y;
                                                       $('.col-7').children()[3].src= ruta;
                                                       movimiento=movimiento+1; //incrementar un movimiento
                                                       revisarTablero(7,4,7,3); }}); //revisar si hay otro trio, ademas guarda columna e hijo para devolver la jugada en caso de movimiento invalido


                                                       $('.dulce63').droppable({accept: '.dulce73',
                                                       drop: function(event, ui){$(ui.draggable).css({ width: "100%",  position: "relative",left: "auto", top: "auto" })
                                                       ruta = $('.col-6').children()[3].src.substr(-11,11);// almacenamos en ruta la imagen de
                                                       $('.col-6').children()[3].src= y;
                                                       $('.col-7').children()[3].src= ruta;
                                                       movimiento=movimiento+1; //incrementar un movimiento
                                                       revisarTablero(6,3,7,3); }}); //revisar si hay otro trio, ademas guarda columna e hijo para devolver la jugada en caso de movimiento invalido

                                                       break;


                                                      case  'dulce74':
                                                        $('.dulce73').droppable({accept: '.dulce74',
                                                        drop: function(event, ui){$(ui.draggable).css({ width: "100%",  position: "relative",left: "auto", top: "auto" })
                                                        ruta = $('.col-7').children()[3].src.substr(-11,11);// almacenamos en ruta la imagen de
                                                        $('.col-7').children()[3].src= y;
                                                        $('.col-7').children()[4].src= ruta;
                                                        movimiento=movimiento+1; //incrementar un movimiento
                                                        revisarTablero(7,3,7,4); }}); //revisar si hay otro trio, ademas guarda columna e hijo para devolver la jugada en caso de movimiento invalido

                                                        $('.dulce75').droppable({accept: '.dulce74',
                                                        drop: function(event, ui){$(ui.draggable).css({ width: "100%",  position: "relative",left: "auto", top: "auto" })
                                                        ruta = $('.col-7').children()[5].src.substr(-11,11);// almacenamos en ruta la imagen de
                                                        $('.col-7').children()[5].src= y;
                                                        $('.col-7').children()[4].src= ruta;
                                                        movimiento=movimiento+1; //incrementar un movimiento
                                                        revisarTablero(7,5,7,4); }}); //revisar si hay otro trio, ademas guarda columna e hijo para devolver la jugada en caso de movimiento invalido


                                                        $('.dulce64').droppable({accept: '.dulce74',
                                                        drop: function(event, ui){$(ui.draggable).css({ width: "100%",  position: "relative",left: "auto", top: "auto" })
                                                        ruta = $('.col-6').children()[4].src.substr(-11,11);// almacenamos en ruta la imagen de
                                                        $('.col-6').children()[4].src= y;
                                                        $('.col-7').children()[4].src= ruta;
                                                        movimiento=movimiento+1; //incrementar un movimiento
                                                        revisarTablero(6,4,7,4); }}); //revisar si hay otro trio, ademas guarda columna e hijo para devolver la jugada en caso de movimiento invalido

                                                        break;


                                                       case  'dulce75':
                                                         $('.dulce74').droppable({accept: '.dulce75',
                                                         drop: function(event, ui){$(ui.draggable).css({ width: "100%",  position: "relative",left: "auto", top: "auto" })
                                                         ruta = $('.col-7').children()[4].src.substr(-11,11);// almacenamos en ruta la imagen de
                                                         $('.col-7').children()[4].src= y;
                                                         $('.col-7').children()[5].src= ruta;
                                                         movimiento=movimiento+1; //incrementar un movimiento
                                                         revisarTablero(7,4,7,5); }}); //revisar si hay otro trio, ademas guarda columna e hijo para devolver la jugada en caso de movimiento invalido

                                                         $('.dulce76').droppable({accept: '.dulce75',
                                                         drop: function(event, ui){$(ui.draggable).css({ width: "100%",  position: "relative",left: "auto", top: "auto" })
                                                         ruta = $('.col-7').children()[6].src.substr(-11,11);// almacenamos en ruta la imagen de
                                                         $('.col-7').children()[6].src= y;
                                                         $('.col-7').children()[5].src= ruta;
                                                         movimiento=movimiento+1; //incrementar un movimiento
                                                         revisarTablero(7,6,7,5); }}); //revisar si hay otro trio, ademas guarda columna e hijo para devolver la jugada en caso de movimiento invalido


                                                         $('.dulce65').droppable({accept: '.dulce75',
                                                         drop: function(event, ui){$(ui.draggable).css({ width: "100%",  position: "relative",left: "auto", top: "auto" })
                                                         ruta = $('.col-6').children()[5].src.substr(-11,11);// almacenamos en ruta la imagen de
                                                         $('.col-6').children()[5].src= y;
                                                         $('.col-7').children()[5].src= ruta;
                                                         movimiento=movimiento+1; //incrementar un movimiento
                                                         revisarTablero(6,5,7,5); }}); //revisar si hay otro trio, ademas guarda columna e hijo para devolver la jugada en caso de movimiento invalido

                                                        break;

                                                        case  'dulce76':
                                                          $('.dulce75').droppable({accept: '.dulce76',
                                                          drop: function(event, ui){$(ui.draggable).css({ width: "100%",  position: "relative",left: "auto", top: "auto" })
                                                          ruta = $('.col-7').children()[5].src.substr(-11,11);// almacenamos en ruta la imagen de
                                                          $('.col-7').children()[5].src= y;
                                                          $('.col-7').children()[6].src= ruta;
                                                          movimiento=movimiento+1; //incrementar un movimiento
                                                          revisarTablero(7,5,7,6); }}); //revisar si hay otro trio, ademas guarda columna e hijo para devolver la jugada en caso de movimiento invalido



                                                          $('.dulce66').droppable({accept: '.dulce76',
                                                          drop: function(event, ui){$(ui.draggable).css({ width: "100%",  position: "relative",left: "auto", top: "auto" })
                                                          ruta = $('.col-6').children()[6].src.substr(-11,11);// almacenamos en ruta la imagen de
                                                          $('.col-6').children()[6].src= y;
                                                          $('.col-7').children()[6].src= ruta;
                                                          movimiento=movimiento+1; //incrementar un movimiento
                                                          revisarTablero(6,6,7,6); }}); //revisar si hay otro trio, ademas guarda columna e hijo para devolver la jugada en caso de movimiento invalido

                                                          break;



            default:
            //alert('la x es: '+x);
            break;

  }
}
    $('#movimientos-text').html(movimiento);
}//fin droppables



function activarArrastre()
{
  for (i=1; i<=7; i++)
  {
    for(j=0; j<=6; j++)
    {
      $( '.dulce'+i+j ).draggable({
          revert:true
        })
      }
    }   //  $( '.dulce'+i+j ).draggable();
  }
     //activamos todos los dulces para ser arrastrados




function revisionLLenado()
{
  //var temporal='-'; //valor temporal para ir cambiando los que sean iguales
  //var aleatorio = 0;
  for (i=1; i<=7; i++) //se revisa y cambia primero las columnas y luego las filas
  {
    for (j=1; j<=5; j++)
    {
      if ($('.col-'+i).children()[j].src==$('.col-'+i).children()[j-1].src  &&
      $('.col-'+i).children()[j].src==$('.col-'+i).children()[j+1].src)
      {
      //  //console.log('iguales col: '+i+'row: '+j);
        aleatorio = parseInt(getRandomArbitrary(1, 5));
        temporal = 'image/'+aleatorio+'.png';
        //$('.col-'+i).children()[j].src='<img  src="image/'+temporal+'.png" class="elemento"/>';   //

          if (i>1) // ya que con i=1 cuando resta 1 no existe esta columna y no hace la validación
          {
        //    //console.log(temporal);
        //    //console.log($('.col-'+i).children()[j].src.substr(-11,11)); //sustrae los últimos 11 caracteres para compararlos con temporal y hacer la validación
           if ($('.col-'+i).children()[j].src.substr(-11,11) == temporal||
               $('.col-'+i).children()[j-1].src.substr(-11,11) == temporal  ||
               $('.col-'+(i-1)).children()[j].src.substr(-11,11) == temporal)
               {
                 j=j-1; //se devuelve hasta que se cumpla la condicion de que cambia el valor de la imagen para
                // //console.log('temporal dio igual a la posicion o la anterior arriba o izquierda');
                 //  $('.col-'+i).children()[j].src='<img  src="image/'+j // se vuelve a asignar la misma imagen para iterar por otra imagen aleatoria
                 // la posicion actual  para la anterior hacia arriba y anterior hacia la izquierda
               }
            else
            { // si no se cumple la condicion y es diferente la imagen asigna ese numero aleatorio a la posicion actual
            //  //console.log('no son iguales y se procede a cambiarla');
              $('.col-'+i).children()[j].src= "image/"+aleatorio+".png";
            }

          }
          else
          {
            if ($('.col-'+i).children()[j].src.substr(-11,11) == temporal||
                $('.col-'+i).children()[j-1].src.substr(-11,11) == temporal)
                {
                  j=j-1; //se devuelve hasta que se cumpla la condicion de que cambia el valor de la imagen para
              //    //console.log('temporal dio igual a la posicion o la anterior arriba o izquierda');
                  //  $('.col-'+i).children()[j].src='<img  src="image/'+j // se vuelve a asignar la misma imagen para iterar por otra imagen aleatoria
                  // la posicion actual  para la anterior hacia arriba y anterior hacia la izquierda
                }
             else
             { // si no se cumple la condicion y es diferente la imagen asigna ese numero aleatorio a la posicion actual
            //   //console.log('no son iguales y se procede a cambiarla');
               $('.col-'+i).children()[j].src="image/"+aleatorio+".png" //
             }

          }


      }
    }  //for J
  }  //for i // se terminan de revisar y cambiar las columnas, se procede con las filas
 // se proceden a cambiar las filas
  for (j=0; j<=6; j++) //se revisa y cambia primero las columnas y luego las filas
  {
    for (i=2; i<=6; i++)
    {
      if ($('.col-'+i).children()[j].src==$('.col-'+(i+1)).children()[j].src  &&
      $('.col-'+i).children()[j].src==$('.col-'+(i-1)).children()[j].src)
      {
      //  //console.log('iguales col: '+i+'row: '+j);
        aleatorio = parseInt(getRandomArbitrary(1, 5));
        temporal = 'image/'+aleatorio+'.png';
        //$('.col-'+i).children()[j].src='<img  src="image/'+temporal+'.png" class="elemento"/>';   //

          if (j>1) // ya que con j=1 cuando resta 1 no existe esta columna y no hace la validación
          {
        //    //console.log(temporal);
        //    //console.log($('.col-'+i).children()[j].src.substr(-11,11)); //sustrae los últimos 11 caracteres para compararlos con temporal y hacer la validación
           if ($('.col-'+i).children()[j].src.substr(-11,11) == temporal||
               $('.col-'+i).children()[j-1].src.substr(-11,11) == temporal  ||
               $('.col-'+(i-1)).children()[j].src.substr(-11,11) == temporal)
               {
                 i=i-1; //se devuelve hasta que se cumpla la condicion de que cambia el valor de la imagen para
          //       //console.log('temporal dio igual a la posicion o la anterior arriba o izquierda');
                 //  $('.col-'+i).children()[j].src='<img  src="image/'+j // se vuelve a asignar la misma imagen para iterar por otra imagen aleatoria
                 // la posicion actual  para la anterior hacia arriba y anterior hacia la izquierda
               }
            else
            { // si no se cumple la condicion y es diferente la imagen asigna ese numero aleatorio a la posicion actual
        //      //console.log('no son iguales y se procede a cambiarla');
              $('.col-'+i).children()[j].src= "image/"+aleatorio+".png";
            }

          }
          else
          {
            if ($('.col-'+i).children()[j].src.substr(-11,11) == temporal||
                $('.col-'+(i-1)).children()[j].src.substr(-11,11) == temporal)
                {
                  j=j-1; //se devuelve hasta que se cumpla la condicion de que cambia el valor de la imagen para
              //    //console.log('temporal dio igual a la posicion o la anterior arriba o izquierda');
                  //  $('.col-'+i).children()[j].src='<img  src="image/'+j // se vuelve a asignar la misma imagen para iterar por otra imagen aleatoria
                  // la posicion actual  para la anterior hacia arriba y anterior hacia la izquierda
                }
             else
             { // si no se cumple la condicion y es diferente la imagen asigna ese numero aleatorio a la posicion actual
            //   //console.log('no son iguales y se procede a cambiarla');
              $('.col-'+i).children()[j].src="image/"+aleatorio+".png"
            }

          }


      }
    }  //for J
  }  //for i se termina de revisar las filas



} //fin función llenado


function llenado()  //para rellenar el tablero de dulces
{
  for (j=1; j<=7; j++)
  {
    for (i=0; i<=6; i++)
    {
    var claseNueva = 'dulce'+j+i; //se asigna una clase nueva para identificar cada dulce
    $('.col-'+j).append('<img class="elemento '+claseNueva+'"" src="image/'+parseInt(getRandomArbitrary(1, 5))+'.png"  />');
    }
  }
}



function titulo()
{
if ($('.main-titulo').css("color")=="rgb(220, 255, 14)")
{$('.main-titulo').css("color","white")}
else {
  $('.main-titulo').css("color","rgb(220, 255, 14)");

}
}

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}


function timer1(){
  if (correrTimer==true){
  if (segundos == 0)
  {minutos=minutos-1;
  segundos = 60}
  segundos=segundos-1;

  if (segundos<=9)
  $('#timer').html('0'+minutos + ':0'+segundos);
  else {
    $('#timer').html('0'+minutos + ':'+segundos);

  }
  if (minutos ==0 && segundos == 0)
  {
    correrTimer = false;
    $('.panel-tablero').slideUp(1000);
    $('.time').slideUp(1000);
    $('.panel-score').width(1000);
  }
  }
}

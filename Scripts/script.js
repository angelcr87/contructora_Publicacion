$(document).ready(function () {

 

    


    



    //SELECT2
    //$(document).ready(function () {
        $(".js-example-basic-multiple").select2();
    //});

    //END SELECT2
    
    // empieza script para visor de pdf

    $('a.media').media({ width: 500, height: 400 });

    // termina script para lector de pdf
    

    // $('.nav').hide();
    $("#btnCargaImagen").prop("disabled", true);
    

    $('#btnSelectImagen').bind('click', function (e) {
        var file = $('#btnSelectImagen').val;

        if (file != "") {

            //$("#btnCargaImagen").prop("disabled", false);
            $("#btnCargaImagen").removeAttr("disabled");
        }
        else
        {
            $("#btnCargaImagen").prop("disabled", true);
        }

    });

    $("#confirmarPass").click(function() {

        if ($("password").val != $("#password2").val) {
            alert("La contraseñas no coinciden");
        }
    });
    
   
    $('#listaSitios').DataTable();
    $('#listaRevistas').DataTable();
    $('#categoriaRevistas').DataTable();
    $('#listaCatBiblioteca').DataTable();
    $('#listaBiblioteca').DataTable();
    //$('#listaDirectorio').DataTable();
    $('#listaDirectorio').DataTable();
    $('#listaSlider').DataTable();
    $('#listaCategoriaPost').DataTable();
    $('#listaConvenios').DataTable();
    $('#listaCategoriaConvenios').DataTable();
    $('#listaEventos').DataTable();

    //valida contraseñas

    

    //end valida contraseñas

    
    
    
    $('[data-fancybox="gallery"]').fancybox({
        buttons: ['close'],
        protect: true,
        modal: false,
        arrows: false,
        keyboard: false
    });

    $('.slider').bxSlider({
		mode: 'fade',
		captions: true,
		auto: true,
		autoControls: false,
		stopAutoOnClick: true,
		pager: false
    });

    

    
    


    //$('#comentar').click(function (e) {

    //    var coche = {
    //        comment: $('#comment').val().trim(),
    //        postId: $('#postId').val()
    //    };

    //    $.ajax({
    //        type: "POST",
    //        url: "http://localhost/comunidadDIN/comentarios",
    //        content: "application/json; charset=utf-8",
    //        dataType: "json",
    //        data: JSON.stringify(data),
    //        success: function (d) {
    //            if (d.success == true)
    //                alert('Has introducido un nuevo comentario!!');
    //            else { }
    //        },
    //        error: function (xhr, textStatus, errorThrown) {
    //            alert('Error!!');
    //        }
    //    });
    //});


  // $(function() {
  //   $('a[href*="#"]:not([href="#"])').click(function() {
  //     if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
  //       var target = $(this.hash);
  //       target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
  //       if (target.length) {
  //         $('html, body').animate({
  //           scrollTop: target.offset().top
  //         }, 1000);
  //         return false;
  //       }
  //     }
  //   });
  // });


    

    
  });

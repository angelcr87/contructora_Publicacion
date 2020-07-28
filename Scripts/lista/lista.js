$(document).ready(function () {
    //ConsultaOrganigrama();
    //Org();


    //DIAGRAMA ADMINISTRACION
    var srcAdmon = {

        'name': 'Administracion',
        'title': 'Sub-Gerencia Admin',
        'children': [
            {
                'name': 'Contabilidad', 'title': 'Jefe de Contabilidad',
                'children': [
                    { 'name': 'Contabilidad', 'title': 'Contador A' },
                    {
                        'name': 'Contabilidad', 'title': 'Contador A',
                        'children': [

                            { 'name': 'Contabilidad', 'title': 'Auxiliar Contable' }
                        ]
                    }
                ]
                
            

            },
            {
                'name': 'Bodega', 'title': 'Jefe de Bodega',
                'children': [
                    { 'name': 'Bodega', 'title': 'Chofer 1' },
                    { 'name': 'Bodega', 'title': 'Bodeguero' },
                    { 'name': 'Bodega', 'title': 'Chofer 2' }
                ]
            },
            {
                'name': 'Administracion', 'title': 'Asistente Admon'
            },
            {
                'name': 'Administracion', 'title': 'Asistente Gcia'
            },
            {
                'name': 'Administracion', 'title': 'Asistente Admon 1'
            },
            {
                'name': 'Administracion', 'title': 'Asistente Admon 2'
            },
            {
                'name': 'Administracion', 'title': 'Asistente Admon 1'
            }
        ]
    }



   var ocAdmin = $('#chart-administracion').orgchart({
        'visibleLevel': 2,
        'pan': true,
        'data': srcAdmon,
        'nodeContent': 'title',
        'createNode': function ($node, data) {
            $node.on('click', function (event) {
                if (!$(event.target).is('.edge, .toggleBtn')) {
                    var $this = $(this);
                    var $chart = $this.closest('.orgchart');
                    var newX = window.parseInt(($chart.outerWidth(true) / 2) - ($this.offset().left - $chart.offset().left) - ($this.outerWidth(true) / 2));
                    var newY = window.parseInt(($chart.outerHeight(true) / 2) - ($this.offset().top - $chart.offset().top) - ($this.outerHeight(true) / 2));
                    $chart.css('transform', 'matrix(1, 0, 0, 1, ' + newX + ', ' + newY + ')');
                }
            });
        }
     });

   

    $(window).resize(function () {
        var width = $(window).width();
        if (width > 576) {
            ocAdmin.init({ 'verticalLevel': undefined });
        } else {
            ocAdmin.init({ 'verticalLevel': 2 });
        }
    });


    //DIAGRAMA OPERACIONES

    var srcOperaciones = {
        'name': 'Operaciones',
        'title': 'Sub-Gerencia Ope',
        'children': [
            { 'name': 'Operaciones', 'title': 'Valuador de Autos' },
            { 'name': 'Operaciones', 'title': 'Bodega Central' },
            {
                'name': 'Operaciones', 'title': 'Gerente de Suc.',
                'children': [
                    { 'name': 'Operaciones', 'title': 'Encargado de Suc.' },
                    { 'name': 'Operaciones', 'title': 'Encargado de Suc.' },
                    { 'name': 'Operaciones', 'title': 'Encargado de Suc.' },
                    { 'name': 'Operaciones', 'title': 'Encargado de Suc.' }
                ]
            },
            {
                'name': 'Operaciones', 'title': 'Gerente de Suc.',
                'children': [
                    { 'name': 'Operaciones', 'title': 'Encargado de Suc.' },
                    { 'name': 'Operaciones', 'title': 'Encargado de Suc.' },
                    { 'name': 'Operaciones', 'title': 'Encargado de Suc.' }
                    
                ]

            },
            {
                'name': 'Operaciones', 'title': 'Gerente de Suc.',
                'children': [
                    { 'name': 'Operaciones', 'title': 'Encargado de Suc.' },
                    { 'name': 'Operaciones', 'title': 'Encargado de Suc.' },
                    { 'name': 'Operaciones', 'title': 'Encargado de Suc.' }
                    
                ]

            },
            {
                'name': 'Operaciones', 'title': 'Gerente de Suc.',
                'children': [
                    { 'name': 'Operaciones', 'title': 'Encargado de Suc.' },
                    { 'name': 'Operaciones', 'title': 'Encargado de Suc.' },
                    { 'name': 'Operaciones', 'title': 'Encargado de Suc.' },
                    { 'name': 'Operaciones', 'title': 'Encargado de Suc.' }
                ]
            },
            { 'name': 'Operaciones', 'title': 'Encargado A' },
            { 'name': 'Operaciones', 'title': 'Encargado A' },
            { 'name': 'Operaciones', 'title': 'Encargado A' },
            { 'name': 'Operaciones', 'title': 'Encargado A' }

        ]

    }


    var ocOpe = $('#chart-operaciones').orgchart({
        'visibleLevel': 2,
        'pan': true,
        'data': srcOperaciones,
        'nodeContent': 'title',
        'createNode': function ($node, data) {
            $node.on('click', function (event) {
                if (!$(event.target).is('.edge, .toggleBtn')) {
                    var $this = $(this);
                    var $chart = $this.closest('.orgchart');
                    var newX = window.parseInt(($chart.outerWidth(true) / 2) - ($this.offset().left - $chart.offset().left) - ($this.outerWidth(true) / 2));
                    var newY = window.parseInt(($chart.outerHeight(true) / 2) - ($this.offset().top - $chart.offset().top) - ($this.outerHeight(true) / 2));
                    $chart.css('transform', 'matrix(1, 0, 0, 1, ' + newX + ', ' + newY + ')');
                }
            });
        }
    });



    $(window).resize(function () {
        var width = $(window).width();
        if (width > 576) {
            ocOpe.init({ 'verticalLevel': undefined });
        } else {
            ocOpe.init({ 'verticalLevel': 2 });
        }
    });



    //DIAGRAMAS PROGRAMACION

    var srcProg = {

        'name': 'Programacion',
        'title': 'Sub-Gerencia de Sistemas',
        'children': [
            { 'name': 'Programacion', 'title': 'Programador' },
            { 'name': 'Programacion', 'title': 'Auxiliar - Programador' },

            {
                'name': 'Soporte Tecnico', 'title': 'Jefe de Soporte Tecnico',
                'children': [
                    { 'name': 'Soporte Tecnico', 'title': 'Auxiliar - Soporte' },
                    {
                        'name': 'Monitoreo', 'title': 'Jefe de Monitoreo',
                        'children': [
                            { 'name': 'Monitoreo', 'title': 'Auxiliares de Monitoreo' }

                        ]

                    }

                ]

            },
            { 'name': 'Programacion', 'title': 'Programador Externo' },
            { 'name': 'Programacion', 'title': 'Programador Externo' },
            { 'name': 'Programacion', 'title': 'Programador Externo' },
            { 'name': 'Programacion', 'title': 'Programador Externo' }

        ]

    }

    var ocProg = $('#chart-programacion').orgchart({
        'visibleLevel': 2,
        'pan': true,
        'data': srcProg,
        'nodeContent': 'title',
        'createNode': function ($node, data) {
            $node.on('click', function (event) {
                if (!$(event.target).is('.edge, .toggleBtn')) {
                    var $this = $(this);
                    var $chart = $this.closest('.orgchart');
                    var newX = window.parseInt(($chart.outerWidth(true) / 2) - ($this.offset().left - $chart.offset().left) - ($this.outerWidth(true) / 2));
                    var newY = window.parseInt(($chart.outerHeight(true) / 2) - ($this.offset().top - $chart.offset().top) - ($this.outerHeight(true) / 2));
                    $chart.css('transform', 'matrix(1, 0, 0, 1, ' + newX + ', ' + newY + ')');
                }
            });
        }
    });



    $(window).resize(function () {
        var width = $(window).width();
        if (width > 576) {
            ocProg.init({ 'verticalLevel': undefined });
        } else {
            ocProg.init({ 'verticalLevel': 2 });
        }
    });



    //DIAGRAMAS CONTRALORIA

    var srcCont = {

        'name': 'Contraloria',
        'title': 'Sub-Gerencia Contraloria',
        'children': [
            {
                'name': 'Contraloria', 'title': 'Jefe de Auditoria',
                'children': [

                    { 'name': 'Contraloria', 'title': 'Auditor Senior' },
                    { 'name': 'Contraloria', 'title': 'Auditor' },
                    { 'name': 'Contraloria', 'title': 'Auditor' },
                    { 'name': 'Contraloria', 'title': 'Auditor' },
                    { 'name': 'Contraloria', 'title': 'Auditor' },
                    { 'name': 'Contraloria', 'title': 'Auditor Inventarista' }

                ]
            }

        ]
    }


    var ocCont = $('#chart-contraloria').orgchart({
        'visibleLevel': 3,
        'pan': true,
        'data': srcCont,
        'nodeContent': 'title',
        'createNode': function ($node, data) {
            $node.on('click', function (event) {
                if (!$(event.target).is('.edge, .toggleBtn')) {
                    var $this = $(this);
                    var $chart = $this.closest('.orgchart');
                    var newX = window.parseInt(($chart.outerWidth(true) / 2) - ($this.offset().left - $chart.offset().left) - ($this.outerWidth(true) / 2));
                    var newY = window.parseInt(($chart.outerHeight(true) / 2) - ($this.offset().top - $chart.offset().top) - ($this.outerHeight(true) / 2));
                    $chart.css('transform', 'matrix(1, 0, 0, 1, ' + newX + ', ' + newY + ')');
                }
            });
        }
    });


    $(window).resize(function () {
        var width = $(window).width();
        if (width > 576) {
            ocCont.init({ 'verticalLevel': undefined });
        } else {
            ocCont.init({ 'verticalLevel': 2 });
        }
    });



    //DIAGRAMAS MERCADOTECNIA

    var srcMerc = {

        'name': 'Mercadotecnia',
        'title': 'Sub-Gerencia de Mercadotecnia',
        'children': [
            {
                'name': 'Mercadotecnia', 'title': 'Coordinadora de Mercadotecnia',
                'children': [
                    { 'name': 'Mercadotecnia', 'title': 'Aux. de Mercadotecnia' }
                ]
            },
            { 'name': 'Mercadotecnia', 'title': 'Ventas en Linea' },
            {
                'name': 'Mercadotecnia', 'title': 'Analista de Articulos',
                'children': [
                    { 'name': 'Mercadotecnia', 'title': 'Aux. Analista' }
                ]

            }
        ]

    }

    var ocMerc = $('#chart-mercadotecnia').orgchart({
        'visibleLevel': 3,
        'pan': true,
        'data': srcMerc,
        'nodeContent': 'title',
        'createNode': function ($node, data) {
            $node.on('click', function (event) {
                if (!$(event.target).is('.edge, .toggleBtn')) {
                    var $this = $(this);
                    var $chart = $this.closest('.orgchart');
                    var newX = window.parseInt(($chart.outerWidth(true) / 2) - ($this.offset().left - $chart.offset().left) - ($this.outerWidth(true) / 2));
                    var newY = window.parseInt(($chart.outerHeight(true) / 2) - ($this.offset().top - $chart.offset().top) - ($this.outerHeight(true) / 2));
                    $chart.css('transform', 'matrix(1, 0, 0, 1, ' + newX + ', ' + newY + ')');
                }
            });
        }
    });


    $(window).resize(function () {
        var width = $(window).width();
        if (width > 576) {
            ocMerc.init({ 'verticalLevel': undefined });
        } else {
            ocMerc.init({ 'verticalLevel': 2 });
        }
    });


});

//function Org()
//{
//    var ramas = "";
//    var rm = "";
//    $.ajax({
//        type: "POST",
//        url: "../organigramas/Jsonlista/",
//        success: function (result) {
//            if (result.length < 1) {
//                $("#divListaOrganigrama").html("");
//            } else {

//                var contador = 0;
//                var ramas = "";

//                result.forEach(function(item) {

//                    if (contador == 0) {
//                        ramas += '{id:' + item.idOrganigrama +', Departamento:'+ item.departamento +', Puesto:'+item.Puesto+'},';
//                    }
//                    else
//                    {
//                        if (contador < result.length - 1)
//                        {
//                            ramas += '{id: '+ item.idOrganigrama +', pid:'+ item.idPadreOrganigrama +', Departamento:'+ item.departamento +', Puesto:'+ item.Puesto +'},';
//                        }
//                        else
//                        {
//                            ramas += '{id:'+ item.idOrganigrama +', pid:'+ item.idPadreOrganigrama +', Departamento:'+ item.departamento +', Puesto:'+ item.Puesto +'}';
//                        }
//                    }

//                    contador ++;
//                });
//                  rm = JSON.stringify(ramas);                
//                  org2(rm);
//            }
//        }
//    });

    

    
//}


////balkangraph
//function Org2( ramas) {

//    var chart = new OrgChart(document.getElementById("tree"), {
//        mouseScrool: OrgChart.action.none,
//        template: "olivia",
//        enableDragDrop: true,
//        nodeMenu: {
//            details: { text: "Details" },
//            edit: { text: "Edit" },
//            add: { text: "Add" },
//            remove: { text: "Remove" }
//        },
//        nodeContextMenu: {
//            edit: { text: "Edit", icon: OrgChart.icon.edit(18, 18, '#039BE5') },
//            add: { text: "Add", icon: OrgChart.icon.add(18, 18, '#FF8304') }
//        },
//        dragDropMenu: {
//            addInGroup: { text: "Add in group" },
//            addAsChild: { text: "Add as child" }
//        },
//        menu: {
//            pdf: { text: "Export PDF" },
//            png: { text: "Export PNG" },
//            svg: { text: "Export SVG" },
//            csv: { text: "Export CSV" }
//        },
//        nodeBinding: {
//            field_0: "departamento",
//            field_1: "puesto",

//        },
//        nodes: [ramas]
//        //nodes: [
//        //    { id: 1, name: "Billy Moore", title: "CEO", img: "https://cdn.balkan.app/shared/2.jpg" },
//        //    { id: 2, pid: 1, name: "Billie Rose", title: "Dev Team Lead", img: "https://cdn.balkan.app/shared/5.jpg" },
//        //    { id: 3, pid: 1, name: "Glenn Bell", title: "HR", img: "https://cdn.balkan.app/shared/10.jpg" },
//        //    { id: 4, pid: 1, name: "Blair Francis", title: "HR", img: "https://cdn.balkan.app/shared/11.jpg" },

//        //    { id: 5, pid: 3, name: "Skye Terrell", title: "Manager", img: "https://cdn.balkan.app/shared/12.jpg" },
//        //    { id: 6, pid: 3, name: "Jordan Harris", title: "JS Developer", img: "https://cdn.balkan.app/shared/6.jpg" },
//        //    { id: 7, pid: 3, name: "Will Woods", title: "JS Developer", img: "https://cdn.balkan.app/shared/7.jpg" }
//        //]
//    });

//}


//function ConsultaOrganigrama() {
   
//    $.ajax({
//        type: "POST",
//        url: "../organigramas/Jsonlista/",
//        success: function (result) {
//            if (result.length < 1) {
//                $("#divListaOrganigrama").html("");
//            } else {
//                //$("#divListaOrganigrama").html("");
//                //var tableHtml = '';
//                //tableHtml += '<table class = "table table-striped" witdh = "100%">';
//                //tableHtml += '<tr style = "border-bottom: 3px solid #ccc;">';
//                //tableHtml += '<th>idOrganigrama</th>';
//                //tableHtml += '<th>idPadreOrganigrama</th>';
//                //tableHtml += '<th>Puesto</th>';
//                //tableHtml += '<th>departamento</th>';
//                //tableHtml += '</tr>'

//                //result.forEach(function (item) {
//                //    tableHtml += '<tr>';
//                //    tableHtml += '<td>' + item.idOrganigrama + '</td>';
//                //    tableHtml += '<td>' + item.idPadreOrganigrama + '</td>';
//                //    tableHtml += '<td>' + item.Puesto + '</td>';
//                //    tableHtml += '<td>' + item.departamento + '</td>';
//                //    tableHtml += '</tr>';
//                //});

//                //tableHtml += '</table>';

//                //$("#divListaOrganigrama").html(tableHtml);

//                //result.forEach(function(item) {

//                //      {id: item.idOrganigrama, pid: item.idPadreOrganigrama, Departamento: item.departamento, Puesto: item.Puesto}

//                // });
//                //var contador = 0;
//                //var ramas = "";
                
//                //result.forEach(function(item) {

//                //    if (contador == 0) {
//                //        ramas += '{id:' + item.idOrganigrama +', Departamento:'+ item.departamento +', Puesto:'+item.Puesto+'},';
//                //    }
//                //    else
//                //    {
//                //        if (contador < result.length - 1)
//                //        {
//                //            ramas += '{id: '+ item.idOrganigrama +', pid:'+ item.idPadreOrganigrama +', Departamento:'+ item.departamento +', Puesto:'+ item.Puesto +'},';
//                //        }
//                //        else
//                //        {
//                //            ramas += '{id:'+ item.idOrganigrama +', pid:'+ item.idPadreOrganigrama +', Departamento:'+ item.departamento +', Puesto:'+ item.Puesto +'}';
//                //        }
//                //    }

//                //    contador ++;
//                //});
//                // var rm = JSON.stringify(ramas);
//                var chart = new OrgChart(document.getElementById("tree2"), {
//                    mouseScrool: OrgChart.action.none,
//                    scaleInitial: OrgChart.match.boundary,
//                    menu: {
//                        pdf: { text: "Export PDF" },
//                        png: { text: "Export PNG" },
//                        svg: { text: "Export SVG" },
//                        csv: { text: "Export CSV" }
//                    },
//                    nodeMenu: {
//                        pdf: { text: "Export PDF" },
//                        png: { text: "Export PNG" },
//                        svg: { text: "Export SVG" }
//                    },
//                    collapse: {
//                        level: 2,
//                        allChildren: true
//                    },
//                    nodeBinding: {
//                        field_0: "departamento",
//                        field_1: "puesto",

//                    },
//                    nodes: JSON.stringify(result)
//                    //nodes: [
                            
//                    //            result
                                                            
                               
//                    //        ]
//                });
//            }
//        }
        
//    });
//}


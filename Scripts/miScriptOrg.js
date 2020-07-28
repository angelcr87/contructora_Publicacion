//$(document).ready(function () {
////    var datos;
////    $.ajax({
////        url: "~/Home/organigrama"
        
////    }).done(function (data) {
////        datos = data;

////    }).fail(function (){

    
////})

//        var chart = new OrgChart(document.getElementById("tree"), {
//            mouseScrool: OrgChart.action.none,
//            scaleInitial: OrgChart.match.boundary,

//            template: "olivia",
//            enableDragDrop: true,
//            nodeMenu: {
//                details: { text: "Details" },
//                edit: { text: "Edit" },
//                add: { text: "Add" },
//                remove: { text: "Remove" }
//            },
//            nodeContextMenu: {
//                edit: { text: "Edit", icon: OrgChart.icon.edit(18, 18, '#039BE5') },
//                add: { text: "Add", icon: OrgChart.icon.add(18, 18, '#FF8304') }
//            },
//            dragDropMenu: {
//                addInGroup: { text: "Add in group" },
//                addAsChild: { text: "Add as child" }
//            },


//            menu: {
//                pdf: { text: "Export PDF" },
//                png: { text: "Export PNG" },
//                svg: { text: "Export SVG" },
//                csv: { text: "Export CSV" }
//            },
//            nodeMenu: {
//                pdf: { text: "Export PDF" },
//                png: { text: "Export PNG" },
//                svg: { text: "Export SVG" }
//            },
//            collapse: {
//                level: 2,
//                allChildren: true
//            },
//            nodeBinding: {
//                field_0: "Nombre",
//                field_1: "Cargo",
//                img_0: "img"
//            },

//            nodes: [
//                //datos
//                //DIRECTOR
//                { id: 1, Nombre: "Billy Moore", Cargo: "DIRECCI\u00D3N GENERAL", img: "https://png.pngtree.com/svg/20161110/the_avatar_man_778009.png" },
//                //GERENCIAS HIJOS DEL DIRECTOR
//                { id: 2, pid: 1, Nombre: "Billie Rose", Cargo: "SUB GERENCIA R.H.", img: "https://png.pngtree.com/svg/20161110/the_avatar_man_778009.png" },
//                { id: 3, pid: 1, Nombre: "Glenn Bell", Cargo: "SUB GERENCIA AUDITORÍA", img: "https://png.pngtree.com/svg/20161110/the_avatar_man_778009.png" },
//                { id: 4, pid: 1, Nombre: "Blair Francis", Cargo: "GERENCIA OPERACIONES", img: "https://png.pngtree.com/svg/20161110/the_avatar_man_778009.png" },
//                { id: 5, pid: 1, Nombre: "Blair Francis", Cargo: "ASISTENTE DE DIRECCIÓN", img: "https://png.pngtree.com/svg/20161110/the_avatar_man_778009.png" },
//                { id: 6, pid: 1, Nombre: "Blair Francis", Cargo: "SUB GERENCIA ADMINISTRATIVO", img: "https://png.pngtree.com/svg/20161110/the_avatar_man_778009.png" },
//                { id: 7, pid: 1, Nombre: "Blair Francis", Cargo: "JEFATURA DE MKT", img: "https://png.pngtree.com/svg/20161110/the_avatar_man_778009.png" },

//                // HIJOS DE GERENCIA DE R.H.
//                { id: 8, pid: 2, Nombre: "Blair Francis", Cargo: "RECLUTAMIENTO", img: "https://png.pngtree.com/svg/20161110/the_avatar_man_778009.png" },
//                { id: 9, pid: 2, Nombre: "Blair Francis", Cargo: "CAPACITACIÓN", img: "https://png.pngtree.com/svg/20161110/the_avatar_man_778009.png" },
//                { id: 10, pid: 2, Nombre: "Blair Francis", Cargo: "NOMINISTA", img: "https://png.pngtree.com/svg/20161110/the_avatar_man_778009.png" },

//                //HIJOS DE SUBGERENCIA DE AUDITORIA
//                { id: 11, pid: 3, Nombre: "Blair Francis", Cargo: "CORD. AUDITORÍA EN OPERACIONES", img: "https://png.pngtree.com/svg/20161110/the_avatar_man_778009.png" },
//                { id: 12, pid: 3, Nombre: "Blair Francis", Cargo: "AUDITOR ADMINISTRATIVO", img: "https://png.pngtree.com/svg/20161110/the_avatar_man_778009.png" },
//                { id: 13, pid: 3, Nombre: "Blair Francis", Cargo: "AUDITOR SOFOM", img: "https://png.pngtree.com/svg/20161110/the_avatar_man_778009.png" },
//                { id: 14, pid: 11, Nombre: "Blair Francis", Cargo: "AUDITOR JUNIOR", img: "https://png.pngtree.com/svg/20161110/the_avatar_man_778009.png" },
//                { id: 15, pid: 12, Nombre: "Blair Francis", Cargo: "AUDITOR ADMINISTRATIVO JUNIOR", img: "https://png.pngtree.com/svg/20161110/the_avatar_man_778009.png" },

//                //HIJOS DE GERENCIA DE OPERACIONES
//                { id: 16, pid: 4, Nombre: "Blair Francis", Cargo: "GERENTE DE ZONA", img: "https://png.pngtree.com/svg/20161110/the_avatar_man_778009.png" },
//                { id: 17, pid: 4, Nombre: "Blair Francis", Cargo: "GERENTE DE SUCURSAL", img: "https://png.pngtree.com/svg/20161110/the_avatar_man_778009.png" },
//                { id: 18, pid: 4, Nombre: "Blair Francis", Cargo: "SUPERVISOR ZONA", img: "https://png.pngtree.com/svg/20161110/the_avatar_man_778009.png" },
//                { id: 19, pid: 4, Nombre: "Blair Francis", Cargo: "ANALISTA DE JOYERÍA", img: "https://png.pngtree.com/svg/20161110/the_avatar_man_778009.png" },
//                { id: 20, pid: 4, Nombre: "Blair Francis", Cargo: "JEFE DE PROGRAMACIÓN", img: "https://png.pngtree.com/svg/20161110/the_avatar_man_778009.png" },


//                //HIJOS DE GERENTE DE ZONA
//                { id: 21, pid: 16, Nombre: "Blair Francis", Cargo: "ENCARGADO DE SUCURUSAL", img: "https://png.pngtree.com/svg/20161110/the_avatar_man_778009.png" },
//                { id: 22, pid: 21, Nombre: "Blair Francis", Cargo: "VALUADOR A", img: "https://png.pngtree.com/svg/20161110/the_avatar_man_778009.png" },
//                { id: 23, pid: 21, Nombre: "Blair Francis", Cargo: "VALUADOR B", img: "https://png.pngtree.com/svg/20161110/the_avatar_man_778009.png" },
//                { id: 24, pid: 21, Nombre: "Blair Francis", Cargo: "CAJERO", img: "https://png.pngtree.com/svg/20161110/the_avatar_man_778009.png" },
//                { id: 25, pid: 21, Nombre: "Blair Francis", Cargo: "PREVENCIÓN", img: "https://png.pngtree.com/svg/20161110/the_avatar_man_778009.png" },
//                { id: 26, pid: 16, Nombre: "Blair Francis", Cargo: "VENDEDOR A", img: "https://png.pngtree.com/svg/20161110/the_avatar_man_778009.png" },
//                { id: 27, pid: 16, Nombre: "Blair Francis", Cargo: "VENDEDOR B", img: "https://png.pngtree.com/svg/20161110/the_avatar_man_778009.png" },
//                { id: 28, pid: 16, Nombre: "Blair Francis", Cargo: "VENDEDOR C", img: "https://png.pngtree.com/svg/20161110/the_avatar_man_778009.png" },
//                { id: 29, pid: 16, Nombre: "Blair Francis", Cargo: "ANFITRIÓN", img: "https://png.pngtree.com/svg/20161110/the_avatar_man_778009.png" },


//                //HIJOS DE GERENTE DE SUCURSAL
//                { id: 30, pid: 17, Nombre: "Blair Francis", Cargo: "ENCARGADO DE SUCURSAL", img: "https://png.pngtree.com/svg/20161110/the_avatar_man_778009.png" },
//                { id: 31, pid: 30, Nombre: "Blair Francis", Cargo: "VALUADOR A", img: "https://png.pngtree.com/svg/20161110/the_avatar_man_778009.png" },
//                { id: 32, pid: 30, Nombre: "Blair Francis", Cargo: "VALUADOR B", img: "https://png.pngtree.com/svg/20161110/the_avatar_man_778009.png" },

//                //HIJOS DE SUPERVISOR DE ZONAS
//                { id: 33, pid: 18, Nombre: "Blair Francis", Cargo: "VENDEDOR A", img: "https://png.pngtree.com/svg/20161110/the_avatar_man_778009.png" },
//                { id: 34, pid: 18, Nombre: "Blair Francis", Cargo: "VENDEDOR B", img: "https://png.pngtree.com/svg/20161110/the_avatar_man_778009.png" },
//                { id: 35, pid: 18, Nombre: "Blair Francis", Cargo: "VENDEDOR C", img: "https://png.pngtree.com/svg/20161110/the_avatar_man_778009.png" },
//                { id: 36, pid: 18, Nombre: "Blair Francis", Cargo: "ANFITRIÓN", img: "https://png.pngtree.com/svg/20161110/the_avatar_man_778009.png" },
//                { id: 37, pid: 18, Nombre: "Blair Francis", Cargo: "ANFITRIÓN", img: "https://png.pngtree.com/svg/20161110/the_avatar_man_778009.png" },


//                // HIJOS DE JEFE DE PROGRAMACION
//                 { id: 38, pid: 20, Nombre: "Blair Francis", Cargo: "PROGRAMADOR", img: "https://png.pngtree.com/svg/20161110/the_avatar_man_778009.png" },
//                 { id: 39, pid: 20, Nombre: "Blair Francis", Cargo: "PROGRAMADOR EXTERNO", img: "https://png.pngtree.com/svg/20161110/the_avatar_man_778009.png" },

//                  //JEFE DE SOPORTE TECNICO E HIJOS.
//                  { id: 40, pid: 4, Nombre: "Blair Francis", Cargo: "JEFE DE SOPORTE TECNICO", img: "https://png.pngtree.com/svg/20161110/the_avatar_man_778009.png" },
//                  { id: 41, pid: 40, Nombre: "Blair Francis", Cargo: "AUXILIAR DE SOPORTE TECNICO 1", img: "https://png.pngtree.com/svg/20161110/the_avatar_man_778009.png" },
//                  { id: 42, pid: 40, Nombre: "Blair Francis", Cargo: "AUXILIAR DE SOPORTE TECNICO 2", img: "https://png.pngtree.com/svg/20161110/the_avatar_man_778009.png" },

//                  //COORDINADOR DE MONITOREO E HIJOS
//                  { id: 43, pid: 4, Nombre: "Blair Francis", Cargo: "COORDINADOR DE MONITOREO", img: "https://png.pngtree.com/svg/20161110/the_avatar_man_778009.png" },
//                  { id: 44, pid: 43, Nombre: "Blair Francis", Cargo: "MONITORISTA 1", img: "https://png.pngtree.com/svg/20161110/the_avatar_man_778009.png" },
//                  { id: 45, pid: 43, Nombre: "Blair Francis", Cargo: "MONITORISTA 2", img: "https://png.pngtree.com/svg/20161110/the_avatar_man_778009.png" },
//                  { id: 46, pid: 43, Nombre: "Blair Francis", Cargo: "MONITORISTA 3", img: "https://png.pngtree.com/svg/20161110/the_avatar_man_778009.png" },

//                  //HIJOS DE SUB GERENCIA ADMINISTRATIVO
//                  { id: 47, pid: 6, Nombre: "Blair Francis", Cargo: "JEFATURA DE CONTABILIDAD", img: "https://png.pngtree.com/svg/20161110/the_avatar_man_778009.png" },
//                  { id: 48, pid: 47, Nombre: "Blair Francis", Cargo: "CONTADORA", img: "https://png.pngtree.com/svg/20161110/the_avatar_man_778009.png" },
//                  { id: 49, pid: 47, Nombre: "Blair Francis", Cargo: "CONTADORA SOFOM", img: "https://png.pngtree.com/svg/20161110/the_avatar_man_778009.png" },
//                  { id: 50, pid: 49, Nombre: "Blair Francis", Cargo: "AUXILIAR CONTABLE", img: "https://png.pngtree.com/svg/20161110/the_avatar_man_778009.png" },
//                  { id: 51, pid: 6, Nombre: "Blair Francis", Cargo: "JEFATURA BODEGA CENTRAL", img: "https://png.pngtree.com/svg/20161110/the_avatar_man_778009.png" },
//                  { id: 52, pid: 51, Nombre: "Blair Francis", Cargo: "CHOFER 1", img: "https://png.pngtree.com/svg/20161110/the_avatar_man_778009.png" },
//                  { id: 53, pid: 51, Nombre: "Blair Francis", Cargo: "CHOFER 2", img: "https://png.pngtree.com/svg/20161110/the_avatar_man_778009.png" },
//                  { id: 54, pid: 51, Nombre: "Blair Francis", Cargo: "CHOFER 3", img: "https://png.pngtree.com/svg/20161110/the_avatar_man_778009.png" },
//                  { id: 55, pid: 6, Nombre: "Blair Francis", Cargo: "ASISTENTE DE ADMINISTRACION", img: "https://png.pngtree.com/svg/20161110/the_avatar_man_778009.png" },
//                  { id: 56, pid: 55, Nombre: "Blair Francis", Cargo: "MANTENIMIENTO Y LIMPIEZA", img: "https://png.pngtree.com/svg/20161110/the_avatar_man_778009.png" },


//                  //HIJOS DE JEFATURA DE MKT
//                  { id: 57, pid: 7, Nombre: "Blair Francis", Cargo: "ASISTENTE DE MKT", img: "https://png.pngtree.com/svg/20161110/the_avatar_man_778009.png" },
//                  { id: 58, pid: 7, Nombre: "Blair Francis", Cargo: "ANALISIS ARTICULOS", img: "https://png.pngtree.com/svg/20161110/the_avatar_man_778009.png" },
//                  { id: 59, pid: 58, Nombre: "Blair Francis", Cargo: "AUXILIAR ANALISIS", img: "https://png.pngtree.com/svg/20161110/the_avatar_man_778009.png" }
//            ]
//        });

    
//});
$(document).ready(function () {

//window.onload = function () {
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
//            field_0: "name",
//            field_1: "title",
//            img_0: "img"
//        },
//        nodes: [
//            { id: 1, name: "Billy Moore", title: "CEO", img: "https://cdn.balkan.app/shared/2.jpg" },
//            { id: 2, pid: 1, name: "Billie Rose", title: "Dev Team Lead", img: "https://cdn.balkan.app/shared/5.jpg" },
//            { id: 3, pid: 1, name: "Glenn Bell", title: "HR", img: "https://cdn.balkan.app/shared/10.jpg" },
//            { id: 4, pid: 1, name: "Blair Francis", title: "HR", img: "https://cdn.balkan.app/shared/11.jpg" },

//            { id: 5, pid: 3, name: "Skye Terrell", title: "Manager", img: "https://cdn.balkan.app/shared/12.jpg" },
//            { id: 6, pid: 3, name: "Jordan Harris", title: "JS Developer", img: "https://cdn.balkan.app/shared/6.jpg" },
//            { id: 7, pid: 3, name: "Will Woods", title: "JS Developer", img: "https://cdn.balkan.app/shared/7.jpg" }
//        ]
//    });
//};

});
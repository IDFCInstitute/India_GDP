
function GDP()
{
mapboxgl.accessToken = 'pk.eyJ1Ijoic2VlbWEzMCIsImEiOiJjajJrOWpsanowMDk1MzJwOHVqbXNia3JwIn0.wn70sJdzHRONmHBbXgZ42Q';
var map = new mapboxgl.Map({
    container: 'map',style:"http://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json",zoom:6,pitch:360,minZoom:6,center: [77.80,14]});
map.on('load', function(){
map.addSource('data', {type: 'geojson',data:'https://raw.githubusercontent.com/sharseema/data/master/State.geojson'});
map.addLayer({"id": "pune-data-3nis8s","source": "data",'type':'line','paint':{'line-width':1,'line-color':'white'}});
map.addSource('testLayer', {"type": "vector","scheme": "tms",
"tiles":[" http://www.idfcinstitute.org/geoserver/gwc/service/tms/1.0.0/Cities:GDP_3km_shp_final@EPSG%3A900913@pbf/{z}/{x}/{y}.pbf"] }),
map.addLayer({"id": "hessen","source": "testLayer","source-layer": "GDP_3km_shp_final",'maxzoom':8,'type': 'fill-extrusion','paint': {'fill-extrusion-color': {'property': 'gridcode',"type":'exponential',"stops": [[6, "#1e90ff"],[18, "#1e90ff"],[41, "#20b2aa"],[78,"#9acd32"],[129,"#ffff00"],[198,"#ffa500"],[294,"#ff4500"],[518,"#ff0000"],[802,"#f768a1"],[1270,"#fa9fb5"]]},
       'fill-extrusion-height':{"type": "exponential","property": "gridcode","stops":[[6,600],[18,1800],[41,4100],[78,7800],[129,12900],[198,19800],[294,29400],[518,51800],[802,80200],[1270,127000]]},'fill-extrusion-base':0,'fill-extrusion-opacity':1 }});
     map.addSource('testLayer1', { "type": "vector","scheme": "tms",
        "tiles": ["http://www.idfcinstitute.org/geoserver/gwc/service/tms/1.0.0/Cities:All_India_GDP_WGS_project@EPSG%3A900913@pbf/{z}/{x}/{y}.pbf"]}),
     map.addLayer({
         "id": "hessen1","source": "testLayer1","source-layer": "All_India_GDP_WGS_project",'minzoom':8,'type': 'fill-extrusion','paint': {
         'fill-extrusion-color': {'property': 'GRIDCODE',"type":'exponential', "stops": [[1, "#1e90ff"],[7, "#1e90ff"],[18, "#20b2aa"],[32,"#9acd32"],[49,"#ffff00"],[68,"#ffa500"],[90,"#ff4500"],[115,"#ff0000"],[170,"#f768a1"]]},
       'fill-extrusion-height':{"type": "exponential","property": "GRIDCODE","stops":[[1,1000],[7,7000],[18,18000],[32,32000],[49,49000],[68,68000],[90,90000],[115,115000],[170,170000]]},'fill-extrusion-base':0,'fill-extrusion-opacity':1
        } });});
var navigation=new mapboxgl.NavigationControl();
var fullscreen=new mapboxgl.FullscreenControl();
var geocoder = new MapboxGeocoder({
  accessToken: mapboxgl.accessToken
});
map.on('error', e => {
  console.log(e.error);
});

   $(document).ready(function () {
                 $('#menu').on('click', function () {
                  $('#try').toggle();
                  });
                 $('#quest').on('click',function(){
                   $('#question_div').toggle();
               });
                $('#navigation').append(navigation.onAdd(map));
                $('#fullscreen').append(fullscreen.onAdd(map));
                var e=$('#geocoder').append(geocoder.onAdd(map));
                
                     $('#geocoder1').on('click',function(){
                     $(e).toggle();
              
                   });
                    $('#legend').on('click',function(){
                     $('#layer_Menu').toggle();
              
                   });
                      
             });
  function resize(){
    if ($(window).width() <=768) { 
      $("#question_div img").attr('src', 'Images/Touch.png');
        } }
resize();
$(window).on('resize', resize);
// $(document).ready(function() {
// var yetVisited =sessionStorage['visited'];
// if (!yetVisited) {
//     $("#myModal").modal("show").on("shown", function () {
//         window.setTimeout(function () {
//             $("#myModal").modal("hide");
//         }, 20000);
//     });

//     // open popup
//    sessionStorage['visited'] ="yes";
// }
// });
}
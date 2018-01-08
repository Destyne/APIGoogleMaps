
    var map;
    var panel;
    var initialize;
    var calculate;
    var direction;
    var mode;
    var pos;
    var bool;
    var interest;
    var museum;
    var waypts = [];
    function initMap() {
      var uluru = {lat: -25.363, lng: 131.044};
      map = new google.maps.Map(document.getElementById('map'), {
        zoom: 4,
        center: uluru
      });

      var marker = new google.maps.Marker({
        position: uluru,
        map: map,
        draggable:true,
        title:"Drag me!"
      });

      
      var infoWindow = new google.maps.InfoWindow({ map: map });


      google.maps.event.addListener( marker, "dragend", function( evenement ) {
        var lat = "lat : " + evenement.latLng.lat();
        var lng = "lng : " + evenement.latLng.lng();
        setTimeout(pin1, 500, lat + "   " + lng);
      });
      if (navigator.geolocation) {

        navigator.geolocation.getCurrentPosition(function(position) {
          pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          };
          map.setCenter(pos);
          marker = new google.maps.Marker({
            map: map,
            draggable: true,
            title:"Drag me!",
            position: pos
          });
          google.maps.event.addListener( marker, "dragend", function( evenement ) {
            var lat = "lat : " + evenement.latLng.lat();
            var lng = "lng : " + evenement.latLng.lng();
            setTimeout(pin2, 500, lat + "   " + lng);
          });

        },
        function() {
          handleLocationError(true, infoWindow, map.getCenter());
        });
      }
      else {
        handleLocationError(false, infoWindow, map.getCenter());
      }
      panel = document.getElementById('panel');
      var contentMarker = [
      '<div id="containerTabs">',
      '<div id="tabs">',
      '<ul>',
      '<li><a href="#tab-1"><span>Lorem</span></a></li>',
      '<li><a href="#tab-2"><span>Ipsum</span></a></li>',
      '<li><a href="#tab-3"><span>Dolor</span></a></li>',
      '</ul>',
      '<div id="tab-1">',
      '<h3>Lille</h3><p>Suspendisse quis magna dapibus orci porta varius sed sit amet purus. Ut eu justo dictum elit malesuada facilisis. Proin ipsum ligula, feugiat sed faucibus a, <a href="http://www.google.fr">google</a> sit amet mauris. In sit amet nisi mauris. Aliquam vestibulum quam et ligula pretium suscipit ullamcorper metus accumsan.</p>',
      '</div>',
      '<div id="tab-2">',
      '<h3>Aliquam vestibulum</h3><p>Aliquam vestibulum quam et ligula pretium suscipit ullamcorper metus accumsan.</p>',
      '</div>',
      '<div id="tab-3">',
      '<h3>Pretium suscipit</h3><ul><li>Lorem</li><li>Ipsum</li><li>Dolor</li><li>Amectus</li></ul>',
      '</div>',
      '</div>',
      '</div>'
      ].join('');



      map.addListener("click", function(e) { 
        var popo = {
          lat: e.latLng.lat(),
          lng: e.latLng.lng() 
        }
        marker.setPosition(popo);
      });


      direction = new google.maps.DirectionsRenderer({
        map   : map,
        panel : panel 
      });

    };

    $("#local").click(function() {
      document.getElementById("origin").value = pos.lat + "," + pos.lng;
    });
    function Choice () {
      var box = document.getElementById("box");
      var night = document.getElementById("night");
      var light = document.getElementById("light");
      var silver = document.getElementById("silver");
      var normal = document.getElementById("normal");
      $("#normal").click(function() {
        var stylesNor =  [{"featureType":"landscape","stylers":[{"hue":"#FFBB00"},{"saturation":43.400000000000006},{"lightness":37.599999999999994},{"gamma":1}]},{"featureType":"road.highway","stylers":[{"hue":"#FFC200"},{"saturation":-61.8},{"lightness":45.599999999999994},{"gamma":1}]},{"featureType":"road.arterial","stylers":[{"hue":"#FF0300"},{"saturation":-100},{"lightness":51.19999999999999},{"gamma":1}]},{"featureType":"road.local","stylers":[{"hue":"#FF0300"},{"saturation":-100},{"lightness":52},{"gamma":1}]},{"featureType":"water","stylers":[{"hue":"#0078FF"},{"saturation":-13.200000000000003},{"lightness":2.4000000000000057},{"gamma":1}]},{"featureType":"poi","stylers":[{"hue":"#00FF6A"},{"saturation":-1.0989010989011234},{"lightness":11.200000000000017},{"gamma":1}]}];
        map.setOptions({styles: stylesNor});
      });

      $("#night").click(function() {
        var stylesNig = [
        {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
        {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
        {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
        {
          featureType: 'administrative.locality',
          elementType: 'labels.text.fill',
          stylers: [{color: '#d59563'}]
        },
        {
          featureType: 'poi',
          elementType: 'labels.text.fill',
          stylers: [{color: '#d59563'}]
        },
        {
          featureType: 'poi.park',
          elementType: 'geometry',
          stylers: [{color: '#263c3f'}]
        },
        {
          featureType: 'poi.park',
          elementType: 'labels.text.fill',
          stylers: [{color: '#6b9a76'}]
        },
        {
          featureType: 'road',
          elementType: 'geometry',
          stylers: [{color: '#38414e'}]
        },
        {
          featureType: 'road',
          elementType: 'geometry.stroke',
          stylers: [{color: '#212a37'}]
        },
        {
          featureType: 'road',
          elementType: 'labels.text.fill',
          stylers: [{color: '#9ca5b3'}]
        },
        {
          featureType: 'road.highway',
          elementType: 'geometry',
          stylers: [{color: '#746855'}]
        },
        {
          featureType: 'road.highway',
          elementType: 'geometry.stroke',
          stylers: [{color: '#1f2835'}]
        },
        {
          featureType: 'road.highway',
          elementType: 'labels.text.fill',
          stylers: [{color: '#f3d19c'}]
        },
        {
          featureType: 'transit',
          elementType: 'geometry',
          stylers: [{color: '#2f3948'}]
        },
        {
          featureType: 'transit.station',
          elementType: 'labels.text.fill',
          stylers: [{color: '#d59563'}]
        },
        {
          featureType: 'water',
          elementType: 'geometry',
          stylers: [{color: '#17263c'}]
        },
        {
          featureType: 'water',
          elementType: 'labels.text.fill',
          stylers: [{color: '#515c6d'}]
        },
        {
          featureType: 'water',
          elementType: 'labels.text.stroke',
          stylers: [{color: '#17263c'}]
        }
        ];
        map.setOptions({styles: stylesNig});
      });

      $("#light").click(function(){
       var stylesLig = [
       {
        featureType: "water",
        elementType: "geometry",
        stylers: [
        {
          color: "#e9e9e9"
        },
        {
          lightness: 17
        }
        ]
      },
      {
        featureType: "landscape",
        elementType: "geometry",
        stylers: [
        {
          color: "#f5f5f5"
        },
        {
          lightness: 20
        }
        ]
      },
      {
        featureType: "road.highway",
        elementType: "geometry.fill",
        stylers: [
        {
          color: "#ffffff"
        },
        {
          lightness: 17
        }
        ]
      },
      {
        featureType: "road.highway",
        elementType: "geometry.stroke",
        stylers: [
        {
          color: "#ffffff"
        },
        {
          lightness: 29
        },
        {
          weight: 0.2
        }
        ]
      },
      {
        featureType: "road.arterial",
        elementType: "geometry",
        stylers: [
        {
          color: "#ffffff"
        },
        {
          lightness: 18
        }
        ]
      },
      {
        featureType: "road.local",
        elementType: "geometry",
        stylers: [
        {
          color: "#ffffff"
        },
        {
          lightness: 16
        }
        ]
      },
      {
        featureType: "poi",
        elementType: "geometry",
        stylers: [
        {
          color: "#f5f5f5"
        },
        {
          lightness: 21
        }
        ]
      },
      {
        featureType: "poi.park",
        elementType: "geometry",
        stylers: [
        {
          color: "#dedede"
        },
        {
          lightness: 21
        }
        ]
      },
      {
        elementType: "labels.text.stroke",
        stylers: [
        {
          visibility: "on"
        },
        {
          color: "#ffffff"
        },
        {
          lightness: 16
        }
        ]
      },
      {
        elementType: "labels.text.fill",
        stylers: [
        {
          saturation: 36
        },
        {
          color: "#333333"
        },
        {
          lightness: 40
        }
        ]
      },
      {
        elementType: "labels.icon",
        stylers: [
        {
          visibility: "off"
        }
        ]
      },
      {
        featureType: "transit",
        elementType: "geometry",
        stylers: [
        {
          color: "#f2f2f2"
        },
        {
          lightness: 19
        }
        ]
      },
      {
        featureType: "administrative",
        elementType: "geometry.fill",
        stylers: [
        {
          color: "#fefefe"
        },
        {
          lightness: 20
        }
        ]
      },
      {
        featureType: "administrative",
        elementType: "geometry.stroke",
        stylers: [
        {
          color: "#fefefe"
        },
        {
          lightness: 17
        },
        {
          weight: 1.2
        }
        ]
      }
      ];
      map.setOptions({styles: stylesLig});
    });
      $("#silver").click(function() {
        var stylesSilv = [
        {
          elementType: 'geometry',
          stylers: [{color: '#f5f5f5'}]
        },
        {
          elementType: 'labels.icon',
          stylers: [{visibility: 'off'}]
        },
        {
          elementType: 'labels.text.fill',
          stylers: [{color: '#616161'}]
        },
        {
          elementType: 'labels.text.stroke',
          stylers: [{color: '#f5f5f5'}]
        },
        {
          featureType: 'administrative.land_parcel',
          elementType: 'labels.text.fill',
          stylers: [{color: '#bdbdbd'}]
        },
        {
          featureType: 'poi',
          elementType: 'geometry',
          stylers: [{color: '#eeeeee'}]
        },
        {
          featureType: 'poi',
          elementType: 'labels.text.fill',
          stylers: [{color: '#757575'}]
        },
        {
          featureType: 'poi.park',
          elementType: 'geometry',
          stylers: [{color: '#e5e5e5'}]
        },
        {
          featureType: 'poi.park',
          elementType: 'labels.text.fill',
          stylers: [{color: '#9e9e9e'}]
        },
        {
          featureType: 'road',
          elementType: 'geometry',
          stylers: [{color: '#ffffff'}]
        },
        {
          featureType: 'road.arterial',
          elementType: 'labels.text.fill',
          stylers: [{color: '#757575'}]
        },
        {
          featureType: 'road.highway',
          elementType: 'geometry',
          stylers: [{color: '#dadada'}]
        },
        {
          featureType: 'road.highway',
          elementType: 'labels.text.fill',
          stylers: [{color: '#616161'}]
        },
        {
          featureType: 'road.local',
          elementType: 'labels.text.fill',
          stylers: [{color: '#9e9e9e'}]
        },
        {
          featureType: 'transit.line',
          elementType: 'geometry',
          stylers: [{color: '#e5e5e5'}]
        },
        {
          featureType: 'transit.station',
          elementType: 'geometry',
          stylers: [{color: '#eeeeee'}]
        },
        {
          featureType: 'water',
          elementType: 'geometry',
          stylers: [{color: '#c9c9c9'}]
        },
        {
          featureType: 'water',
          elementType: 'labels.text.fill',
          stylers: [{color: '#9e9e9e'}]
        }
        ];
        map.setOptions({styles: stylesSilv});

      });
    };
    Choice();
    var executeReq = false;

    function callback(results, status) {
      if (status == google.maps.places.PlacesServiceStatus.OK) {
        var service = new google.maps.places.PlacesService(map);
        var places = [];
        console.log(results);
        for (var i = 0; i < results.length; i++) {
          if (i > 20)
            break;

          var place = results[i];

          waypts.push({
            stopover: true,
            location: place.geometry.location
          });
        }


        if (executeReq)
        {
          museum = waypts;
          if(interest === "true") {
            museum = [];
          }
          var request = {
            origin      : origin,
            destination : destination,
            avoidTolls : bool,
            optimizeWaypoints : true,
            travelMode  : google.maps.DirectionsTravelMode[mode],
            waypoints : museum
          }
          console.log(request);
          var directionsService = new google.maps.DirectionsService(); 
          directionsService.route(request, function(response, status){ 
            if(status == google.maps.DirectionsStatus.OK){
              direction.setDirections(response); 
            }
          });
          executeReq = false;
        }

      }
    }

    calculate = function(){
      origin      = document.getElementById('origin').value; 
      destination = document.getElementById('destination').value;
      mode = document.getElementById('mode').value;
      bool = document.getElementById('bool').value;
      interest = document.getElementById('interest').value;
      if(bool === "true") {
        bool = true;
      }
      else {
        bool = false;
      }

  
      if(origin && destination){
        var geocoder = new google.maps.Geocoder();
        geocoder.geocode({ 'address': origin}, function(results, status) {
          var service = new google.maps.places.PlacesService(map);
          var requesst = {
            location: results[0].geometry.location,
            radius: '500',
            query: 'museum'
          };
          service.textSearch(requesst, callback);
        });
        geocoder.geocode({ 'address': destination}, function(results, status) {
          var service = new google.maps.places.PlacesService(map);
          var requesst = {
            location: results[0].geometry.location,
            radius: '500',
            query: 'museum'
          };
          executeReq = true;
          service.textSearch(requesst, callback);

        });
      }
    }

    function handleLocationError(browserHasGeolocation, infoWindow, pos) {
      console.log(infoWindow);
      infoWindow.setPosition(pos);
      infoWindow.setContent(browserHasGeolocation ?
        'Error: The Geolocation service failed.' :
        'Error: Your browser doesn\'t support geolocation.');
    }
    function pin2(data) {
      $("#gmimap1>area").prop("title", data);
    }
    function pin1(data) {
      $("#gmimap0>area").prop("title", data);
    }
    $(document).ready(function() {
     setTimeout(showpanel, 500);
   });
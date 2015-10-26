/* ==============================================
GOOGLE MAP
=============================================== */

    $(document).ready(function() {

            'use strict';

            // Map Coordination

            var latlng = new google.maps.LatLng(48.130040, 17.111213);

            // Map Options
            var myOptions = {
                zoom: 14,
                center: latlng,
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                disableDefaultUI: false,
                scrollwheel: false,
                // Google Map Color Styles
                styles: [{"stylers":[{"saturation":-100},{"gamma":1}]},{"elementType":"labels.text.stroke","stylers":[{"visibility":"off"}]},{"featureType":"poi.business","elementType":"labels.text","stylers":[{"visibility":"off"}]},
                {"featureType":"poi.business","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"poi.place_of_worship","elementType":"labels.text","stylers":[{"visibility":"off"}]},
                {"featureType":"poi.place_of_worship","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"geometry","stylers":[{"visibility":"simplified"}]},
                {"featureType":"water","stylers":[{"visibility":"on"},{"saturation":50},{"gamma":0},{"hue":"#50a5d1"}]},{"featureType":"administrative.neighborhood","elementType":"labels.text.fill","stylers":[{"color":"#333333"}]},
                {"featureType":"road.local","elementType":"labels.text","stylers":[{"weight":0.5},{"color":"#333333"}]},{"featureType":"transit.station","elementType":"labels.icon","stylers":[{"gamma":1},{"saturation":50}]}]
            };

            var map = new google.maps.Map(document.getElementById('google_map'), myOptions);

            // Marker Image
            var image = 'images/marker.png';
            
            /* ========= First Marker ========= */

            // First Marker Coordination
            
            var myLatlng = new google.maps.LatLng(48.130040, 17.111213);

            // Your Texts 

             var contentString = '<div id="content">'+
              '<div id="siteNotice">'+
              '</div>'+
              '<h4>' +

              'Sídlo firmy & kancelárie'+

              '</h4>'+
              '<p>' +

              'Text?' +

              '</p>'+
              '</div>';
            

            var marker = new google.maps.Marker({
                  position: myLatlng,
                  map: map,
                  title: 'Sídlo firmy',
                  icon: image
              });


            var infowindow = new google.maps.InfoWindow({
              content: contentString
              });

              
             google.maps.event.addListener(marker, 'click', function() {
                infowindow.open(map,marker);
              });

             /* ========= End First Marker ========= */
        
        });
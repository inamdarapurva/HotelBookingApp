window.RoomReservation = {
  Models: {},
  Collections: {},
  Views: {},

  start: function(data) {
    //var rooms = new RoomReservation.Collections.Rooms(data.rooms),
       var router = new RoomReservation.Router();

    var guests = new RoomReservation.Collections.Guests();

    

    router.on('route:home', function() {
      router.navigate('rooms', {
        trigger: true,
        replace: true
      });
    });


    router.on('route:parseURL',function(params){
      //checking the URL parsing
      var getUrlParameter = function getUrlParameter(sParam) {
        var sPageURL = decodeURIComponent(params),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

        for (i = 0; i < sURLVariables.length; i++) {
          sParameterName = sURLVariables[i].split('=');

          if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
          }
        }
      };

      var first_name = getUrlParameter('first_name');
      var last_name = getUrlParameter('last_name');
      var email = getUrlParameter('email');
      var room_code = getUrlParameter('room_code');
      var room_price = getUrlParameter('room_price');
      
      if(room_code == 'QUEEN' && room_price < 199) {
        //console.log("Upgrade to King-102");
        //console.log("Upgrade to Suite-103");
        
        var offers = new RoomReservation.Collections.Offers([data.offers[1],data.offers[2]]);
        var offersView = new RoomReservation.Views.Offers({
          collection: offers
        });
        
         $('.main-container').html(offersView.render().$el);
      }
      else if(room_code == 'QUEEN' && room_price >= 199) {
        // console.log("Upgrade to King-101");
        // console.log("Upgrade to Suite-102");
        // console.log("Upgrade to Strawberries..103");

        var offers = new RoomReservation.Collections.Offers([data.offers[1],data.offers[2],data.offers[3]]);
        var offersView = new RoomReservation.Views.Offers({
          collection: offers
        });
        
         $('.main-container').html(offersView.render().$el);

      }
      else if(room_code=='KING' && room_price < 199) {
        //console.log("Upgrade to Suite-102");
        var offers = new RoomReservation.Collections.Offers([data.offers[2]]);
        var offersView = new RoomReservation.Views.Offers({
          collection: offers
        });
        
         $('.main-container').html(offersView.render().$el);

      }
      else if(room_code=='KING' && room_price >= 199) {
        // console.log("Upgrade to Suite-102");
        // console.log("Upgrade to Strawberries..103");

        var offers = new RoomReservation.Collections.Offers([data.offers[2],data.offers[3]]);
        var offersView = new RoomReservation.Views.Offers({
          collection: offers
        });
        
         $('.main-container').html(offersView.render().$el);
      }
      else if(room_code=='SUITE' && room_price < 199) {
         document.write("No Offers to display....");
      }
      else if(room_code=='SUITE' && room_price >= 199) {
        var offers = new RoomReservation.Collections.Offers([data.offers[3]]);
        var offersView = new RoomReservation.Views.Offers({
          collection: offers
        });
        
         $('.main-container').html(offersView.render().$el);
      }
      



    });

    router.on('route:showRooms', function() {

     // var roomsView = new RoomReservation.Views.Rooms({
     //    collection: rooms
     //  });
           
      $(document).on('book:clicked', function(event,attrs) {
        
         attrs.id = _.max(guests.pluck('id'));
        //guests.add(attrs);
        guests.set(attrs);
        
        guests.each(function(guest) {
          console.log("ID:: "+ guest.get('id')); 
          console.log("name:: "+ guest.get('first_name'));
          console.log("room:: "+ guest.get('room_code'));
        });
      
      });

      //$('.main-container').html(roomsView.render().$el);
    });

    
    router.on('route:getGuestDetails', function() {
      var guestDetails = new RoomReservation.Views.Guest({
        model: new  RoomReservation.Models.Guest()
      });
      
      $(document).on('form:submitted', function(event,attrs) {

        var guest_id = guests.pluck('id');
        attrs.id = guests.isEmpty() ? 1 : (_.max(guest_id) + 1);
        guests.set(attrs);
        router.navigate('rooms',true);
      });

      $('.main-container').html(guestDetails.render().$el);

    });

    Backbone.history.start();
  }
};

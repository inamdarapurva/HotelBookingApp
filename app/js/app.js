window.RoomReservation = {
  Models: {},
  Collections: {},
  Views: {},
  Session:{},

  start: function(data) {
    var router = new RoomReservation.Router();

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

      //parsing URL
      var first_name = getUrlParameter('first_name');
      var last_name = getUrlParameter('last_name');
      var email = getUrlParameter('email');
      var room_code = getUrlParameter('room_code');
      var room_price = getUrlParameter('room_price');

      //displaying guest information with booked room details
      var guest_info = new RoomReservation.Models.GuestDetail({
        first_name: first_name,
        last_name: last_name,
        email: email,
        room_code: room_code,
        room_price: room_price
      });
      
      var guestDetails = new RoomReservation.Views.GuestDetail({
        model:guest_info
      });
      $('.welcome-container').html(guestDetails.render().$el);
      
      
      //displaying ofers for booked room
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
         var noOffersView= new RoomReservation.Views.NoOffers();
         $('.main-container').html(noOffersView.render().$el);
      }
      else if(room_code=='SUITE' && room_price >= 199) {
        var offers = new RoomReservation.Collections.Offers([data.offers[3]]);
        var offersView = new RoomReservation.Views.Offers({
          collection: offers
        });
        
         $('.main-container').html(offersView.render().$el);
      }

      
      //displaying selected offers
      var selectedOffers= new RoomReservation.Collections.SelectedOffers();

      $(document).on('add:offer', function(event,model){
        //model.id = selectedOffers.isEmpty() ? 1 : (_.max(selectedOffers.pluck('id')) + 1);
        selectedOffers.add(model);
        RoomReservation.Session  = selectedOffers.toJSON();
        console.log(selectedOffers.toJSON());
      });

      $(document).on('remove:offer', function(event,model){
        //console.log('item id:: '+ model.get('item_id'));
        //selectedOffers.remove(model);
        var item_id = model.get('item_id');
        selectedOffers.remove(selectedOffers.where({item_id: item_id}));
        RoomReservation.Session = selectedOffers.toJSON();
        console.log(selectedOffers.toJSON());
      });  

      $(document).on('click:confirm',function(event){
         router.navigate('confirm',{trigger:true});
      });   
    
    });

    
    router.on('route:displayConfirmation',function(){
      var selectedoffers = new RoomReservation.Collections.SelectedOffers(RoomReservation.Session);
      var offersView = new RoomReservation.Views.SelectedOffers({
          collection: selectedoffers
      });
        
      $('.main-container').html(offersView.render().$el);
      
    });

    
        
    Backbone.history.start();
  }
};

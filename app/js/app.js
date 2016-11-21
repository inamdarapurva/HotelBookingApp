/*app.js- Primary file to start the application, defines namespace for the application as 'RoomReservation',
        - defines functions for different routes
        - starts the router and navigates according to path requests
*/


//defining namespace of the application
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

    // defines function to execute when rrouter '#room/? along with params' 
    router.on('route:parseURL',function(params){
      
      //checking the URL parsing
      var parseURLParam = function parseURLParam(sParam) {
        var pageURL = decodeURIComponent(params),
        paramList = pageURL.split('&'),
        paramAttribute,
        i;

        for (i = 0; i < paramList.length; i++) {
          paramAttribute = paramList[i].split('=');

          if (paramAttribute[0] === sParam) {
            return paramAttribute[1] === undefined ? true : paramAttribute[1];
          }
        }
      };

      //parsing URL
      var first_name = parseURLParam('first_name');
      var last_name = parseURLParam('last_name');
      var email = parseURLParam('email');
      var room_code = parseURLParam('room_code');
      var room_price = parseURLParam('room_price');

      //displaying guest information with booked room details
      var guest_info = new RoomReservation.Models.GuestDetail({
        first_name: first_name,
        last_name: last_name,
        email: email,
        room_code: room_code,
        room_price: room_price
      });
      
      //rendering user details 
      var guestDetails = new RoomReservation.Views.GuestDetail({
        model:guest_info
      });
      $('.welcome-container').html(guestDetails.render().$el);
      
      
      //displaying offers for booked room
      if(room_code == 'QUEEN' && room_price < 199) {
        var offers = new RoomReservation.Collections.Offers([data.offers[1],data.offers[2]]);
        var offersView = new RoomReservation.Views.Offers({
          collection: offers
        });
        
         $('.main-container').html(offersView.render().$el);
      }

      else if(room_code == 'QUEEN' && room_price >= 199) {
        var offers = new RoomReservation.Collections.Offers([data.offers[1],data.offers[2],data.offers[3]]);
        var offersView = new RoomReservation.Views.Offers({
          collection: offers
        });
        
         $('.main-container').html(offersView.render().$el);

      }
      else if(room_code=='KING' && room_price < 199) {
        var offers = new RoomReservation.Collections.Offers([data.offers[2]]);
        var offersView = new RoomReservation.Views.Offers({
          collection: offers
        });
        
         $('.main-container').html(offersView.render().$el);

      }
      else if(room_code=='KING' && room_price >= 199) {
        var offers = new RoomReservation.Collections.Offers([data.offers[2],data.offers[3]]);
        var offersView = new RoomReservation.Views.Offers({
          collection: offers
        });
        
         $('.main-container').html(offersView.render().$el);
      }

      else if(room_code=='SUITE' && room_price >= 199) {
        var offers = new RoomReservation.Collections.Offers([data.offers[3]]);
        var offersView = new RoomReservation.Views.Offers({
          collection: offers
        });
        
         $('.main-container').html(offersView.render().$el);
      }
      else  {
         var noOffersView= new RoomReservation.Views.NoOffers();
         $('.main-container').html(noOffersView.render().$el);
      }
     

      
      //displaying selected offers
      var selectedOffers= new RoomReservation.Collections.SelectedOffers();

      $(document).on('add:offer', function(event,model){
        selectedOffers.add(model); // add the selected offer to collection
        RoomReservation.Session  = selectedOffers.toJSON();
      });

      $(document).on('remove:offer', function(event,model){
        var item_id = model.get('item_id');
        selectedOffers.remove(selectedOffers.where({item_id: item_id}));//remove from the collection
        RoomReservation.Session = selectedOffers.toJSON();
      });  

      $(document).on('click:confirm',function(event){
         router.navigate('confirm',{trigger:true});
      });   
    
    });

    // defines function when router '#confirm' to display selected offers
    router.on('route:displayConfirmation',function(){
      
      // if user clicks on confirm without selecting any offer
      if(typeof(RoomReservation.Session[0])==='undefined') {
        var noOffersView= new RoomReservation.Views.NoOffers();
         $('.main-container').html(noOffersView.render().$el);
      }

      // when user selects at least one offer
      else {
        var selectedoffers = new RoomReservation.Collections.SelectedOffers(RoomReservation.Session);
        var offersView = new RoomReservation.Views.SelectedOffers({
            collection: selectedoffers
        });
          
        $('.main-container').html(offersView.render().$el);
      }
      
    });
         
    Backbone.history.start(); // start routers for the application
  }
};

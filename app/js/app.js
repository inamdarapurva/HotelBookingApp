window.RoomReservation = {
  Models: {},
  Collections: {},
  Views: {},

  start: function(data) {
    var rooms = new RoomReservation.Collections.Rooms(data.rooms),
        router = new RoomReservation.Router();

    var guests = new RoomReservation.Collections.Guests();

    

    router.on('route:home', function() {
      router.navigate('guests', {
        trigger: true,
        replace: true
      });
    });

    router.on('route:showRooms', function() {
      var roomsView = new RoomReservation.Views.Rooms({
        collection: rooms
      });
           
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

      $('.main-container').html(roomsView.render().$el);
    });

    
    router.on('route:getGuestDetails', function() {
      var guestDetails = new RoomReservation.Views.Guest({
        model: new  RoomReservation.Models.Guest()
      });
      
      $(document).on('form:submitted', function(event,attrs) {
        attrs.id = guests.isEmpty() ? 1 : (_.max(guests.pluck('id')) + 1);
        guests.set(attrs);
        router.navigate('rooms',true);
      });

      $('.main-container').html(guestDetails.render().$el);

    });

    Backbone.history.start();
  }
};

window.RoomReservation = {
  Models: {},
  Collections: {},
  Views: {},

  start: function(data) {
    var rooms = new RoomReservation.Collections.Rooms(data.rooms),
        router = new RoomReservation.Router();

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

      $('.main-container').html(roomsView.render().$el);
    });

    
    router.on('route:getGuestDetails', function() {
      console.log("Redirecting to guest details...");
      var guestDetails = new RoomReservation.Views.Guest();

      $('.main-container').html(guestDetails.render().$el);

    });

    Backbone.history.start();
  }
};

RoomReservation.Router = Backbone.Router.extend({
  routes: {
    '': 'home',
    'rooms': 'showRooms',
    'guests': 'getGuestDetails'
  }
});

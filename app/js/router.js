RoomReservation.Router = Backbone.Router.extend({
  routes: {
    '': 'home',
    'rooms': 'showRooms',
    'rooms/?:params':'parseURL',
    'guests': 'getGuestDetails'
  }
});

/*router.js- initializes Backbone.Router with possible routes and 
             their corresponding functions to be called from app.js*/

RoomReservation.Router = Backbone.Router.extend({
  routes: {
    '': 'home',
    'rooms': 'showRooms',
    'rooms/?:params':'parseURL',
    'confirm': 'displayConfirmation'
  }
});

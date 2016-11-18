RoomReservation.Models.Guest = Backbone.Model.extend({
  defaults: {
  	id:null,
  	first_name:null,
  	last_name:null,
  	email:null,
    room_code: null,
    short_desc:null,
    room_rate:null,
    total_price:null
  
   }
});

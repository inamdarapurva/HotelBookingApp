/*guestDetail.js- Model that represents the guest information,
				  model is used by guestDetail view to display booking details confirmation*/

RoomReservation.Models.GuestDetail = Backbone.Model.extend({
  defaults: {
  	  first_name:null,
  	  last_name:null,
  	  email:null,
  	  room_code:null,
  	  room_price:null
  }
});
/*offer.js- Model that contains information to show the offer data set
			used by offer.js view to render view for single offer
			further used by offers.js collection to represent collection of different offers*/

RoomReservation.Models.Offer = Backbone.Model.extend({
  defaults: {
  	  "image_url": null,
      "short_desc": null ,
      "long_desc": null,
      "item_id": null,
      "room_code": null,
      "price": null
  }
});



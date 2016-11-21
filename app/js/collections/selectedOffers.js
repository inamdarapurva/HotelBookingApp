/*selectedOffers.js- Collection that handles data set for final selected offers
					- If user selects any offer the corresponding model is added to this collection, 
					- if deselects any offer, corresponding model is removed from this collection,
					- based on content of this selection selectedOffers.js view displays confirmation */

RoomReservation.Collections.SelectedOffers = Backbone.Collection.extend({
  model: RoomReservation.Models.Offer

});
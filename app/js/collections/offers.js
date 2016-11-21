/*offers.js - Collection that represent set of offers that to be displayed based on room selection and given rules
			 - Used by Offers.js view which responsible for displaying all possible offers on DOM*/

RoomReservation.Collections.Offers = Backbone.Collection.extend({
  model: RoomReservation.Models.Offer
});

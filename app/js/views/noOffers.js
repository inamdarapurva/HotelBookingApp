/*noOffers.js- If there are no matching rules for room slection, 
			 - handles the message display stating there are no offers at this time.*/

RoomReservation.Views.NoOffers = Backbone.View.extend({
  template: _.template($('#tmpl-noOffers').html()),

  
  render: function() {
    var html = this.template();
    this.$el.html(html);
    return this;
  }
    
});
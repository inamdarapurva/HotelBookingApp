/*selectedOffers.js - responsible for displaying set of selected offers on confirmation page
**/
RoomReservation.Views.SelectedOffers = Backbone.View.extend({
  template: _.template($('#tmpl-selectedOffers').html()),

  renderOne: function(offer) {
    var itemView = new RoomReservation.Views.SelectedOffer({model: offer});
    this.$('.rooms-container').append(itemView.render().$el);
  },

  render: function() {
    var html = this.template();
    this.$el.html(html);

    this.collection.each(this.renderOne, this);

    return this;
  }
    
});
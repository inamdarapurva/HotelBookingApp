/*offers.js - View that is responsible for rendering entire offers data set based on room selection ,
            - uses offers.js collection to display the corresponding dataset
            - when clicked on confirmation , triggers Jquery event to redirect to confirmation page 
**/

RoomReservation.Views.Offers = Backbone.View.extend({
  template: _.template($('#tmpl-rooms').html()),

  events: {
    'click #confirm': 'onClickConfirm'
  },

  renderOne: function(offer) {
    var itemView = new RoomReservation.Views.Offer({model: offer});
    this.$('.rooms-container').append(itemView.render().$el);
  },

  render: function() {
    var html = this.template();
    this.$el.html(html);
    this.collection.each(this.renderOne, this);
    return this;
  },

  onClickConfirm: function() {
    $(document).trigger('click:confirm');
  }
    
});
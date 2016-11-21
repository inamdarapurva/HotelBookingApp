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
    console.log("Clicked on confirm...");
    $(document).trigger('click:confirm');
  }
    
});
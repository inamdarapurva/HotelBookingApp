RoomReservation.Views.Offers = Backbone.View.extend({
  template: _.template($('#tmpl-rooms').html()),


  renderOne: function(room) {
    var itemView = new RoomReservation.Views.Offer({model: room});
    this.$('.rooms-container').append(itemView.render().$el);
  },

  render: function() {
    var html = this.template();
    this.$el.html(html);

    this.collection.each(this.renderOne, this);

    return this;
  }
});
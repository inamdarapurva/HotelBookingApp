RoomReservation.Views.NoOffers = Backbone.View.extend({
  template: _.template($('#tmpl-noOffers').html()),

  
  render: function() {
    var html = this.template();
    this.$el.html(html);
    return this;
  }
    
});
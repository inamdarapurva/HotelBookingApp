RoomReservation.Views.GuestDetail = Backbone.View.extend({
  
  template: _.template($('#tmpl-guest-details').html()),
  model: new RoomReservation.Models.GuestDetail(),

  
  render: function() {
    //  var html = this.template(_.extend(this.model.toJSON(), {
    //   isNew: this.model.isNew()
    // }));
    var html = this.template(this.model.toJSON());
    this.$el.append(html);
    return this;
  }

});

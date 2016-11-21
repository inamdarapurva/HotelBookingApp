
/*guestDetail.js- View is responsible for displaying guest booking information 
                - uses guestDetail.js model to render view */

RoomReservation.Views.GuestDetail = Backbone.View.extend({
  template: _.template($('#tmpl-guest-details').html()),
  model: new RoomReservation.Models.GuestDetail(),
  render: function() {
    var html = this.template(this.model.toJSON());
    this.$el.append(html);
    return this;
  }

});

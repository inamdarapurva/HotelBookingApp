/*selectedOffer.js -  similar to offer.js view performs the task to display single selected offer model
**/

RoomReservation.Views.SelectedOffer = Backbone.View.extend({
  tagName: 'li',
  className: 'media col-md-6 col-lg-4',
  template: _.template($('#tmpl-selectedOffer').html()),

  

  render: function() {
    var html = this.template(this.model.toJSON());
    this.$el.append(html);
    return this;
  }

});
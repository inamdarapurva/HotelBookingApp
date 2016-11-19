RoomReservation.Views.Offer = Backbone.View.extend({
  tagName: 'li',
  className: 'media col-md-6 col-lg-4',
  template: _.template($('#tmpl-room').html()),

  events:{

    'click #offerSelect':'onClickSelect'
  },

  render: function() {
    //  var html = this.template(_.extend(this.model.toJSON(), {
    //   isNew: this.model.isNew()
    // }));
    var html = this.template(this.model.toJSON());
    this.$el.append(html);
    return this;
  },

  onClickSelect: function(e) {
    e.preventDefault();
    this.$el.css('border','1px solid black');

  }

});
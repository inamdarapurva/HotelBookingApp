RoomReservation.Views.Room = Backbone.View.extend({
  tagName: 'li',
  className: 'media col-md-6 col-lg-4',
  template: _.template($('#tmpl-room').html()),

  events: {
    'click  #btnBook': 'onClickBook'
  },

  initialize: function() {
    //this.listenTo(this.model, 'remove', this.remove);
  },

  render: function() {
    //  var html = this.template(_.extend(this.model.toJSON(), {
    //   isNew: this.model.isNew()
    // }));
    var html = this.template(this.model.toJSON());
    this.$el.append(html);
    return this;
  },

  onClickBook: function(e) {
    e.preventDefault();
    var no_of_rooms = this.$('#no_of_rooms option:selected').val();
    var curr_rate = this.model.get('room_rate');
    var total_price = no_of_rooms * curr_rate;
    //console.log("Total:: "+total_price);
    //console.log(this.model.get('id') + this.model.get('room_code') + this.model.get('room_rate'));
    
    $(document).trigger('book:clicked', {
      room_code:  this.model.get('room_code'),
      short_desc: this.model.get('short_desc'),
      room_rate:  this.model.get('room_rate'), 
      total_price: total_price
    });
  }

  
});

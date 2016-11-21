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
    this.$el.toggleClass('li-border');
    
    
    var model = new RoomReservation.Models.Offer({
        "image_url": this.model.get('image_url'),
        "short_desc": this.model.get('short_desc') ,
        "long_desc": this.model.get('long_desc'),
        "item_id": this.model.get('item_id'),
        "room_code": this.model.get('room_code'),
        "price": this.model.get('price')
      });

    if(this.$el.hasClass('li-border')){
      console.log('send details...');
      $(document).trigger('add:offer',model);
    }
    
    else {
      console.log('remove details...');
      $(document).trigger('remove:offer',model);
    }

  }

});
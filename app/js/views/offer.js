/*offer.js- View to handle rendering of single offer , handle slection/deselection click for each offer
          - based on click events update data to slectedOffers collection through JQUERY trigger events*/

RoomReservation.Views.Offer = Backbone.View.extend({
  tagName: 'li',
  className: 'media col-md-6 col-lg-4',
  template: _.template($('#tmpl-room').html()),

  events:{
    'click #offerSelect':'onClickSelect'
  },

  render: function() {
    var html = this.template(this.model.toJSON());
    this.$el.append(html);
    return this;
  },

  onClickSelect: function(e) {
    e.preventDefault();
    this.$el.toggleClass('li-border');
    
    // get details for current offer    
    var model = new RoomReservation.Models.Offer({
        "image_url": this.model.get('image_url'),
        "short_desc": this.model.get('short_desc') ,
        "long_desc": this.model.get('long_desc'),
        "item_id": this.model.get('item_id'),
        "room_code": this.model.get('room_code'),
        "price": this.model.get('price')
      });

    
    // if offer is selected add selection border and send data through JQuery trigger event to selected Offers collection
    // so that the current model gets added/deleted to/from collection for final confirmation display
    
    if(this.$el.hasClass('li-border')){
      $(document).trigger('add:offer',model);
      this.$('#offerSelect').text('Deselect Offer');
    }
    else {
      $(document).trigger('remove:offer',model);
      this.$('#offerSelect').text('Select Offer');
    }

  }

});
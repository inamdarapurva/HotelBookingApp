RoomReservation.Views.Guest = Backbone.View.extend({
  template: _.template($('#tmpl-guest-details').html()),

  events: {
    'submit .contract-form': 'onFormSubmit'
  },

  render: function() {
    var html = this.template();
    this.$el.append(html);
    return this;
  },

  onFormSubmit: function(e) {
    e.preventDefault();
     console.log(this.$('.contact-fname-input').val() + this.$('.contact-lname-input').val() + this.$('.contact-tel-input').val() + this.$('.contact-email-input').val());      
     
    }

});

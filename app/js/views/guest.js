RoomReservation.Views.Guest = Backbone.View.extend({
  template: _.template($('#tmpl-guest-details').html()),

  events: {
    'submit .contract-form': 'onFormSubmit'
  },

  render: function() {
    var html = this.template(_.extend(this.model.toJSON(), {
      isNew: this.model.isNew()
    }));
    //var html = this.template();
    this.$el.append(html);
    return this;
  },

  onFormSubmit: function(e) {
    e.preventDefault();
     //console.log(this.$('.contact-fname-input').val() + this.$('.contact-lname-input').val() + this.$('.contact-tel-input').val() + this.$('.contact-email-input').val());      
     
     $(document).trigger('form:submitted', {
      first_name: this.$('.contact-fname-input').val(),
      last_name: this.$('.contact-lname-input').val(),
      email: this.$('.contact-email-input').val()
    });

      
    }

});

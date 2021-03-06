Template.message.rendered = function () {
  $('.messages-wrapper').scrollTop($('.messages').height());
};

Template.message.helpers({
  ownMessage: function () {
    return this.userId == Meteor.userId();
  },

  selectedUserMessage: function () {
    return this.username == Session.get('selectedUser');
  }
});

Template.message.events({
  'click .delete': function (e) {
    e.preventDefault();

    if (confirm("Delete this message?"))
      Messages.remove(this._id);
  }
});

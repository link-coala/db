Template.postSubmit.events({
  'submit form': function(e) {
    e.preventDefault();

    var post = {
      url: $(e.target).find('[name=url]').val(),
      title: $(e.target).find('[name=title]').val()
    };

    // display the error to the user and abort
    Meteor.call('postInsert', post, function(error, result) {
    if (error)
	return alert(error.reason);
	
	Router.go('postPage', {_id: result._id});
	});
  }
});
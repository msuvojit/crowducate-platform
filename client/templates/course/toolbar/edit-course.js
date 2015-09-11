Template.editCourse.events({
  'click #edit-course':function(event, template){
    // Get reference to Router
    var router = Router.current();

    // Get Course ID from router
    var courseId = router.params._id;

    // set editing course session variable to this course id
    Session.set('editingCourseId', courseId);
  }
});

Template.editCourse.helpers({
	'owner': function() {
		if (Meteor.user().username == this.owner)
		{
			return true;	
		}
		else
		{
			return false;
		}
		
	}
});

'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$("#testjs").click(function(e) {
		$('.jumbotron h1').text("Javascript is connected");
		$("#testjs").text("BUTTON WHOA!");
		$(".jumbotron p").toggleClass("active");
	});

	$("#submitBtn").click(function(e) {
		var currProj = $("#project").val();
		var width = $("#width").val();
		//console.log(currProj);
		$(currProj).animate({
			width: width
		});
		var desc = $(currProj).find(".project-description");
		var newdesc = $("#description").val();
		//console.log(desc);
		if (desc.length != 0)  {
			//console.log("TRUE");
			desc.text(newdesc);
		}
	});

	// Add any additional listeners here
	// example: $("#div-id").click(functionToCall);
	$("a.thumbnail").click(projectClick);
}

function projectClick(e) {
  // Cancel the default action, which prevents the page from reloading
    e.preventDefault();

    // In an event listener, $(this) is the leement that fired the event
    var projectTitle = $(this).find("p").text();
    console.log(projectTitle);
    var jumbotronHeader = $(".jumbotron h1");
    jumbotronHeader.text(projectTitle);

    var containingProject = $(this).closest(".project"); 
    var description = $(containingProject).find(".project-description");
    if (description.length == 0) { 
       $(containingProject).append("<div class='project-description'><p>Description of the project.</p></div>"); 
    } else { 
       //description.html("<p>Stop clicking on me! You just did it at " + (new Date()) + "</p>");
       $(".project-description").toggle("easing");
    }
}

var name = "Stephany Floyd";
var role = "Front-End Developer";

//pulls data provided in resumebuilder.js above and uses the HTML of helper.js and inserts into index.html

//$("#main").append(skills); //lists the skills without spacing or anything
// //$("#main").append(skills[0]);//lists the first item of zero based array
// $("#main").append(bio.bioName);
// $("#main").append(work["empPosition"]); //bracket notation
//$("#main").append(education.schoolName); //dot notation

var bio = {
	"name":"Stephany Floyd",
	"role":"Front-End Developer",
	"welcomeMessage":"Hiya! Welcome to my JS & jQuery resume.",
	"contacts": 
			{"mobile":"630.890.3951",
 			"email":"stephany.floyd@hotmail.com",
 			"github":"stephiroth7",
 			"twitter":"@stephiroth7",
 			"location":"Chicago, IL"
 			}, //contacts object
	"bioPic":"images/sFlo.jpg",
	"skills": ["kicking ass", "taking names", "javascript", "jQuery", "making candy", "racing motorcycles","eating food"]
};//end bio object

bio.DisplayBio = function() {

	//declare vars
	var formattedContactInfo, formattedRole, formattedName, formattedBioPic, formattedWelcome;

	//name and role
	formattedName = HTMLheaderName.replace("%data%", bio.name);
	formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	$("#header").prepend(formattedName + formattedRole);
	
	 //top contacts
	 HTMLcontactGeneric = HTMLmobile.replace("%data%", bio.contacts.mobile);
	 HTMLcontactGeneric += HTMLemail.replace("%data%", bio.contacts.email);
	 HTMLcontactGeneric += HTMLtwitter.replace("%data%", bio.contacts.twitter);
	 HTMLcontactGeneric += HTMLgithub.replace("%data%", bio.contacts.github);
	 HTMLcontactGeneric += HTMLlocation.replace("%data%", bio.contacts.location);
	$("#topContacts").append(HTMLcontactGeneric)

	//bio picture and welcome message
	formattedBioPic = HTMLbioPic.replace("%data%",bio.bioPic)
	formattedWelcome = HTMLWelcomeMsg.replace("%data%",bio.welcomeMessage)
	 $("#header").append(formattedBioPic + formattedWelcome);
	
	//skills, yo
	if(bio.skills.length > 0){
		$("#header").append(HTMLskillsStart);
		for( var i = 0; i < bio.skills.length; i++)
		{
			var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
			$("#skills").append(formattedSkill);
		}//end for
	};//end if
}



 var work = {
 	"jobs" : [
 		{
 			"employer":"AppDevy",
	 		"title":"Front End Developer",
	 		"location":"413 N. Carpenter St., Chicago, IL",
	 		"dates":"August 2014 - present",
	 		"description":"Making internet stuff sparkle!"
	 	}, //end individual jobs object
	 	{
 			"employer":"Morgan Services",
	 		"title":"Software Development Intern",
	 		"location":"323 N. Michigan Ave., Chicago, IL",
	 		"dates":"February 2014 - June 2014",
	 		"description":"C# Applications Development"
	 	}, //end individual jobs object
	 	{
 			"employer":"Fitness Formula Clubs",
	 		"title":"Massage Therapist",
	 		"location":"10 S. Clinton, Chicago, IL",
	 		"dates":"February 2012 - present",
	 		"description":"Top Producer of oily clients."
	 	} //end individual jobs object
 	]//end jobs array
 };//end work object

 work.DisplayWork = function() {
//FOR-IN LOOP
if(work.jobs.length > 0){
	for(job in work.jobs){
		$("#workExperience").append(HTMLworkStart);
		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		//there is a work object that has an array of jobs objects inside it.
		//the word "job" is being used as the INDEX of the jobs array to get to the jobs object's elements
		// workObject.jobsArrayItem[job].jobsArrayItemElement
		var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		var formattedWorkDates = HTMLworkDates.replace("%data%",work.jobs[job].dates) ;
		var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);

		var formattedWorkHistory = formattedEmployer + formattedWorkTitle + formattedWorkLocation + 
		formattedWorkDates + formattedWorkDescription; //concatenates everything together
		
		$(".work-entry:last").append(formattedWorkHistory);
		//the jQuery element:last selector picks the very last element of a group of things.
		//in this instance, it is the very last element of the "work-entry" class group
	}//end for
}//end if
}//end func displayWork()


 var education = { //education is an object
 	"schools" : [ //schools is an array of school objcts
 		{
 		"name":"DeVry University",
 		"location":"Chicago, IL",
 		"degree":"BS",
 		"majors":["Enterprise Systems Analysis"],//school major is an array by itself
 		"dates":"2014",
 		"url":"http://www.devry.edu/"
 	}, //remember the comma since schools is an array!
 	{
 		"name":"College of DuPage",
 		"location":"Glen Ellyn, IL",
 		"degree":"AA",
 		"majors":["Business"],
 		"dates":"2007" ,
 		"url":"http://www.cod.edu/"
 	}
 	],//end school array
 	"onlineCourses": [ //onlinecourses is an array of objects
 	{
 		"title":"HTML & CSS",
 		"dates":"2014",
 		"name":"Udacity",
 		"url":"http://www.udacity.com/"
 	},
 	{
 		"title":"Git & GitHub",
 		"dates":"2014",
 		"name":"Udacity",
 		"url":"http://www.udacity.com/"
 	},
 	{
 		"title":"JavaScript Basics",
 		"dates":"2015",
 		"name":"Udacity",
 		"url":"http://www.udacity.com/"
 	}
 	] //end onlinecourses array
 }; //end education object

education.DisplayEducation = function(){
console.log(education.schools.length);
var formattedSchool, formattedOnline;
$("#education").append(HTMLschoolStart);
//console.log("education.schools.length: " + education.schools.length);
	for(var i = 0; i < education.schools.length; i++){
		
		formattedSchool = HTMLschoolName.replace("%data%", education.schools[i].name); 
		formattedSchool += HTMLschoolDegree.replace("%data%", education.schools[i].degree);
		formattedSchool += HTMLschoolDates.replace("%data%", education.schools[i].dates);
		formattedSchool += HTMLschoolLocation.replace("%data%", education.schools[i].location);
		//console.log(education.schools[i].majors.length);
		for(var j = 0; j < education.schools[i].majors.length; j++){
			//console.log( "j= " + j);
		 	formattedSchool += HTMLschoolMajor.replace("%data%", education.schools[i].majors[j]);
		 	$(".education-entry:last").append(formattedSchool);
		 	}//end for majors
		//$(".education-entry:last").append(formattedSchool);
	}//end for schools

	$("#education").append(HTMLonlineClasses);
	$("#education").append(HTMLschoolStart);
	for(var i = 0; i < education.onlineCourses.length; i++){
		//console.log(education.onlineCourses[i].title);
		formattedOnline = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title);
		formattedOnline += HTMLonlineSchool.replace("%data%", education.onlineCourses[i].name);
		formattedOnline += HTMLonlineDates.replace("%data%", education.onlineCourses[i].dates);
		formattedOnline += HTMLonlineURL.replace("%data%", education.onlineCourses[i].url);
		//console.log(formattedOnline);
		$(".education-entry:last").append(formattedOnline);
	}//end for online
}

var projectObj = {
	"projects" : [
	{
		"title": "Builders Association of America Chicago Chapter",
		"dates":"October 2014",
		"description":"Convert an existing Windows-based CMS to custom Wordpress CMS.",
		"image":"images/bldrs.png"
	},//end individual project object
	{
		"title": "ChristKindlMarket Reservations App",
		"dates":"November 2014",
		"description":"Wordpress-based reservations system for securing tables at a local Christmas market.",
		"image":"images/christkindle.png"
	},//end individual project object
		{
		"title": "TecnicoMoto",
		"dates":"July 2014",
		"description":"Personal website for Chicago-based motorcycle tecnician to use for blogging. Highly modified Wordpress theme utilizing custom photography",
		"image":"images/tecnico.png"
	}//end individual project object
	]//end project array
};//end projects object

projectObj.DisplayProjects = function() {
	var formattedProjectTitle, formattedProjectDates, formattedProjectDesc, formattedProjImg, formattedProjects;
	var projLength = projectObj.projects.length;
	if(projLength > 0){
		for(var i = 0; i< projLength; i++){
			//console.log(i);
			$("#projects").append(HTMLprojectStart);
			formattedProjectTitle = HTMLprojectTitle.replace("%data%", projectObj.projects[i].title);
			//$(".project-entry:last").append(formattedProjectTitle);
			formattedProjectDates = HTMLprojectDates.replace("%data%", projectObj.projects[i].dates);
			//$(".project-entry:last").append(formattedProjectDates);
			formattedProjectDesc = HTMLprojectDescription.replace("%data%", projectObj.projects[i].description);
			//$(".project-entry:last").append(formattedProjectDesc);
			
			if(projectObj.projects[i].image.length > 0){ //checks to see if there is a string in the image url place
				console.log("project image " + i);
				formattedProjImg = HTMLprojectImage.replace("%data%", projectObj.projects[i].image);
				//$(".project-entry:last").append(formattedProjImg);
			}//end if images

			formattedProjects = formattedProjectTitle + formattedProjectDates + formattedProjectDesc + formattedProjImg;
		
			$(".project-entry:last").append(formattedProjects);
		}//end for i
	}//end if projLength
}




/*******************
the function(loc) is an anonymous function and document.click is a jQuery event handler.
the function(loc) that's passed into document.click() is run every time a user clicks the page
and loc.pageX and loc.pageY are jQuery events utilizting the loc object that return the number associated
with the mouse position relative to the left and top sides of the page.
uses locationFinder() in helper.js
********************/
$(document).click(function(loc) {
  // your code goes here!
  var x = loc.pageX;
  var y = loc.pageY;
  logClicks(x,y);
});


$("#main").append(internationalizeButton);
function inName(_string){
	var stringTxt = _string;
	var stringArr = stringTxt.split(" ");
	var strArrLength = stringArr.length - 1;

	var last = stringArr[strArrLength].toUpperCase();

	return stringArr[0].slice(0,1) + stringArr[0].slice(1).toLowerCase() + " " + last; //capitalizes first letter of first name and appends the rest of the string, then adds space  and then last name.
}

/**********************
sometimes, a function works because it is using an object on the global scope, 
so it is accessible to a function that's also on the global scope.  when the function isn't encapsulated
in an object, that's what's going on.
***********************/
work.DisplayWork();
projectObj.DisplayProjects();
bio.DisplayBio();
education.DisplayEducation();


$("#mapDiv").append(googleMap);
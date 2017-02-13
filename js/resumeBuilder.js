/***************************************************************************
resumeBuilder.js
Alex Mathai
Front-End Developer NanoDegree
Javascript Basics Final Project - Resume

Below are 4 JSON Objects: bio, education, work, and projects
****************************************************************************/
var bio = {
	"name" : "Alex Mathai",
	"role" : "Tech StartUp Founder | Strategy Consultant | Innovator",
	"contacts": {
		"mobile": "312-588-2300",
		"email": "alex@imagenius.com",
		"github": "https://github.com/alexmathai",
		"twitter":"",
		"location": "Gotham, USA"
	},
	"welcomeMsg" : "Greetings idiots.",	
	"skills" : ["Product Development","Go-to-Market Strategy",   
	"Financial Modeling","Marketing Strategy","Process Improvement"],
	"biopic" : "./images/fry.jpg",
	

}

bio.display = function () {
	    if(bio.skills.length > 0){
	      var formattedPic = HTMLbioPic.replace("%data%",bio.biopic);
	      $("#header").append(formattedPic);

	      var formattedHeader = HTMLheaderName.replace("%data%", bio.name);
	      $("#header").append(formattedHeader);

	      var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	      $("#header").append(formattedRole);

	      var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	      $("#header").append(formattedMobile);

	      var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
	      $("#header").append(formattedEmail);

	      var formattedGitHub = HTMLgithub.replace("%data%", bio.contacts.github);
	      $("#header").append(formattedGitHub);

	      var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
	      $("#header").append(formattedLocation);


	      $("#header").append(HTMLskillsStart);

	      var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);      
	      $("#skills").append(formattedSkill);
	      
	      formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);      
	      $("#skills").append(formattedSkill);
	      formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);      
	      $("#skills").append(formattedSkill);
	      formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);      
	      $("#skills").append(formattedSkill);
	      formattedSkill = HTMLskills.replace("%data%", bio.skills[4]);      
	      $("#skills").append(formattedSkill);         
	    
	    }
	}

bio.display();


var education = {
	"schools": [
		
		{
			"name":"University of Chicago, Booth School of Business",
			"location": "Chicago, IL",
			"degree": "MBA",
			"majors" : ["Strategy", "Marketing", "Entrepreneurship"],			
			"dates": 2012,
			"url": "http://www.uchicago.edu"
		},
		{
			"name":"California Institute of Technology",
			"location": "Chicago, IL",
			"degree": "BS",
			"majors" : ["Computer Engineering"],
			"dates": 2005,
			"url": "http://www.caltech.edu"
			
		},
	],
	"onlineCourses": [
		{
			"title":"Data Science Specialization",
			"school":"Johns Hopkins University/Coursera",
			"date": 2014,
			"url": "https://www.udacity.com/course/viewer#!/c-ud804/l-3077038869/m-3071088640"

		},
		{
			"title":"Front-End Developer NanoDegree",
			"school":"Udacity",
			"date": 2017,
			"url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"

		}

	]
}

education.display = function(){
      for(school in education.schools){
        $("#education").append(HTMLschoolStart);
        var formattedSchoolName = HTMLschoolName.replace("%data%",education.schools[school].name);
        $(".education-entry:last").append(formattedSchoolName);
        var formattedSchoolCity = HTMLschoolLocation.replace("%data%",education.schools[school].location);
        $(".education-entry:last").append(formattedSchoolCity);
        var formattedSchoolDegree = HTMLschoolDegree.replace("%data%",education.schools[school].degree);
        $(".education-entry:last").append(formattedSchoolDegree);
        var formattedSchoolDates = HTMLschoolDates.replace("%data%",education.schools[school].dates);
        $(".education-entry:last").append(formattedSchoolDates);
        var formattedSchoolMajor = HTMLschoolMajor.replace("%data%",education.schools[school].majors);
        $(".education-entry:last").append(formattedSchoolMajor);
        
      };
      for(onlineCourse in education.onlineCourses){
      	$("#onlineCourses").append(HTMLonlineCourseStart);
      	var formattedonlineCourse = HTMLonlineCourse.replace("%data%",education.onlineCourses[onlineCourse].title);
      	$(".education-entry:last").append(formattedonlineCourse);
      	var formattedSchool = HTMLSchoolName.replace("%data%",education.onlineCourses[onlineCourse].school);
      	$(".education-entry:last").append(formattedSchool);
      	var formattedonlineDate = HTMLonlineDate.replace("%data%",education.onlineCourses[onlineCourse].date);
        $(".education-entry:last").append(formattedonlineDate);
      };
    };

education.display();

var work = {
	"jobs": [
		{
			"employer":"Justice League",
			"title":"BatMan",
			"location":"Chicago, IL",
			"dates":"2015-present",
			"description":"Keep the world safe."
		},
		{
			"employer":"Avengers",
			"title":"Iron Man",
			"location":"New York, New York",
			"dates":"2014-present",
			"description":"Prevent Ragnarok."
		},
		{
			"employer":"The Old Republic",
			"title":"Jedi Master",
			"location":"Los Angeles, CA",
			"dates":"2015-present",
			"description":"Defeat the Sith"
		},
		{
			"employer":"House Stark",
			"title":"Lord of Winterfell, Warden of the North",
			"location":"Minneapolis, Minnesota",
			"dates":"2012-2013",
			"description":"Stop the White Walkers."
		},
		{
			"employer":"Freelance Business Consultant",
			"title":"Consultant",
			"location":"Chicago, IL",
			"dates":"2006-2012, 2014-2015",
			"description":"Clients ranging from startups to small caps in insurance, renewable energy, logistics, healthcare, technology, retail, non-profits. Focused on growth strategy, go/no go decisions, and go-to-market strategy."
		},		
	]
}

work.display = function() {
      for(job in work.jobs){
            $("#workExperience").append(HTMLworkStart);
            
              var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
              var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
              var formattedEmpTit = formattedEmployer + formattedTitle;
              $(".work-entry:last").append(formattedEmpTit);
              var formattedLocation = HTMLworkLocation.replace("%data%",work.jobs[job].location);
              $(".work-entry:last").formattedLocation;
              var formattedDates = HTMLworkDates.replace("%data%",work.jobs[job].dates);
              $(".work-entry:last").append(formattedDates);
              var formattedDesc = HTMLworkDescription.replace("%data%",work.jobs[job].description);
              $(".work-entry:last").append(formattedDesc);
              //console.log(".work-entry:last");
            

          }


    }

work.display();

var projects = {
	"projects": [
		{
			"title": "Defeat the Joker",
			"dates": "2015 - present",
			"description": "Stop that clown from laughing.",
			"images": ["./images/joker.jpg","./images/joker2.jpg","./images/joker3.jpg"]
		},
		{
			"title": "Stop the Penguin",
			"dates": "2010 - 2011",
			"description": "Send him to the fishes.",
			"images": ["./images/penguin.jpg"]
		}
	]
}

projects.display = function() {
      for(project in projects.projects){
        $("#projects").append(HTMLprojectStart);
        var formattedProjTitle = HTMLprojectTitle.replace("%data%",projects.projects[project].title);

       // console.log("proj.title: " + projects.projects[project].title);
        //console.log("title: " + formattedProjTitle);
        $(".project-entry:last").append(formattedProjTitle);
        var formattedProjDates = HTMLprojectDates.replace("%data%",projects.projects[project].dates);
        $(".project-entry:last").append(formattedProjDates);
        var formattedProjDescription = HTMLprojectDescription.replace("%data%",projects.projects[project].description);
        $(".project-entry:last").append(formattedProjDescription);
        if(projects.projects[project].images.length > 0){
          for(image in projects.projects[project].images){
            var formattedProjImage = HTMLprojectImage.replace("%data%",projects.projects[project].images[image]);
            $(".project-entry:last").append(formattedProjImage);

          };

        }; 
        
      };
    };

projects.display();


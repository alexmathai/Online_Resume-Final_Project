
var bio = {
	"name" : "Alex Mathai",
	"role" : "Tech StartUp Founder | Strategy Consultant | Innovator",
	"contacts": {
		"mobile": "305-984-6935",
		"email": "alexmathai1@gmail.com",
		"github": "https://github.com/alexmathai",
		"twitter":"",
		"location": "Ft. Lauderdale, Florida"
	},
	"welcomeMsg" : "Greetings idiots.",	
	"skills" : ["Product Development","Go-to-Market Strategy",   
	"Financial Modeling","Marketing Strategy","Process Improvement"],
	"biopic" : "./images/fry.jpg",
	

}


var education = {
	"schools": [
		
		{
			"name":"University of Chicago, Booth School of Business",
			"location": "Chicago, IL",
			"degree": "MBA",
			"majors" : ["Strategy", "Marketing", "Entrepreneurship"],			
			"dates": 2009,
			"url": "http://www.uchicago.edu"
		},
		{
			"name":"Illinois Institute of Technology",
			"location": "Chicago, IL",
			"degree": "BS",
			"majors" : ["Computer Engineering"],
			"dates": 1998,
			"url": "http://www.iit.edu"
			
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
			"employer":"BeerDropper",
			"title":"Product Manager",
			"location":"Chicago,IL",
			"dates":"2015-present",
			"description":"Alcohol delivery start-up using patented technology to safely deliver alcohol in under-served markets."
		},
		{
			"employer":"Sprowt Messenger",
			"title":"Founding Team/Chief Strategist",
			"location":"Chicago, IL",
			"dates":"2014-present",
			"description":"Mobile messaging app bringing organization and productivity to chat."
		},
		{
			"employer":"Lanio Innovation Consulting",
			"title":"Sr. Project Manager",
			"location":"Grand Rapids, MI",
			"dates":"2015-present",
			"description":"Working as the right hand of the Founder, established processes to create a sustainable business practice including: strategic planning, client management, team management, new hire selection, onboarding, and mentoring."
		},
		{
			"employer":"EXL Service, Inc.",
			"title":"Associate",
			"location":"New York, NY",
			"dates":"2012-2013",
			"description":"As part of the Operations Consulting group, worked on financial modeling and process improvement projects for large cap companies in the insurance and financial services industries."
		},
		{
			"employer":"Freelance Business Consultant",
			"title":"Consultant",
			"location":"Chicago, IL",
			"dates":"2006-2012, 2014-2015",
			"description":"Clients ranging from startups to small caps in insurance, renewable energy, logistics, healthcare, technology, retail, non-profits. Focused on growth strategy, go/no go decisions, and go-to-market strategy."
		},
		{
			"employer":"RxDocuments, LLC.",
			"title":"Product Development Manager",
			"location":"Miami, FL",
			"dates":"2003-2005",
			"description":""
		},
		{
			"employer":"Tellabs, Inc.",
			"title":"Software Engineer",
			"location":"Bolingbrook, IL",
			"dates":"1999-2002",
			"description":""
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


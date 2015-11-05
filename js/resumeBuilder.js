var bio = {
	"name":"Victor Yang",
	"role":"Web Developer",
	"contacts":{
		"mobile": "+79150610055",
		"email": "yanky2000@yahoo.com",
		"github": "https://github.com/yanky2000",
		"location": "Moscow"
	},
	"bioPic":"images/my_photo.png",
	"skills":["Web development","JS","Russian and Korean languages", "A father"],
	"welcomeMessage":"Welcome to my page!",
	"function": function () {
		var formattedBioMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
		var formattedBioEmail= HTMLemail.replace("%data%",bio.contacts.email);
		var formattedBioGithub = HTMLgithub.replace("%data%",bio.contacts.github);
		var formattedBioLocation = HTMLlocation.replace("%data%",bio.contacts.location);
		var formattedBioPic = HTMLbioPic.replace("%data%",bio.bioPic);
		var formattedBioWelcomeMsg= HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);
		$("#header").prepend (HTMLheaderRole.replace("%data%",bio.role));
		$("#header").prepend (HTMLheaderName.replace("%data%",bio.name));
		$("#topContacts").append(formattedBioMobile, formattedBioEmail, formattedBioGithub, formattedBioLocation);
		$("#header").append(formattedBioPic);
		if(bio.skills.length > 0) {
			$("#header").append(HTMLskillsStart);
			bio.skills.forEach(function (skillEntry) {
				$("#skills").append(HTMLskills.replace("%data%",skillEntry));
			});
		};
		$("#header").append(formattedBioWelcomeMsg);
	}
};

var education = {
	"schools": [
		{
		"name": "Khabarovsk Academay of Economics and Law",
		"dates": "1993-1998",
		"majors": ["banking","economics"],
		"degree": "BA",
		"location": "Khabarovsk",
		"url": ""
		},
		{
		"name": "Kangwon National University",
		"dates":"1999-2001",
		"majors": "marketing",
		"degree": "master",
		"location": "Chuncheon",
		"url": ""
		}
		],
	"onlineCourses": [
		{
		"title": "Udacity Front End Developer",
		"school": "Udacity",
		"dates": "2015-2016",
		"url": "Udacity.com"
		}
	],
	"function": function () {
		$("#education").append(HTMLschoolStart);
		education.schools.forEach(function (schoolEntry) {
			var formtName = HTMLschoolName.replace("%data%",schoolEntry.name);
			var formtDates = HTMLschoolDates.replace("%data%", schoolEntry.dates);
			var formtMajors = HTMLschoolMajor.replace("%data%", schoolEntry.majors);
			var formtDegree = HTMLschoolDegree.replace("%data%", schoolEntry.degree);
			var formtMajor = HTMLschoolMajor.replace("%data%", schoolEntry.majors);
			var formtLocation= HTMLschoolLocation.replace("%data%", schoolEntry.location);
			$(".education-entry:last").append(formtName);
			$(".education-entry:last").append(formtDates);
			$(".education-entry:last").append(formtMajors);
			$(".education-entry:last").append(formtDegree);
			$(".education-entry:last").append(formtLocation);
		}),
		$(".education-entry:last").append(HTMLonlineClasses);
		education.onlineCourses.forEach (function (courseEntry) {
			var formtCourseTitle = HTMLonlineTitle.replace("%data%",courseEntry.title);
			var formtCourseSchool= HTMLonlineSchool.replace("%data%",courseEntry.school);
			var formtCourseDates = HTMLonlineDates.replace("%data%",courseEntry.dates);
			var formtCourseURL = HTMLonlineURL.replace("%data%",courseEntry.url);
			$(".education-entry:last").append(formtCourseTitle);
			$(".education-entry:last").append(formtCourseDates);
			$(".education-entry:last").append(formtCourseSchool);
			$(".education-entry:last").append(formtCourseURL);
		})
	}
};

var projects = {
	"projects": [
		{
		"title": "My Udacity",
		"dates": "09/2015 - current",
		"description": "Notes on my personal experience with Udacity Nanodegree",
		"image": "images/udacity_logo.jpg"
		}
	],
	"function": function() {
		$("#projects").append(HTMLprojectStart);
		projects.projects.forEach(function (projectEntry) {
			var formattedTitle = HTMLprojectTitle.replace("%data%",projectEntry.title);
			var formattedDates = HTMLprojectDates.replace("%data%",projectEntry.dates);
			var formattedDesription = HTMLprojectDescription.replace("%data%",projectEntry.description);
			var formattedImage= HTMLprojectImage.replace("%data%",projectEntry.image);
			$(".project-entry:last").append(formattedImage);
			$(".project-entry:last").append(formattedTitle);
			$(".project-entry:last").append(formattedDates);
			$(".project-entry:last").append(formattedDesription);
		})
	}
};

var work = {
	"jobs": [
		{
		"employer": "Self-employed",
		"title": "Entrepreneur",
		"location": "Moscow",
		"dates": "2011 - present",
		"description": "trading business",
		},
		{
		"employer": "Carlsberg group, Baltika breweries",
		"title": "National key account manager",
		"location": "Moscow",
		"dates": "2008-2011",
		"description": "Sales"
		},
		{
		"employer": "MARS LLC.",
		"title": "Key account manager",
		"location": "Moscow",
		"dates": "2006-2008",
		"description": "Sales"
		}
	],
	"function": function () {
		$("#workExperience").append(HTMLworkStart);
		work.jobs.forEach(function (jobEntry) {
			var formattedEmployer = HTMLworkEmployer.replace("%data%",jobEntry.employer);
			var formattedTitle = HTMLworkTitle.replace("%data%",jobEntry.title);
			var formattedDates = HTMLworkDates.replace("%data%",jobEntry.dates);
			var formattedLocation = HTMLworkLocation.replace("%data%",jobEntry.location);
			var formattedDesription = HTMLworkDescription.replace("%data%",jobEntry.description);
			var formattedEmployerTitle = formattedEmployer + formattedTitle;
			$(".work-entry:last").append(formattedEmployerTitle);
			$(".work-entry:last").append(formattedDates, formattedLocation);
			$(".work-entry:last").append(formattedDesription);
		})
	}
};


bio.function ();
education.function ();
work.function ();
projects.function ();


//Adding map
$("#mapDiv").append(googleMap);


//Internationalize button
$("#main").append(internationalizeButton);

function inName () {
	var natName = bio.name.split(" ");
	var firstIntName = natName[0][0].toUpperCase() + natName[0].slice(1).toLowerCase();
	var secondIntName = natName[1].toUpperCase();
	var intFullName = firstIntName+" "+ secondIntName;
	console.log(firstIntName+" "+ secondIntName);
	return intFullName
};



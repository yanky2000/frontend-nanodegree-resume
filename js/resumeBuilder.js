var bio = {
	"name":HTMLheaderName.replace("%data%","Victor Yang"),
	"role":HTMLheaderRole.replace("%data%","Web Developer"),
	"contact":{
		"mobile": HTMLmobile.replace("%data%","+79150610055"),
		"email": HTMLemail.replace("%data%","yanky2000@yahoo.com"),
		"github": HTMLgithub.replace("%data%","https://github.com/yanky2000"),
		"location": HTMLlocation.replace("%data%","Moscow, Russia")
	},
	"bioPic":HTMLbioPic.replace("%data%","images/my_photo.png"),
	"skills":[HTMLskills.replace("%data%","Web development"),
				HTMLskills.replace("%data%","JS"),
				HTMLskills.replace("%data%","Russian and Korean languages")],
	"welcomeMessage":HTMLwelcomeMsg.replace("%data%","Welcome to my page!")
};

var education = {
	"school": [
		{
		"name": HTMLschoolName.replace("%data%","Khabarovsk Academay of Economics and Law"),
		"dates": HTMLschoolDates.replace("%data%","1993-1998"),
		"majors": HTMLschoolMajor.replace("%data%",["banking","economics"]),
		"degree": HTMLschoolDegree.replace("%data%","BA"),
		"location": HTMLschoolLocation.replace("%data%","Khabarovsk, Russia"),
		"url": ""
		},
		{
		"name": HTMLschoolName.replace("%data%","Kangwon National University"),
		"dates":HTMLschoolDates. replace("%data%","1999-2001"),
		"majors": HTMLschoolMajor.replace("%data%",["marketing"]),
		"degree": HTMLschoolDegree.replace("%data%","master"),
		"location": HTMLschoolLocation.replace("%data%","Khabarovsk, Russia"),
		"url": ""
		}
		],
	"onlineCourses": [
		{
		"title": HTMLonlineTitle.replace("%data%","Udacity Front End Developer"),
		"school": HTMLonlineSchool.replace("%data%","Udacity"),
		"dates": HTMLonlineDates.replace("%data%","2015"),
		"url": HTMLonlineURL.replace("%data%","")
		}
	]
};

var projects = {
	"projects": [
		{
		"title": HTMLprojectTitle.replace("%data%",""),
		"dates": HTMLprojectDates.replace("%data%",""),
		"description": HTMLprojectDescription.replace("%data%",""),
		"image": HTMLprojectImage.replace("%data%","")
		}
	]
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
	]
};

work.jobs.forEach(function formatJob (jobEntry) {
	var formattedEmployer = HTMLworkEmployer.replace("%data%",jobEntry.employer);
	var formattedTitle = HTMLworkTitle.replace("%data%",jobEntry.title);
	var formattedEmployerTitle = formattedEmployer + formattedTitle;
	$("#main").append(HTMLworkStart);
	$(".work-entry:last").append(formattedEmployerTitle)
});

$("#header").prepend(bio.name,bio.role);

$("#header").append(bio.bioPic, bio.welcomeMessage, bio.contact.mobile, bio.contact.email,
					bio.contact.github);


$("#projects").append(projects.projects[0].title);

if(bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);
	$("#skills").append(HTMLskills.replace("%data%", bio.skills[0]));
	$("#skills").append(HTMLskills.replace("%data%", bio.skills[1]));
	$("#skills").append(HTMLskills.replace("%data%", bio.skills[2]));
};

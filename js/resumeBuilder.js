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
	"skills":HTMLskills.replace("%data%",["JS","Web development","russian, korean languages"]),
	"welcomeMessage":HTMLwelcomeMsg.replace("%data%","Welcome to my page!")
};

var education = {
	"school": [
		{
		"name": HTMLschoolName.replace("%data%","Khabarovsk Academay of Economics and Law"),
		"date": HTMLschoolDates.replace("%data%","1993-1998"),
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

var work = {
	"jobs": [
		{
		"employer": HTMLworkEmployer.replace("%data%","Self-employed"),
		"title": HTMLworkTitle.replace("%data%","Entrepreneur"),
		"location": HTMLworkLocation.replace("%data%","Moscow"),
		"dates": HTMLworkDates.replace("%data%","2011 - present"),
		"description": HTMLworkDescription.replace("%data%","trading business")
		},
		{
		"employer": HTMLworkEmployer.replace("%data%","Carlsberg group, Baltika breweries"),
		"title": HTMLworkTitle.replace("%data%","National key account manager"),
		"location": HTMLworkLocation.replace("%data%","Moscow"),
		"dates": HTMLworkDates.replace("%data%","2008-2011"),
		"description": HTMLworkDescription.replace("%data%","Sales")
		},
		{
		"employer": HTMLworkEmployer.replace("%data%","MARS LLC."),
		"title": HTMLworkTitle.replace("%data%","Key account manager"),
		"location": HTMLworkLocation.replace("%data%","Moscow"),
		"dates": HTMLworkDates.replace("%data%","2006-2008"),
		"description": HTMLworkDescription.replace("%data%","Sales")
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


$("#header").prepend(bio.name,bio.role);

$("#header").append(bio.bioPic, bio.welcomeMessage, bio.contact.mobile, bio.contact.email,
					bio.contact.github, bio.skills);

$("#main").append(work.jobs[1].employer); //works!!

$("#workExperience").append(work.jobs[1].employer); // doesn't show up on the page

$("#education").prepend(work.jobs[1].employer); // doesn't show up on the page

$("#projects").append(work.jobs[1].employer); // doesn't show up on the page



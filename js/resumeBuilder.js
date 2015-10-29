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
		"name": "Khabarovsk Academay of Economics and Law",
		"date": "1993-1998",
		"majors": ["banking","economics"],
		"degree": "BA",
		"location": "Khabarovsk, Russia",
		"url": ""
		},
		{
		"name": "Kangwon National University",
		"dates": "1999-2001",
		"majors": ["marketing"],
		"degree": "master",
		"location": "Khabarovsk, Russia",
		"url": ""
		}
		],
	"onlineCourses": [
		{
		"title": "Udacity Front End Developer",
		"school": "Udacity",
		"dates": "2015",
		"url": "#"
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
		"description": "trading business"
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

var projects = {
	"projects": [
		{
		"title": "",
		"dates": "",
		"description": "",
		"images": ""
		}
	]
};


$("#header").prepend(bio.name,bio.role);
$("#header").append(bio.bioPic, bio.welcomeMessage, bio.contact.mobile, bio.contact.email,
                    bio.contact.github, bio.skills);

// $("#main#workExperience").append(work.jobs);
$("#main").append(work["title"]);

$("#main").append(education.school,education.dates);


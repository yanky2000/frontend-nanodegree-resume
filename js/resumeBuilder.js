// $("#main").append("Victor");
// var awesomeThought = "I am Victor and I am awesome";
// console.log(awesomeThought);

// var funThoughts = awesomeThought.replace("awesome","fun");
// console.log(funThoughts);
// $("#main").append(funThoughts);

var formattedName = HTMLheaderName.replace("%data%","Victor");
var role = "Web developer";
var formattedRole = HTMLheaderRole.replace("%data%",role);


// $("#header").prepend(formattedName);
// $("#header").append(formattedRole);

var formattedEmail = HTMLemail.replace("%data%","yanky2000@yahoo.com")

var bio = {
	"name":HTMLheaderName.replace("%data%","Victor Yang"),
	"role":HTMLheaderRole.replace("%data%","Web Developer"),
	"yearOfBirth": 1976,
	"contact":{
		"mobile": HTMLmobile.replace("%data%","+79150610055"),
		"email": HTMLemail.replace("%data%","yanky2000@yahoo.com"),
	},
	"bioPic":HTMLbioPic.replace("%data%","images/my_photo.png"),
	"skills":HTMLskills.replace("%data%",["JS","Web development","russian, korean languages"]),
	"welcomeMsg":HTMLwelcomeMsg.replace("%data%","Welcome to my page!")
};

$("#header").prepend(bio.name,bio.role);
$("#header").append(bio.bioPic, bio.skills, bio.contact.mobile, bio.contact.email, bio.welcomeMsg);

var work = {};
	work.city = HTMLworkLocation.replace("%data%","Moscow");
	work.title = HTMLworkTitle.replace("%data%","self-employed");
	work.dates = HTMLworkDates.replace("%data%","2013");

// console.log(work.title);
// console.log(work.dates);
// console.log(work.city);
// console.log(bio.age+1);

var education = {}
	education["school"] = HTMLschoolName.replace("%data%","Kangwon National Universtiy");
	education["dates"] = HTMLschoolDates.replace("%data%","1999-2001");
	education["major"] = HTMLschoolMajor.replace("%data%","Marketing");
	education["location"] = HTMLschoolLocation.replace("%data%", "Chounchon, S.Korea");

// console.log(education.school);
// console.log(education.dates);
// console.log(education.major);
// console.log(education.location);

$("#main").append(work["title"]);
$("#main").append(education.school);

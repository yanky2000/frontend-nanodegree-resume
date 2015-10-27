// $("#main").append("Victor");
// var awesomeThought = "I am Victor and I am awesome";
// console.log(awesomeThought);

// var funThoughts = awesomeThought.replace("awesome","fun");
// console.log(funThoughts);
// $("#main").append(funThoughts);

var formattedName = HTMLheaderName.replace("%data%","Victor");
var role = "Web developer";
var formattedRole = HTMLheaderRole.replace("%data%",role);


$("#header").prepend(formattedName);
$("#header").append(formattedRole);

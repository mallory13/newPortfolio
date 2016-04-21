///<reference path="../typings/tsd.d.ts" />


// Steele Portfolio
// @author: Mallory Steele
// 
    
//set up IIFE

(function () {
    
    "use strict";
    
    var menu = '<div class="container-fluid"><div class="navbar-header"> <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false"><span class="sr-only">Toggle navigation</span><span class="icon-bar"></span><span class="icon-bar"></span><span class="icon-bar"></span></button><a class="navbar-brand nav navbar-left" href="index.html"><img src="images/logo2.png" alt="steele suites logo" height="100" width="100"/></i></a> </div><!-- Collect the nav links, forms, and other content for toggling --><div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1"><ul class="nav navbar-nav navbar-right navbar-inverse nav-pills"><li class="home" id="home"><a href="index.html">Home</a></li><li class="projects" id="projects"><a href="projects.html">Recent Projects</a></li> <li class="dropdown about" id="about"><a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">About Me<span class="caret"></span></a><ul class="dropdown-menu"><li><a href="skills.html">Skills</a></li><li><a href="goals.html">Goals</a></li><li class="education" id="education"><a href="education.html">Education</a></li><!--<li><a href="work.html">Work History</a></li>--><li><a href="awards.html">Accomplishments</a></li><!--<li><a href="volunteer.html">Volunteer Work</a></li>--><li role="separator" class="divider"></li></ul></li><li class="contact" id="contact"><a href="contact.html">Contact Me</a></li><li role="separator" class="divider"></li></ul></div><!-- /.navbar-collapse --></div><!-- /.container-fluid -->';
    document.getElementById('global-navigation').innerHTML = menu;
    var filePath = location.pathname;
    filePath = filePath.substring(filePath.lastIndexOf('/') + 1, filePath.lastIndexOf('.'));
    console.log(filePath);
    switch (filePath) {

        case 'skills':
            (function skills() {
                console.log("inside skills function");
                var skills, skill1, skill2, skill3, skill4, skill5, skill6;

                // document.getElementById("skills").innerHTML = "Skills:";
                document.getElementById("skill1").innerHTML = "Ability to work with others as a team player towards a common goal";
                document.getElementById("skill2").innerHTML = "Excellent written and verbal communication skills with an eye for detail";
                document.getElementById("skill3").innerHTML = "Positive and accommodating personality";
                document.getElementById("skill4").innerHTML = "Ambitious to take initiative and continue learning";
                document.getElementById("skill5").innerHTML = "Efficient at multi-tasking and problem solving";
                document.getElementById("skill6").innerHTML = "Experience in a leadership role as well as a mentorship program exercised in the workplace.";
            })();
            break;

        case 'education':
            (function education() {

                console.log("inside education function");
                var education, georgian, georgian1, georgian2, georgian3, georgian4, delta, delta1, ottawa, ottawa1;

                document.getElementById("education").innerHTML = "Education:";
                document.getElementById("georgian").innerHTML = "Georgian College:";
                document.getElementById("georgian1").innerHTML = "Interactive Web Design and Development - Current";
                document.getElementById("georgian2").innerHTML = "Computer Programmer - 2015";
                document.getElementById("georgian4").innerHTML = "Bartending 101 - 2005";
                document.getElementById("delta").innerHTML = "Delta Training Program:";
                document.getElementById("delta1").innerHTML = "Introduction to Management - 2009";
                document.getElementById("ottawa").innerHTML = "University of Ottawa:";
                document.getElementById("ottawa1").innerHTML = "Journalism - 2006";

            })();
            break;
        case 'index':
            (function mission() {

                console.log("inside missionStatement function");
                var missionStatement, missionParagraph;
                document.getElementById("missionStatement").innerHTML = "Mission Statement:";
                document.getElementById("missionParagraph").innerHTML = "I am currently a web accessibility consultant for the Ministry of Education. My professional mission is to strive to be a life long learner and continually develop a variety of skills. I will seek and take advantage of opportunities to gain experience in the web development industry as well as confront and learn from every challenge presented in the process. I will continue to expand my portfolio while creating and maintaining positive personal and working relationships.";
            })();
            break;
        case 'goals':
            (function goals() {

                console.log("inside goals function");
                var goals, goal1, goal2, goal3;

                // document.getElementById("goals").innerHTML = "Goals:";
                document.getElementById("goal1").innerHTML = "Travel the world";
                document.getElementById("goal2").innerHTML = "Retire at age 40";
                document.getElementById("goal3").innerHTML = "Volunteer abroad";


            })();
            break;
        case 'projects':
            (function projects() {

                console.log("inside project function");
                var projects, aandcParagraph, albatrossParagraph, beautieLoungeParagraph;
                document.getElementById("projects").innerHTML = "Recent Projects:";
                document.getElementById("aandcParagraph").innerHTML = "This is the federal website for Aboriginal and Northern Development Canada. I worked with a team of programmers to update the website to current HTML5 and ensure all content was compliant to the Web Content Accessibility Guidelines.";
                document.getElementById("albatrossParagraph").innerHTML = "The Albatross Motel is located near the main end in Wasaga Beach. This is a small business wordpress website currently being customized.";
                document.getElementById("beautieLoungeParagraph").innerHTML = "A small business wordpress website for a local self employed beauty consultant and make up artist.";
            })();
            break;
        case 'awards':
            (function () {
                console.log("inside awards function");

                var awards, award1, award2, award3, award4, award5;
                document.getElementById("awards").innerHTML = "Accomplishments:";
                document.getElementById("award1").innerHTML = "IBM’s Master the Mainframe Part 1 Winner";
                document.getElementById("award2").innerHTML = "Dean’s Council Computer Programmer Representative";
                document.getElementById("award3").innerHTML = "People’s Choice Award at the Georgian College Innovation Showcase";
                document.getElementById("award4").innerHTML = "IBM’s Choice Award at the Georgian College Innovation Showcase";
                document.getElementById("award5").innerHTML = "Dean’s List";

            })();
            break;
        case 'contact':
            
    
            //save the button to a variable
            var submit = document.getElementById("submit");
                
   
    
            //add click event listener to the submit button
                
            submit.addEventListener("click", function (event) {

                var firstName = document.getElementById("firstName").value;
                var lastName = document.getElementById("lastName").value;
                var email = document.getElementById("email").value;
                var message = document.getElementById("message").value;
                console.log(firstName);
                
                event.preventDefault();
                console.log('First Name: ' + firstName + '\n' + 'Last Name: ' + lastName + '\n' + 'Email:' + email + '\n' + 'Message: ' + message + '\n');

            }, false);


            break;
        default:
    }


 //CreateJS Section ++++++++++++++++++++++++++++++++++++

    //global variables
    var screenWidth = 468;
    var screenHeight = 60;

    // reference to canvas element
    var canvas = document.getElementById("canvas");
    canvas.setAttribute("width", screenWidth.toString());
    canvas.setAttribute("height", screenHeight.toString());

    // create a stage container object
    var stage = new createjs.Stage(canvas);

    var newLabel = null;
    var newLabel = 5;

    var button = null;
    var buttonMove = 5;
    var buttonIsGrowing = true;
    
    var sup = null;

    function init() {
        console.log("Initialization");
        // enable mouseover effects for all buttons
        stage.enableMouseOver(20);

        // set frame rate to 60 fps
        createjs.Ticker.framerate = 60;
        // listen for frame changes and call the animationLoop function
        createjs.Ticker.on("tick", animationLoop);

        // call the main function
        main();
    }

    // runs every frame
    function animationLoop() {

        newLabel.rotation += 5;
        button.rotation += 5;
        newLabel.x += newLabelMove;
        button.x += buttonMove;

        if (buttonIsGrowing) {
            if (button.scaleX < 1) {
                button.scaleX *= 1.1;
                button.scaleY *= 1.1;
            }
            else {
                buttonIsGrowing = false;
            }
        } else {
            if(button.scaleX >= 0.1) {
                button.scaleX *= 0.9;
                button.scaleY *= 0.9;
            }
            else {
                buttonIsGrowing = true;
            }
        }

        if ((newLabel.x >= screenWidth) || (newLabel.x <= 0)) {
            newLabelMove *= -1;
            buttonMove *= -1;
        }

        // refresh the stage object
        stage.update();
    }

    // this is where all the magic happens
    function main() {
        sup = new createjs.Bitmap('../images/sup.png');
        sup.regX = sup.getBounds().width * 0.5;
        sup.regY = sup.getBounds().height * 0.5;
        sup.scaleX = 0.3;
        sup.scaleY = 0.3;
        sup.x = screenWidth * 0.5;
        sup.y = screenHeight * 0.5;
        stage.addChild(button);
        
        button = new createjs.Bitmap('../images/buyButton.png');
        button.regX = button.getBounds().width * 0.5;
        button.regY = button.getBounds().height * 0.5;
        button.scaleX = 0.3;
        button.scaleY = 0.3;
        button.x = screenWidth * 0.5;
        button.y = screenHeight * 0.5;
        stage.addChild(button);

        newLabel = new createjs.Text("NEW", "16px Consolas", "#000000");
        newLabel.regX = newLabel.getMeasuredWidth() * 0.5;
        newLabel.regY = newLabel.getMeasuredHeight() * 0.5;
        newLabel.x = screenWidth * 0.5;
        newLabel.y = screenHeight * 0.5;
        stage.addChild(newLabel);

        button.on("click", function() {
            
            // if button is clicked take to product page
            window.location = "http://sellingout.azurewebsites.net";
            
            
            
            
            // if(newLabel.text === "Clicked!") {
            //     newLabel.text = "Hello World!";
            // } else {
            //     newLabel.text = "Clicked!";
            // }
            
            // newLabel.regX = newLabel.getMeasuredWidth() * 0.5;
            // newLabel.regY = newLabel.getMeasuredHeight() * 0.5;
        });

        button.on('mouseover', function() {
            button.alpha = 0.5;
        })

        button.on('mouseout', function() {
            button.alpha = 1;
        })
    }

//wait for window to load then call init
    window.onload = init;




})();


//check that form input is valid
// function validateForm() {
//     var fname = document.forms["contactForm"]["fname"].value;
//     var lname = document.forms["contactForm"]["lname"].value;
//     var email = document.forms["contactForm"]["email"].value;
//     var message = document.forms["contactForm"]["lname"].value;

//     if (fname == null || fname == "") {
//         alert("First name must be filled out");
//         return false;
//     }

//     if (lname == null || lname == "") {
//         alert("Last name must be filled out");
//         return false;
//     }

//     if (email == null || email == "") {
//         alert("You must enter a valid email address");
//         return false;
//     }

//     if (message == null || message == "") {
//         alert("You must enter a message");
//         return false;
//     }
//     else {
//         return true;
//     }
// };







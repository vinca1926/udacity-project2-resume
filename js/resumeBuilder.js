var bio = {
    "name": "Sudha Ramasamy",
    "role": "Web Developer",
    "contacts": {
        "email": "sudha.ramasamy@dummy.com",
        "linkedin": "http:linkedin.com/Sudha",
        "github": "https://github.com/vinca1926",
        "location": "Ohio"
    },
    "welcomeMessage": "Welcome",
    "picture": "images/fry.jpg",
    "skills": ["J2EE", "Java",
        "Python", "JavaScript", "C++", "Linux"
    ],
    "display": function() {
        $("#header").prepend(HTMLheaderRole.replace("%data%", this.role));
        $("#header").prepend(HTMLheaderName.replace("%data%", this.name));
        $("#header").append(HTMLbioPic.replace("%data%", this.picture));
        $("#header").append(HTMLWelcomeMsg.replace("%data%", this.welcomeMessage));

        if (this.skills.length > 0) {

            $("#header").append(HTMLskillsStart);
            for (i in this.skills) {
                $("#skills").append(HTMLskills.replace("%data%", this.skills[i]));
            }
        }
    }
}

var education = {
    "schools": [{
        "name": "GCT",
        "location": "Coimbatore,India",
        "degree": "Bachelor of Engineering",
        "major": ["EEE"],
        "dates": 1990,
        "url": " "
    }],
    "onlineCourses": [{
        "title": "Front-End Nanodegree",
        "school": "Udacity",
        "date": 2015,
        "url": "http://www.udacity.com"
    }],
    "display": function() {
        if (this.schools.length > 0 || this.onlineCourses.length > 0) {
            for (i in this.schools) {
                $("#education").append(HTMLschoolStart);

                var formattedSchoolName = HTMLschoolName.replace("%data%", this.schools[i].name).replace("#", this.schools[i].url);
                var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", this.schools[i].degree);
                var formattedSchoolDates = HTMLschoolDates.replace("%data%", this.schools[i].dates);
                var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", this.schools[i].location);
                var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", this.schools[i].major);


                $(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree);
                $(".education-entry:last").append(formattedSchoolDates);
                $(".education-entry:last").append(formattedSchoolLocation);
                $(".education-entry:last").append(formattedSchoolMajor);
                $(".education-entry:last").append(formattedSchoolMinor);
            }

            if (this.onlineCourses.length > 0) {
                $("#education").append(HTMLonlineClasses);
                for (i in this.onlineCourses) {
                    $("#education").append(HTMLschoolStart);
                    var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", this.onlineCourses[i].title).replace("#", this.onlineCourses[i].url);
                    var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", this.onlineCourses[i].school);
                    var formattedOnlineDates = HTMLonlineDates.replace("%data%", this.onlineCourses[i].completed);
                    var formattedOnlineURL = HTMLonlineURL.replace("%data%", this.onlineCourses[i].url).replace("#", this.onlineCourses[i].url);

                    $(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);
                    $(".education-entry:last").append(formattedOnlineDates);
                    $(".education-entry:last").append(formattedOnlineURL);
                }
            }

        }

    }
};

var work = {
    "jobs": [{
        "employer": "KLA-Tencor",
        "title": "Systems Engineer",
        "location": "Milpitas/California, Chennai ",
        "datesWorked": "1997-2010",
        "description": "Machine control, Image Processing"
    }, {
        "employer": "PNC Bank",
        "title": "Lead ",
        "location": "Ohio",
        "datesWorked": "2011",
        "description": "Architecting J2EE enterprise applications for the architecture and strategy group  "
    }, {
        "employer": "FRBC",
        "title": " ",
        "location": "Cleveland",
        "datesWorked": "2011-current",
        "description": "Architecting J2EE enterprise applications for the architecture and strategy group  "
    },
    ],
    "display": function() {
        $("#workExperience").append(HTMLworkStart);
        for (i in this.jobs) {
            $(".work-entry:last").append(HTMLworkEmployer.replace("%data%", this.jobs[i].employer) + HTMLworkTitle.replace("%data%", work.jobs[i].title));
            $(".work-entry:last").append(HTMLworkLocation.replace("%data%", this.jobs[i].location));
            $(".work-entry:last").append(HTMLworkDates.replace("%data%", this.jobs[i].datesWorked));
            $(".work-entry:last").append(HTMLworkDescription.replace("%data%", this.jobs[i].description));
        }
    }
}


var projects = {
    "projects_detail": [{
        "title": "Online Portfolio",
        "datesWorked": "June 2015",
        "description": "",
        "images": ["images/197x148.gif"],
        "url": "http://iamnotacontentdeveloper.com/"
    }, {
        "title": "Web Development Wiki",
        "datesWorked": "June 2015 - Sept 2015",
        "description": "",
        "images": ["images/197x148.gif"],
        "url": "http://iwannarobottodomybidding.com/"
    }],
    "display": function() {
        if (this.projects_detail.length > 0) {
            for (i in this.projects_detail) {
                $("#projects").append(HTMLprojectStart);
                var formattedProjectTitle = HTMLprojectTitle.replace("%data%", this.projects_detail[i].title).replace("#", this.projects_detail[i].url);
                var formattedProjectDates = HTMLprojectDates.replace("%data%", this.projects_detail[i].datesWorked);
                var formattedProjectDescription = HTMLprojectDescription.replace("%data%", this.projects_detail[i].description);
                $(".project-entry:last").append(formattedProjectTitle);
                $(".project-entry:last").append(formattedProjectDates);
                $(".project-entry:last").append(formattedProjectDescription);
                for (img in this.projects_detail[i].images) {
                    var formattedProjectImage = HTMLprojectImage.replace("%data%", this.projects_detail[i].images[img]);
                    $(".project-entry:last").append(formattedProjectImage);
                }
            }
        }
    }
}

bio.display();
work.display();
projects.display();
education.display();
$("#mapDiv").append(googleMap);

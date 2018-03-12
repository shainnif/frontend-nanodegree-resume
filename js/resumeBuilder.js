/*
This is empty on purpose! Your code to build the resume will go here.
 */
var bio = {
  name: "Shaine Ismail",
  role: "Developer",
  contacts: {
    mobile: "07962018171",
    email: "shainnif@gmail.com",
    github: "shainnif",
    twitter: "@shainnif",
    location: "Newark",
  },
  welcomeMessage: "lorem ipsum dolor sit amet etc etc etc.",
  skills: ["Bananas", "Cheese", "Java", "Hadoop"],
  biopic: "images/fry.jpg",
  display: function () {
    $("#header").prepend(format(HTMLheaderRole, bio.role));
    $("#header").prepend(format(HTMLheaderName, bio.name));
    $("#header").append(format(HTMLbioPic, bio.biopic));
    $("#header").append(format(HTMLwelcomeMsg, bio.welcomeMessage));

    for (const key in bio.contacts) {
      if (bio.contacts.hasOwnProperty(key)) {
        var formattedContact = format(getStub(key), bio.contacts[key]);
        $("#topContacts","#footerContacts").append(formattedContact);
      }
    }
    if (bio.skills.length > 0) {
      $("#header").append(HTMLskillsStart);
      bio.skills.forEach(function (skill) {
        $("#skills").append(format(HTMLskills, skill));
      });
    }
  }
};

var education = {
  schools: [
    {
      name: "Stirling  University",
      location: "Stirling",
      degree: "Msc(Hons) Information Technology",
      majors: ["Java", "C++", "Databases"],
      dates: "Sept 1998 - Aug 1999",
      url: "https://www.stir.ac.uk/",
    },
    {
      name: "Heriot-Watt University",
      location: "Edinburgh",
      degree: "MA(Hons) Economics",
      majors: ["Microeconomics", "International Finance"],
      dates: "Sept 1994 - June 1998",
      url: "https://www.hw.ac.uk/",
    },
  ],
  onlineCourses: [
    {
      title: "Udacity Front-End Web Developer",
      school: "Udacity",
      dates: "Mar 2015 - Mar 2018",
      url: "https://www.udacity.com/",
    }
  ],
  display: function () {
    if (education.schools.length > 0) {
      education.schools.forEach(function (school) {
        $("#education").append(HTMLschoolStart);
        $(".education-entry:last").append(format(HTMLschoolName, school.name) + format(HTMLschoolDegree, school.degree));
        $(".education-entry:last").append(format(HTMLschoolDates, school.dates));
        $(".education-entry:last").append(format(HTMLschoolLocation, school.location));
        $(".education-entry:last").append(format(HTMLschoolMajor, school.majors.join(", ")));
      });
    }
    if (education.onlineCourses.length > 0) {
      $("#education").append(HTMLonlineClasses);
      education.onlineCourses.forEach(function (course) {
        $("#education").append(HTMLschoolStart);
        $(".education-entry:last").append(format(HTMLonlineTitle, course.title) + format(HTMLonlineSchool, course.school));
        $(".education-entry:last").append(format(HTMLonlineDates, course.dates));
        $(".education-entry:last").append(format(HTMLonlineURL, course.url));
      });
    }
  }
};

var work = {
  jobs: [
    {
      position: "Director",
      employer: "Carsift Ltd",
      dates: "Jan 2015 - Current",
      location: "Newark",
      description: "Built some stuff to do with cars",
    },
    {
      position: "Director",
      employer: "SNI Services Limited",
      dates: "March 2008 - Current",
      location: "London",
      description: "Consultancy for the Banking industry",
    }
  ],
  display: function () {
    $("#workExperience").append(HTMLworkStart);
    if (work.jobs.length > 1) {
      work.jobs.forEach(function (job) {
        $(".work-entry:last").append(format(HTMLworkEmployer, job.employer) + format(HTMLworkTitle, job.position));
        $(".work-entry:last").append(format(HTMLworkDates, job.dates));
        $(".work-entry:last").append(format(HTMLworkLocation, job.location));
        $(".work-entry:last").append(format(HTMLworkDescription, job.description));
      });
    }
  }
};

var projects = {
  projects: [
    {
      title: "Kubaru",
      dates: "Mar 2012 - Jan 2016",
      images: ["http://www.kubaru.org/images/logo.png"],
      description: "Microfinance Charity"
    },
  ],
  display: function () {
    if (projects.projects.length > 0) {
      $("#projects").append(HTMLprojectStart);
      projects.projects.forEach(function (project) {
        $(".project-entry:last").append(format(HTMLprojectTitle, project.title));
        $(".project-entry:last").append(format(HTMLprojectDates, project.dates));
        $(".project-entry:last").append(format(HTMLprojectDescription, project.description));
        $(".project-entry:last").append(format(HTMLprojectImage, project.images[0]));
      });
    }
  }
};

// var maps_api_key = "AIzaSyCUn3Afnok_9Ff3hQ1WlruvXmaKJuHOv1I";

bio.display();
education.display();
work.display();
projects.display();

$("#mapDiv").append(googleMap);

function format(stub, value) {
  return stub.replace("%data%", value);
}

function getStub(lookup) {
  var contactMap = {
    mobile: HTMLmobile,
    email: HTMLemail,
    github: HTMLgithub,
    twitter: HTMLtwitter,
    location: HTMLlocation,
  };

  return contactMap[lookup];
}
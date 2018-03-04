/*
This is empty on purpose! Your code to build the resume will go here.
 */

var bio = {
  "name": "Shaine Ismail",
  "role": "Developer",
  "contacts": {
    "mobile": "07962018171",
    "email": "shainnif@gmail.com",
    "github": "shainnif",
    "twitter": "@shainnif",
    "location": "Newark",
  },
  "welcomeMessage": "lorem ipsum dolor sit amet etc etc etc.",
  skills: [ "awesomeness", "delivering things",
              "cryogenic sleep", "saving the universe"
          ],
  "bioPic": "images/fry.jpg",
  display: function(){
    console.log('Print bio');
  }
};

var education = {
  schools: [
    {
      name: "Heriot-Watt University",
      location: "Edinburgh",
      degree: "MA(Hons) Economics",
      majors: ["Microeconomics","International Finance"],
      years: "1994-1998",
      url: "https://www.hw.ac.uk/",
    },
    {
      name: "Stirling  University",
      location: "Stirling",
      degree: "Msc(Hons) Information Technology",
      majors: ["Java","C++","Databases"],
      years: "1998-1998",
      url: "https://www.stir.ac.uk/",
    },
  ],
  onlineCourses: [
    {
      title: "Udacity Front-End Web Developer",
      school: "Udacity",
      dates:"2015-Present",
      url: "https://www.udacity.com/",
    }
  ],
  display: function () {
    console.log("Shaine");
  }
};

var work = {
  jobs: [
    {
      position: "Director",
      employer: "Carsift Ltd",
      years: "2015-Current",
    },
    {
      position: "Director",
      employer: "SNI Services Limited",
      years: "2008-Current",
    }
  ],
  display: function () {
    console.log()
  }
};

var projects = {
  projects: [
    {
      title: "Kubaru",
      dates: "2012-2016",
      images: ["http://www.kubaru.org/images/logo.png"],
    },
  ],
  display: function(){
    console.log("shaine");
  }
};
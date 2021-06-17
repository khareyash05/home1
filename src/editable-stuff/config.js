const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  // gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  // gradientColors: "#031B88, #6096FD, #AAB6FB, #FB788E, #FAA7B8, #ecf0f1",
  gradientColors: "#86E3CE, #D0E6A5, #FFDD94, #FA897B, #CCABD8, #ecf0f1",
  firstName: "Yash",
  middleName: "",
  lastName: "Khare",
  message: " Passionate about changing the world with technology. ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/khareyash05",
    },
    {
      image: "fa-facebook",
      url: "https://www.facebook.com/khareyash05409/",
    },
    {
      image: "fa-instagram",
      url: "https://www.instagram.com/khareyash05/",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/yash-khare-0978821aa/",
    },
    {
      image: "fa-twitter",
      url: "https://twitter.com/YashKha57954753",
    },
  ],
};

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/me.jpg"),
  imageSize: 375,
  message:
    "My name is Yash Khare. I’m a first year student pursuing bachelors in Computer Science and Engineering at AKGEC,Ghaziabad. I'm most passionate about giving back to the community, and my goal is to pursue this passion within the field of software engineering. In my free time, I love to play tennis and listen to rock music to cheer me up for the next task.If you dont find me at Home , you can find me at the nearest planetariums(I love to observe and talk about the universe).Altogether, I would sum up myself as an enthusiast and a hardworker; who would do anything to complete the task. ",
  resume: require("../editable-stuff/resume2.pdf"),
};

// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "khareyash05", //i.e."johnDoe12Gh"
  reposLength: 6,
  specificRepos: [],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    { 
      img: require("../editable-stuff/me.jpg"), 
      label: "First slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      img: require("../editable-stuff/me.jpg"), 
      label: "Second slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "HTML/CSS", value: 90 },
    { name: "JavaScript", value: 85 },
    { name: "NodeJs.", value: 70 },
    { name: "ReactJs.", value: 65 },
    { name: "SQL", value: 75 },
    { name: "C/C++", value: 75 },
    { name: "Java", value: 70 },
    { name: "MongoDB", value: 80 },
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 80 },
    { name: "Collaboration", value: 90 },
    { name: "Positivity", value: 75 },
    { name: "Adaptability", value: 85 },
    { name: "Problem Solving", value: 75 },
    { name: "Empathy", value: 90 },
    { name: "Organization", value: 70 },
    { name: "Creativity", value: 90 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm currently looking for full-time roles in Software Development and Full Stack Web Development! If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at",
  email: "khareyash05@gmail.com",
};

const experiences = {
  show: false,
  heading: "Experiences",
  data: [
    {
      role: 'Open Source Contributor',// Here Add Company Name
      companylogo: require('../assets/img/dell.png'),
      date: 'Feb 2021 - June 2021',
    }
  ]
}

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };

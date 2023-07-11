/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation
import cloud from "./assets/images/cloud-academy-logo-png-transparent.png";
import sapienza from "./assets/images/sapienzaLogo.png";
import reply from "./assets/images/replyLogo.png";
import lstm from "./assets/images/architettura.png";
import docker from "./assets/images/docker.png";
// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: false // Set to false to use static SVG
};

const greeting = {
  username: "Daniel Ferro",
  title: "Hi all, I'm Daniel",
  subTitle: emoji(
    "A passionate Software Engineer 🚀 having an experience in development and design of banking and management software with docker / python / java and some other cool tools and frameworks."
  ),
  resumeLink:
    "", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/FERROX98",
  linkedin: "https://www.linkedin.com/in/daniel-ferro-851294180/",
  gmail: "danielferro19@gmail.com",
  stackoverflow: "https://stackoverflow.com/users/15454584/daniel-ferro",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: " ",
  skills: [
    emoji(
      "⚡ Develop highly back end for your for Italian cash deposit and loan banking systems"
    ),
    emoji("⚡ Implementation of automated tests in go for the web platform of wisdom"),
    emoji(
      "⚡ Integration of third party services such as Azure / AWS "
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "Mysql",
      fontAwesomeClassname: "fab fa-mysql"
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "Scala",
      fontAwesomeClassname: "fab fa-scala"
    },
    {
      skillName: "Nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "Azure",
      fontAwesomeClassname: "fas fa-azure"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "Go",
      fontAwesomeClassname: "fab fa-go"
    },
    {
      skillName: "C",
      fontAwesomeClassname: "fab fa-c"
    },
    {
      skillName: "C+",
      fontAwesomeClassname: "fab fa-c+"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Sapienza University of Rome",
      logo: sapienza,
      subHeader: "Bachelor's degree in Computer Science",
      duration: "Sep 2018 - Dic 2021",
      desc: "Thesis in artificial intelligence, i.e. the creation of a system based on deep learning for the recognition of dynamic hand gestures, the model is based on Deep LSTM reaching an accuracy of 92% in recognizing the gestures of the DHG 14 / 28 dataset ",
      descBullets: [
        "110/110 Cum Laude",
      ]
    }
    
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Security", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "80%"
    },
    {
      Stack: "Programming",
      progressPercentage: "100%"
    },{
      Stack: "Python", //Insert stack or technology you have experience in
      progressPercentage: "100%" //Insert relative proficiency in percentage
    },{
      Stack: "Linux", //Insert stack or technology you have experience in
      progressPercentage: "100%" //Insert relative proficiency in percentage
    },{
      Stack: "Cloud", //Insert stack or technology you have experience in
      progressPercentage: "80%" //Insert relative proficiency in percentage
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Reply",
      companylogo: reply,
      date: "May 2022 – Present",
      desc: "",
      descBullets: [
        "Design and development of banking systems.",
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "Hand Gesture Recognition based on Deep Learning",
  projects: [
    {
      image: lstm,
      projectName: "HAND GESTURE RECONGITION BASED ON DEEP LEARNING",
      projectDesc: "Development, research and implementation of a D-LSTM artificial intelligence capable of recognizing dynamic hand gestures with an accuracy of 92% sl dataset DHG 14/28.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://github.com/FERROX98/HandGestureRecognitionLSTM"
        }
        //  you can add extra buttons here.
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Java",
      subtitle:
        "Java basic course.",
      image: cloud,
      footerLink: [
        {
          name: "Certification",
          url: "https://certificates.cloudacademy.com/dd449999027d18c120416cf7fcf4dc75c9e83255.pdf"
        }
      ]
    },
    {
      title: "Docker (DCA)",
      subtitle:
        "Docker Certified Associate Exam.",
      image: docker,
      footerLink: [
        {
          name: "Certification",
          url: "https://certificates.cloudacademy.com/2b12265c61a4408553a7e1c3dbcc7f02d6942fa4.pdf"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};


const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "My Inbox is open for all.",
  number: "+39-3348621117",
  email_address: "danielferro19@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "danielferro9", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};


const blogSection ={}
const talkSection ={}
const podcastSection ={}


export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  blogSection,
  talkSection,
  podcastSection,
  achievementSection,
  contactInfo,
  twitterDetails
};

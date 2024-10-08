import {
 
  cluboard,
  gdsc,
  iris,
  ecell,
  genesis,
  chargeswap,
  recruitment,
  devfolio,
  pba,
} from "../assets";

import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillMail,
  AiFillHtml5,
  AiOutlineGitlab,
} from "react-icons/ai";

import {

  SiJavascript,
  SiBootstrap,
  SiReact,
  SiTailwindcss,
  SiPython,
  SiCplusplus,
  SiC,
  SiVisualstudiocode,
  SiPostman,
  SiGit,
  SiMysql,
  SiNetlify,
  SiVite,
} from "react-icons/si";

import { DiCss3, DiJava } from "react-icons/di";

export const resumeLink = "https://drive.google.com/file/d/1OmAXZbEf0S-7Nhn7G9zF17pjnq0XfB3G/view?usp=sharing";
export const repoLink = "https://github.com/ishika-guptaa";

export const callToAction = "https://www.linkedin.com/in/ishika-gupta-408b6a233/";

export const navLinks = [
  {
    id: "skills",
    title: "Skills & Experience",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contactMe",
    title: "Contact Me",
  },
];

export const educationList = [
  {
    id: "education-1",
    icon: pba,
    title: "Madan Mohan Malaviya University of Technology",
    degree: "Bachelor of Technology",
    duration: "August 2022 - Present",
    content1: "Major: Computer Science and Engineering",
    content2: "Overall CGPA: 8.04 / 10"
  },
  {
    id: "education-2",
    icon: pba,
    title: "Government Girls Polytechnic, Gorakhpur",
    degree: "Three Years Diploma Course",
    duration: "July 2019 - June 2022",
    content1: "Computer Science and Engineering",
    content2: "Division First with Honours",
  },
  {
    id: "education-3",
    icon: pba,
    title: "Academic Heights Public School",
    degree: "Senior Secondary School",
    duration: "March 2017 - May 2022",
    content1: "Science Stream: PCM",
    content2: "Percentage: 76.40 %",
  },
  {
    id: "education-4",
    icon: pba,
    title: "PN National Public School",
    degree: "Higher Secondary School",
    duration: "March 2015 - May 2017",
    content1: "CGPA: 10 / 10",
  },
];



export const skills = [
  {
    title: "Programming Languages",
    items: [
     
      {
        id: "pl-1",
        icon: SiCplusplus,
        name: "C++",
      },
      {
        id: "pl-2",
        icon: SiC,
        name: "C",
      },
      {
        id: "pl-3",
        icon: SiPython,
        name: "Python",
      },
      {
        id: "pl-4",
        icon: DiJava,
        name: "Java",
      },
      {
        id: "pl-5",
        icon: AiFillHtml5,
        name: "HTML",
      },
      {
        id: "pl-6",
        icon: DiCss3,
        name: "CSS",
      },
      {
        id: "pl-7",
        icon: SiJavascript,
        name: "JavaScript",
      },
    ],
  },
  {
    title: "Frameworks/Libraries",
    items: [
    
      {
        id: "f-1",
        icon: SiReact,
        name: "ReactJS",
      },
      {
        id: "f-2",
        icon: SiBootstrap,
        name: "Bootstrap",
      },
      {
        id: "f-3",
        icon: SiTailwindcss,
        name: "Tailwind CSS",
      },
      {
        id: "f-4",
        icon: SiVite,
        name: "ViteJS",
      },
    
    ],
  },
  {
    title: "Tools",
    items: [
     
      {
        id: "t-1",
        icon: SiMysql,
        name: "MySQL",
      },
      {
        id: "t-2",
        icon: SiPostman,
        name: "Postman",
      },
      {
        id: "t-3",
        icon: SiVisualstudiocode,
        name: "VS Code",
      },
      {
        id: "t-4",
        icon: SiGit,
        name: "Git",
      },
      {
        id: "t-5",
        icon: AiFillGithub,
        name: "GitHub",
      },
      {
        id: "t-6",
        icon: AiOutlineGitlab,
        name: "Gitlab",
      },
      {
        id: "t-7",
        icon: SiNetlify,
        name: "Netlify",
      },
      {
        id: "t-8",
        icon: SiVite,
        name: "ViteJS",
      },
    ],
  },
];

export const experiences = [
   {
    organisation: "IRIS, NITK",
    logo: iris,
    link: "https://iris.nitk.ac.in/about_us",
    positions: [
      {
        title: "Tech Lead",
        duration: "Apr 2023 - Apr 2024",
        content: [
          {
            text: "Led a team of 40+ students in digitizing administrative, academic and alumni-related work.",
            link: "",
          },
          {
            text: "Managed all phases of Software Development Life Cycle (SDLC) for 15+ modules.",
            link: "",
          },
        ],
      },
      {
        title: "Web Lead",
        duration: "Apr 2022 - Present",
        content: [
          {
            text: "Managing a team of 6 student developers while also overlooking multiple modules.",
            link: "",
          },
        ],
      },
      {
        title: "Web Developer",
        duration: "Nov 2021 - Apr 2022",
        content: [
          {
            text: "Added Conditional Fields support to the Forms Module.",
            link: "",
          },
        ],
      },
      {
        title: "Web Developer Intern",
        duration: "Jun 2021 - Oct 2021",
        content: [
          {
            text: "Developed a multi-role approval flow system to facilitate data collection and display on the Institute's Department Websites.",
            link: "",
          },
        ],
      },
    ],
  }
];


export const projects = [
  {
    id: "project-1",
    title: "Dream Center",
    github: "https://github.com/ishika-guptaa/real-estate-website",
    link: "https://real-estate-website-fr.vercel.app/",
    image: chargeswap,
    content:
      "It provides a robust platform for users to explore real estate listings, manage property details, and securely handle user authentication.",
       stack:[
        {
          id: "icon-1",
         icon: AiFillHtml5,
          name: "HTML",
        },
        {
          id: "icon-2",
          icon: DiCss3,
          name: "CSS",
        },
        {
          id: "icon-3",
           icon: SiJavascript,
          name: "JavaScript"
        },
        {
          id: "icon-4",
          icon: SiReact,
          name: "React"
        },
        {
          id: "icon-5",
          icon: SiTailwindcss,
          name: "TailwindCSS"
        },
       ]
  },
  {
    id: "project-2",
    title: "Picture Finder Hub",
    github: "https://github.com/ishika-guptaa/picture-finder-hub",
    link: "https://picture-finder-hub.netlify.app/",
    image: recruitment,
    content:
      "Picture Finder Hub is a comprehensive online platform for discovering and sharing high-quality images.",
    stack: [
      {
        id: "icon-1",
       icon: AiFillHtml5,
        name: "HTML",
      },
      {
        id: "icon-2",
        icon: DiCss3,
        name: "CSS",
      },
      {
        id: "icon-3",
         icon: SiJavascript,
        name: "JavaScript"
      },
    ],
  },
  {
    id: "project-3",
    title: "Task Tracker",
    github: "https://github.com/ishika-guptaa/task-tracker",
    link: "https://task-tracker-i1gl.onrender.com/",
    image: cluboard,
    content:
      "A comprehensive Full Stack Task Tracker Application utilizing the MERN stack.",
    stack: [
      {
        id: "icon-1",
       icon: AiFillHtml5,
        name: "HTML",
      },
      {
        id: "icon-2",
        icon: DiCss3,
        name: "CSS",
      },
      {
        id: "icon-3",
         icon: SiJavascript,
        name: "JavaScript"
      },
      {
        id: "icon-4",
        icon: SiReact,
        name: "React"
      },
      {
        id: "icon-5",
        icon: SiTailwindcss,
        name: "TailwindCSS"
      },
    ],
  },
  {
    id: "project-4",
    title: "Calculator",
    github: "https://github.com/ishika-guptaa/calculator",
    link: "https://quick-calcii.netlify.app/",
    image: chargeswap,
    content:
      "A user-friendly online calculator website offering a wide range of tools for basic arithmetic calculations.",
       stack:[
        {
          id: "icon-1",
         icon: AiFillHtml5,
          name: "HTML",
        },
        {
          id: "icon-2",
          icon: DiCss3,
          name: "CSS",
        },
        {
          id: "icon-3",
           icon: SiJavascript,
          name: "JavaScript"
        },
       ]
  }
];

export const blogPosts = [
  {
    id: "post-1",
    title: "Blog Post 01 - Title",
    link: "#",
    date: new Date().toLocaleDateString(), // Can be edited to any string format
    image: "https://via.placeholder.com/600/92c952",
    tags: [
      {
        id: "tag-1",
        name: "tag 01"
      },
      {
        id: "tag-2",
        name: "tag 03"
      },
      {
        id: "tag-3",
        name: "tag 03"
      },
    ],
  },
  {
    id: "post-2",
    title: "Blog Post 02 - Title",
    link: "#",
    date: new Date().toLocaleDateString(),
    image: "https://via.placeholder.com/600/d32776",
    tags: [
      {
        id: "tag-1",
        name: "tag 01"
      },
      {
        id: "tag-2",
        name: "tag 03"
      },
      {
        id: "tag-3",
        name: "tag 03"
      },
    ],
  },
  {
    id: "post-3",
    title: "Blog Post 03 - Title",
    link: "#",
    date: new Date().toLocaleDateString(),
    image: "https://via.placeholder.com/600/771796",
    tags: [
      {
        id: "tag-1",
        name: "tag 01"
      },
      {
        id: "tag-2",
        name: "tag 03"
      },
      {
        id: "tag-3",
        name: "tag 03"
      },
    ],
  },
];

export const stats = [
  {
    id: "stats-1",
    title: "Organisations",
    value: "2+",
  },
  {
    id: "stats-2",
    title: "Issues Opened",
    value: "6+",
  },
  {
    id: "stats-3",
    title: "Pull Requests",
    value: "6+",
  },
];

export const extraCurricular = [
  {
    organisation: "Devfolio",
    title: "UniDAO Lead",
    duration: "December 2021 - Present",
    content: [
      {
        text: "Selected among 5 students across the country to lead the initiative and grow the culture of Blockchain and Ethereum, powered by Devfolio.",
        link: "https://www.linkedin.com/feed/update/urn:li:activity:7097977924686942209/",
      },
      {
        text: "Led a cohort of 37 selected students over 6 weeks to learn and build in the Ethereum ecosystem.",
        link: "https://www.linkedin.com/feed/update/urn:li:activity:7095310520282480641/",
      },
    ],
    logo: devfolio,
  },
  {
    organisation: "Google Developer Student Club, NITK",
    title: "Co-Chair",
    duration: "December 2021 - Present",
    content: [
      {
        text: "Started HackClub to promote and spread the culture of Hackathons in the college. 20+ hackathons particiaptions, 15+ wins over the year.",
        link: "",
      },
      {
        text: "Co-designed and developed the official website of Incident, NITK with 15K+ visitors",
        link: "https://incident.nitk.ac.in/",
      },
    ],
    logo: gdsc,
  },
  {
    organisation: "Genesis, NITK",
    title: "Competitions Head",
    duration: "Sep 2021 - Present",
    content: [
      {
        text: "Qualified for the nationals of Indian Hip Hop Dance Championship",
        link: "",
      },
      {
        text: "Won 7 inter-college solo dance competitions",
        link: "",
      },
    ],
    logo: genesis,
  },
  {
    organisation: "IRIS, NITK",
    title: "Tutor",
    duration: "Jan 2022 - Jan 2022",
    content: [
      {
        text: "Mentored 150+ students in a month-long Web Development and Ruby on Rails Bootcamp",
        link: "https://github.com/IRIS-NITK/IRIS-RoR-Bootcamp-2021",
      },
    ],
    logo: iris,
  },
  {
    organisation: "E-Cell, NITK",
    title: "Executive Member",
    duration: "Sep 2021 - Apr 2022",
    content: [
      {
        text: "Organised the season 3 of the E-Cell NITK Podcast",
        link: "https://www.youtube.com/watch?v=uA-Yrk6bVDc",
      },
      {
        text: "Member of the Sponsorship and E-Talks team for E-Summit'22",
        link: "",
      },
    ],
    logo: ecell,
  },
];

export const socialMedia = [
  {
    id: "social-media-1",
    icon: AiFillLinkedin,
    link: "https://www.linkedin.com/in/ishika-gupta-408b6a233/",
  },
  {
    id: "social-media-2",
    icon: AiFillGithub,
    link: "https://github.com/ishika-guptaa",
  },
  {
    id: "social-media-3",
    icon: AiFillMail,
    link: "mailto:ishika11april@gmail.com",
  },
  // {
  //   id: "social-media-4",
  //   icon: AiOutlineTwitter,
  //   link: "https://www.twitter.com/mittalparth_",
  // },
  // {
  //   id: "social-media-5",
  //   icon: AiFillInstagram,
  //   link: "https://www.instagram.com/mittalparth_",
  // },
];

export const aboutMe = {
    name: "Ishika Gupta",
    tagLine: "Web Developer | CSE Student | MMMUT'25",
    // intro: "Software Developer from India who is either busy improving his craft or pondering over the next big idea."
}

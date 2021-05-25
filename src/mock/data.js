import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: '',
  subtitle: '',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:
    'I am a 20 year old sophomore at IIT Roorkee pursuing Bachelors of Technology in Engineering Physics.',
  paragraphTwo:
    'I spend most of my time reading and developing software. I love to create applications which are solution centric :). \n Also, I am a developer at MDG, a student run coding group at IIT Roorkee and a Web Developer at PaAC, Physics and Astronomy club of IIT Roorkee.',
  paragraphThree:
    'Apart from all the development stuff, I enjoy reading books, playing Apex Legends and CSGO, beating my friends at Chess xD. I am learning Piano and web security now a days.',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'Project1.jpg',
    title: 'Collate',
    info: 'Collate is a Chrome extension first of its kind that detects the programming language of a code snippet on its own, executes it using docker images at the server end and shows the result on your browser.',
    info2: '',
    url: '',
    repo: 'https://github.com/silentC1C4D4/Collate', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Project2.jpg',
    title: 'Nerdigram',
    info: "This application was created as part of PaAC. It is a quiz app targeting international audience written in Django and React. It's theme is based on Among Us and Phineas & Ferb :D",
    info2: '',
    url: '',
  },
  {
    id: nanoid(),
    img: 'Project3.jpg',
    title: 'MoU-II',
    info: "A website written in React for an event 'Mysteries of Universe' and organised by Physics and Astronomy Club, IITR. Various eminent Professors from all over the world gave their talks.",
    info2: '',
    url: 'https://new.iitr.ac.in/ils-mou/#/',
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: '',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: '',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: '',
    },
    {
      id: nanoid(),
      name: 'github',
      url: '',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};

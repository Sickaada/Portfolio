import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Madhur', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'My Portfolio', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hey, this is ',
  name: 'Madhur Rao aka Cicada',
  subtitle: "I'm a Software Developer",
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'Profile.jpg',
  paragraphOne:
    'I am a 20 year old sophomore at IIT Roorkee pursuing Bachelors of Technology in Engineering Physics.',
  paragraphTwo:
    "I spend most of my time reading and developing software. I love to create applications which are solution centric :). \n Also, I am a part of IIT Roorkee's programming group MDG, where we develop large scale projects and a Web Developer at PaAC, Physics and Astronomy club of IIT Roorkee.",
  paragraphThree:
    'Apart from all the development stuff, I enjoy reading books, playing Apex Legends and CSGO, beating my friends at Chess xD. I am learning Piano and web security now a days.',
  resume: 'https://drive.google.com/file/d/14_OhNRVEZgq1Dxb0o4uRD-0_LLig28ru/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'Project1.jpg',
    title: 'Collate',
    info: 'Collate is a Chrome extension first of its kind that detects the programming language of a code snippet on its own, executes it using docker images at the server end and shows the result on your browser.',
    info2: '',
    url: 'https://drive.google.com/file/d/1dzDNoZF-52GnALmskERwy_iP8N9bzxWj/view?usp=sharing',
    urltype: 'trailer',
    repo: 'https://github.com/silentC1C4D4/Collate', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Project2.jpg',
    title: 'Nerdigram',
    info: 'This application was created as part of PaAC. It is a Among Us and Phineas & Ferb based theme quiz app targeting international audience written in Django and React. ',
    info2: '',
    url: '',
  },

  {
    id: nanoid(),
    img: 'Project3.jpg',
    title: 'MoU-II',
    info: "A website written in React for an event 'Mysteries of Universe' and organised by Physics and Astronomy Club, IITR. Various eminent Professors from all over the world gave their talks.",
    info2: '',
    urltype: 'live',
    url: 'https://new.iitr.ac.in/ils-mou/#/',
  },
  {
    id: nanoid(),
    img: 'Project4.jpg',
    title: 'Learn-Chess',
    info: 'Learn Chess is a platform for learning chess powered by a custom built chess engine that keeps on increasing in difficulty. The engine works on the Mini-Max algorithm and is optimized using alpha- beta pruning.',
    info2: '',
    urltype: '',
    url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstleyVEVO',
    repo: 'https://github.com/silentC1C4D4/ChessEngineV2',
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'r.madhur1300@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/CicadaSilent',
    },

    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/madhur-rao/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/silentC1C4D4',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};

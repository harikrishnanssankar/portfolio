import { RiComputerLine } from "react-icons/ri";
import {
  FaGraduationCap,
  FaMobileAlt,
  FaReact,
  FaServer,
} from "react-icons/fa";
import { MdLanguage } from "react-icons/md";
import { BsCircleFill } from "react-icons/bs";
import { IProject, IService, ISkill } from "./type";

export const aboutContent:string = "Full Stack Developer with experience in creating elegant and high-performance full stack web applications. Well-versed with software development & quality processes, strong technical and analytical skills, supported by good communication skills, good planning and organizing skills, bottom line responsibility for deliverables";

export const services: IService[] = [
  {
    title: "Education",
    about:
      "B.Tech in Electrical and Electronics Engineering <br> Self Learned Programmer",
    Icon: FaGraduationCap,
  },
  {
    title: "Frontend Development",
    about: "Creates modern responsive websites and webapps",
    Icon: RiComputerLine,
  },
  {
    title: "Backend Development",
    about: "Ecommerce application using Node.js Express and MongoDB",
    Icon: FaServer,
  },
  {
    title: "Mobile App Development",
    about: "Android App development using React Native",
    Icon: FaMobileAlt,
  },
  {
    title: "Frameworks",
    about:
      "Experience in ReactJs, worked on NextJs, React Native, Vue.js, TailwindCSS, etc..",
    Icon: FaReact,
  },
  {
    title: "Languages Known",
    about: "JavaScript, Java, Python, C",
    Icon: MdLanguage,
  },
];

export const languages: ISkill[] = [
  {
    name: "ReactJs",
    level: "92%",
    Icon: BsCircleFill,
  },
  {
    name: "JavaScript",
    level: "80%",
    Icon: BsCircleFill,
  },
  {
    name: "NextJs",
    level: "70%",
    Icon: BsCircleFill,
  },
  {
    name: "Node.js",
    level: "70%",
    Icon: BsCircleFill,
  },
  {
    name: "ExpressJs",
    level: "70%",
    Icon: BsCircleFill,
  },
  {
    name: "MongoDB",
    level: "50%",
    Icon: BsCircleFill,
  },
];

export const tools: ISkill[] = [
  {
    name: "Git",
    level: "80%",
    Icon: BsCircleFill,
  },
  {
    name: "npm",
    level: "60%",
    Icon: BsCircleFill,
  },
];

export const projects: IProject[] = [
  {
    name: "Olx-Cone",
    description:
      "Classifieds application with ui and main functionalitis of olx ",
    image_path: "/images/olx.jpg",
    deployed_url: "https://olx-clone-83579.web.app/",
    github_url:
      "https://github.com/harikrishnanssankar/classifieds-app-olx-react-firebase-chat",
    technologies: ["React", "firebase", "mapbox", "chat"],
    category: ["react"],
  },
  {
    name: "Shopping-Cart",
    description:
      "Fullstack E-commerce application using NodeJs, Express, MongoDB and handlebars",
    image_path: "/images/ecommerce.png",
    deployed_url: "",
    github_url:
      "https://github.com/harikrishnanssankar/Shopping-Cart",
    technologies: ["React", "Node", "Express", "mongoDB", "razor-pay"],
    category: ["node", "express", "mongo"],
  },
  {
    name: "Netflix-clone",
    description:
      "Netflix clone application using react and movie dtails from TMDB api",
    image_path: "/images/netflix.jpg",
    deployed_url: "https://netflix-clone-25dd2.web.app/",
    github_url:
      "https://github.com/harikrishnanssankar/netflix-tmdb-api",
    technologies: ["React", "TMDB", "api"],
    category: ["react"],
  },
  {
    name: "Nexlog",
    description: "A NextJs blog application with supabase as backend",
    image_path: "/images/nexlog.jpg",
    deployed_url: "https://nexlog.vercel.app/",
    github_url:
      "https://github.com/harikrishnanssankar/nexlog",
    technologies: ["React", "Supabase", "NextJs"],
    category: ["react", "nextjs"],
  },
  {
    name: "Amazon-clone",
    description: "Reactjs app with firebase as backend, can view and add product to cart",
    image_path: "/images/amazon_clone.jpg",
    deployed_url: "https://challenge-e58f0.web.app/",
    github_url:
      "https://github.com/harikrishnanssankar/Amazon-clone-react-app",
    technologies: ["React", "firebase"],
    category: ["react"],
  },
  {
    name: "Shoppe 2",
    description: "React ecommerce app using fakestore api, uses redux-toolkit, redux-saga",
    image_path: "/images/shoppe2.jpg",
    deployed_url: "https://shoppe-saga.vercel.app/",
    github_url:
      "https://github.com/harikrishnanssankar/shoppe-2.0-redux-toolkit-saga",
    technologies: ["React", "Redux", "Redux-saga", "Redux-toolkit"],
    category: ["react"],
  },
  {
    name: "Shoppe",
    description: "React ecommerce app using fakestore api, uses redux, redux-saga",
    image_path: "/images/shoppe.jpg",
    deployed_url: "https://shoppe-react.vercel.app/",
    github_url:
      "https://github.com/harikrishnanssankar/shoppe-ecomm-react-redux",
    technologies: ["React", "Redux", "Fakestore api"],
    category: ["react"],
  },
  {
    name: "Pizza Slice",
    description: "React app uses Framer Motion for animations",
    image_path: "/images/pizzaslice.jpg",
    deployed_url: "https://pizza-slice.vercel.app/",
    github_url:
      "https://github.com/harikrishnanssankar/Pizza-slice",
    technologies: ["React", "Framer Motion"],
    category: ["react"],
  },
  {
    name: "Starwars Info",
    description: "React app uses starwars api, fetches data using React Query",
    image_path: "/images/starwars.jpg",
    deployed_url: "https://starwars-reactquery.vercel.app/",
    github_url:
      "https://github.com/harikrishnanssankar/starwars-react-query",
    technologies: ["React", "React Query", "Starwars Api"],
    category: ["react"],
  },
  {
    name: "Todo Android App",
    description: "Android app buid using React Native",
    image_path: "/images/reactnative_todo.jpg",
    deployed_url: "",
    github_url:
      "https://github.com/harikrishnanssankar/todo-app-react-native-storage",
    technologies: ["React", "React Native", "Android", "Storage"],
    category: ["react"],
  },
  {
    name: "Travel-template",
    description: "Landing page for a travel agency",
    image_path: "/images/travel.jpg",
    deployed_url: "https://travel-react-ui-7488e.netlify.app/",
    github_url:
      "https://github.com/harikrishnanssankar/travel-ui-react",
    technologies: ["React", "UI"],
    category: ["react"],
  },
  {
    name: "Vue Auth",
    description: "Vue app with login, signup and admin login, uses localStorage as dataBase",
    image_path: "/images/localstorage_auth.jpg",
    deployed_url: "https://localstorage-authentication-vue-8a8032.netlify.app/",
    github_url:
      "https://github.com/harikrishnanssankar/localstorage-authentication-vue",
    technologies: ["Vue", "LocalStorage"],
    category: [],
  },
  {
    name: "FoodApp-template",
    description: "Food theme website template using HTML, CSS and JS",
    image_path: "/images/food.jpg",
    deployed_url: "https://harikrishnanssankar.github.io/food-app-static-html-template/",
    github_url:
      "https://github.com/harikrishnanssankar/food-app-static-html-template",
    technologies: ["HTML", "CSS", "JS"],
    category: [],
  },
  {
    name: "React Todo App",
    description: "React todo app which users can add, delete, and mark todo as complete. Stores todos on localStorage.",
    image_path: "/images/react_todo.jpg",
    deployed_url: "https://todo-localstorage-66dbe2.netlify.app/",
    github_url:
      "https://github.com/harikrishnanssankar/Todoapp-react-localstorage",
    technologies: ["React", "localStorage", "CRUD"],
    category: ["react"],
  },
];

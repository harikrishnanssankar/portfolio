import { RiComputerLine,  } from "react-icons/ri"
import { FaGraduationCap, FaMobileAlt, FaReact, FaServer } from "react-icons/fa"
import { MdLanguage } from "react-icons/md"
import { BsCircleFill } from "react-icons/bs"
import { IProject, IService, ISkill } from "./type"


export const services:IService[] = [
    {
        title:"Education",
        about:"B.Tech in Electrical and Electronics Engineering <br> Self Learned Programmer",
        Icon: FaGraduationCap,
    },
    {
        title:"Frontend Development",
        about:"Creates modern responsive websites and webapps",
        Icon:RiComputerLine,
    },
    {
        title:"Backend Development",
        about:"Created Ecommerce application using Node.js Express and MongoDB",
        Icon:FaServer,
    },
    {
        title:"Mobile App Development",
        about:"Android App,development using React Native and Ionic React",
        Icon:FaMobileAlt,
    },
    {
        title:"Frameworks",
        about:"Experience in ReactJs, worked on NextJs, React Native, Vue.js, TailwindCSS, etc..",
        Icon:FaReact,
    },
    {
        title:"Languages Known",
        about:"JavaScript, Python, C, Rust",
        Icon:MdLanguage,
    },
    
]

export const languages:ISkill[] = [
    {
        name:"ReactJs",
        level:"90%",
        Icon:BsCircleFill,
    },
    {
        name:"NextJs",
        level:"10%",
        Icon:BsCircleFill,
    },
    {
        name:"JavaScript",
        level:"10%",
        Icon:BsCircleFill,
    },
    {
        name:"Node.js",
        level:"10%",
        Icon:BsCircleFill,
    },
    {
        name:"ExpressJs",
        level:"10%",
        Icon:BsCircleFill,
    },
    {
        name:"MongoDB",
        level:"10%",
        Icon:BsCircleFill,
    },
]

export const tools:ISkill[] = [
    {
        name:"Git",
        level:"10%",
        Icon:BsCircleFill,
    },
    {
        name:"npm",
        level:"10%",
        Icon:BsCircleFill,
    },
]

export const projects:IProject[] = [
    {
        name:"lglkglk",
        description:"jdsg ai iewhuewi uawieu iuef iif a",
        image_path:"/images/olx.png",
        deployed_url:"https://olx-clone-83579.web.app/",
        github_url:"https://github.com/harikrishnanssankar/classifieds-app-olx-react-firebase-chat",
        technologies: ["React", "firebase", "mapbox"],
        category:["react"]
    },
    {
        name:"lglkglk",
        description:"jdsg ai iewhuewi uawieu iuef iif a",
        image_path:"/images/olx.png",
        deployed_url:"https://olx-clone-83579.web.app/",
        github_url:"https://github.com/harikrishnanssankar/classifieds-app-olx-react-firebase-chat",
        technologies: ["React", "firebase", "mapbox"],
        category:["react"]
    },
    {
        name:"lglkglk",
        description:"jdsg ai iewhuewi uawieu iuef iif a",
        image_path:"/images/olx.png",
        deployed_url:"https://olx-clone-83579.web.app/",
        github_url:"https://github.com/harikrishnanssankar/classifieds-app-olx-react-firebase-chat",
        technologies: ["React", "firebase", "mapbox"],
        category:["react"]
    },
    {
        name:"lglkglk",
        description:"jdsg ai iewhuewi uawieu iuef iif a",
        image_path:"/images/olx.png",
        deployed_url:"https://olx-clone-83579.web.app/",
        github_url:"https://github.com/harikrishnanssankar/classifieds-app-olx-react-firebase-chat",
        technologies: ["React", "firebase", "mapbox"],
        category:["react"]
    },
]
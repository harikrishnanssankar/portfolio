import { IconType } from "react-icons";

//interface - describes th shape of an object
export interface IService {
    title:string,
    about:string,
    Icon:IconType,
}
export interface ISkill {
    name: string,
    level:string,
    Icon: IconType,
}
export interface IProject {
    name:string,
    description:string,
    image_path:string,
    deployed_url:string,
    github_url:string,
    category:Category[],
    technologies: string[],
}

export type Category =  "react" | "node" | "express" | "nextjs" | "mongo";
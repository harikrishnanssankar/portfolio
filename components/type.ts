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
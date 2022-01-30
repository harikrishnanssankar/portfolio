import Image from "next/image";
import { AiFillGithub, AiFillLinkedin, AiFillInstagram } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { GiTie } from "react-icons/gi";
import { useTheme } from "next-themes";

const iconClass = "w-8 h-8 cursor-pointer ";
const textSection = "px-2 py-1 my-3 bg-gray-200 dark:bg-dark-200  rounded-full mx-4 ";
const buttonClass =
  "bg-gradient-to-r from-green-400 to-blue-400 w-8/12 rounded-full py-2 px-5 text-white my-3";

const Sidebar = () => {

  const { theme, setTheme } = useTheme()
  

  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light")
  };
  

  return (
    <div className="text-center pt-5">
      <Image
        src="/images/profile_photo.jpg"
        alt="img"
        width="100"
        height="100"
        className="w-32 h-32 rounded-full"
      />
      <h3 className="my-4 text-3xl font-medium tracking-wider font-kaushan ">
        <span style={{ color: "#00f260" }}>Harikrishnan </span>S
      </h3>
      <p className={textSection}>React Developer</p>
      <p className={textSection + "flex items-center justify-center"}>
        <GiTie /> Download Resume
      </p>
      <div className="flex flex-row items-center justify-around w-9/12 mx-auto my-5 text-green-500 md:w-full">
        <a href="">
          <AiFillGithub className={iconClass} />
        </a>
        <a href="">
          <AiFillLinkedin className={iconClass} />
        </a>
        <a href="">
          <AiFillInstagram className={iconClass} />
        </a>
      </div>
      <div className="flex flex-col items-center justify-center py-4 my-5 bg-gray-200 dark:bg-dark-200 gap-1 ">
        <div className="flex items-center space-x-2 ">
          <GoLocation />
          <span>Kottayam,Kerala,India</span>
        </div>
        <p>harikrishnanssankar@gmail.com</p>
      </div>
      <button
        className={buttonClass}
        onClick={() => window.open("mailto:harikrishnanssankar@gmail.com")}
      >
        Email Me
      </button>
      <br />
      <button onClick={changeTheme} className={buttonClass}>toggle theme</button>
    </div>
  );
};

export default Sidebar;

import { Link } from "react-router-dom";
import BannerProject from "../components/project-components/BannerProject";
import BusinessWebData from "../components/project-components/BusinessWebData";
import TicTacToeGameData from "../components/project-components/TicTacToeGameData";
import TodolistWebData from "../components/project-components/TodolistWebData";
import { BsArrowLeft } from "react-icons/bs";
function Project() {
  return (
    <>
      <main className="container-project ">
        <Link to="/profile">
          <div className="flex gap-2 items-center">
            <BsArrowLeft />
            <div className="hover:underline">My profile</div>
          </div>
        </Link>
        <div className="text-[54px] flex justify-center mt-14">
          My Mini Project
        </div>
        <div className="mt-8">
          <BannerProject />
        </div>
        <div className="flex gap-6">
          <BusinessWebData />
          <TodolistWebData />
          <TicTacToeGameData />
        </div>
        <div className="flex gap-5 py-4 ">
          <div className="w-[300px] ">
            React, Redux, Axios, Node, Express, Sequelize, MySql, Tailwind,
            Google map, Joi, date-fns postman, Figma
          </div>
          <div className="w-[300px]">
            React, useContext ,Vite, Local Storage,Tailwind, CSS , DaisyUI,
            Uuid, Figma
          </div>
          <div className="w-[300px]">
            React Context API, Local Storage, Tailwind
          </div>
        </div>
        <div className="flex justify-between">
          <div className="w-[300px] bg-black text-white text-center p-2 cursor-pointer hover:text-lg ">
            Watch the video review
          </div>
          <Link to="/register">
            <div className="w-[300px] bg-black text-white text-center p-2 cursor-pointer hover:text-lg ">
              Watch the Website
            </div>
          </Link>
          <div className="w-[300px] bg-black text-white text-center p-2 cursor-pointer hover:text-lg ">
            Watch the video review
          </div>
        </div>
      </main>
    </>
  );
}

export default Project;

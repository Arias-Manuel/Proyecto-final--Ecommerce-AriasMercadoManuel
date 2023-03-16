import React from "react";
import brand from "../assets/logo_gamer.svg";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full h-20 flex items-center bg-gradient-to-r from-fuchsia-500 to-cyan-500 ">
      <div className="w-full h-full items-center flex flex-row justify-between ">
        <div className=" p-2 ">
          <img className="w-14 h-14 cursor-pointer" src={brand} alt="logo" />
        </div>
        <div>
          <p className="text-white text-lg font-semibold">
            Proyecto de React para CoderHouse
          </p>
        </div>
        <div className="flex flex-row pr-16 gap-14">
          <a href="/" target="_blank">
            <FaWhatsapp
              className="cursor-pointer hover:scale-110 duration-500"
              size="1.5rem"
              color="white"
            />
          </a>
          <FaInstagram
            className="cursor-pointer hover:scale-110 duration-500 "
            size="1.5rem"
            color="white"
          />
          <a href="https://github.com/" target="_blank">
            <FaGithub
              className="cursor-pointer hover:scale-110 duration-500"
              size="1.5rem"
              color="white"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};
export default Footer;

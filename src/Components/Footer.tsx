import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

export const Footer = () => {
  return (
    <div
      id="Contacts"
      className="flex justify-around bg-green-200 text-green-950 p-10 md:p-12 items-center"
    >
      <div>
        <h1 className="text-2xl md:text-6xl font-bold">Contact</h1>
        <h3 className="text-sm md:text-2xl font-normal">
          Feel Free To reach out!
        </h3>
      </div>

      <ul className="text-sm md:text-xl">
        <li className="flex gap-1 items-center">
          <MdOutlineEmail size={20} />
          <a href="mailto:spandanap01@gmail.com" target="_blank" rel="noopner noreferrer">
          spandanap01@gmail.com
          </a>
        </li>
        <li className="flex gap-1 items-center">
          <CiLinkedin />
          <a href="https://www.linkedin.com/in/spandana-p-729536264" target="_blank" rel="noopner noreferrer">
          linkdlin.com/in/spandana-p-729536264
          </a>
        </li>
        <li className="flex gap-1 items-center">
          <FaGithub />
          <a href="https://github.com/[Spandana-p-30]" target="_blank" rel="noopner noreferrer">
          github.com/Spandana-p-30
          </a>
        </li>
      </ul>
    </div>
  )
}
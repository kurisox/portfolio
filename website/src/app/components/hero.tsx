"use client";
import Image from "next/image";
import profilePicture from "../../../public/profile_picture/profile_mobile.png";
import { EmailLogo } from "./logos/emailLogo";
import { GithubLogo } from "./logos/githubLogo";
import { LinkedinLogo } from "./logos/linkedinLogo";
import {authorConfig}  from "@/app/content_config/author/authorDetails";

export default function Hero() {
  return (
    <div className="  pt-4 pb-4">
      <div className="flex flex-col items-center ml-auto mr-auto w-5/6 md:w-2/3 2xl:flex-row 2xl:justify-center 2xl:items-start 2xl:gap-20 2xl:w-1/2">
        <div className="flex-shrink-0 pb-2">
          <Image
            src={profilePicture}
            alt={`Profile picture of ${authorConfig.name}`}
            width={300}
            height={300}
          />
        </div>
        <div className="flex flex-col ">
          <h1 className="font-raleway text-center text-40 text-lightmodeFont2 dark:text-darkmodeFont">
            {authorConfig.name}
          </h1>
          <p className="font-raleway pb-4 text-24 text-center text-lightmodeFont2 dark:text-darkmodeFont">
            {authorConfig.jobtitle}
          </p>
          <p className="pb-5 text-20 text-lightmodeFont2 dark:text-darkmodeFont">
            {authorConfig.description}
          </p>
          <hr className="pb-5 border-t-1 border-switchLightMode dark:border-switchDarkMode" />
          <p className="text-20 text-lightmodeFont2 dark:text-darkmodeFont">
            <span className="font-bold">Interessen: </span>
            {authorConfig.interests}
          </p>
          <p className="text-20 text-lightmodeFont2 dark:text-darkmodeFont">
            <span className="font-bold">Hobbyies: </span>
            {authorConfig.hobbies}
          </p>
          <p className="pb-5 text-20 text-lightmodeFont2 dark:text-darkmodeFont">
            <span className="font-bold">Interessen: </span>
            {authorConfig.voluntarywork}
          </p>
          <hr className="pb-5 border-t-1 border-switchLightMode dark:border-switchDarkMode" />
          <div className="flex flex-row justify-evenly">
            <EmailLogo email={authorConfig.email}/>
            <GithubLogo link={authorConfig.github}/>
            <LinkedinLogo link={authorConfig.linkedin}/>
          </div>
        </div>
      </div>
    </div>
  );
}

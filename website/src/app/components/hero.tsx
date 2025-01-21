"use client";
import Image from "next/image";
import profilePicture from "../../../public/profile_picture/profile_mobile.png";
import { EmailLogo } from "./logos/emailLogo";
import { GithubLogo } from "./logos/githubLogo";
import { LinkedinLogo } from "./logos/linkedinLogo";
import { authorConfig } from "../content_config/author_config";

export default function Hero() {
  return (
    <div className="width-screen bg-lightmodeBG1 dark:bg-darkmodeBG1 pt-4 pb-4">
      <div className="flex flex-col items-center ml-auto mr-auto w-5/6 md:flex-row md:justify-center md:items-start md:gap-20 md:w-2/3 lg:w-1/2">
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
          <hr className="pb-5 border-t-2 border-red-100 dark:border-darkmodeFont" />
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
          <hr className="pb-5 border-t-2 border-red-100 dark:border-darkmodeFont" />
          <div className="flex flex-row justify-evenly">
            <EmailLogo />
            <GithubLogo />
            <LinkedinLogo />
          </div>
        </div>
      </div>
    </div>
  );
}

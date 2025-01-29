"use client";
import React from 'react';
import Image from "next/image";
import { motion } from 'framer-motion';
import profilePicture from "../../../public/profile_picture/profile_mobile.png";
import mockPicture from "../../../public/profile_picture/image.png";
import { EmailLogo } from "./logos/emailLogo";
import { GithubLogo } from "./logos/githubLogo";
import { LinkedinLogo } from "./logos/linkedinLogo";
import { authorConfig } from "@/app/content_config/author/authorDetails";
import { mockDetails } from "@/app/content_config/author/mockDetails";

const flyInLeft = {
  initial: { x: "-100vw", opacity: 0 },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1.5,
    },
  },
};

const flyInRight = {
  initial: { x: "100vw", opacity: 0 },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1.5,
    },
  },
};

export default function Hero() {
  const details = process.env.NEXT_PUBLIC_DEV_MODE === 'true' ? mockDetails : authorConfig;
  const profilePic = process.env.NEXT_PUBLIC_DEV_MODE === 'true' ? mockPicture : profilePicture;

  return (
    <div className="pt-4 pb-4 overflow-hidden">
      <div className="flex flex-col items-center ml-auto mr-auto w-5/6 md:w-2/3 2xl:flex-row 2xl:justify-center 2xl:items-start 2xl:gap-20 2xl:w-1/2">
        <motion.div
          variants={flyInLeft}
          initial="initial"
          animate="animate"
          className="flex-shrink-0 pb-2"
        >
          <Image
            src={profilePic}
            alt={`Profile picture of ${details.name}`}
            width={300}
            height={300}
          />
        </motion.div>
        <motion.div
          variants={flyInRight}
          initial="initial"
          animate="animate"
          className="flex flex-col"
        >
          <h1 className="font-raleway text-center text-40 text-lightmodeFont2 dark:text-darkmodeFont">
            {details.name}
          </h1>
          <p className="font-raleway pb-4 text-24 text-center text-lightmodeFont2 dark:text-darkmodeFont">
            {details.jobtitle}
          </p>
          <p className="pb-5 text-20 text-lightmodeFont2 dark:text-darkmodeFont">
            {details.description}
          </p>
          <hr className="pb-5 border-t-1 border-switchLightMode dark:border-switchDarkMode" />
          <p className="text-20 text-lightmodeFont2 dark:text-darkmodeFont">
            <span className="font-bold">Interessen: </span>
            {details.interests}
          </p>
          <p className="text-20 text-lightmodeFont2 dark:text-darkmodeFont">
            <span className="font-bold">Hobbys: </span>
            {details.hobbies}
          </p>
          <p className="pb-5 text-20 text-lightmodeFont2 dark:text-darkmodeFont">
            <span className="font-bold">Ehrenamt: </span>
            {details.voluntarywork}
          </p>
          <hr className="pb-5 border-t-1 border-switchLightMode dark:border-switchDarkMode" />
          <div className="flex flex-row justify-evenly">
            <EmailLogo email={details.email} />
            <GithubLogo link={details.github} />
            <LinkedinLogo link={details.linkedin} />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import aiConnect from "../../../../public/projects/ai_connect.jpg";
import portfolio from "../../../../public/projects/portfolio.jpg";
import planbuddy from "../../../../public/projects/planbuddy.jpg";
import chatbot from "../../../../public/projects/chatbot.jpg";
import pm from "../../../../public/projects/pm.jpg";
import library from "../../../../public/projects/library.jpg";
import ads from "../../../../public/projects/ads.jpg";
import { IconBrandGithub } from "@tabler/icons-react";
import Image from "next/image";

export const Skeleton = ({
  picture,
  description,
}: {
  picture: StaticImport;
  description: string;
}) => (
  <div className="flex justify-center items-center w-full h-full min-h-[6rem] rounded-xl dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(white,white)]  border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black">
    <Image src={picture} alt={description} />
  </div>
);

export const projects = [
  {
    title: "AI-Connect",
    link: "https://github.com/kurisox/Ai-Connect-Abschlussprojekt",
    description:
      "Mein Abschlussprojekt als FIAE: Eine Docker-Laufzeitumgebung mit Backend zur KI-Kommunikation.",
    header: (
      <Skeleton
        picture={aiConnect}
        description="Shiba with  a robot"
      />
    ),
    className: "md:col-span-2",
    icon: (
      <IconBrandGithub className="h-4 w-4  text-lightmodeFont1 dark:text-darkmodeFont" />
    ),
  },
  {
    title: "Portfolio",
    link: "https://github.com/kurisox/portfolio",
    description: "Meine Portfolio-Website",
    header: (
      <Skeleton picture={portfolio} description="Drawn picture of a shiba" />
    ),
    className: "md:col-span-1",
    icon: (
      <IconBrandGithub className="h-4 w-4  text-lightmodeFont1 dark:text-darkmodeFont" />
    ),
  },
  {
    title: "Planbuddy",
    link: "https://github.com/kurisox/Planbuddy-Software-Projektmanagement",
    description:
      "Softwareprojekt: Planbuddy - Ein Tool von Studenten für Studenten zur Studienplanung, Terminfreigabe und Lernpartys.",
    header: (
      <Skeleton picture={planbuddy} description="Female shiba with a folder in der mouth" />
    ),
    className: "md:col-span-1",
    icon: (
      <IconBrandGithub className="h-4 w-4  text-lightmodeFont1 dark:text-darkmodeFont" />
    ),
  },
  {
    title: "Service-Chatbot mit lokaler KI-Instanz",
    link: "https://github.com/kurisox/Chatbot_GID_LF6",
    description:
      "Ein Chatbot, der im Rahmen des Lernfeldes 6 programmiert wurde. Dieser basiert auf einem Backend bestehend aus Java und Python, einem Web wie Discordfrontend und einer lokalen KI-Instanz, die die Fragen verwertet und beantwortet.",
    header: <Skeleton picture={chatbot} description="Picture of a chatbot" />,
    className: "md:col-span-2",
    icon: (
      <IconBrandGithub className="h-4 w-4  text-lightmodeFont1 dark:text-darkmodeFont" />
    ),
  },
  {
    title: "Büchereiverwaltung",
    link: "https://github.com/kurisox/Buechereiverwaltung",
    description:
      "Die Aufgabe ist im Zuge einer Coding-Challenge entstanden. Es handelt sich um eine Büchereiverwaltung, die es ermöglicht Bücher zu verwalten, auszuleihen und zurückzugeben.",
    header: (
      <Skeleton picture={library} description="Picture of a library" />
    ),
    className: "md:col-span-2",
    icon: (
      <IconBrandGithub className="h-4 w-4  text-lightmodeFont1 dark:text-darkmodeFont" />
    ),
  },
  {
    title: "PM-Project 2022: Dungeon Crawler",
    link: "https://github.com/pm-project-2022/pm-aufgaben",
    description:
      "Aufgabensammlung aus dem Modul Programmiermethoden: Einzelaufgaben zur Festigung und ein Computerspiel zur Anwendung der Methoden.",
    header: (
      <Skeleton
        picture={pm}
        description="Picture that symbolizes a dungeon crawler game"
      />
    ),
    className: "md:col-span-1",
    icon: (
      <IconBrandGithub className="h-4 w-4  text-lightmodeFont1 dark:text-darkmodeFont" />
    ),
  },
  
  {
    title: "Algorithmen und Datenstrukturen",
    link: "https://github.com/kurisox/algorithms-and-data-structures",
    description:
      "Aufgabensammlung aus dem Modul Algorithmen und Datenstrukturen.",
    header: (
      <Skeleton
        picture={ads}
        description="Picture that symbolizes algorithms and datastructures"
      />
    ),
    className: "md:col-span-1",
    icon: (
      <IconBrandGithub className="h-4 w-4  text-lightmodeFont1 dark:text-darkmodeFont" />
    ),
  },
];

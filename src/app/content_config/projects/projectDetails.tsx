import { StaticImport } from "next/dist/shared/lib/get-img-props";
import profilePicture  from "../../../../public/profile_picture/image.png";
import { IconBrandGithub } from "@tabler/icons-react";
import Image from "next/image";

export const Skeleton = ({ picture }: { picture: StaticImport }) => (
  <div className="flex justify-center items-center w-full h-full min-h-[6rem] rounded-xl dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black">
    <Image
      src={picture}
      alt={`Profile picture of lol`}
    />
  </div>
);


export const projects = [
    {
      title: "Service-Chatbot mit lokaler KI-Instanz",
      link: "https://github.com/kurisox/Chatbot_GID_LF6",
      description: "Ein Chatbot, der im Rahmen des Lernfeldes 6 programmiert wurde. Dieser basiert auf einem Backend bestehend aus Java und Python, einem Web wie Discordfrontend und einer lokalen KI-Instanz, die die Fragen verwertet und beantwortet.",
      header: <Skeleton picture={profilePicture}/>,
      className: "md:col-span-2",
      icon: <IconBrandGithub className="h-4 w-4  text-lightmodeFont1 dark:text-darkmodeFont"/>,
    },
    {
      title: "Algorithmen und Datenstrukturen",
      link: "https://github.com/kurisox/algorithms-and-data-structures",
      description: "Aufgabensammlung aus dem Modul Algorithmen und Datenstrukturen.",
      header: <Skeleton picture={profilePicture}/>,
      className: "md:col-span-1",
      icon: <IconBrandGithub className="h-4 w-4  text-lightmodeFont1 dark:text-darkmodeFont"/>,
    },
    {
      title: "AI-Connect",
      link: "https://github.com/kurisox/Ai-Connect-Abschlussprojekt",
      description: "Mein Abschlussprojekt als FIAE: Eine Docker-Laufzeitumgebung mit Backend zur KI-Kommunikation.",
      header: <Skeleton picture={profilePicture}/>,
      className: "md:col-span-1",
      icon: <IconBrandGithub className="h-4 w-4  text-lightmodeFont1 dark:text-darkmodeFont"/>,
    },
    {
      title: "PM-Project 2022",
      link: "https://github.com/pm-project-2022/pm-aufgaben",
      description: "Aufgabensammlung aus dem Modul Programmiermethoden: Einzelaufgaben zur Festigung und ein Computerspiel zur Anwendung der Methoden.",
      header: <Skeleton picture={profilePicture}/>,
      className: "md:col-span-2",
      icon: <IconBrandGithub className="h-4 w-4  text-lightmodeFont1 dark:text-darkmodeFont"/>,
    },
    {
      title: "Planbuddy",
      link: "https://github.com/kurisox/Planbuddy-Software-Projektmanagement",
      description: "Softwareprojekt im des Moduls Software-Projektmanagement. Planbuddy ist ein Tool von Studenten für Studenten um ihr Studium zu planen. Es ermöglich einen Termine mit anderen Nutzern zu teilen, Lernpartys zu erstellen und vieles mehr.",
      header: <Skeleton picture={profilePicture}/>,
      className: "md:col-span-2",
      icon: <IconBrandGithub className="h-4 w-4  text-lightmodeFont1 dark:text-darkmodeFont"/>,
    },
    {
      title: "Portfolio",
      link: "https://github.com/kurisox/Buechereiverwaltung",
      description: "Meine Portfolio-Website",
      header: <Skeleton picture={profilePicture}/>,
      className: "md:col-span-1",
      icon: <IconBrandGithub className="h-4 w-4  text-lightmodeFont1 dark:text-darkmodeFont"/>,
    },
    {
      title: "Büchereiverwaltung",
      link: "https://github.com/kurisox/Buechereiverwaltung",
      description: "Die Aufgabe ist im Zuge einer Coding-Challenge entstanden. Es handelt sich um eine Büchereiverwaltung, die es ermöglicht Bücher zu verwalten, auszuleihen und zurückzugeben.",
      header: <Skeleton picture={profilePicture}/>,
      className: "md:col-span-2",
      icon: <IconBrandGithub className="h-4 w-4  text-lightmodeFont1 dark:text-darkmodeFont"/>,
    },
  ];
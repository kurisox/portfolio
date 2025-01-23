"use client";
import { logEntryConfig } from "@/app/content_config/career/logentryDetails";
import { mockLogentry } from "@/app/content_config/career/mockLogentryDetails";
import LogEntry from "./logentry";

export default function Carrerlog() {
  const logEntry =
    process.env.NEXT_PUBLIC_DEV_MODE === "true" ? mockLogentry : logEntryConfig;
  return (
    <div className="  pt-4 pb-4 ">
      <div className="flex flex-col items-center ml-auto mr-auto w-5/6 md:w-2/3 2xl:flex-row 2xl:justify-center 2xl:items-start 2xl:gap-20 2xl:w-1/2">
        <div className="flex flex-col">
          <h1 className="font-raleway text-40 text-lightmodeFont2 dark:text-darkmodeFont">
            Career Log
          </h1>
          <div className="p-4 mb-8 bg-changelog dark:text-lightmodeFont2 flex flex-row justify-center items-center gap-2">
            <p className="text-18 text-lightmodeFont2 dark:text-lightmodeFont2 md:text-20">
              Dieser Lebenslauf ist ein kleines, spaßiges Experiment um meinen
              beruflichen und schulischen Werdegang in Form eines Changelogs
              einer Software darzustellen. Für einen vollständigen Überblick
              über meine Erfahrungen und Fähigkeiten, schreib mir doch gerne eine Email 
              und ich sende dir meinen Lebenslauf und sonstige Anlagen zu :)
            </p>
          </div>
          <p className="text-18 text-lightmodeFont2 dark:text-darkmodeFont md:text-20">
            Alle wichtigen Änderungen an diesem Projekt (meiner Karriere) werden
            in diesem Abschnitt dokumentiert.
          </p>
          <br />
          <p className="text-18 text-lightmodeFont2 dark:text-darkmodeFont md:text-20">
            Das Format basiert auf{" "}
            <a
              className="text-switchLightMode dark:text-switchDarkMode"
              href="https://keepachangelog.com/de/1.0.0/"
            >
              Keep a Changelog
            </a>
            , und dieses Projekt folgt dem Prinzip der{" "}
            <a
              className="text-switchLightMode dark:text-switchDarkMode"
              href="https://semver.org/lang/de/"
            >
              semantischen Versionierung
            </a>
            .
          </p>
          <br />
          {logEntry.map((logEntry, index) => (
            <LogEntry key={index} entry={logEntry.entry} />
          ))}
        </div>
      </div>
    </div>
  );
}

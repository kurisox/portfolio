import { LogEntryProps } from "../../content_config/career/logentry_config";

function added(entry: { added: boolean }) {
  return entry.added ? (
    <p className="text-20 font-raleway font-bold pt-4 pb-2  text-lightmodeFont2 dark:text-darkmodeFont md:text-28">
      Added:
    </p>
  ) : (
    <></>
  );
}

function deprecated(entry: { deprecated: string }) {
  return entry.deprecated.length > 0 ? (
    <div>
      <p className="text-20 font-raleway font-bold pt-4 pb-2  text-lightmodeFont2 dark:text-darkmodeFont md:text-28">
        Deprecated:
      </p>
      <p className="text-18 pl-2 font-raleway text-lightmodeFont2 dark:text-darkmodeFont md:text-20">
        &#x2022; {entry.deprecated}
      </p>
    </div>
  ) : (
    <></>
  );
}

function changed(entry: { changed: string }) {
  return entry.changed.length > 0 ? (
    <div>
      <p className="text-20 font-raleway font-bold pt-4 pb-2  text-lightmodeFont2 dark:text-darkmodeFont md:text-28">
        Changed:
      </p>
      <p className="text-18 pl-2 font-raleway text-lightmodeFont2 dark:text-darkmodeFont md:text-20">
        &#x2022; {entry.changed}
      </p>
    </div>
  ) : (
    <></>
  );
}

export default function LogEntry({ entry }: LogEntryProps) {
  return (
    <div className="  pt-4 pb-4 ">
      <div className="flex flex-col ">
        <h1 className="font-raleway text-24 font-bold text-lightmodeFont2 dark:text-darkmodeFont md:text-32">
          {entry.version} - {entry.position} @ {entry.company} ({entry.startDate} - {entry.endDate})
        </h1>
        {added(entry)}
        {entry.description.map((desc, index) => (
          <p key={index} className="text-18 pl-2 font-raleway text-lightmodeFont2 dark:text-darkmodeFont md:text-20">
            &#x2022; {desc}
          </p>
        ))}  
        {deprecated(entry)}
        {changed(entry)}
      </div>
    </div>
  );
}

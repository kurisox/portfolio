import { LogEntryProps } from "../../content_config/logentry_config";

function added(entry: { added: boolean }) {
  return entry.added ? (
    <p className="text-20 font-raleway font-bold pt-4 pb-2  text-lightmodeFont2 dark:text-darkmodeFont">
      Added
    </p>
  ) : (
    <></>
  );
}

function deprecated(entry: { deprecated: string }) {
  return entry.deprecated.length > 0 ? (
    <div>
      <p className="text-20 font-raleway font-bold pt-4 pb-2  text-lightmodeFont2 dark:text-darkmodeFont">
        Deprecated: 
      </p>
      <ul className="list-item pl-6">
        <li className="list-disc text-18 font-raleway  text-lightmodeFont2 dark:text-darkmodeFont">{entry.deprecated}</li>
      </ul>
    </div>
  ) : (
    <></>
  );
}

function changed(entry: { changed: string }) {
  return entry.changed.length > 0 ? (
    <div>
      <p className="text-20 font-raleway font-bold pt-4 pb-2  text-lightmodeFont2 dark:text-darkmodeFont">
        Changed: 
      </p>
      <ul className="list-item pl-6">
        <li className="list-disc text-18 font-raleway  text-lightmodeFont2 dark:text-darkmodeFont">{entry.changed}</li>
      </ul>
    </div>
  ) : (
    <></>
  );
}

export default function LogEntry({ entry }: LogEntryProps) {
  return (
    <div className="pb-8">
      <h1 className="text-28 font-raleway font-bold text-lightmodeFont2 dark:text-darkmodeFont">
        {entry.version} - {entry.position}@
      </h1>
      <h2 className="text-24 font-raleway  text-lightmodeFont2 dark:text-darkmodeFont">
        {entry.company} ({entry.startDate} bis {entry.endDate})
      </h2>
      {added(entry)}
      <ul className="list-item pl-6">
        {entry.description.map((desc, index) => (
          <li
            className="list-disc text-18 font-raleway  text-lightmodeFont2 dark:text-darkmodeFont"
            key={index}
          >
            {desc}
          </li>
        ))}
      </ul>
      {deprecated(entry)}
      {changed(entry)}
    </div>
  );
}

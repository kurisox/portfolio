import { LogEntryProps } from "./logentry_config";

export const mockLogentry: LogEntryProps[] = [
  {
    entry: {
      added: true,
      version: "1.1.0",
      position: "Frontend Entwickler",
      company: "Creative Web Studio",
      startDate: "Jan 2024",
      endDate: "Present",
      description: [
        "Entwicklung von interaktiven Benutzeroberflächen mit Vue.js",
        "Integration von Drittanbieter-APIs und Cloud-Diensten",
        "Testing und Debugging von Frontend-Komponenten",
        "Einführung neuer Technologien und Frameworks ins Team",
      ],
      deprecated: "",
      changed: "",
    },
  },
  {
    entry: {
      added: true,
      version: "1.0.0",
      position: "Junior Webentwickler",
      company: "Digital Solutions AG",
      startDate: "Mar 2021",
      endDate: "Dec 2023",
      description: [
        "Entwicklung von responsiven Webanwendungen mit React und TypeScript",
        "Implementierung von RESTful APIs mit Node.js",
        "Optimierung der Web-Performance und SEO",
        "Zusammenarbeit mit UX/UI-Designern zur Verbesserung der Benutzererfahrung",
      ],
      deprecated: "Arbeitstätigkeit beendet",
      changed: "Wechsel zu einer neuen Position",
    },
  },
  {
    entry: {
      added: true,
      version: "0.2.0",
      position: "Auszubildender Fachinformatiker für Systemintegration",
      company: "Tech Systems GmbH",
      startDate: "Aug 2018",
      endDate: "Feb 2021",
      description: [
        "Installation und Konfiguration von Server-Systemen",
        "Überwachung und Wartung von Netzwerkinfrastrukturen",
        "Benutzersupport und Fehlerbehebung",
        "Dokumentation von Systemänderungen und Prozessen",
      ],
      deprecated: "Ausbildung abgeschlossen",
      changed: "Übergang in eine Festanstellung",
    },
  },
  {
    entry: {
      added: true,
      version: "0.1.0",
      position: "Berufsschüler",
      company: "Berufsbildende Schulen Hannover",
      startDate: "Aug 2018",
      endDate: "Feb 2021",
      description: [
        "Grundlagen der Informatik und Netzwerktechnik",
        "Praxisorientierte Projekte zur Entwicklung von IT-Lösungen",
        "Erfolgreicher Abschluss der Berufsausbildung mit Note 1,6",
      ],
      deprecated: "",
      changed: "",
    },
  },
  {
    entry: {
      added: true,
      version: "0.0.1",
      position: "Schüler",
      company: "Gymnasium Hannover",
      startDate: "Sep 2011",
      endDate: "Jul 2018",
      description: [
        "Abitur mit Schwerpunkt Mathematik und Physik",
        "Abschlussnote: 2,0",
      ],
      deprecated: "Schulabschluss erreicht",
      changed: "Übergang in die Ausbildung",
    },
  },
];

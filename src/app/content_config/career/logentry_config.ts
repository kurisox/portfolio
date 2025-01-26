export interface LogEntryProps {
  entry: {
    added: boolean;
    version: string;
    position: string;
    company: string;
    startDate: string;
    endDate: string;
    description: string[];
    deprecated: string;
    changed: string;
  };
}
export type PrivateJiraHistory = {
  items: HistoryItem[];
  created: string | null;
};

type HistoryItem = {
  field: string | null;
  fieldtype: string | null;
  from: string | null;
  fromString: string | null;
  to: string | null;
  toString: string | null;
};

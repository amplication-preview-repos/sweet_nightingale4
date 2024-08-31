import { Status as TStatus } from "../api/status/Status";

export const STATUS_TITLE_FIELD = "viewer";

export const StatusTitle = (record: TStatus): string => {
  return record.viewer?.toString() || String(record.id);
};

import { v4 as uuid } from "uuid";

export const generateUUID = (len = 6) => {
  return uuid().substring(0, len);
};

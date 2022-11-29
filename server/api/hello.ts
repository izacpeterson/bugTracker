let message = "hello world";
import { v4 as uuidv4 } from "uuid";

export default defineEventHandler((event) => {
  return {
    message: message,
    uuid: uuidv4(),
  };
});

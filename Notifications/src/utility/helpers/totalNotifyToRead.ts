import { message } from "../../types/types";

export const totalNotifyToRead = (messages: message[]) => {
  let total = 0;

  // for each element
  messages.forEach((message) => {
    if (!message.isRead) {
      total += 1;
    }
  });

  return total;
};

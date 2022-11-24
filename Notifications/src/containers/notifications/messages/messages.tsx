import "./messages.scss";
import { MessagesProps } from "../../../types/types";
import Message from "./message/message";

const Messages = ({ messages }: MessagesProps) => {
  return (
    <ul className='Messages'>
      {messages.map((notify, index) => {
        return <Message key={index} {...notify} />;
      })}
    </ul>
  );
};

export default Messages;

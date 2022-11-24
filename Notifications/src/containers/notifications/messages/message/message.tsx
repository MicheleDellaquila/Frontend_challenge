import "./message.scss";
import { MessageProps } from "../../../../types/types";
import Avatar from "./avatar/avatar";
import Response from "./response/response";

const Message = ({
  image,
  author,
  content,
  contentPost,
  time,
  isRead,
  privateMessage,
}: MessageProps) => {
  const messageStyle = !isRead ? "Message Message--notRead" : "Message";

  return (
    <li className={messageStyle}>
      <Avatar image={image} author={author} />
      <Response
        author={author}
        content={content}
        contentPost={contentPost}
        time={time}
        privateMessage={privateMessage}
        isRead={isRead}
      />
    </li>
  );
};

export default Message;

import "./response.scss";
import { ResponseProps } from "../../../../../types/types";

const Response = ({
  author,
  content,
  contentPost,
  isRead,
  time,
  privateMessage,
}: ResponseProps) => {
  return (
    <div className="Response">
      <span className="Response__author">{author}</span>
      <span className="Response__content">
        {content}
      </span>
      {contentPost && <span className="Response__contentPost">{contentPost}</span>}
      {!isRead && <span className='Response__notRead' />}
      <p className="Response__time">{time}</p>
      {privateMessage && (
        <div className="Response__privateMessage">
          <p>{privateMessage}</p>
        </div>
      )}
    </div>
  );
};

export default Response;

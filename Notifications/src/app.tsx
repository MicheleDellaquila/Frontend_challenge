import { useState, useMemo } from "react";
import "./app.scss";
import Card from "./containers/card/card";
import Header from "./containers/notifications/header/header";
import Messages from "./containers/notifications/messages/messages";
import { notifications } from "./utility/constants/notifications";
import { totalNotifyToRead } from "./utility/helpers/totalNotifyToRead";

const App = () => {
  const [messages, setMessages] = useState([...notifications]);
  const notificationsToRead = useMemo(() => totalNotifyToRead(messages), [messages]);

  // marks read all
  const marksReadAll = () => {
    let copyMessages = [...messages];

    // return new array with all notify read
    copyMessages = copyMessages.map((message) =>
      message.isRead ? message : { ...message, isRead: true }
    );

    // update array
    setMessages([...copyMessages]);
  };

  return (
    <div className='App'>
      <div className='container App__container'>
        <div className='App__card'>
          <Card>
            <Header
              notificationsToRead={notificationsToRead}
              onMarksReadAll={marksReadAll}
            />
            <Messages messages={messages} />
          </Card>
        </div>
      </div>
    </div>
  );
};

export default App;

import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import app_config from "../config";
import "./chat.css";

const Chat = () => {
  // backend url
  const url = app_config.api_url;

  const [msgList, setMsgList] = useState([
    { message: "Kal kon sa exam hai", sent: true },
    { message: "Agar pta chle to bata dena", sent: false },
    { message: "kal milte hai exam ke baad", sent: false },
    { message: "black and blue pen bhi le ana", sent: false },
  ]);

  //   intialize socket.io-client
  const [socket, setSocket] = useState(io(url, { autoConnect: false }));

  const [text, setText] = useState("");

  useEffect(() => {
    //   connect with the backend
    socket.connect();
  }, []);

  socket.on("recmsg", (data) => {
    console.log(data);

    // to add newly recieved message on screen
    const newList = [...msgList, data];
    setMsgList(newList);
  });

  const sendMessage = () => {
    let obj = { message: text, sent: true };

    // for sending the event on backend
    socket.emit("sendmsg", obj);

    // to add newly sent message on screen
    const newList = [...msgList, obj];
    setMsgList(newList);

    setText("");
  };

  const displayMessages = () => {
    return msgList.map((msgobj) => (
      <div
        className={
          msgobj.sent ? "sent-msg message-body" : "rec-msg message-body"
        }
      >
        <p>{msgobj.message}</p>
      </div>
    ));
  };

  return (
    <div>
      <h1>CHat Component</h1>
      <div className="container">
        <div className="card">
          <div className="card-body">
            <div className="msg-area">{displayMessages()}</div>
            <div className="input-group">
              <input
                className="form-control"
                placeholder="Type Your Message Here...."
                onChange={(e) => setText(e.target.value)}
                value={text}
              />
              <div className="input-group-append">
                <button className="btn btn-success" onClick={sendMessage}>
                  <i class="fa fa-paper-plane" aria-hidden="true"></i>{" "}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;

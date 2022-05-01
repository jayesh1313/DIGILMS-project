import { Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { io } from "socket.io-client";
import app_config from "../../config";
import "./chat.css";

const Chat = () => {
  // backend url
  const url = app_config.api_url;
  const { trainerid } = useParams();

  const [trainerOnline, setTrainerOnline] = useState(false);
  const [trainerSocketId, setTrainerSocketId] = useState("");
  const [trainer, setTrainer] = useState({});

  const [msgList, setMsgList] = useState([]);

  //   intialize socket.io-client
  const [socket, setSocket] = useState(io(url, { autoConnect: false }));

  const [text, setText] = useState("");

  const checkTrainerisOnline = () => {
    socket.emit("checktrainer", trainerid);
  };
  const fetchTrainerData = () => {
    fetch(url + "/trainer/getbyid/" + trainerid).then((res) => {
      if (res.status === 200) {
        res.json().then((data) => {
          setTrainer(data);
          // console.log(data);
        });
      }
    });
  };

  useEffect(() => {
    //   connect with the backend
    fetchTrainerData();
    socket.connect();
    checkTrainerisOnline();
  }, []);

  socket.on("recmsg", (data) => {
    // console.log(data);

    // to add newly recieved message on screen
    const newList = [...msgList, data];
    setMsgList(newList);
  });

  socket.on("checktrainerfromserver", (data) => {
    console.log(data);
    setTrainerOnline(data.status);
    setTrainerSocketId(data.socketId);
  });

  const sendMessage = () => {
    let obj = { message: text, sent: true, socketId: trainerSocketId };
    // console.log(obj);
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
      <div className="container">
        <Typography variant="h3">Chat with your trainer</Typography>
        <hr />
        <div className="card">
          <div className="card-body">
            <div className="row">
              <div className="col-6">
                <Typography variant="h4">
                  Trainer Name : {trainer.fullname}
                </Typography>
              </div>
              <div className="col-6">
                <Typography variant="h4">
                  Status : {trainerOnline ? "Online" : "Offline"}
                </Typography>
              </div>
            </div>
          </div>
        </div>
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

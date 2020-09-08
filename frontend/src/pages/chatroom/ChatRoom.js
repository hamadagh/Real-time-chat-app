import React from "react";
import io from "socket.io-client";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { blue } from "@material-ui/core/colors";
import SendIcon from "@material-ui/icons/Send";
import "./chatroom.css";

const useStyles = makeStyles((theme) => ({
  root: {},
  input: {
    width: "100%",
  },
  button: {
    width: "100%",
    padding: "16px",
  },
}));

const ColorButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(blue[500]),
    backgroundColor: blue[500],
    "&:hover": {
      backgroundColor: blue[700],
    },
  },
}))(Button);

const ChatRoom = ({ match }) => {
  const classes = useStyles();

  const roomId = match.params.id;

  const socket = io("http://localhost:3000", {
    query: {
      token: localStorage.getItem("token"),
    },
  });
  return (
    <div className="chat-room">
      <div className="dashboard-body">
        <div className="chat-users">
          <h3>Users</h3>
        </div>
        <div className="chat-board">
          <div className="board-header">
            <h3>Tech Team</h3>
          </div>
          <div className="board-content">
            <div className="received-message">
              <span className="received">Tamim: </span>Moin
            </div>
            <div className="sent-message">
              <span className="sent">Hamada: </span>Sabahoo!
            </div>
          </div>
          <div className="board-input">
            <div className="message-input">
              <TextField
                id="filled-basic"
                label="Filled"
                variant="filled"
                className={classes.input}
              />
            </div>
            <div className="button-input">
              <ColorButton
                variant="contained"
                color="primary"
                className={classes.button}
              >
                <SendIcon />
              </ColorButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatRoom;

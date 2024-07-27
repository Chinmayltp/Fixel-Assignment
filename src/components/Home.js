import React, { useState } from "react";
import { v4 } from "uuid";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const [roomId, setRoomId] = useState("");
  const [username, setUsername] = useState("");
  const createNewRoom = (e) => {
    e.preventDefault();
    const id = v4();
    setRoomId(id);
    toast.success("Created a new room");
  };

  const joinRoom = () => {
    if (!roomId || !username) {
      toast.error("ROOM ID & username is required");
      return;
    }

    // Redirect
    navigate(`/editor/${roomId}`, {
      state: {
        username,
      },
    });
  };

  const handleInputEnter = (e) => {
    if (e.code === "Enter") {
      joinRoom();
    }
  };
  return (
    <div className='homePageWrapper'>
      <div className='formWrapper'>
        <img
          className='homePageLogo'
          src='https://www.google.com/imgres?q=text%20editor%20image&imgurl=https%3A%2F%2Faddons.mozilla.org%2Fuser-media%2Fpreviews%2Ffull%2F228%2F228908.png%3Fmodified%3D1622134213&imgrefurl=https%3A%2F%2Faddons.mozilla.org%2Fen-US%2Ffirefox%2Faddon%2Ftext-editor-extension%2F&docid=KdErXepudkSfpM&tbnid=-2QNEogwPzlAfM&vet=12ahUKEwioj7mQh8eHAxWzRmwGHYQFAlwQM3oECFIQAA..i&w=920&h=680&hcb=2&ved=2ahUKEwioj7mQh8eHAxWzRmwGHYQFAlwQM3oECFIQAA'
          alt='text-logo'
        />
        <h4 className='mainLabel'>Paste invitation ROOM ID</h4>
        <div className='inputGroup'>
          <input
            type='text'
            className='inputBox'
            placeholder='ROOM ID'
            onChange={(e) => setRoomId(e.target.value)}
            value={roomId}
            onKeyUp={handleInputEnter}
          />
          <input
            type='text'
            className='inputBox'
            placeholder='USERNAME'
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            onKeyUp={handleInputEnter}
          />
          <button className='btn joinBtn' onClick={joinRoom}>
            Join
          </button>
          <span className='createInfo'>
            If you don't have an invite then create &nbsp;
            <a onClick={createNewRoom} href='' className='createNewBtn'>
              new room
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Home;

import { Link } from "react-router-dom";
import "./homepage.css";
import { TypeAnimation } from "react-type-animation";
import { useState } from "react";

const Homepage = () => {
  const [typingStatus, setTypingStatus] = useState("human1");

  const test = async () => {
    await fetch("http://localhost:3000/api/test", {
      credentials: "include",
    });
  };

  return (
    <div className="homepage">
      <img src="/orbital.png" alt="" className="orbital" />
      <div className="left">
        <h1>LAMA AI</h1>
        <h2>Supercharge your creativity and productivity</h2>
        <h3>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat sint
          dolorem doloribus, architecto dolor.
        </h3>
        <Link to="/dashboard">Get Started</Link>
        <button onClick={test}>TEST</button>
      </div>

      <div className="right">
        <div className="imgContainer">
          <div className="bgContainer">
            <div className="bg"></div>
          </div>
          <img src="/bot.png" alt="Bot" className="bot" />
          <div className="chat">
            <img
              src={typingStatus === "human" ? "/human1.jpeg" : "/bot.png"}
              alt="User or Bot"
            />
            <TypeAnimation
              sequence={[
                "Human: What is the radius of the Sun?",
                2000,
                () => {
                  setTypingStatus("bot"); // Switch to bot after human question
                },
                "Bot: The radius of the Sun is about 696,340 kilometers.",
                2000,
                () => {
                  setTypingStatus("human"); // Switch to human after bot answer
                },
                "Human: How far is the Sun from Earth?",
                2000,
                () => {
                  setTypingStatus("bot"); // Switch to bot after human question
                },
                "Bot: The Earth is about 150 million km from the Sun.",
                2000,
                () => {
                  setTypingStatus("human"); // Switch to human after bot answer
                },
              ]}
              wrapper="div"
              repeat={Infinity}
              cursor={true}
              omitDeletionAnimation={true}
            />
          </div>
        </div>
      </div>

      <div className="terms">
        <img src="/logo.png" alt="" />
        <div className="links">
          <Link to="/">Terms of Service</Link>
          <span>|</span>
          <Link to="/">Privacy Policy</Link>
        </div>
      </div>
    </div>
  );
};

export default Homepage;

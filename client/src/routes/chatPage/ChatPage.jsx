import { useRef, useEffect } from "react";
import "./chatPage.css";
import NewPrompt from "../../components/newPrompt/NewPrompt";

const ChatPage = () => {
  const endRef = useRef(null);

  useEffect(() => {
    endRef.current.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <div className="chatPage">
      <div className="wrapper">
        <div className="chat">
          <div className="message user">Test Message from user</div>
          <div className="message">Test Message ai</div>
          <div className="message user">Test Message from user</div>
          <div className="message">Test Message from ai</div>
          <div className="message user">Test Message from user</div>
          <div className="message">Test Message ai</div>
          <div className="message user">Test Message from user</div>
          <div className="message">Test Message from ai</div>
          <div className="message user">Test Message from user</div>
          <div className="message">Test Message ai</div>
          <div className="message user">Test Message from user</div>
          <div className="message">Test Message from ai</div>

          <div ref={endRef} />
          <NewPrompt />
        </div>
      </div>
    </div>
  );
};

export default ChatPage;

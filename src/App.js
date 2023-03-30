import { LogInScreen } from "./pages/LogInScreen";
import { ChatScreen } from "./pages/ChatScreen";
import { UserContext } from "./contexts/UserContext";
import { useContext } from "react";
import "./styles/style.css"

function App() {
  const context = useContext(UserContext);

  return (
    
    <div className="site-wrapper">
      
      {!context.isSignedIn &&  <LogInScreen /> }
      {context.isSignedIn && <ChatScreen username={context.username} /> }
      </div>
  );
}

export default App;

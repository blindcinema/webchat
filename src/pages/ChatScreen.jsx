
import { WindowElement } from "../components/WindowElement";



export function ChatScreen(props) {


    return (
        
        <div className="chat-screen">
            
            <WindowElement username={props.username} /> 
            
        </div>
    );
};
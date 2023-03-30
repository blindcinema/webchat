import "../styles/style.css"
import { useContext, useRef, useState } from "react";
import { UserContext } from "../contexts/UserContext";
import { useDrag } from "../library/useDrag";
import { Message } from "./Message";
import { useEffect } from "react";


export function WindowElement(props) {
    const [ready, setReady] = useState(false);
    const [client, setClient] = useState(null);
    const [chatRoom, setChatRoom] = useState(null);



    useEffect(() => {
        const drone = new window.Scaledrone('fKtuq1ZynQbBUDab');
    
        drone.on("open", (error) => {
            if (error) {
              console.log(error);          
            }
            else {
              const room = drone.subscribe("general");
              
              setClient(drone);
              setChatRoom(room);
  
            
            }
          });    

    },[])

    const draggableRef = useRef(null);

    const { position, handleMouseDown } = useDrag({
      ref: draggableRef
    });


    const [messages, setMessages] = useState([]);
    const messageComponents = messages.map((message)=> {
        return (<Message
                key={message.id}
                author={message.author.username}
                text={message.text}
                avatar={message.author.avatar}
                color={message.color}
             />);
        });


    const [formState, setFormState] = useState("");
    const context = useContext(UserContext);






    function handleClick() {

    };


    function handleChange(event) {
        setFormState(event.target.value);
    }
    function handleSubmit(event) {
        event.preventDefault();
        setFormState("");  
        client.publish(
            {   room: "general",
                message: {
                    id: Date.now(),
                    author: {
                        username: context.username,
                        avatar: context.avatar,
                        },
                    text: formState,
                    color: context.color,
                },
                
        });
    }


    useEffect(()=> {
        if (chatRoom !== null && !ready ) {
            chatRoom.on("data", (data) => {
                setMessages((messages) => {
                    
                    return [...messages, data ];
                });
                
            });
            setReady(true);
        }
    },[chatRoom, ready]);




    return (
        
        <div className="window" style={{position:"absolute", top:position.y, left:position.x}} ref={draggableRef}  >
            
            <div className="title-bar" onMouseDown={handleMouseDown} >
                <div className="title-bar-text">Webchat</div>
                <div className="title-bar-controls">
                    <button aria-label="Close"></button>
                    </div>
            </div>
            <div className="window-body">
             
                <div className="tabs">
                    <menu role="tablist" aria-label="Sample Tabs">
                        <button role="tab" aria-selected="true" aria-controls="tab-A">general-chat</button>
                        <button role="tab" aria-controls="tab-B">Tab B</button>
                        <button role="tab" aria-controls="add-new-tab">+</button>
                    </menu>
                </div>
                  
                <div className="chat-box" role="tabpanel" id="general-chat">
                {messageComponents}
                </div>
                <div className="user-info">
                <img src={`data:image/svg+xml;utf8,${context.avatar}`} alt="avatar" className="generated-avatar bottom-right" />

                <p style={{color:context.color}}>{props.username}</p>
                </div>

                <form className="submit-message-form" onSubmit={handleSubmit} > 
                <div className="field-row input-box">
                    <input id="message-form-input" type="text" onChange={handleChange} value={formState}  /> 
                </div>
                <button onClick={handleClick} type="submit" className="send-button">Send</button>
                </form>   


            </div>
        </div>
        
    );
};
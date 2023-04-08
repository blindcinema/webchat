
import { useContext, useState } from "react";
import { UserContext } from "../contexts/UserContext";
import { generateFromString } from 'generate-avatar';
import { getRandomName } from "../library/random";



export function LogInScreen(props) {
    const context = useContext(UserContext);
    const [formState, setFormState] = useState("");
    const generatedAvatar = generateFromString(formState);
    
    function handleSubmit(event) {
        event.preventDefault();
        context.setUsername(formState);
        context.setAvatar(generatedAvatar);   
    };
    function handleChange(event) {
        setFormState(event.target.value);
        
    };
    function handleRandom() {
        setFormState(getRandomName());
        context.setColor("#"+Math.floor(Math.random()*16777215).toString(16))

    }

    return (
        <div className="login-screen">
            <div className="login-container">
                Username:

                <form onSubmit={handleSubmit} className="login-form">

                    <input type="text" value={formState || ""} style={{color:context.color}} onChange={handleChange} />
                    <button type="submit">Log in</button>
                    <button type="button" onClick={handleRandom}>Get Random name & color</button>
                </form>

                <div>Avatar:</div>
                
                <img src={`data:image/svg+xml;utf8,${generatedAvatar}`} alt="avatar" className="generated-avatar-login" />
                <input type="color" className="color-button" value={context.color} onChange={(e) => {context.setColor(e.target.value)}}></input>
            </div>
        </div>
    );
}
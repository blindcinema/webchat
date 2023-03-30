import { SubmitFormField } from "../components/SubmitFormField";
import { InputFormField } from "../components/InputFormField";
import { useState } from "react";

export function ChatForm(props) {

    const [ formState, setFormState] = useState("");
    function handleChange(message) {
        setFormState(message);
    };

    return (

        <div className="form-container">
                <form className="chat-form"  >
                    <InputFormField label="Message:" type="text" id="Message" value={formState} onChange={handleChange}  />
                    <SubmitFormField label="Send message" />
                </form>
            </div>
    );
};

export function Message(props) {

    return (
    <div className="Message">
        <img src={`data:image/svg+xml;utf8,${props.avatar}`} alt="avatar" className="generated-avatar message-avatar" />
        <div className="message-author" style={{color:props.color}}>{props.author}</div>
        <div className="message-text">{props.text}</div>
    </div> 
    );
}
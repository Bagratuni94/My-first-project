import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from './Dialogitem/Dialogitem';
import Message from './Message/Message';

const Dialogs = (props) => {
let dialogsElements = props.state.dialogs.map ( dialogs => < DialogItem name={dialogs.name} id={dialogs.id} />);
let messagesElements = props.state.messages.map ( messages => < Message message = {messages.message} />);
    return(
        <div className={classes.dialogs}>
          <div className={classes.dialogsItems}>
            {dialogsElements}
          </div>
          <div className={classes.messages}>
            {messagesElements}  
          </div>
        </div>)
}

export default Dialogs;
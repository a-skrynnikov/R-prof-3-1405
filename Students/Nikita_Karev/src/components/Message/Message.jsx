import React from 'react';
import ReactDom from 'react-dom';
import './style.css';

// export default (props) => {
//     let { text } = props;
    
//     return (
//         <div>
//             <p>{ text }</p>
//         </div>
//     )
// }

export default (props) => {
    //props: sender, text
    let { sender, text } = props;

    // sender = sender ? sender: 'Bot';
    return (
        // <div className="d-flex flex-column msg">
        //     { sender && <strong>{ sender }</strong> }
        //     { !sender && <strong>Bot</strong> }
        //     <p>{ props.sender || (!props.sender && text) ? text : 'answer from Bot' }</p>
        // </div>
        <div>        
            { sender && <div className="d-flex flex-column message-sender msg">
                <strong>{ sender }</strong>
                <p>{ props.sender || (!props.sender && text) ? text : 'answer from Bot' }</p>
                </div>
            }
            { !sender && <div className="d-flex flex-column message-bot msg">
                <strong>Bot</strong>
                <p>{ props.sender || (!props.sender && text) ? text : 'answer from Bot' }</p>
                </div> 
            }
        </div>
    )
}
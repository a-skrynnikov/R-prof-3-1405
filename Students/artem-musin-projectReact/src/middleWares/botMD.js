import { SUCCESS_MESSAGE_SEND, sendMessage } from '../store/actions/messages_actions.js';

export default store => next => action => {
    switch (action.type) {
        case SUCCESS_MESSAGE_SEND: {
            if (action.payload.msg.sender == 'Me') {
                setTimeout(() => {
                    let id = Date.now();
                    return store.dispatch(
                        sendMessage(id, 'Bot', 'Bot cyber answers')
                    )
                }, 1000)
            }
        }
    }
    return next(action);
};
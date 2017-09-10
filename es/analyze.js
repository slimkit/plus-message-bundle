import Message from './Message';
import firstMessage from './firstMessage';

export default (message, defaultMessage = null) => {
  for (let key in message) {
    return new Message(
      firstMessage(message[key]),
      key === 'message' ? null : key
    );
  }

  return new Message(defaultMessage);
};

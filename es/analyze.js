import Message from './Message';
import firstMessage from './firstMessage';

export default (message, defaultMessage = null) => {
  if (typeof message === 'string') {
    return new Message(message);
  }

  for (let key in message) {
    return new Message(
      firstMessage(message[key]) || defaultMessage,
      key === 'message' ? null : key
    );
  }

  return new Message(defaultMessage);
};

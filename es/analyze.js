import Message from './Message';

export default (messageData, defaultMessage = null) => {

  const { message } = messageData;

  if (message) {
    if (Array.isArray(message)) {

      const [ firstMessage ] = message;

      return new Message(firstMessage);
    }

    return new Message(message);
  }

  for (let key in messageData) {

    if (Array.isArray(messageData[key])) {
      const [ firstMessage ] = messageData[key];

      return new Message(firstMessage, key);
    }

    return new Message(messageData[key], key);
  }

  return new Message(defaultMessage);
};

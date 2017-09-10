export default (message) => {

  if (Array.isArray(message)) {
    const [ firstMessage ] = message;

    return firstMessage;
  }

  return message;
};

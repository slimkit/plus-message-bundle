class Message {

  message;
  input;

  constructor(message, input = null) {
    this.message = message;
    this.input = input;
  }
  
  getMessage() {
    return this.message;
  }
  
  getInputKey() {
    return this.input;
  }
}

export default Message;

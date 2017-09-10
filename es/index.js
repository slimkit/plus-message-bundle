import analyze from './analyze';
import isEmpty from './utils/isEmpty';

export { analyze, isEmpty };
export default (messageData, defaultMessage) => {

  const { errors } = messageData;

  if (errors && ! isEmpty(errors)) {
    return analyze(errors, defaultMessage);
  }

  return analyze(messageData, defaultMessage);
};
